// javaScript  object notation

// const user = {
//     id: 1,
//     name : 'Avd',
//     job : 'developer'
// }
// const stringified = JSON.stringify(user);
// console.log(user)
// console.log(stringified)

const user = {
    id: 1,
    name : 'Avd',
    job : 'developer',
    address : {
        street : 'Dairy gate',
        city : 'Dhaka',
        country : "bd"
    },
    products : ['laptop','mic'],
    revenue : 23000,
    isOpen : true,
    isNew : false,
}
console.log(user);
const userJson = JSON.stringify(user);
console.log(userJson);
const shopObj = JSON.parse(userJson);
console.log( typeof userJson)