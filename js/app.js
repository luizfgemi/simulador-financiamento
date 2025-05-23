// Formata número como moeda BR
document.addEventListener('DOMContentLoaded', () => {
    function formatCurrency(d) {
        return 'R$ ' + Number(d).toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
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
        const prazo = parseInt(document.getElementById('prazo').value, 10);
        const inflacaoAnual = new Decimal(document.getElementById('inflacao_anual').value);
        const taxaDesc = new Decimal(document.getElementById('taxa_desconto_mensal').value);
        const mesQuit = Math.min(Math.max(parseInt(document.getElementById('mes_quitacao').value, 10), 1), prazo);

        // Cálculos básicos
        const entrada = valor.mul(entradaPerc.div(100));
        const valorFin = valor.sub(entrada);
        const jurosM = taxaJuros.div(100);

        // Parcela Price
        const baseP = new Decimal(1).add(jurosM);
        const parcela = valorFin.mul(jurosM)
            .div(new Decimal(1).sub(decimalPow(baseP, new Decimal(-prazo))));
        const totalPago = parcela.mul(prazo);
        const jurosTot = totalPago.sub(valorFin);

        // Séries para gráficos
        let saldo = valorFin;
        const arrJ = [];
        const arrA = [];
        const arrS = [];
        for (let i = 0; i < prazo; i++) {
            const j = saldo.mul(jurosM);
            const a = parcela.sub(j);
            saldo = saldo.sub(a);
            arrJ.push(j.toNumber());
            arrA.push(a.toNumber());
            arrS.push(Math.max(saldo.toNumber(), 0));
        }

        // Taxa Anual Equivalente (TAE)
        const tae = decimalPow(baseP, new Decimal(12)).sub(1).mul(100);

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

        // Exibir resumo
        document.getElementById('res_valor').innerText = formatCurrency(valor);
        document.getElementById('res_entrada').innerText = formatCurrency(entrada);
        document.getElementById('res_valor_fin').innerText = formatCurrency(valorFin);
        document.getElementById('res_parcela').innerText = formatCurrency(parcela.toNumber());
        document.getElementById('res_total_pago').innerText = formatCurrency(totalPago.toNumber());
        document.getElementById('res_juros_totais').innerText = formatCurrency(jurosTot.toNumber());
        document.getElementById('res_tae').innerText = tae.toFixed(2) + '%';
        document.getElementById('resultado').style.display = 'block';

        // Renderizar gráficos
        const labels = Array.from({ length: prazo }, (_, i) => i + 1);
        new Chart(document.getElementById('graficoAmortizacao'), {
            type: 'bar',
            data: {
                labels, datasets: [
                    { label: 'Amortização', data: arrA, stack: 'a' },
                    { label: 'Juros', data: arrJ, stack: 'a' }
                ]
            },
            options: { responsive: true, scales: { x: { stacked: true }, y: { stacked: true, beginAtZero: true } } }
        });
        new Chart(document.getElementById('graficoSaldo'), {
            type: 'line',
            data: { labels, datasets: [{ label: 'Saldo Devedor', data: arrS }] },
            options: { responsive: true, scales: { y: { beginAtZero: false } } }
        });

        // Preencher tabelas
        const tbodyE = document.querySelector('#tabelaEvolucao tbody');
        tbodyE.innerHTML = schedule.map(r => `
            <tr>
                <td>${r.mes}</td>
                <td>${formatCurrency(r.parcela)}</td>
                <td>${formatCurrency(r.juros)}</n                <td>${formatCurrency(r.amortizacao)}</td>
                <td>${formatCurrency(r.saldo)}</td>
            </tr>
        `).join('');
        const tbodyS = document.querySelector('#tabelaSAC tbody');
        tbodyS.innerHTML = sacParcels.map(r => `
            <tr>
                <td>${r.mes}</td>
                <td>${formatCurrency(r.parcela)}</td>
                <td>${formatCurrency(r.juros)}</td>
                <td>${formatCurrency(r.saldo)}</td>
            </tr>
        `).join('');

        // Exportar CSV
        window.baixarCSV = () => {
            const rows = [['Mês', 'Parcela', 'Juros', 'Amortização', 'Saldo'],
            ...schedule.map(r => [r.mes, r.parcela.toFixed(2), r.juros.toFixed(2), r.amortizacao.toFixed(2), r.saldo.toFixed(2)])
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
