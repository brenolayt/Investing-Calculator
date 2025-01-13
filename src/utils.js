export const InputNames = [
    "INITIAL INVESTMENT",
    "ANNUAL INVESTMENT",
    "EXPECTED RETURN",
    "DURATION"
];

export const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });