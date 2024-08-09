// console.log("Hello world!");
// console.log("I love typescript");
// console.log("Wel come to typescript world");
// ===== Variables ==========
// Variables is a containers for data 
// let myName:string="Tony stark";// String def
// let myAge:number=22;        // numric def
// console.log(myName);
// console.log(myAge);
// let name:string='Dilbar ali';
// let age:number=21;
// let isMarried:boolean=false;
// console.log(name +" " + age +" "+ isMarried );
// let name='shardha khappra';
// let age=20;
// let isMarried=true;
// let qulification='Softwear enginer';
// console.log(`My name is  ${name} i am ${age} years old i arrange marriage aman dattarwaal ${isMarried} and my qulification is ${qulification}` );
// ======== Data Types =========
// There are seven primative data types
// 1) String 2) Number 3) Boolean 4) Undefined 5) Null 6) BigInt 7) Symbol
// let name:string="Ali khan"; // String
// console.log(typeof name);
// let age=34;
// console.log(typeof age);  //  Number
// let isFollow=true;
// console.log(typeof isFollow); // Boolean
// let x;
// console.log(typeof x);  // Undefined
// let y=null;
// console.log(typeof y);  // Null
// let z=BigInt("123");  // BigInt
// console.log(z);
// let sayMy= Symbol("hello!");
// console.log(typeof sayMy);  // Symbol
// ==== Objects ====
// const Student={
//     fullName:"Dilbar ali",
//     age:20,
//     cgpa:7.5,
//     isPass:true
//};
//console.log(Student);
// 2nd Method use of objects
// console.log(Student.isPass);
// console.log(Student.cgpa);
// 3rd Methods use of an Objects
// console.log(Student["fullName"]);
// console.log(Student["cgpa"]);
// Student["age"]=Student["age"]+3;
// console.log(Student["age"]);
// Student["fullName"]="Ali khan"
// console.log(Student["fullName"]);
// ===== Practice Question 01 ======
// const product={
//     title:'Ball pen',
//     rating:4,
//     offer:5,
//     price:270,
//     isDeal:true
// };
// console.log(product);
// const product={
//     title:'Ball pen',
//     rating:4,
//     offer:5,
//     price:270,
//     isDeal:true
// };
// console.log(product.price);
// product["isDeal"]=false
// console.log(product["isDeal"]);
// ===== Practice Question 02 =====
const profile = {
    username: "Shardhakhapra",
    isFollow: true,
    followers: "598k",
    following: 145,
};
console.log(profile);
profile["following"] = profile["following"] + 12;
console.log(profile["following"]);
export {};
