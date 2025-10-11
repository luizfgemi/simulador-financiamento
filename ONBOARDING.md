# 🚀 Onboarding - Simulador de Financiamento de Veículos

Bem-vindo ao **Simulador de Financiamento de Veículos**! Este é um projeto desenvolvido por **Luiz Fernando Reina Gemi** que oferece uma ferramenta completa para simulação de financiamentos automotivos.

## 📋 Visão Geral do Projeto

### 🎯 Objetivo
Fornecer uma calculadora avançada de financiamento de veículos totalmente client-side, que permite aos usuários simular diferentes cenários de financiamento com cálculos precisos e visualizações interativas.

### 🏗️ Arquitetura
- **Frontend Only**: Aplicação 100% client-side (HTML, CSS, JavaScript)
- **Sem Backend**: Todos os cálculos são realizados no navegador
- **Responsivo**: Interface adaptável para dispositivos móveis e desktop

## 🛠️ Stack Tecnológico

### Core Technologies
- **HTML5**: Estrutura semântica da aplicação
- **CSS3**: Estilização personalizada complementar
- **JavaScript ES6+**: Lógica de negócio e manipulação do DOM

### Bibliotecas Externas (CDN)
1. **[Bootstrap 5.3.2](https://getbootstrap.com/)**
   - Framework CSS para UI responsiva
   - Componentes prontos (forms, tables, cards)
   - Sistema de grid flexível

2. **[Decimal.js 10.4.3](https://mikemcl.github.io/decimal.js/)**
   - Cálculos de alta precisão
   - Evita problemas de ponto flutuante do JavaScript
   - Essencial para cálculos financeiros precisos

3. **[Chart.js 4.4.0](https://www.chartjs.org/)**
   - Biblioteca de gráficos interativos
   - Visualização de amortização e evolução do saldo
   - Renderização em canvas

## 📁 Estrutura do Projeto

```
simulador-financiamento/
├── index.html              # 🏠 Página principal da aplicação
├── terms.html              # 📜 Termos de uso (com easter eggs!)
├── README.md               # 📖 Documentação principal
├── LICENSE                 # ⚖️ Licença MIT
├── css/
│   └── style.css          # 🎨 Estilos personalizados
└── js/
    └── app.js             # ⚙️ Lógica principal da aplicação
```

## 🧮 Funcionalidades Principais

### Cálculos Financeiros
- **💰 Sistema Price**: Parcelas fixas com juros decrescentes
- **📊 Sistema SAC**: Amortização constante (comparativo)
- **📈 Taxa Anual Equivalente (TAE)**: Conversão de taxa mensal para anual
- **💸 Custo Real do Financiamento**: Considera inflação estimada
- **🔄 Valor Presente Líquido (VPL)**: Aplica taxa de desconto
- **⚡ Simulação de Quitação Antecipada**: Cálculo de economia

### Visualizações
- **📊 Gráfico de Composição das Parcelas**: Mostra proporção juros/amortização
- **📉 Gráfico de Evolução do Saldo**: Acompanha redução do saldo devedor
- **📋 Tabelas Detalhadas**: Evolução mês a mês do financiamento
- **💾 Exportação CSV**: Download da tabela de evolução

### Interface
- **📱 Design Responsivo**: Funciona em mobile e desktop
- **ℹ️ Tooltips Informativos**: Ajuda contextual nos campos
- **🔗 Links Úteis**: Banco Central, Boletim Focus, Suno
- **🎛️ Formulário Intuitivo**: Campos bem organizados e validados

## 🔧 Como Funciona

### 1. Entrada de Dados
O usuário informa:
- Valor do veículo
- Percentual de entrada
- Taxa de juros mensal
- Prazo em meses
- Inflação anual estimada
- Taxa de desconto para VPL
- Mês para simulação de quitação antecipada

### 2. Processamento
- Cálculos utilizando **Decimal.js** para precisão
- Fórmulas financeiras padrão (Price e SAC)
- Geração de tabelas mês a mês
- Preparação de dados para gráficos

### 3. Apresentação
- Resumo executivo em tabela
- Gráficos interativos com **Chart.js**
- Tabelas detalhadas expansíveis
- Comparativo entre sistemas Price e SAC

## 📚 Recursos Educacionais

### Links Integrados
- **[Banco Central](https://www.bcb.gov.br/estatisticas/reporttxjuros)**: Taxas médias de financiamento
- **[Boletim Focus](https://www.bcb.gov.br/publicacoes/focus)**: Projeções de inflação
- **[Suno](https://www.suno.com.br/artigos/taxa-de-desconto/)**: Conceitos de taxa de desconto

### Tooltips Explicativos
Cada campo possui dicas contextuais para auxiliar o usuário no preenchimento correto.

## 🎨 Design e UX

### Paleta de Cores
- Background claro (`bg-light`)
- Texto escuro (`text-dark`)
- Elementos informativos em azul Bootstrap
- Destaques em cores semânticas (success, info, warning)

### Tipografia
- Fonte padrão do Bootstrap (sistema)
- Hierarquia clara com headings bem definidos
- Texto auxiliar em `text-muted`

### Componentes Bootstrap Utilizados
- **Forms**: Inputs, labels, form-text
- **Tables**: Listradas e com bordas
- **Cards**: Organização de conteúdo
- **Buttons**: Ações principais
- **Grid System**: Layout responsivo

## 🔬 Detalhes Técnicos

### Precisão Numérica
```javascript
// Exemplo de uso do Decimal.js
const valor = new Decimal(document.getElementById('valor').value);
const jurosM = taxaJuros.div(100);
```

### Fórmulas Implementadas
1. **Parcela Price**: `PMT = PV × (i × (1+i)^n) / ((1+i)^n - 1)`
2. **TAE**: `(1 + i_mensal)^12 - 1`
3. **VPL**: Somatório das parcelas descontadas
4. **Quitação Antecipada**: Saldo devedor no mês escolhido

### Renderização de Gráficos
```javascript
// Chart.js configuração típica
new Chart(ctx, {
    type: 'line',
    data: chartData,
    options: chartOptions
});
```

## 🚀 Como Executar

### Pré-requisitos
- Navegador web moderno
- Conexão com internet (para CDNs)

### Execução
1. Abra `index.html` em qualquer navegador
2. Ou sirva os arquivos via servidor web local
3. Não requer instalação ou configuração

### Desenvolvimento Local
```bash
# Servidor simples com Python
python -m http.server 8000

# Ou com Node.js
npx serve .

# Ou com PHP
php -S localhost:8000
```

## 🎭 Easter Eggs

### Termos de Uso Divertidos
O arquivo `terms.html` contém uma seção hilária de "Limitação de Responsabilidade Extraordinária" que inclui cenários absurdos como:
- Explosões espontâneas de aparelhos
- Apocalipse zumbi gerado por cálculos imprecisos
- Invasões alienígenas motivadas pelas taxas apresentadas
- Buraco negro no quintal

## 📈 Possíveis Melhorias

### Funcionalidades
- [ ] Comparação com investimento alternativo
- [ ] Simulação de financiamento com seguro
- [ ] Cálculo de depreciação do veículo
- [ ] Simulação de parcelas extras
- [ ] Múltiplos cenários lado a lado

### Técnicas
- [ ] Service Worker para funcionar offline
- [ ] Testes automatizados
- [ ] Minificação de assets
- [ ] PWA (Progressive Web App)
- [ ] Compartilhamento de simulações via URL

### UX/UI
- [ ] Modo escuro
- [ ] Animações suaves
- [ ] Salvamento local de simulações
- [ ] Impressão otimizada
- [ ] Acessibilidade aprimorada

## 📝 Licença e Créditos

- **Licença**: MIT License
- **Autor**: Luiz Fernando Reina Gemi
- **Ano**: 2025
- **Repositório**: [GitHub](https://github.com/luizfgemi/simulador-financiamento)

## 🤝 Contribuições

O projeto está aberto a contribuições! Sinta-se à vontade para:
- Reportar bugs
- Sugerir melhorias
- Contribuir com código
- Melhorar a documentação

---

**🎯 Próximos Passos para Desenvolvedores:**
1. Explore o código em `js/app.js` para entender a lógica
2. Teste diferentes cenários no simulador
3. Analise os gráficos gerados pelo Chart.js
4. Experimente modificar os estilos em `css/style.css`
5. Leia os termos de uso para se divertir! 😄

**Happy Coding!** 🚀
