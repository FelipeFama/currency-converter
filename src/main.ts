import "./styles/style.css";
import logo from "../public/icons/logo.svg";
import { CurrencyConverter } from "./components/CurrencyConverter";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<figure class="row justify-content-center">
  <img class=" image-content col-sm-6 col-md-5 col-lg-4 col-lg-3 col-xl-3 col-xxl-3" src=${logo}
    alt="Logo" />
  <h1 class="conversion-precision text-center m-3 fs-3">currency converter</h1>
</figure>
<article data-js="currencies-container" class="row justify-content-center mb-4 mt-4">
  <aside class="col-sm-3 col-lg-2">
    <select data-js="currency-one" class="form-select" aria-label="select"></select>
  </aside>
  <aside class="col-sm-3 col-lg-2">
    <select data-js="currency-two" class="form-select" aria-label="select"></select>
  </aside>
</article>
<article class="row justify-content-center align-items-center mb-4 mt-4">
  <aside class="col-sm-3 col-md-2">
    <input data-js="currency-one-times" type="number" min="1" class="form-control form-control-lg" value="1" aria-label="value">
  </aside>
  <aside class="col-sm-3 col-md-2">
    <p data-js="converted-value" class="converted-value fs-1 text-center mb-0"></p>
  </aside>
  <p data-js="conversion-precision" class="conversion-precision text-center m-4"></p>
</article>
`;

new CurrencyConverter();
