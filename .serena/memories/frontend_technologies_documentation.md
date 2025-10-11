# Documentação das Tecnologias Frontend - Context7

## 📚 Bootstrap 5.3.2 - Framework CSS

### Grid System e Layout

#### Sistema de Grid Responsivo
```html
<!-- Grid de 3 colunas responsivas -->
<div class="row g-3">
    <div class="col-md-4">
        <label for="valor" class="form-label">Valor do Veículo</label>
        <input id="valor" type="number" class="form-control" value="78900" required>
        <div class="form-text">Valor total do carro sem entrada.</div>
    </div>
    <div class="col-md-4">
        <label for="entrada_perc" class="form-label">Entrada (%)</label>
        <input id="entrada_perc" type="number" class="form-control" value="20">
    </div>
    <div class="col-md-4">
        <label for="taxa_juros" class="form-label">Taxa de Juros (% ao mês)</label>
        <input id="taxa_juros" type="number" step="0.01" class="form-control" value="1.5">
    </div>
</div>
```

#### Breakpoints do Bootstrap
```scss
$grid-breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,    // Usado no projeto (col-md-4)
  lg: 992px,
  xl: 1200px,
  xxl: 1400px
);
```

### Formulários Avançados

#### Layout de Formulário Complexo
```html
<form class="row g-3">
    <!-- Campos organizados em grid responsivo -->
    <div class="col-md-6">
        <label for="inputEmail4" class="form-label">Email</label>
        <input type="email" class="form-control" id="inputEmail4">
    </div>
    <div class="col-md-6">
        <label for="inputPassword4" class="form-label">Password</label>
        <input type="password" class="form-control" id="inputPassword4">
    </div>
    <!-- Controles de formulário com validação -->
    <div class="col-12">
        <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck">
            <label class="form-check-label" for="gridCheck">
                Check me out
            </label>
        </div>
    </div>
    <div class="col-12">
        <button type="submit" class="btn btn-primary">Sign in</button>
    </div>
</form>
```

#### Formulários com Floating Labels
```html
<div class="row g-2">
    <div class="col-md">
        <div class="form-floating">
            <input type="email" class="form-control" id="floatingInputGrid" 
                   placeholder="name@example.com" value="mdo@example.com">
            <label for="floatingInputGrid">Email address</label>
        </div>
    </div>
    <div class="col-md">
        <div class="form-floating">
            <select class="form-select" id="floatingSelectGrid">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
            </select>
            <label for="floatingSelectGrid">Works with selects</label>
        </div>
    </div>
</div>
```

### Sistema CSS Grid (Alternativo)
```html
<!-- Grid CSS nativo do Bootstrap -->
<div class="grid text-center">
    <div class="g-col-6 g-col-md-4">.g-col-6 .g-col-md-4</div>
    <div class="g-col-6 g-col-md-4">.g-col-6 .g-col-md-4</div>
    <div class="g-col-6 g-col-md-4">.g-col-6 .g-col-md-4</div>
</div>
```

### Mixins Sass para Grid
```scss
// Criação de wrapper para colunas
@include make-row();

// Preparar elemento para grid
@include make-col-ready();

// Criar colunas sem tamanho específico
@include make-col();
@include make-col($size, $columns: $grid-columns);

// Offset com margens
@include make-col-offset($size, $columns: $grid-columns);
```

---

## 📈 Chart.js 4.4.0 - Gráficos Interativos

### Gráficos Doughnut (Usado no projeto)

#### Configuração Básica
```javascript
const config = {
    type: 'doughnut',
    data: {
        labels: ['Juros Totais', 'Amortização'],
        datasets: [{
            label: 'Composição',
            data: [jurosTotais, valorFinanciado],
            backgroundColor: ['#dc3545', '#28a745'],
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Composição das Parcelas'
            }
        }
    }
};
```

