# Diretrizes e Padrões de Design

## Filosofia do Projeto

### Princípios Fundamentais
1. **Simplicidade**: Interface limpa e intuitiva
2. **Precisão**: Cálculos financeiros exatos usando Decimal.js
3. **Educação**: Links e informações para educar o usuário
4. **Transparência**: Fórmulas e métodos claramente explicados
5. **Acessibilidade**: Funciona em diferentes dispositivos e navegadores

## Padrões de Interface

### Layout e Grid
- **Bootstrap 5 Grid System**: Layout responsivo baseado em 12 colunas
- **Container**: Máximo 900px de largura para legibilidade
- **Breakpoints**: 
  - Mobile: < 768px (coluna única)
  - Tablet: 768px-991px (2 colunas)
  - Desktop: > 992px (3 colunas)

### Tipografia
```css
/* Hierarquia de títulos */
h1: Título principal da página
h2: Seções principais (Resumo, Gráficos)
h3: Subseções
h5: Títulos de gráficos e tabelas

/* Classes Bootstrap utilizadas */
.text-muted: Textos explicativos
.form-text: Ajuda contextual em formulários
```

### Cores Padrão (Bootstrap)
```css
Primary: #0d6efd (azul) - Links e elementos principais
Success: #198754 (verde) - Amortização, valores positivos
Danger: #dc3545 (vermelho) - Juros, valores negativos
Info: #0dcaf0 (ciano) - Informações especiais
Warning: #ffc107 (amarelo) - Alertas
Light: #f8f9fa (cinza claro) - Background
Dark: #212529 (cinza escuro) - Texto principal
```

### Ícones e Elementos Visuais
- **Info Icons**: Pequenos "i" azuis para tooltips
- **Bootstrap Icons**: Via classes CSS quando necessário
- **Canvas Charts**: Gráficos responsivos e interativos

## Padrões de Experiência do Usuário

### Formulários
```html
<!-- Estrutura padrão de campo -->
<div class="col-md-4">
    <label for="campo" class="form-label">
        Nome do Campo
        <span class="info-icon" title="Tooltip explicativo">i</span>
    </label>
    <input id="campo" type="number" class="form-control" value="valor_padrao">
    <div class="form-text">Texto explicativo sobre o campo.</div>
</div>
```

### Feedback Visual
- **Estados de Loading**: Não implementado (cálculos instantâneos)
- **Validação**: HTML5 validation + JavaScript
- **Resultados**: Área inicialmente oculta, revelada após cálculo
- **Tooltips**: Informações contextuais em elementos críticos

### Navegação e Fluxo
1. **Entrada de Dados**: Formulário organizado e intuitivo
2. **Processamento**: Instantâneo (sem loading states)
3. **Resultados**: Tabela resumo + gráficos + detalhes expansíveis
4. **Ações**: Exportar CSV, ajustar parâmetros

## Padrões de Código JavaScript

### Estrutura de Funções
```javascript
// Padrão para funções utilitárias
function nomeFuncao(parametros) {
    // Validação de entrada
    // Processamento
    // Retorno
}

// Padrão para event handlers
element.addEventListener('evento', function(e) {
    e.preventDefault(); // Se necessário
    // Lógica do handler
});
```

### Manipulação de Dados Financeiros
```javascript
// SEMPRE usar Decimal.js para cálculos financeiros
const valor = new Decimal(input.value);
const resultado = valor.mul(taxa).div(prazo);

// Formatação monetária consistente
const formatado = formatCurrency(resultado.toNumber());
```

### Gerenciamento de Gráficos
```javascript
// Padrão para Chart.js
if (chartExistente) chartExistente.destroy();
chartExistente = new Chart(ctx, configuracao);
```

## Padrões de Responsividade

### Breakpoints Específicos
```css
/* Mobile First Approach */
@media (max-width: 767px) {
    .container { padding: 15px; }
    /* Layout de coluna única */
}

@media (min-width: 768px) and (max-width: 991px) {
    /* Layout de 2 colunas para tablets */
}

@media (min-width: 992px) {
    .container { max-width: 900px; }
    /* Layout de 3 colunas para desktop */
}
```

### Elementos Responsivos
- **Canvas Charts**: `width: 100% !important; height: auto !important;`
- **Tables**: Wrapped em `.table-responsive`
- **Forms**: Grid Bootstrap responsivo
- **Images**: Não aplicável (projeto sem imagens)

## Padrões de Acessibilidade

### Semântica HTML
```html
<!-- Labels associados -->
<label for="input-id">Texto do Label</label>
<input id="input-id" type="number">

<!-- Hierarquia de headings -->
<h1>Título Principal</h1>
<h2>Seção</h2>
<h3>Subseção</h3>

<!-- ARIA quando necessário -->
<span aria-label="Informação adicional" title="Tooltip">i</span>
```

### Contraste e Legibilidade
- **Texto**: #212529 sobre #f8f9fa (ratio > 4.5:1)
- **Links**: #0d6efd (suficientemente contrastante)
- **Campos**: Bootstrap padrão (testado para acessibilidade)

## Design Patterns Aplicados

### Module Pattern (JavaScript)
```javascript
// Encapsulamento em DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    // Variáveis privadas
    let chartAmortizacao = null;
    
    // Funções privadas
    function funcaoInterna() { ... }
    
    // Event handlers públicos
    document.getElementById('form').addEventListener(...)
});
```

### Observer Pattern (Event Listeners)
```javascript
// Observadores de eventos do DOM
form.addEventListener('submit', handleSubmit);
inputs.forEach(input => input.addEventListener('change', validateInput));
```

### Factory Pattern (Charts)
```javascript
// Criação de gráficos com configurações padronizadas
function createChart(type, canvas, data, options) {
    return new Chart(canvas, {
        type: type,
        data: data,
        options: {...defaultOptions, ...options}
    });
}
```

## Convenções de Naming

### CSS Classes
- **Bootstrap**: Usar classes utilitárias quando possível
- **Custom**: kebab-case (.info-icon, .custom-button)
- **BEM**: Não utilizado (projeto simples)

### JavaScript
- **Variáveis**: camelCase (valorFinanciado, taxaJuros)
- **Funções**: camelCase (formatCurrency, calcularPrice)
- **Constantes**: UPPER_SNAKE_CASE ou camelCase
- **DOM Elements**: Descritivos (formFinanciamento, resultadoDiv)

### HTML IDs
- **Forms**: form-nome
- **Inputs**: nome-descritivo
- **Sections**: resultado, graficos
- **Tables**: tabela-nome

## Diretrizes de Performance

### Otimizações Implementadas
1. **CDN Loading**: Bibliotecas carregadas via CDN confiáveis
2. **DOM Queries**: Minimizadas e cachadas quando possível
3. **Chart Cleanup**: Destroy de gráficos antes de recriar
4. **Memory Management**: Reutilização de variáveis

### Práticas Recomendadas
- **Lazy Loading**: Gráficos só criados quando necessário
- **Event Delegation**: Não aplicável (poucos elementos dinâmicos)
- **Debouncing**: Não necessário (formulário simples)
- **Caching**: Não implementado (cálculos rápidos)