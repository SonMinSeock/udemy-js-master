const testResults = [1, 3.4, 3, 5.2, 32.1, 3, 5.2, -10];
const storedResults = testResults.concat([12, -3, 14, 23])

console.log(testResults.includes(3.4), testResults.includes(0.3));
console.log(testResults.indexOf(5.2));
console.log(testResults.lastIndexOf(3));

const personData = [{name: "Son MinSeock"}, {name: "Lane"}];
const person = personData.find((person, idx, persons) => {
    return person.name === "Lane";
})

console.log(personData.includes({ name: "Son MinSeock" }))

person.name = "Lane!!!";
console.log(person, personData);

const findPersonIndex = personData.findIndex((person, idx, persons) => {
    return person.name === "Lane!!!" 
});

console.log(findPersonIndex)