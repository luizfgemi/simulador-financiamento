# Simulador de Financiamento de Veículos

Este projeto é um simulador de financiamento de veículos totalmente client-side, desenvolvido em HTML, CSS e JavaScript. Ele utiliza **Decimal.js** para cálculos de alta precisão e **Chart.js** para renderizar gráficos de amortização e evolução do saldo devedor.

## Funcionalidades

* **Cálculo Price**: cálculo da parcela mensal com base na taxa de juros e prazo.
* **Taxa Anual Equivalente (TAE)**: converte a taxa mensal em taxa efetiva anual.
* **Sistema SAC**: cálculo comparativo de amortização constante.
* **Gráficos interativos**: composição das parcelas e evolução do saldo.
* **Tabelas detalhadas**: evolução completa e comparativo SAC.
* **Exportação CSV**: baixar tabela de evolução.
* **Custo Real do Financiamento**: considera a inflação estimada.
* **Valor Presente Líquido (VPL)**: aplica uma taxa de desconto mensal.
  Compara o valor do veículo à vista com todas as parcelas descontadas pela taxa
  informada. Se o resultado for negativo, indica que financiar é mais caro do
  que pagar à vista considerando esse rendimento.

## Licença

Este projeto está sob a **Licença MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

*Desenvolvido por Luiz Fernando Reina Gemi — 2025*
