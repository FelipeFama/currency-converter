import { fetchExchangeRate } from "../services/api";
import { ExchangeRate } from "../types";

export class CurrencyConverter {
  private currencyOneEl: HTMLSelectElement;
  private currencyTwoEl: HTMLSelectElement;
  private convertedValueEl: HTMLElement;
  private valuePrecisonEl: HTMLElement;
  private timesCurrencyOneEl: HTMLInputElement;

  private exchangeRate: ExchangeRate | null = null;

  constructor() {
    this.currencyOneEl = document.querySelector(
      '[data-js="currency-one"]'
    ) as HTMLSelectElement;
    this.currencyTwoEl = document.querySelector(
      '[data-js="currency-two"]'
    ) as HTMLSelectElement;
    this.convertedValueEl = document.querySelector(
      '[data-js="converted-value"]'
    ) as HTMLElement;
    this.valuePrecisonEl = document.querySelector(
      '[data-js="conversion-precision"]'
    ) as HTMLElement;
    this.timesCurrencyOneEl = document.querySelector(
      '[data-js="currency-one-times"]'
    ) as HTMLInputElement;
    this.init();
  }

  private async init() {
    const exchangeRate = await fetchExchangeRate("USD");
    if (exchangeRate) {
      this.exchangeRate = exchangeRate;
      this.showInitialInfo();
      this.addEventListeners();
    }
  }

  private addEventListeners() {
    this.timesCurrencyOneEl.addEventListener(
      "input",
      this.updateConvertedValue.bind(this)
    );
    this.currencyTwoEl.addEventListener(
      "input",
      this.updateConvertedValue.bind(this)
    );
    this.currencyOneEl.addEventListener(
      "input",
      this.handleCurrencyOneChange.bind(this)
    );
  }

  private getOptions(
    selectedCurrency: string,
    conversion_rates: { [key: string]: number }
  ): string {
    return Object.keys(conversion_rates)
      .map(
        (currency) =>
          `<option value="${currency}" ${
            currency === selectedCurrency ? "selected" : ""
          }>${currency}</option>`
      )
      .join("");
  }

  private updateConvertedValue() {
    if (this.exchangeRate) {
      const conversion_rates = this.exchangeRate.conversion_rates;
      const currencyTwoRate = conversion_rates[this.currencyTwoEl.value];
      this.convertedValueEl.textContent = (
        this.timesCurrencyOneEl.valueAsNumber * currencyTwoRate
      ).toFixed(2);
      this.valuePrecisonEl.textContent = `1 ${this.currencyOneEl.value} = ${currencyTwoRate} ${this.currencyTwoEl.value}`;
    }
  }

  private async handleCurrencyOneChange() {
    const exchangeRate = await fetchExchangeRate(this.currencyOneEl.value);
    if (exchangeRate) {
      this.exchangeRate = exchangeRate;
      this.updateConvertedValue();
    }
  }

  private showInitialInfo() {
    if (this.exchangeRate) {
      const conversion_rates = this.exchangeRate.conversion_rates;
      this.currencyOneEl.innerHTML = this.getOptions("USD", conversion_rates);
      this.currencyTwoEl.innerHTML = this.getOptions("BRL", conversion_rates);
      this.updateConvertedValue();
    }
  }
}
