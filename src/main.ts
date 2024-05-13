import "./styles/style.css";
import logo from "../public/icon/logo.svg";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `

<div class="row justify-content-center">
  <img class=" image-content col-sm-6 col-md-5 col-lg-4 col-lg-3 col-xl-3 col-xxl-3" src=${logo}
    alt="Logo ">
  <h1 class="conversion-precision text-center m-3 fs-3">currency converter</h1>
</div>

<div data-js="currencies-container" class="row justify-content-center mb-4 mt-4">
  <div class="col-sm-3 col-lg-2">
    <select data-js="currency-one" class="form-select"></select>
  </div>

  <div class="col-sm-3 col-lg-2">
    <select data-js="currency-two" class="form-select"></select>
  </div>
</div>I

<div class="row justify-content-center align-items-center mb-4 mt-4">
  <div class="col-sm-3 col-md-2">
    <input data-js="currency-one-times" type="number" min="1" class="form-control form-control-lg" value="1">
  </div>

  <div class="col-sm-3 col-md-2">
    <p data-js="converted-value" class="converted-value fs-1 text-center mb-0"></p>
  </div>

  <p data-js="conversion-precision" class="conversion-precision text-center m-4"></p>
</div>

`;
