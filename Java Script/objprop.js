
const person = {

    name: 'Usama',
    age: 18,
    gender: 'Male'



}
obj(person);
function obj(person) {

    for (let value in person)

        console.log(person[value]);




}