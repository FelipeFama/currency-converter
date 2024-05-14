export const showAlert = (err: any) => {
  const currenciesEl = document.querySelector(
    '[data-js="currencies-container"]'
  ) as HTMLElement;
  const div = document.createElement("div");
  const button = document.createElement("button");

  if (document.querySelector(".alert")) {
    return;
  }

  div.textContent = err.message;
  div.classList.add(
    "alert",
    "alert-warning",
    "alert-dismissible",
    "fade",
    "show"
  );
  div.setAttribute("role", "alert");
  button.classList.add("btn-close");
  button.setAttribute("type", "button");
  button.setAttribute("aria-label", "Close");

  button.addEventListener("click", () => div.remove());
  div.appendChild(button);
  currenciesEl.insertAdjacentElement("afterend", div);
};
