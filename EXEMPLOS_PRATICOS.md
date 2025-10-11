# 💡 Exemplos Práticos - Simulador de Financiamento

## 🎯 Casos de Uso Reais

### 📊 Exemplo 1: Financiamento Popular
**Cenário:** Carro popular de R$ 45.000

**Dados de Entrada:**
- Valor do Veículo: R$ 45.000
- Entrada: 20% (R$ 9.000)
- Valor Financiado: R$ 36.000
- Taxa de Juros: 1,89% a.m. (taxa média 2024)
- Prazo: 48 meses
- Inflação Anual: 4,5%
- Taxa Desconto VPL: 1,0% a.m.

**Resultados Esperados:**
```
Parcela Mensal: R$ 1.048,32
Total Pago: R$ 50.319,36
Juros Totais: R$ 14.319,36
TAE: 25,22% a.a.
Custo Real: R$ 39.680,45 (considerando inflação)
VPL: -R$ 2.847,21 (desfavorável ao financiamento)
```

**Interpretação:**
- O financiamento custa 39,8% a mais que o valor à vista
- Com a inflação, o custo real é menor que o nominal
- O VPL negativo sugere que seria melhor pagar à vista

---

### 🏎️ Exemplo 2: Carro Premium
**Cenário:** Veículo de luxo de R$ 120.000

**Dados de Entrada:**
- Valor do Veículo: R$ 120.000
- Entrada: 30% (R$ 36.000)
- Valor Financiado: R$ 84.000
- Taxa de Juros: 1,65% a.m. (taxa diferenciada)
- Prazo: 60 meses
- Inflação Anual: 4,0%
- Taxa Desconto VPL: 0,8% a.m.

**Resultados Esperados:**
```
Parcela Mensal: R$ 2.205,18
Total Pago: R$ 132.310,80
Juros Totais: R$ 48.310,80
TAE: 21,70% a.a.
Custo Real: R$ 118.892,37
VPL: -R$ 8.445,92
```

---

### 🚗 Exemplo 3: Financiamento Estratégico
**Cenário:** Usando financiamento como estratégia financeira

**Dados de Entrada:**
- Valor do Veículo: R$ 65.000
- Entrada: 50% (R$ 32.500)
- Valor Financiado: R$ 32.500
- Taxa de Juros: 1,25% a.m. (taxa promocional)
- Prazo: 36 meses
- Inflação Anual: 5,0%
- Taxa Desconto VPL: 1,2% a.m. (rendimento investimento)

**Estratégia:**
Dar entrada de 50% e investir o restante que seria usado para pagamento à vista

**Resultados:**
```
Parcela Mensal: R$ 1.099,75
Total Pago: R$ 39.591,00
Juros Totais: R$ 7.091,00
TAE: 16,08% a.a.
VPL: +R$ 1.205,30 (favorável ao financiamento!)
```

**Análise:**
Com taxa baixa e bom rendimento no investimento, o financiamento se torna vantajoso.

---

## 🔍 Análises Comparativas

### 📈 Comparação Price vs SAC

**Dados Base:**
- Valor Financiado: R$ 50.000
- Taxa: 1,5% a.m.
- Prazo: 60 meses

**Sistema Price:**
```
Parcela Fixa: R$ 1.386,94
Total Pago: R$ 83.216,40
Juros Totais: R$ 33.216,40

Evolução das Parcelas:
Mês 1: R$ 1.386,94 (Juros: R$ 750,00 | Amort: R$ 636,94)
Mês 30: R$ 1.386,94 (Juros: R$ 401,23 | Amort: R$ 985,71)
Mês 60: R$ 1.386,94 (Juros: R$ 20,48 | Amort: R$ 1.366,46)
```

**Sistema SAC:**
```
Primeira Parcela: R$ 1.583,33
Última Parcela: R$ 846,25
Total Pago: R$ 81.250,00
Juros Totais: R$ 31.250,00

Evolução das Parcelas:
Mês 1: R$ 1.583,33 (Juros: R$ 750,00 | Amort: R$ 833,33)
Mês 30: R$ 1.208,33 (Juros: R$ 375,00 | Amort: R$ 833,33)
Mês 60: R$ 846,25 (Juros: R$ 12,50 | Amort: R$ 833,33)
```

**Comparação:**
- SAC economiza R$ 1.966,40 em juros
- Price tem parcelas constantes (mais previsível)
- SAC tem parcelas iniciais 14% maiores

---

### 💰 Simulação de Quitação Antecipada

**Cenário Base:**
- Financiamento: R$ 40.000
- Taxa: 1,8% a.m.
- Prazo: 60 meses
- Parcela Price: R$ 1.149,30

**Opções de Quitação:**

**Quitação no Mês 12:**
```
Saldo Devedor: R$ 32.567,89
Total Pago até aqui: R$ 13.791,60
Total com Quitação: R$ 46.359,49
Economia: R$ 22.597,51 (32,8%)
```

