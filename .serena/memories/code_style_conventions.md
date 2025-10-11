# Convenções de Código e Estilo

## JavaScript (ES6+)

### Convenções de Nomenclatura
- **Variáveis e Funções**: camelCase
  ```javascript
  const valorFinanciado = new Decimal(valor.value);
  function formatCurrency(d) { ... }
  ```

- **Constantes**: camelCase ou snake_case
  ```javascript
  const chartAmortizacao = null;
  const DATA_COUNT = 12;
  ```

### Estrutura do Código
- **Event Listeners**: Encapsulados em DOMContentLoaded
- **Funções Utilitárias**: Definidas no escopo principal
- **Comentários**: Usado para seções importantes
  ```javascript
  // Formata número como moeda BR
  // Potência fracionária com Decimal.js
  ```

### Padrões de Codificação
- **Decimal.js**: Usado para todos os cálculos financeiros
  ```javascript
  const valor = new Decimal(document.getElementById('valor').value);
  ```

- **Validação de Entrada**: Valores mínimos e validações
  ```javascript
  const prazo = Math.max(parseInt(document.getElementById('prazo').value, 10), 1);
  ```

- **Formatação de Moeda**: Padrão brasileiro (R$)
  ```javascript
  function formatCurrency(d) {
      return 'R$ ' + Number(d).toFixed(2)
          .replace('.', ',')
          .replace(/\\B(?=(\\d{3})+(?!\\d))/g, '.');
  }
  ```

## HTML

### Estrutura Semântica
- **DOCTYPE html5**: `<!DOCTYPE html>`
- **Lang**: `<html lang="pt-BR">`
- **Meta tags**: Viewport, charset UTF-8
- **IDs descritivos**: `form-financiamento`, `resultado`

### Bootstrap Classes
- **Layout**: `container`, `row`, `col-md-4`
- **Forms**: `form-label`, `form-control`, `form-text`
- **Tables**: `table-responsive`, `table-bordered`, `table-striped`
- **Utilities**: `mb-3`, `py-5`, `text-muted`

## CSS

### Convenções de Nomenclatura
- **Classes**: kebab-case
  ```css
  .info-icon { ... }
  ```

### Estrutura
- **Comentários descritivos**: Para cada seção
  ```css
  /* Estilos personalizados para o Simulador de Financiamento */
  /* Ícone de informação junto aos rótulos */
  ```

- **Seletores específicos**: Evita conflitos com Bootstrap
- **Responsividade**: Canvas ajustável
  ```css
  canvas {
      width: 100% !important;
      height: auto !important;
  }
  ```

## Padrões de Design

### UI/UX
- **Bootstrap 5**: Framework base para consistência
- **Cores**: Paleta Bootstrap (primary, success, danger)
- **Tipografia**: Sistema de fontes Bootstrap
- **Espaçamento**: Classes utilitárias Bootstrap

### Responsividade
- **Mobile First**: Design adaptável
- **Grid System**: Layout flexível
- **Canvas**: Gráficos responsivos

### Acessibilidade
- **Labels**: Associados aos inputs
- **Form-text**: Textos explicativos
- **Títulos**: Hierarquia semântica (h1, h2, h3)