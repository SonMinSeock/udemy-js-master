const prices = [10.0, 5.93, 3.25, 6.99];
prices.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else if (a < b) {
    return -1;
  }
});
console.log("Sorting : ", prices);

prices.sort((a, b) => {
  if (a > b) {
    return -1;
  } else if (a === b) {
    return 0;
  } else if (a < b) {
    return 1;
  }
});

console.log("Reserving : ", prices);

const filteredPrices = prices.filter((price, idx, prices) => {
  return price === 10.0 || price === 3.25;
});

console.log("Filtering : ", filteredPrices);

const tax = 0.19;
const taxAdjustedPrices = prices.map((price, idx, prices) => {
  const priceObj = {
    index: idx,
    taxAdjPrice: price * (1 + tax),
  };
  return priceObj;
});

console.log(taxAdjustedPrices);