#### Instanciação de Gráficos
```javascript
// Método moderno (usado no projeto)
const myDoughnutChart = new Chart(ctx, config);

// Método legado (Chart.js v2)
var myDoughnutChart = new Chart(ctx[1]).Doughnut(data, options);
```

#### Opções Avançadas de Customização
```javascript
{
    // Configurações específicas para Doughnut/Pie
    segmentShowStroke: true,           // Mostrar bordas dos segmentos
    segmentStrokeColor: "#fff",        // Cor da borda
    segmentStrokeWidth: 2,             // Largura da borda
    percentageInnerCutout: 50,         // Porcentagem do corte interno (0 para pie)
    
    // Animações
    animationSteps: 100,               // Passos da animação
    animationEasing: "easeOutBounce",  // Tipo de animação
    animateRotate: true,               // Animar rotação
    animateScale: false,               // Animar escala
    
    // Template da legenda (obsoleto no v4)
    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\">..."
}
```

### Gráficos de Linha (Line Charts)

#### Configuração para Gráfico de Linha
```javascript
const config = {
    type: 'line',
    data: {
        labels: ['Mês 1', 'Mês 2', 'Mês 3', ...],
        datasets: [{
            label: 'Saldo Devedor',
            data: [40000, 38500, 37000, ...],
            borderColor: '#007bff',
            backgroundColor: 'rgba(0, 123, 255, 0.1)',
            fill: true,
            tension: 0.1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function(value) {
                        return 'R$ ' + value.toLocaleString();
                    }
                }
            }
        }
    }
};
```

#### Otimizações de Performance
```javascript
// Desabilitar desenho de linhas
new Chart(ctx, {
    type: 'line',
    data: { datasets: [{ showLine: false }] },
    options: { showLine: false }
});

// Desabilitar desenho de pontos
new Chart(ctx, {
    type: 'line',
    options: {
        elements: {
            point: { radius: 0 }
        }
    }
});
```

#### Gráfico de Linha Vertical
```javascript
const config = {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [{
            axis: 'y',
            label: 'My First Dataset',
            data: [65, 59, 80],
            backgroundColor: ['rgba(255, 99, 132, 0.2)'],
            borderColor: ['rgb(255, 99, 132)'],
            borderWidth: 1
        }]
    },
    options: {
        indexAxis: 'y',  // Inverte orientação
        scales: {
            x: { beginAtZero: true }
        }
    }
};
```

### Estrutura HTML para Charts
```html
<!doctype html>
<html lang="en">
<head>
    <title>Chart.js example</title>
</head>
<body>
    <!-- Container com dimensões controladas -->
    <div style="width: 800px;">
        <canvas id="acquisitions"></canvas>
    </div>
    
    <!-- Múltiplos gráficos -->
    <div style="width: 500px;">
        <canvas id="graficoAmortizacao"></canvas>
    </div>
    <div style="width: 500px;">
        <canvas id="graficoSaldo"></canvas>
    </div>
    
    <script type="module" src="app.js"></script>
</body>
</html>
```

---

## 🔢 Decimal.js 10.4.3 - Aritmética de Precisão

### Operações Básicas

#### Criação e Conversão
```javascript
// Criação de instâncias Decimal
const valor = new Decimal(78900);
const taxa = new Decimal('1.5');
const entrada = new Decimal(document.getElementById('entrada').value);

// Conversão para número
const resultado = valor.toNumber();
const formatado = valor.toString();
```

#### Operações Aritméticas
```javascript
// Adição e subtração
const soma = valor.plus(entrada);       // valor + entrada
const diferenca = valor.minus(entrada); // valor - entrada

// Multiplicação e divisão
const produto = valor.times(taxa);      // valor * taxa  
const quociente = valor.div(12);        // valor / 12

// Potenciação
const potencia = new Decimal(1.015).pow(60);
```

