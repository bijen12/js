//primitive
//7 types:String,Numbers, Boolean, Null,BigInt,Symbol
//Reference(Non primitive)
//Array,objects,functions
const id =Symbol('123')
const anotherid=Symbol('123')
console.log(id==anotherid)
const bigNumber=34354578618739879n
const heroes=[1,2,3,4];
let obj={
    name:"bijen",
    age:22,
}
const myfunction=function()
{
console.log("hello world");
}
console.log(typeof heroes);
//stack(primitive)-copy ,Heap(Non-primitive)
let youtube="hello world"
let another=youtube
console.log(another);

let userOne={
    email="user1@google.com",
    upi:"user@ybl"
}
let user2=user1
user2two.email="helloworld@google.com"