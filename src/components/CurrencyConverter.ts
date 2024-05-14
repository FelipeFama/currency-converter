import { fetchExchangeRate } from "../services/api";

export class CurrencyConverter {
  private currencyOneEl: HTMLSelectElement;
  private currencyTwoEl: HTMLSelectElement;
  private convertedValueEl: HTMLElement;
  private valuePrecisonEl: HTMLElement;
  private timesCurrencyOneEl: HTMLInputElement;

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
    console.log(exchangeRate);
  }
}
