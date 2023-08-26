// const products = {
//     count : 5000,
//     data : [
//         {id : 1 , name : 'afsda' , price: 200},
//         {id : 1 , name : 'afsda' , price: 200}
//     ]
// }
// console.log(products)

// map ==> loops through each element of the array and do the operation that you passd in the call back function and hold the result from each operation in the array and finally return you the array 

// const numbers = [1,2,3,4,6];

// function double (num){
//     // console.log(num)
//     return num * 2
// }

// const double2 = n => n*2;


// const result = numbers.map(double);
// const output = numbers.map(double2);
// console.log(output)

// for(const num of numbers){
//     const double = num * 2;
//     doubled.push(double);
// }
// console.log(doubled)

// const number = [121,34,5,6,67,];
// const double = number.map(num => num *2 );

// const fiveBonus = number.map(num => num + 5);
// console.log(fiveBonus)

// const friends = ['tom','Jery','oliver'];
// const length = friends.map(frnd => frnd[0]);
// console.log(length)

// foreach

// const numbers = [1, 3, 5, 6, 7];
// const result = numbers.forEach(n=> console.log(n));
// const result = numbers.forEach(n => {});
// console.log(result)

// filter selects elements based on a condition and returns an array with the same elements that fulfiled the condition

// const numbers = [1, 3, 5, 6, 7];
// const players = [76,34,67,87,55];
// const selected = players.filter( p => p > 50);
// // const selected = players.filter( p => p > 100);
// console.log(selected)

// find method 

// const players = [76,34,67,87,55];
// const selected = players.find(player => player > 50);
// console.log(selected)

// reduce

// const numbers = [2,3,45,6,7];
// const total = numbers.reduce( (previous,current) => previous + current, 0);
// console.log(total)

// const sum = numbers.reduce( (p,c) => p + c , 0);
// console.log(sum)

// array of object

// const products = [
//     { id: 1, name : "lenevo" ,price: 20000},
//     { id: 2, name : 'dell' ,price: 21000},
//     { id: 3, name : "ovo" ,price: 22000}
// ]
// const names = products.map(products => products.name);
// // console.log(names)
// const expensive = products.filter( p => p.price > 20000);
// // console.log(expensive)
// const affordable = products.find( p => p.price <21000);
// // console.log(affordable)
// const total  = products.reduce( (a,b) => a+b.price, 0);
// console.log(total)

// similar  

// class Product {
//     country = 'Bangladesh';
//     constructor(name){
//         this.name = name;
//     }
//     speak (talk){
//         console.log(`talking about ${talk}`)
//     }
// }

// const lenevo =  new Product('le le');
// // console.log(lenevo)

// class Teacher {
//     constructor(name,sub){
//         this.name = name;
//         this.sub = sub;
//     }
//     lecture(){
//         console.log('Teaching is a noble profession')
//     }
// }
// const a = new Teacher('sir','acc');
// // console.log(a)

// const rashid = new Teacher('Rashid','Accounting');
// console.log(rashid)

// class Vehicle{
//     constructor(name,price){
//         this.name = name;
//         this.price = price;
//     }
//     move(){
//         console.log('this is a veru beautiful flower')
//     }
// }

// class Bus extends Vehicle{
//     constructor (name,price,seat,ticket){
//         super(name,price);
//         this.seat = seat;
//         this.ticket = ticket;
//     }

// }

// class Track extends Vehicle {
//     constructor(name,price,load){
//         super(name,price);
//         this.load = load;
//     }

// }

// class Person {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     sleep(){
//         console.log(`sleeping now ${this.name}`)
//     }
// }
// const x = new Person('Mr. x' , 21);
// console.log(x)
// x.sleep()

// function min(nums) { return Math.min(nums) }
// console.log(min([1, 3, 2]));

// const cube = x => x * x * x;
// console.log(cube(2))

// const [a, b] = [1,2,3,4,45,5]; 
// console.log(a+b);

// const nums = [1, 2, 3, 4, 5];
// let output = nums.filter(n => n % 2);
// console.log(output);

// const friends = ["Moushumi", "Misha", "Manna", "mimi" , "mahiya"];
// console.log(friends.filter(friend => friend.length ==5))

// const product = {name: 'Laptop', model:'Yoga 3', price:49000, dusk: '512SSD'}
// console.log({price} = product.price)