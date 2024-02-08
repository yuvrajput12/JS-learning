// console.log('Y')
// console.log('u')
// console.log('v')
// console.log('r')
// console.log('a')
// console.log('j')

// function myName(){
// console.log('Y')
// console.log('u')
// console.log('v')
// console.log('r')
// console.log('a')
// console.log('j')
// }

// myName();

// function addnumber(number1,number2){
//     console.log(number1 + number2);
// }
// addnumber(3,4)
// addnumber(3,"4")
// addnumber(3,"a")
// addnumber(3,null)

// const addNumber = (number1,number2) => {
//     // let result = number1 + number2;
//     // return result;

//     return number1 + number2
// }
// const result = addNumber(3,3)
// console.log("result :" , result)

// rest operator => ...
// function calculate(...num1){
//    return num1
// }

// console.log(calculate(200,3,100,4,4,4,))


const user={
    username:"yuvraj",
    id : 3
}

function handleobject(anyobject){
    console.log(`Name is ${anyobject.username} and id is ${anyobject.id}`)
}
handleobject(user)