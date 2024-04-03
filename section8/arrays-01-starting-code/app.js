const prices = [10.0, 5.93, 3.25, 6.99];
const tax = 0.19;
const taxAdjustedPrices = [];

// for (const price of prices) {
//   taxAdjustedPrices.push(price * (1 + tax));
// }

prices.forEach((price, idx, prices) => {
  const priceObj = {
    index: idx,
    taxAdjPrice: price * (1 + tax),
  };
  taxAdjustedPrices.push(priceObj);
});

console.log(taxAdjustedPrices);
