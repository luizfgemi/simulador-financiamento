# Estrutura do Código - Simulador de Financiamento

## Arquitetura Geral

### Estrutura de Diretórios
```
simulador-financiamento/
├── .git/                   # Controle de versão Git
├── .serena/               # Configurações do Serena
├── css/
│   └── style.css         # Estilos personalizados (89 linhas)
├── js/
│   └── app.js            # Lógica principal (216 linhas)
├── index.html            # Página principal da aplicação
├── terms.html            # Página de termos de uso
├── README.md             # Documentação principal
├── LICENSE               # Licença MIT
├── ONBOARDING.md         # Guia de onboarding
├── GUIA_TECNICO.md       # Documentação técnica
└── EXEMPLOS_PRATICOS.md  # Casos de uso práticos
```

## Arquivo Principal: js/app.js

### Estrutura Funcional
```javascript
document.addEventListener('DOMContentLoaded', () => {
    // Variáveis globais
    let chartAmortizacao = null;
    let chartSaldo = null;

    // Funções utilitárias
    function formatCurrency(d) { ... }
    function decimalPow(base, exp) { ... }

    // Event handler principal
    document.getElementById('form-financiamento').addEventListener('submit', function (e) {
        // Lógica de cálculo e renderização
    });
});
```

### Principais Componentes

#### 1. Funções Utilitárias
- `formatCurrency()`: Formatação monetária brasileira
- `decimalPow()`: Potenciação com Decimal.js

#### 2. Processamento de Dados
- Leitura e validação de inputs do formulário
- Cálculos financeiros com Decimal.js
- Geração de tabelas de amortização

#### 3. Renderização
- Atualização da tabela de resultados
- Criação de gráficos com Chart.js
- Preenchimento de tabelas detalhadas

#### 4. Cálculos Financeiros
- Sistema Price (parcelas fixas)
- Sistema SAC (amortização constante)
- Taxa Anual Equivalente (TAE)
- Valor Presente Líquido (VPL)
- Simulação de quitação antecipada

## Arquivo Principal: index.html

### Estrutura HTML
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <!-- Meta tags e CDNs -->
</head>
<body>
    <div class="container">
        <!-- Formulário de entrada -->
        <form id="form-financiamento">
            <!-- Campos de input organizados em grid Bootstrap -->
        </form>
        
        <!-- Área de resultados (inicialmente oculta) -->
        <div id="resultado" style="display:none;">
            <!-- Tabela de resumo -->
            <!-- Gráficos Chart.js -->
            <!-- Tabelas detalhadas (colapsáveis) -->
        </div>
    </div>
    
    <!-- Footer -->
    <!-- Script principal -->
</body>
</html>
```

### Componentes da Interface

#### 1. Formulário de Entrada
- 7 campos de input numéricos
- Validação HTML5 built-in
- Tooltips informativos
- Links para fontes oficiais

#### 2. Área de Resultados
- Tabela de resumo executivo
- 2 canvas para gráficos Chart.js
- Tabelas expansíveis com detalhes
- Botão de exportação CSV

#### 3. Elementos Bootstrap
- Grid system responsivo (`col-md-4`)
- Componentes de formulário (`form-control`, `form-label`)
- Tabelas estilizadas (`table-responsive`, `table-striped`)
- Classes utilitárias de espaçamento

## Arquivo de Estilos: css/style.css

### Customizações CSS
```css
/* Ícones informativos */
.info-icon {
    cursor: pointer;
    color: #0d6efd;
    margin-left: 4px;
}

/* Layout responsivo */
.container {
    max-width: 900px;
}

/* Gráficos responsivos */
canvas {
    width: 100% !important;
    height: auto !important;
}
```

## Fluxo de Execução

### 1. Carregamento da Página
1. HTML carrega estrutura e CDNs
2. CSS aplica estilos personalizados
3. JavaScript aguarda DOMContentLoaded
4. Event listeners são configurados

### 2. Interação do Usuário
1. Usuário preenche formulário
2. Submit dispara preventDefault
3. Inputs são coletados e validados
4. Cálculos são executados com Decimal.js

### 3. Processamento
1. Fórmulas financeiras são aplicadas
2. Tabelas de amortização são geradas
3. Dados são preparados para visualização
4. Resultados são formatados

### 4. Renderização
1. Área de resultados é exibida
2. Tabela de resumo é preenchida
3. Gráficos Chart.js são criados/atualizados
4. Tabelas detalhadas são populadas

## Pontos de Extensão

### Adição de Novos Cálculos
- Inserir novas fórmulas após linha ~150 em app.js
- Adicionar campos no formulário HTML
- Incluir resultados na tabela de resumo

### Novos Gráficos
- Adicionar novos elementos canvas no HTML
- Configurar Chart.js após linha ~180 em app.js
- Definir cores e estilos no CSS

### Customização Visual
- Modificar classes Bootstrap no HTML
- Adicionar regras CSS personalizadas
- Ajustar responsividade conforme necessário