#### Operações Avançadas para Cálculos Financeiros
```javascript
// Logaritmo natural e exponencial
const ln = valor.ln();                  // ln(valor)
const exp = valor.exp();                // e^valor

// Potência fracionária (usada no projeto)
function decimalPow(base, exp) {
    return base.ln().mul(exp).exp();    // e^(ln(base) * exp)
}

// Logaritmo base 10
const log10 = valor.log();              // log10(valor)
const log2 = valor.log(2);              // log2(valor)

// Raiz quadrada
const sqrt = valor.sqrt();              // √valor
```

### Funções Financeiras Específicas

#### Soma de Múltiplos Valores
```javascript
// Soma com precisão (usado para totais)
const total = Decimal.sum(parcela1, parcela2, parcela3);
const totalArray = Decimal.sum(...arrayParcelas);
```

#### Formatação e Arredondamento
```javascript
// Arredondamento para dígitos significativos
const rounded = valor.toSignificantDigits(4);   // 4 dígitos significativos
const rounded2 = valor.toSD(2);                 // Alias para toSignificantDigits

// Configuração global de precisão
Decimal.set({ 
    precision: 20,                // 20 dígitos significativos
    rounding: Decimal.ROUND_HALF_UP 
});

// Exemplos de arredondamento
Decimal.set({ precision: 5, rounding: 4 });
const x = new Decimal(9876.54321);
x.toSignificantDigits();                        // '9876.5'
x.toSignificantDigits(6);                       // '9876.54'
x.toSignificantDigits(6, Decimal.ROUND_UP);     // '9876.55'
```

#### Operações Matemáticas Avançadas
```javascript
// Valor absoluto
const abs = valor.absoluteValue();      // |valor|
const abs2 = valor.abs();               // Alias

// Módulo (resto da divisão)
const resto = valor.mod(divisor);       // valor % divisor

// Divisão inteira
const divInt = valor.dividedToIntegerBy(divisor);  // Math.floor(valor/divisor)
const divInt2 = valor.divToInt(divisor);           // Alias

// Funções trigonométricas (em radianos)
const seno = valor.sin();               // sin(valor)
const cosseno = valor.cos();            // cos(valor)
const tangente = valor.tan();           // tan(valor)

// Funções trigonométricas inversas
const arcSeno = valor.asin();           // arcsin(valor)
const arcCos = valor.acos();            // arccos(valor)
const arcTan = valor.atan();            // arctan(valor)

// Arctangente de dois argumentos
const arcTan2 = Decimal.atan2(y, x);    // atan2(y, x)

// Hipotenusa
const hipotenusa = Decimal.hypot(x, y); // √(x² + y²)
```

### Configurações e Constantes

#### Configuração de Precisão e Arredondamento
```javascript
// Configuração padrão recomendada para finanças
Decimal.set({
    precision: 20,                      // Dígitos significativos
    rounding: Decimal.ROUND_HALF_UP,    // Arredondamento comercial
    modulo: Decimal.EUCLID,             // Módulo euclidiano
    toExpNeg: -7,                       // Notação exponencial negativa
    toExpPos: 21                        // Notação exponencial positiva
});

// Acesso direto às propriedades
Decimal.precision = 15;                 // Sem validação
console.log(Decimal.precision);        // 15
```

#### Constantes Matemáticas
```javascript
// Pi (usada internamente para trigonometria)
const pi = Decimal.acos(-1);            // Obter valor de π

// Limitações de precisão para trigonometria
// precisão_máxima_resultado = 1000 - precisão_argumento
Decimal.set({precision: 991});
const resultado1 = Decimal.tan(123456789); // Funciona

Decimal.set({precision: 9});
const numeroGrande = Decimal.random(991);
const resultado2 = Decimal.tan(numeroGrande); // Funciona
```

