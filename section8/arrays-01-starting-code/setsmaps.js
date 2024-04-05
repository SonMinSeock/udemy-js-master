const ids = new Set([1, 2, 3]);

for (const value of ids.values()) {
  console.log(value);
}

ids.delete(2);
console.log(ids);

if (ids.has(4)) {
  ids.delete(4);
}
