// global scope can access in block scope but block scope cannot access in global scope
// var c = 40  // global scope
// if(true){ // scope
// let a = 10
// const b = 20
// var c = 30
// }
// console.log(a);// it gives undefined as a present in block scope
// console.log(b); // same
// console.log(c); // but it print the c value which is wrong



// function one(){
//     const username = "yuvraj"
//     function two(){
//         const website = "leetcode"
//         console.log(username);
//     }
//     // console.log(website)
//     two()
// }
// one()  