### Comparações e Validações
```javascript
// Comparações
const igual = valor1.equals(valor2);           // valor1 === valor2
const maior = valor1.greaterThan(valor2);      // valor1 > valor2
const menor = valor1.lessThan(valor2);         // valor1 < valor2
const maiorIgual = valor1.gte(valor2);         // valor1 >= valor2
const menorIgual = valor1.lte(valor2);         // valor1 <= valor2

// Verificações de tipo
const finito = valor.isFinite();               // É finito?
const inteiro = valor.isInteger();             // É inteiro?
const negativo = valor.isNegative();           // É negativo?
const positivo = valor.isPositive();           // É positivo?
const zero = valor.isZero();                   // É zero?
const nan = valor.isNaN();                     // É NaN?
```

### Exemplos Práticos do Projeto

#### Cálculo da Parcela Price
```javascript
// Fórmula: PMT = PV × [i × (1+i)^n] / [(1+i)^n - 1]
function calcularPrice(valorFinanciado, taxaMensal, prazoMeses) {
    if (taxaMensal.eq(0)) {
        return valorFinanciado.div(prazoMeses);
    }
    
    const base = new Decimal(1).add(taxaMensal);           // (1+i)
    const potencia = decimalPow(base, prazoMeses);         // (1+i)^n
    const numerador = valorFinanciado.mul(taxaMensal.mul(potencia));
    const denominador = potencia.sub(1);
    
    return numerador.div(denominador);
}
```

#### Cálculo da Taxa Anual Equivalente
```javascript
// TAE = (1 + i_mensal)^12 - 1
function calcularTAE(taxaMensal) {
    const base = new Decimal(1).add(taxaMensal);
    const potencia = decimalPow(base, 12);
    return potencia.sub(1).mul(100);  // Resultado em percentual
}
```

#### Formatação de Moeda
```javascript
// Integração com formatação nativa
function formatCurrency(decimal) {
    return 'R$ ' + decimal.toNumber().toFixed(2)
        .replace('.', ',')
        .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
```

---

## 🎨 HTML5 Canvas API - Renderização Gráfica

### Contexto de Desenho

#### Obtenção do Contexto 2D
```javascript
// Obter contexto do canvas para Chart.js
const canvas = document.getElementById('graficoAmortizacao');
const ctx = canvas.getContext('2d');

// Verificar se contexto está disponível
if (ctx) {
    const chart = new Chart(ctx, config);
}
```

#### Responsividade do Canvas
```css
/* CSS para canvas responsivo (usado no projeto) */
canvas {
    width: 100% !important;
    height: auto !important;
}

/* Container para controlar dimensões */
.chart-container {
    position: relative;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
}
```

### Métodos de Desenho Fundamentais

#### Operações Básicas de Canvas
```javascript
// Limpeza e preparação
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.beginPath();
ctx.closePath();

// Desenho de formas
ctx.fillRect(x, y, width, height);
ctx.strokeRect(x, y, width, height);
ctx.arc(x, y, radius, startAngle, endAngle);
ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle);

// Linhas e curvas
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.quadraticCurveTo(cpx, cpy, x, y);
ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);

// Aplicar preenchimento e contorno
ctx.fill();
ctx.stroke();
```

#### Transformações e Estado
```javascript
// Salvar e restaurar estado
ctx.save();
ctx.restore();

// Transformações
ctx.translate(x, y);
ctx.rotate(angle);
ctx.scale(scaleX, scaleY);
ctx.transform(a, b, c, d, e, f);
ctx.setTransform(a, b, c, d, e, f);
```

#### Estilos e Gradientes
```javascript
// Estilos básicos
ctx.fillStyle = '#ff0000';
ctx.strokeStyle = 'rgba(0, 0, 255, 0.5)';
ctx.lineWidth = 2;
ctx.lineCap = 'round';
ctx.lineJoin = 'round';

// Gradientes
const linearGrad = ctx.createLinearGradient(0, 0, 200, 0);
linearGrad.addColorStop(0, '#ff0000');
linearGrad.addColorStop(1, '#0000ff');
ctx.fillStyle = linearGrad;

const radialGrad = ctx.createRadialGradient(100, 100, 0, 100, 100, 100);
radialGrad.addColorStop(0, '#ffffff');
radialGrad.addColorStop(1, '#000000');
ctx.fillStyle = radialGrad;
```