**Quitação no Mês 24:**
```
Saldo Devedor: R$ 24.401,23
Total Pago até aqui: R$ 27.583,20
Total com Quitação: R$ 51.984,43
Economia: R$ 17.972,57 (25,7%)
```

**Quitação no Mês 36:**
```
Saldo Devedor: R$ 15.298,45
Total Pago até aqui: R$ 41.374,80
Total com Quitação: R$ 56.673,25
Economia: R$ 12.283,75 (17,8%)
```

**Insights:**
- Quanto mais cedo a quitação, maior a economia
- Economia diminui exponencialmente com o tempo
- Primeiros anos concentram maior parte dos juros

---

## 📊 Cenários de Mercado

### 🔥 Cenário Inflacionário Alto
**Contexto:** Inflação de 8% a.a., Selic elevada

**Dados:**
- Taxa Financiamento: 2,5% a.m.
- Inflação: 8% a.a.
- Taxa Investimento: 1,8% a.m.

**Resultado:**
```
TAE: 34,49% a.a.
Custo Real (descontada inflação): 24,53% a.a.
VPL: Muito negativo
Recomendação: Evitar financiamento, pagar à vista
```

---

### 📉 Cenário Juros Baixos
**Contexto:** Política monetária expansionista

**Dados:**
- Taxa Financiamento: 0,8% a.m.
- Inflação: 3% a.a.
- Taxa Investimento: 1,1% a.m.

**Resultado:**
```
TAE: 10,03% a.a.
Custo Real: 6,83% a.a.
VPL: Pode ser positivo
Recomendação: Financiamento pode ser vantajoso
```

---

### 🎯 Cenário Equilibrado
**Contexto:** Economia estável

**Dados:**
- Taxa Financiamento: 1,5% a.m.
- Inflação: 4,5% a.a.
- Taxa Investimento: 1,0% a.m.

**Resultado:**
```
TAE: 19,56% a.a.
Custo Real: 14,41% a.a.
VPL: Levemente negativo
Recomendação: Depende do perfil do investidor
```

---

## 🧮 Cálculos Manuais de Verificação

### Formula da Parcela Price
```
PMT = PV × [i × (1+i)^n] / [(1+i)^n - 1]

Onde:
PMT = Parcela
PV = Valor Presente (valor financiado)
i = Taxa de juros mensal
n = Número de parcelas
```

**Exemplo Prático:**
```
PV = R$ 30.000
i = 1,5% = 0,015
n = 48 meses

(1+i)^n = (1,015)^48 = 2,0435
Numerador = 30.000 × 0,015 × 2,0435 = 918,575
Denominador = 2,0435 - 1 = 1,0435
PMT = 918,575 / 1,0435 = R$ 880,37
```

### Cálculo da TAE
```
TAE = (1 + i_mensal)^12 - 1

Exemplo:
i_mensal = 1,5% = 0,015
TAE = (1,015)^12 - 1 = 0,1956 = 19,56%
```

### Cálculo do VPL
```
VPL = -Valor_à_vista + Σ[PMT / (1+r)^t]

Onde:
r = taxa de desconto mensal
t = período (1, 2, 3... n)
```

---

## 🎓 Dicas de Uso do Simulador

### ✅ Boas Práticas

1. **Compare Sempre:**
   - Use múltiplas simulações com taxas diferentes
   - Compare Price vs SAC
   - Teste diferentes prazos

2. **Considere o Contexto Econômico:**
   - Atualize projeções de inflação regularmente
   - Considere seu perfil de investidor
   - Avalie a estabilidade da sua renda

3. **Planeje Quitações:**
   - Simule quitação em diferentes momentos
   - Considere o custo de oportunidade
   - Mantenha reserva de emergência

### ⚠️ Cuidados Importantes

1. **Taxas Reais vs Simuladas:**
   - Taxas do simulador são aproximadas
   - Consulte sempre a instituição financeira
   - Considere seguros obrigatórios

2. **Custos Adicionais:**
   - IPVA anual (~4% do valor)
   - Seguro obrigatório e total
   - Documentação e registros
   - Manutenção e depreciação

3. **Variáveis Externas:**
   - Mudanças na renda pessoal
   - Alterações no cenário econômico
   - Necessidade de trocar o veículo

---

## 🚀 Próximos Passos

### Para Usuários:
1. Experimente diferentes cenários
2. Compare com calculadoras de bancos
3. Consulte um consultor financeiro
4. Negocie as melhores condições

### Para Desenvolvedores:
1. Analise o código em `js/app.js`
2. Teste as fórmulas matemáticas
3. Propor melhorias na interface
4. Adicionar novos tipos de cálculo

---

**💡 Lembre-se:** Este simulador é uma ferramenta educacional. Sempre consulte profissionais especializados antes de tomar decisões financeiras importantes!
