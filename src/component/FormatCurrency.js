const CURRNCY_FORMAT = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});
const FromatCurrency = (number) => {
  return CURRNCY_FORMAT.format(number);
};

export default FromatCurrency;
