let person = { name: "Son MinSeock" };
const persons = new WeakSet();

persons.add(person);

//person = null;

const personData = new WeakMap();
personData.set(person, "Extra info!");

person = null;

console.log(personData);
