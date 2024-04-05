const ids = new Set([1, 2, 3]);

for (const value of ids.values()) {
  console.log(value);
}

ids.delete(2);
console.log(ids);

if (ids.has(4)) {
  ids.delete(4);
}

const person1 = { name: "Son" };
const person2 = { name: "Jane" };

const personData = new Map([[person1, [{ date: "Yesterday", price: 10 }]]]);
console.log(personData.get(person1));

personData.set(person2, [{ date: "Today", price: 15 }]);
console.log(personData);
console.log(personData.get(person2));

for (const [key, value] of personData.entries()) {
  console.log(key, value);
}

for (const key of personData.keys()) {
  console.log(key);
}

for (const value of personData.values()) {
  console.log(value);
}

console.log(personData.size);
