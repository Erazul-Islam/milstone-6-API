/*
8 ways to get undefined
1. variable that is not initialized will give undefined
2. function with no return 
3. parameter that is not passed will be undefined 
4. if return has nothing on the right side will return undefined
5. property that doesnot exists on an object will give you undefined
6. accessing array elements outside of the range
7. deleting an element inside an array 
8. set a value directly to undefined
*/
// function sum (a,b,c){
//     console.log(arguments);
//     const result = a+b+c;
//     return result;
// }
// const total = sum (1,2,35,67);
// console.log(total)

// let p='Javascript'; 
// let q=p; 
// p='React'; 
// console.log(q);

// const isTrue=true;
// console.log(!isTrue ? "hello" : "world")

// const sum = (p, q) => {
//     p + q;
// }
// const result = sum(2, 3);
// console.log(result);

// if ("2" === 2) {
//     console.log("Inside if");
// } else {
//     console.log("Inside else");
// }

// function work(x, y = 4) {
//     return x + y;
//    }
//    console.log(work(32);