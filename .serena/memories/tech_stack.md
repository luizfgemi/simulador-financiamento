# Stack Tecnológico - Simulador de Financiamento

## Tecnologias Principais

### Frontend
- **HTML5**: Estrutura semântica da aplicação
- **CSS3**: Estilização personalizada complementar
- **JavaScript ES6+**: Lógica de negócio e manipulação do DOM

### Bibliotecas Externas (CDN)
1. **Bootstrap 5.3.2**
   - Framework CSS para UI responsiva
   - Componentes prontos (forms, tables, cards)
   - Sistema de grid flexível
   - CDN: `https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css`

2. **Decimal.js 10.4.3**
   - Cálculos de alta precisão para aritmética financeira
   - Evita problemas de ponto flutuante do JavaScript
   - Essencial para cálculos financeiros precisos
   - CDN: `https://cdn.jsdelivr.net/npm/decimal.js@10.4.3/decimal.min.js`

3. **Chart.js 4.4.0**
   - Biblioteca de gráficos interativos
   - Visualização de amortização e evolução do saldo
   - Renderização em canvas
   - CDN: `https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js`

## Arquitetura de Arquivos
```
simulador-financiamento/
├── index.html              # Página principal
├── terms.html              # Termos de uso
├── README.md               # Documentação
├── LICENSE                 # Licença MIT
├── css/
│   └── style.css          # Estilos personalizados
└── js/
    └── app.js             # Lógica principal
```

## Dependências
- **Nenhuma dependência local**: Todas as bibliotecas são carregadas via CDN
- **Node.js**: Não requerido para execução (projeto frontend puro)
- **Navegador moderno**: Suporte a ES6+ e Canvas API