#### Texto e Medição
```javascript
// Configuração de texto
ctx.font = '16px Arial';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';

// Desenho de texto
ctx.fillText('Texto', x, y);
ctx.strokeText('Texto', x, y, maxWidth);

// Medição de texto
const metrics = ctx.measureText('Texto');
const width = metrics.width;
```

### Otimizações de Performance

#### Batch Drawing (Conceito do Konva.js aplicável)
```javascript
// Princípio de batch drawing para Canvas
function batchDraw() {
    // Desabilitar auto-redraw
    requestAnimationFrame(() => {
        // Executar todas as operações de desenho
        drawMultipleElements();
        
        // Uma única chamada de refresh
        ctx.stroke();
        ctx.fill();
    });
}

// Evitar múltiplas chamadas de desenho
let animationPending = false;
function optimizedDraw() {
    if (!animationPending) {
        animationPending = true;
        requestAnimationFrame(() => {
            performDrawing();
            animationPending = false;
        });
    }
}
```

#### Gerenciamento de Memória para Charts
```javascript
// Destruição adequada de gráficos Chart.js
let chartInstance = null;

function createChart(ctx, config) {
    // Destruir gráfico anterior se existir
    if (chartInstance) {
        chartInstance.destroy();
        chartInstance = null;
    }
    
    // Criar novo gráfico
    chartInstance = new Chart(ctx, config);
    return chartInstance;
}

// Limpeza ao sair da página
window.addEventListener('beforeunload', () => {
    if (chartInstance) {
        chartInstance.destroy();
    }
});
```

---

## 🌐 JavaScript ES6+ - Recursos Modernos

### Event Handling e DOM

#### Event Listeners Modernos
```javascript
// DOMContentLoaded (usado no projeto)
document.addEventListener('DOMContentLoaded', () => {
    // Inicialização segura após carregamento do DOM
    initializeApplication();
});

// Event listeners com arrow functions
document.getElementById('form-financiamento').addEventListener('submit', (e) => {
    e.preventDefault();
    processForm();
});

// Event delegation
document.addEventListener('click', (e) => {
    if (e.target.matches('.btn-calculate')) {
        handleCalculation(e);
    }
});
```

#### Seleção e Manipulação do DOM
```javascript
// Seletores modernos
const form = document.querySelector('#form-financiamento');
const inputs = document.querySelectorAll('.form-control');
const resultSection = document.querySelector('#resultado');

// Manipulação de classes
resultSection.classList.add('show');
resultSection.classList.remove('d-none');
resultSection.classList.toggle('visible');

// Manipulação de conteúdo
element.textContent = 'Novo texto';
element.innerHTML = '<strong>HTML</strong>';
element.setAttribute('data-value', '123');
```

### Destructuring e Template Literals

#### Destructuring Assignment
```javascript
// Destructuring de objetos
const { valor, taxa, prazo } = formData;
const { width, height } = canvas.getBoundingClientRect();

// Destructuring de arrays
const [primeiro, segundo, ...resto] = arrayParcelas;
const [red, green, blue] = ['#ff0000', '#00ff00', '#0000ff'];

// Destructuring com renomeação
const { valor: valorVeiculo, taxa: taxaJuros } = dadosFinanciamento;
```

#### Template Literals
```javascript
// Template strings para formatação
const resultado = `Valor financiado: R$ ${valorFormatado}`;
const html = `
    <div class="resultado">
        <h3>Parcela: ${parcela}</h3>
        <p>Total: ${total}</p>
    </div>
`;

// Tagged template literals
function currency(strings, ...values) {
    return strings.reduce((result, string, i) => {
        const value = values[i] ? `R$ ${values[i].toFixed(2)}` : '';
        return result + string + value;
    }, '');
}

const output = currency`Valor: ${1234.56}, Taxa: ${15.5}%`;
```

### Async/Await e Promises (para futuras melhorias)

