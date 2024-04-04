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

// prices.forEach((price) => (sum += price));
// console.log("Prices 총합 : ", sum);

const sum = prices.reduce((prevValue, curValue, curIdx, prices) => {
  return prevValue + curValue;
}, 0);

console.log("Prices 총합 : ", sum);

const data = "new york;10.99;20.3";
const transformedData = data.split(";");
console.log(transformedData);

const nameFragments = ["Son", "MinSeock"];
const name = nameFragments.join(" ");
console.log(name);
