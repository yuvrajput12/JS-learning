//singleton
// object literals
const mySymbol = Symbol("key")   // initialize symbol
const user = {
    name:"yuvraj",
    [mySymbol] :"hello",
    age:19,
    location:"Mysore",
    email:"abc@gmail.com"
}


// console.log(user.name)
// console.log(user["name"])
// console.log(user.age)
// console.log(user["age"])
// console.log(user.email)
// console.log(user["email"])
// console.log(user.location)
// console.log(user["location"])
// console.log( typeof user[mySymbol])
// console.log(user)


user.func1 = function(params) {
    console.log("hello")
}
user.func2 = function(params) {
    console.log(`hello  ${this.name}`)
}
console.log(user.func2())