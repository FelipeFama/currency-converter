import { showAlert } from "../components/showAlert";
import { ErrorType, ExchangeRate } from "../types";

const apiKey = import.meta.env.VITE_CURRENCY_KEY;

const getUrl = (currency: string): string =>
  `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currency}`;

const getErrorMessage = (errorType: ErrorType) =>
  ({
    "unsupported-code": "The currency does not exist in our database.",
    "malformed-request":
      "Your request endpoint must follow the following structure: https://v6.exchangerate-api.com/v6/YOUR-API-KEY/latest/USD",
    "invalid-key": "Your API key is not valid.",
    "inactive-account": "Your email address has not been confirmed.",
    "quota-reached":
      "Your current account has reached the request limit allowed on your current plan.",
  }[errorType] || "Unable to obtain information");

export const fetchExchangeRate = async (
  currency: string
): Promise<ExchangeRate | null> => {
  try {
    const response = await fetch(getUrl(currency));
    if (!response.ok) {
      throw new Error(
        "Your connection has failed. Unable to obtain information."
      );
    }
    const exchangeRateData = await response.json();

    if (exchangeRateData.result === "error") {
      const errorMessage = getErrorMessage(exchangeRateData["error-type"]);
      throw new Error(errorMessage);
    }
    return exchangeRateData as ExchangeRate;
  } catch (err) {
    console.log(err)
    showAlert(err);
    return null;
  }
};
