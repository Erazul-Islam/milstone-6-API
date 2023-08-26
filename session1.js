// // Normal function
// function add(x,y){
//     const result = x + y;
//     return result;
// }
// const a = add(3,5);
// console.log(a)

// arrow function

// const add = (x,y) => {
//     const result = x + y;
//     return result;
// }
// const a = add(3,5);
// console.log(a)

// const add = (x,y) => x + y;
// console.log(add(3,4))

// const show = () => {
//     console.log('hello world')
// }
// show()

// if a function has one parameter than we can skip ()

// const showNumber  = x => console.log(x)
// showNumber(89)

// const add = (a,b) => a+b;
// console.log(add(4))

// default parameter value 

// const add = (a = 0,b = 0) => a+b;
// console.log(add())

// arrayMethod 
// forEach , Map, Find, filter , reduce

// const arr = [1,2,3,5];
// for (let item of arr){
//     console.log(item)
// }

// forEach method normal forEach

// const arr = [1,2,3,5];
// const a = (x) => console.log(x)
// arr.forEach(a)

// arr.forEach((x) => console.log(x) )

// const fruits = ['mango','jam','banana'];
// fruits.forEach( item => {
//     console.log(item)
// })

// for add all arrays element 

// const arr = [1,2,3];
// let sum = 0;
// arr.forEach(item => {
//     sum+= item
// })
// console.log(sum)

// for each defines item index and main array

// const x = ['abc','bcd','cdf'];
// x.forEach((item,index,arr) => console.log(item,index,arr))


// map 

// const arr = [1,2,3];
// arr.map((item) => console.log(item))

// forEach function doesnot return anything but map returns an array

// find method normal 

// const arr = [1,2,3];
// const find = (arr) => {
//     for(let item of arr){
//         if(item === 1){
//             return item
//         }
//     }
// }
// const x = find(arr);
// console.log(x)

// const  y = arr.find((item) => item === 1);
// console.log(y)

// filter mathod normal

// const arr = [1,2,3,45,6,76,434,4,34];
// const filter = arr => {
//     const result = [];
//     for (let item of arr){
//         if (item % 2 === 0){
//             result.push(item)
//         }
//     }
//     return result;
// }
// const x = filter(arr);
// console.log(x)

// // Es6 or advanced method

// const y = arr.filter((item) => item%2 ===0);
// console.log(y)

// reduce method 

// const array = [1,2,3,4,5];
// const sum = array.reduce((previous,current) => previous + current, 0);
// console.log(sum)

// const multiply = array.reduce((p,c) => p*c,1);
// console.log(multiply)

// const initial = 50;
// const sum = array.reduce((previous,current) => previous + current, 50);
// console.log(sum)

// template string {  `  `  }

// const name = 'dipu no 1';
// const age = 20;
// const address = 'Dhaka';
// const relationship = 'unmarried';
// const sub = ['acc','math','bangla']

// const sentence = `My name is ${name}. 
// My age is ${age}. I live in ${address}. 
// My relationship status is ${relationship}. 
// My favourite sub is${sub.map((sub)=>sub).join(" ")}.`;
// console.log(sentence)

// ternary operatior in js normal method

// const x = 3;

// if(x > 5){
//     console.log('x is greater than 5')
// }else{
//     console.log('x is less than 5')
// }

// this is a normal ternary operator in javaScript

// x > 5 ? console.log('x is greater than 5') : console.log('x is less than 5')

// array spreading in javaScript
// this is a problem

// const arr = [3,4,5,7];
// const arr2 = arr;
// arr2.push(10)
// console.log(arr)

//     its solution is 

// const arr = [3,4,5,7];
// const arr2 = [...arr];
// arr2.push(10)
// console.log(arr)

// array destructuring in javaScript 

// const arr = [2,3,45,6,6];
// const [a,b] = arr;
// console.log(a,b)

// const arr = [2,3,45,6,6];
// const [a,b,...rest] = arr;
// console.log(a,b,rest)

// spreading of object

// const Person = {
//     name : 'erazul',
//     age : 20
// }

// const Person2 = {...Person};
// Person2.address = 'Dhaka';
// console.log(Person)
// console.log(Person2)

// destructuring of an object

// const Person = {
//     name: 'erazul',
//     age: 20,
//     address : 'Dhaka'
// }

// const {age,...rest} = Person;
// console.log(rest)

// object access    dot notation and bracket notation

// const Person = {
//     name: 'erazul',
//     age: 20,
//     address: 'Dhaka'
// }
// // console.log(Person.address)  this is callec dot notation

// console.log(Person['age'])
// const propertyName = 'age';
// console.log(Person[propertyName]) this is called bracket notation

// const complexObject = {
//     id: 1,
//     name : 'complex obj',
//     info : {
//         description : 'This is a complex object',
//         author : {
//             firstName : 'John',
//             lastName : 'Doe',
//         }
//     },
//     data : {
//         values : [10,20,30],
//         settings : {
//             isEnabled : true,
//             maxItems : 5
//         }
//     }
// }

// access name , description , lastname , last element of values, max items

// console.log('name: ', complexObject.name)
// console.log('description: ', complexObject.info.description)
// console.log('description: ', complexObject.info.author.lastName)
// console.log('description: ', complexObject.data.values[2])
// console.log('description: ', complexObject.data.settings.maxItems)

// optional chainning

// console.log(complexObject.address?.phone)

// scope in javScript

