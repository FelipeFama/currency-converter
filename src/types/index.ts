export interface ExchangeRate {
  conversion_rates: {
    [currency: string]: number;
  };
}

export interface ErrorResponse {
  message: string;
}
