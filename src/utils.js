export const InputNames = [
    "INITIAL INVESTMENT",
    "ANNUAL INVESTMENT",
    "EXPECTED RETURN",
    "DURATION"
];

export const m = {};

m["INITIAL INVESTMENT"] = 0;
m["ANNUAL INVESTMENT"] = 0;
m["EXPECTED RETURN"] = 0;
m["DURATION"] = 0;

export const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });