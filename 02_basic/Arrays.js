//Array

const array = [1,2,3,4,5,6,7]

const myArr = ["hi","hello"];
const myArr2 = new Array(1,2,3,4);

// console.log(array)
// console.log(myArr)
// console.log(myArr2)


//Array Methods


// myArr.push("yuvraj")
// myArr.push("singh")

// myArr.unshift(9); // to add in first
// myArr.shift();  // to remove the first element


// console.log(myArr.includes(6))
// console.log(myArr.indexOf("hi"))

// const newArr = myArr.join();
// console.log(newArr);
// console.log(typeof newArr)



/*********Slice splice   ***********/

console.log('A',array)

const my1 = array.slice(1,4)
console.log(my1)

console.log('B',array)

const my2 = array.splice(1,4);
console.log(my2)
console.log('C',array)
