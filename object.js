//primitive
// Basics
// const age = 21;
// const school = 'gouripur';
// const isPassed = true;
// let isDeveloper;
// console.log(isDeveloper);
// const subjects = ['bangla', 'English' , 'Physics', 'Math'];

// objects  variable
//Non-primitive
// const bottle = {
//     brand: 'apple',
//     price: 45,
//     color : 'white',
//     isClean : false
// }

// const subject ={
//     name : 'biology',
//     teacher : 'mukter',
//     examDate:'30 Feb',
//     chapters: [ 'first' , 'second','third'],
//     exams :{
// marks: 100;
// time: 180 ;
//     }
// }

// Multiple Ways To Get _ Set Object Properties

// const person = {
//     name: 'imran',
//     age: 38,
//     profession: 'developer',
//     salary:25000,
//     married:true,
//     'fav places': ['bandarban', 'saintmartin']
// }
// console.log(person);
// Dot notation
// console.log(person.profession);
// const income = person.salary
// console.log(income);


// bracket Notation === >>>>>>>>> to find the value of 
// console.log(person['age']);
// const old = person['age'];
// console.log(old);

// to change string property value
// person.salary=30000;
// person['age'] = 40;
// person['fav places'] = ['malyasia'];
// console.log(person);

// to find the string property value
// const keyName = 'profession';
// console.log(person[keyName]);
// to change string property value
// const propName = 'profession';
// person[propName] = 'banker';
// console.log(person);


//*********************************************************************** */

//Keys, Values, Nested Objects And Delete
// to find the keys in a string
const computer ={
brand: 'dell',
price:60000,
processor: 'corei',
hdd: '512gb',
monitor: 'hp'
}

// const keys = Object.keys(computer);
// console.log(keys);

// to find the values in a string
const values = Object.values(computer);
console.log(values);