#### Operações Assíncronas
```javascript
// Fetch API para dados externos
async function buscarTaxaBacen() {
    try {
        const response = await fetch('/api/taxa-selic');
        const data = await response.json();
        return data.taxa;
    } catch (error) {
        console.error('Erro ao buscar taxa:', error);
        return null;
    }
}

// Promise.all para múltiplas operações
async function carregarDados() {
    const [taxaSelic, inflacao, ipca] = await Promise.all([
        buscarTaxaBacen(),
        buscarInflacao(),
        buscarIPCA()
    ]);
    
    return { taxaSelic, inflacao, ipca };
}
```

### Modules e Import/Export (para modularização futura)

#### ES6 Modules
```javascript
// math-utils.js
export function calcularPrice(valor, taxa, prazo) {
    // Implementação
}

export function calcularSAC(valor, taxa, prazo) {
    // Implementação
}

export default class CalculadoraFinanceira {
    // Implementação da classe
}

// app.js
import CalculadoraFinanceira, { calcularPrice, calcularSAC } from './math-utils.js';
import { formatCurrency } from './format-utils.js';

const calc = new CalculadoraFinanciera();
```

### Classes e Métodos Modernos

#### Classes ES6 para Estruturação
```javascript
// Classe para encapsular lógica financeira
class SimuladorFinanciamento {
    constructor(valor, entrada, taxa, prazo) {
        this.valor = new Decimal(valor);
        this.entrada = new Decimal(entrada);
        this.taxa = new Decimal(taxa);
        this.prazo = prazo;
    }
    
    calcularPrice() {
        const valorFinanciado = this.valor.minus(this.entrada);
        // Implementação do cálculo Price
        return resultado;
    }
    
    calcularSAC() {
        // Implementação do cálculo SAC
        return resultado;
    }
    
    get taxaAnual() {
        return this.taxa.mul(12);
    }
    
    static fromFormData(formData) {
        return new SimuladorFinanciamento(
            formData.valor,
            formData.entrada,
            formData.taxa,
            formData.prazo
        );
    }
}
```

### Array Methods e Functional Programming

#### Métodos de Array Funcionais
```javascript
// Processamento de dados de parcelas
const parcelas = Array.from({ length: 60 }, (_, i) => {
    return calcularParcela(i + 1);
});

// Filtragem e mapeamento
const parcelasAltas = parcelas
    .filter(p => p.valor > 1000)
    .map(p => ({ ...p, categoria: 'alta' }));

// Redução para cálculos
const totalJuros = parcelas.reduce((total, parcela) => {
    return total.plus(parcela.juros);
}, new Decimal(0));

// Find para buscar parcela específica
const parcelaMes30 = parcelas.find(p => p.mes === 30);
```

#### Object Methods e Spread Operator
```javascript
// Object.entries para iteração
const formData = Object.entries(form)
    .reduce((data, [key, input]) => {
        data[key] = input.value;
        return data;
    }, {});

// Spread operator para cloning
const novoConfig = { ...configBase, responsive: true };
const novosDados = [...dadosOriginais, novoDado];

// Object.assign para merge
const configCompleto = Object.assign({}, configDefault, configUsuario);
```

---

## 🛠️ Integração das Tecnologias no Projeto

### Fluxo de Dados Completo

#### 1. Captura de Dados (HTML5 + Bootstrap)
```html
<form id="form-financiamento" class="row g-3">
    <div class="col-md-4">
        <label for="valor" class="form-label">Valor do Veículo</label>
        <input id="valor" type="number" class="form-control" value="78900" required>
        <div class="form-text">Valor total do carro sem entrada.</div>
    </div>
    <!-- Mais campos... -->
</form>
```

