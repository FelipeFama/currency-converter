export interface ExchangeRate {
  conversion_rates: {
    [currency: string]: number;
  };
}

export type ErrorType =
  | "unsupported-code"
  | "malformed-request"
  | "invalid-key"
  | "inactive-account"
  | "quota-reached";