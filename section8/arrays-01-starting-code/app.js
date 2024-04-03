const prices = [10.0, 5.93, 3.25, 6.99];
const tax = 0.19;
const taxAdjustedPrices = prices.map((price, idx, prices) => {
  const priceObj = {
    index: idx,
    taxAdjPrice: price * (1 + tax),
  };
  return priceObj;
});

console.log(taxAdjustedPrices);