#### 2. Processamento (JavaScript ES6+ + Decimal.js)
```javascript
document.getElementById('form-financiamento').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Captura com Decimal.js para precisão
    const valor = new Decimal(document.getElementById('valor').value);
    const entradaPerc = new Decimal(document.getElementById('entrada_perc').value);
    const taxaJuros = new Decimal(document.getElementById('taxa_juros').value);
    
    // Cálculos financeiros precisos
    const entrada = valor.mul(entradaPerc.div(100));
    const valorFin = valor.sub(entrada);
    const parcela = calcularPrice(valorFin, taxaJuros.div(100), prazo);
    
    // Atualização da interface
    exibirResultados({ valor, entrada, parcela, /* ... */ });
});
```

#### 3. Visualização (Chart.js + Canvas API)
```javascript
function criarGraficos(dados) {
    // Gráfico de Composição (Doughnut)
    const ctxAmortizacao = document.getElementById('graficoAmortizacao').getContext('2d');
    
    if (chartAmortizacao) chartAmortizacao.destroy();
    
    chartAmortizacao = new Chart(ctxAmortizacao, {
        type: 'doughnut',
        data: {
            labels: ['Juros Totais', 'Amortização'],
            datasets: [{
                data: [dados.jurosTotais.toNumber(), dados.valorFin.toNumber()],
                backgroundColor: ['#dc3545', '#28a745'],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'bottom' }
            }
        }
    });
    
    // Gráfico de Evolução (Line)
    const ctxSaldo = document.getElementById('graficoSaldo').getContext('2d');
    
    if (chartSaldo) chartSaldo.destroy();
    
    chartSaldo = new Chart(ctxSaldo, {
        type: 'line',
        data: {
            labels: dados.meses,
            datasets: [{
                label: 'Saldo Devedor',
                data: dados.saldos.map(s => s.toNumber()),
                borderColor: '#007bff',
                backgroundColor: 'rgba(0, 123, 255, 0.1)',
                fill: true,
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return formatCurrency(value);
                        }
                    }
                }
            }
        }
    });
}
```

#### 4. Formatação e Apresentação (Bootstrap + CSS Custom)
```css
/* Responsividade para gráficos */
canvas {
    width: 100% !important;
    height: auto !important;
}

/* Layout responsivo Bootstrap */
.container {
    max-width: 900px;
}

/* Elementos informativos */
.info-icon {
    cursor: pointer;
    color: #0d6efd;
    margin-left: 4px;
}
```

### Padrões de Integração

#### Gerenciamento de Estado
```javascript
// Estado global da aplicação
const AppState = {
    dados: null,
    graficos: {
        amortizacao: null,
        saldo: null
    },
    config: {
        precision: 20,
        currency: 'BRL'
    }
};

// Atualização reativa do estado
function updateState(newData) {
    AppState.dados = newData;
    renderCharts(newData);
    updateTables(newData);
}
```

#### Error Handling Robusto
```javascript
function calcularComValidacao(dados) {
    try {
        // Validação de entrada
        const valor = new Decimal(dados.valor);
        if (valor.lte(0)) {
            throw new Error('Valor deve ser positivo');
        }
        
        // Cálculos com Decimal.js
        const resultado = calcularPrice(valor, dados.taxa, dados.prazo);
        
        return { sucesso: true, resultado };
        
    } catch (error) {
        console.error('Erro no cálculo:', error);
        return { sucesso: false, erro: error.message };
    }
}
```

### Performance e Otimização

#### Lazy Loading de Gráficos
```javascript
// Carregar gráficos apenas quando necessário
function mostrarResultados(dados) {
    document.getElementById('resultado').style.display = 'block';
    
    // Usar requestAnimationFrame para renderização suave
    requestAnimationFrame(() => {
        criarGraficos(dados);
        preencherTabelas(dados);
    });
}
```

#### Debouncing para Inputs
```javascript
// Debounce para cálculos em tempo real (futuro)
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const calcularDebounced = debounce(calcularFinanciamento, 500);
```

Esta documentação completa das tecnologias frontend fornece uma base sólida para desenvolvimento e manutenção do simulador de financiamento, garantindo uso correto e otimizado de todas as bibliotecas e APIs envolvidas.