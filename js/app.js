// js/app.js
// Lógica do simulador de financiamento — carregado após o DOM

document.addEventListener('DOMContentLoaded', () => {
    let chartAmortizacao = null;
    let chartSaldo = null;

    // Formata número como moeda BR
    function formatCurrency(d) {
        return 'R$ ' + Number(d).toFixed(2)
            .replace('.', ',')
            .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }

    // Potência fracionária com Decimal.js
    function decimalPow(base, exp) {
        return base.ln().mul(exp).exp();
    }

    document.getElementById('form-financiamento').addEventListener('submit', function (e) {
        e.preventDefault();

        // Ler inputs
        const valor = new Decimal(document.getElementById('valor').value);
        const entradaPerc = new Decimal(document.getElementById('entrada_perc').value);
        const taxaJuros = new Decimal(document.getElementById('taxa_juros').value);
        // Prazo mínimo de 1 mês
        const prazo = Math.max(parseInt(document.getElementById('prazo').value, 10), 1);
        const inflacaoAnual = new Decimal(document.getElementById('inflacao_anual').value);
        const taxaDescMensal = new Decimal(document.getElementById('taxa_desconto_mensal').value);
        const mesQuit = Math.min(Math.max(parseInt(document.getElementById('mes_quitacao').value, 10), 1), prazo);

        // Cálculos básicos
        const entrada = valor.mul(entradaPerc.div(100));
        const valorFin = valor.sub(entrada);
        const jurosM = taxaJuros.div(100);

        // Parcela Price
        const baseP = new Decimal(1).add(jurosM);
        let parcela;
        if (jurosM.eq(0)) {
            // Evita divisão 0/0 quando a taxa é zero
            parcela = valorFin.div(prazo);
        } else {
            parcela = valorFin.mul(jurosM)
                .div(new Decimal(1).sub(decimalPow(baseP, new Decimal(-prazo))));
        }
        const totalPago = parcela.mul(prazo);
        const jurosTot = totalPago.sub(valorFin);

        // Séries para gráficos
        let saldo = valorFin;
        const arrJ = [], arrA = [], arrS = [];
        for (let i = 0; i < prazo; i++) {
            const j = saldo.mul(jurosM);
            const a = parcela.sub(j);
            saldo = saldo.sub(a);
            arrJ.push(j.toNumber());
            arrA.push(a.toNumber());
            arrS.push(Math.max(saldo.toNumber(), 0));
        }

        // Taxa Anual Equivalente (TAE) e Custo Real do Financiamento
        const taeBase = decimalPow(baseP, new Decimal(12));
        const tae = taeBase.sub(1).mul(100);
        const custoReal = taeBase.div(new Decimal(1).add(inflacaoAnual.div(100)))
            .sub(1)
            .mul(100);

        // Sistema SAC
        const sacParcels = [];
        let saldoSac = valorFin;
        const amortSac = valorFin.div(prazo);
        for (let i = 0; i < prazo; i++) {
            const jS = saldoSac.mul(jurosM);
            const pS = amortSac.add(jS);
            saldoSac = saldoSac.sub(amortSac);
            sacParcels.push({
                mes: i + 1,
                parcela: pS.toNumber(),
                juros: jS.toNumber(),
                saldo: Math.max(saldoSac.toNumber(), 0)
            });
        }

        // Tabela completa de evolução (Price)
        const schedule = [];
        let saldoTemp = valorFin;
        for (let i = 0; i < prazo; i++) {
            const j = saldoTemp.mul(jurosM);
            const a = parcela.sub(j);
            saldoTemp = saldoTemp.sub(a);
            schedule.push({
                mes: i + 1,
                parcela: parcela.toNumber(),
                juros: j.toNumber(),
                amortizacao: a.toNumber(),
                saldo: Math.max(saldoTemp.toNumber(), 0)
            });
        }

        // Valor Presente Líquido (VPL) usando taxa de desconto mensal
        const descM = taxaDescMensal.div(100);
        let vpl = valor.sub(entrada);
        for (let i = 0; i < prazo; i++) {
            const fator = decimalPow(new Decimal(1).add(descM), new Decimal(i + 1));
            vpl = vpl.sub(parcela.div(fator));
        }

        // Exibir resumo
        document.getElementById('res_valor').innerText = formatCurrency(valor);
        document.getElementById('res_entrada').innerText = formatCurrency(entrada);
        document.getElementById('res_valor_fin').innerText = formatCurrency(valorFin);
        document.getElementById('res_parcela').innerText = formatCurrency(parcela.toNumber());
        document.getElementById('res_total_pago').innerText = formatCurrency(totalPago.toNumber());
        document.getElementById('res_juros_totais').innerText = formatCurrency(jurosTot.toNumber());
        document.getElementById('res_tae').innerText = tae.toFixed(2) + '%';
        document.getElementById('res_custo_real').innerText = custoReal.toFixed(2) + '%';
        document.getElementById('res_vpl').innerText = formatCurrency(vpl.toNumber());
        document.getElementById('resultado').style.display = 'block';

        // IPVA aproximado (4%)
        const aliquotaIpva = new Decimal(4).div(100);
        const ipva = valor.mul(aliquotaIpva);
        document.getElementById('res_ipva').innerText = formatCurrency(ipva);

        // Quitação Antecipada
        const saldoQuitacao = schedule[mesQuit - 1].saldo;
        const totalQuitacao = parcela.mul(mesQuit).add(saldoQuitacao);
        const economia = totalPago.sub(totalQuitacao);

        document.getElementById('res_quit_mes').innerText = mesQuit;
        document.getElementById('res_quit_valor').innerText = formatCurrency(saldoQuitacao);
        document.getElementById('res_quit_total').innerText = formatCurrency(totalQuitacao.toNumber());
        document.getElementById('res_quit_economia').innerText = formatCurrency(economia.toNumber());

        // Destrói gráficos anteriores, se existirem
        if (chartAmortizacao) chartAmortizacao.destroy();
        if (chartSaldo) chartSaldo.destroy();

        // Renderizar gráficos
        const labels = Array.from({ length: prazo }, (_, i) => i + 1);

        chartAmortizacao = new Chart(document.getElementById('graficoAmortizacao'), {
            type: 'bar',
            data: {
                labels,
                datasets: [
                    { label: 'Amortização', data: arrA, stack: 'a' },
                    { label: 'Juros', data: arrJ, stack: 'a' }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    x: { stacked: true },
                    y: { stacked: true, beginAtZero: true }
                }
            }
        });

        chartSaldo = new Chart(document.getElementById('graficoSaldo'), {
            type: 'line',
            data: { labels, datasets: [{ label: 'Saldo Devedor', data: arrS }] },
            options: { responsive: true, scales: { y: { beginAtZero: false } } }
        });

        // Preencher tabela de evolução
        const tbodyE = document.querySelector('#tabelaEvolucao tbody');
        tbodyE.innerHTML = schedule.map(r => `<tr>
<td>${r.mes}</td>
<td>${formatCurrency(r.parcela)}</td>
<td>${formatCurrency(r.juros)}</td>
<td>${formatCurrency(r.amortizacao)}</td>
<td>${formatCurrency(r.saldo)}</td>
</tr>`).join('');

        // Preencher tabela SAC
        const tbodyS = document.querySelector('#tabelaSAC tbody');
        tbodyS.innerHTML = sacParcels.map(r => `<tr>
<td>${r.mes}</td>
<td>${formatCurrency(r.parcela)}</td>
<td>${formatCurrency(r.juros)}</td>
<td>${formatCurrency(r.saldo)}</td>
</tr>`).join('');

        // Exportar CSV
        window.baixarCSV = () => {
            const rows = [
                ['Mês', 'Parcela', 'Juros', 'Amortização', 'Saldo'],
                ...schedule.map(r => [
                    r.mes,
                    r.parcela.toFixed(2),
                    r.juros.toFixed(2),
                    r.amortizacao.toFixed(2),
                    r.saldo.toFixed(2)
                ])
            ];
            const csv = rows.map(r => r.join(',')).join('\n');
            const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'tabela_evolucao.csv';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };
    });
});
