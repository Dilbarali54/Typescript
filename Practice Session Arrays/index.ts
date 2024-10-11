// =========== ARRAYS Non Primative data types ================

import { log } from "console";

// let myFruit:string[]=["Apple" , "banana" , "Grapes"];
// let myNumber:number[]=[100 , 300, 400];
// let myStudents:string[]=["Ali", "Qamar", "Minhal","haloo"]

// //  iterators string   /  array 
// let myInformation=myStudents[3];
// console.log(myInformation);

// let arryLenght= myStudents.length;
// console.log(arryLenght);

// let Startarry:string[]=[];
//  Startarry[0]="libn"
//  Startarry[1]="gho"
//  Startarry[2]="klmn"

//  console.log(Startarry);

// ====== Push() ==========
// let myFruit:string[]=["orange", "Apple" , "Mango" , "Watermelon"];
// myFruit.push('banana', 'strawberrry')
// console.log(myFruit);

 // myFruit.pop()
//  let myFruit:string[]=["orange", "Apple" , "Mango" , "Watermelon"];
// console.log(myFruit);

// ========= Concatation Array ==========
// let Arry1:string[]=['one','Two', 'Three'];
// let Arry2:string[]=["four", "five"];
// let Final_aray= Arry1.concat(Arry2);
// console.log(Final_aray);

// let myFruit:string[]=["apple" , "banana" , "orange"];
// let otherFruits:string[]=["watermelon" , "tarbooz"];

// let concatArry = myFruit.concat(otherFruits);
// console.log(concatArry);

// ====== Unshift means add in start point in value  =========
// let vegetables:string[]=["ladyfinger" , "brinjaal" , "cocumber" , "mirch"]

// vegetables.unshift('dahinyaa')
// console.log(vegetables);

// let summerVaction:string[]=['winter' , 'summer' , 'autumn'];

// summerVaction.unshift('Bahar')
// console.log(summerVaction);

// ====== Shift =============
// let myFruit:string[]=["apple", 'banan', "waatermelon", "tarbooz"];

// myFruit.shift()
// console.log(myFruit);

// ======= Slice =================
// let myStudents:string[]=["jamshed", "sakib" , "waqqr", "amjid", "ali"];

// let myInformation = myStudents.slice(0,3);
// console.log(myInformation);

// let myTeam:string[]=['ali' , 'baba' , 'srk' , 'hafeez' , 'amir' , 'junid'];

// let myPesonal = myTeam.slice(1,4);
// console.log(myPesonal);

// let footBall:string[]=["ronaldo" , 'messi' , 'salha' , 'dilbar' , 'fakahar' , 'jakaooo'];

// let teamSay = footBall.slice(3,5);
// console.log(teamSay);

// ======== Splic =============
// let myFruit:string[]=['java' , 'html' , 'type' , 'bootsrap' , 'c++' , 'python'];

// let removeElements = myFruit.splice(2,1);
// console.log(removeElements);
// console.log(myFruit);

// let myInformation:string[]=['jaddha', 'dubia', 'pak' , 'ind'];

//  remove type - 1 iss main app jitne index remove kr sakte hai apne marzi se 

// let removeElements = myInformation.splice(2,2);
// console.log(removeElements);

// let myStudents:string[]=['jms' , 'klm' , 'abc' , 'hjk', 'qwe', 'iop'];

// let removeElements = myStudents.splice(0,4);
// console.log(removeElements);

// addelment means ke add krna ya replace krna 

let myFruit:string[]=["banan" , "mangoo" , "apple" , "lochii"];

let addelment = myFruit.splice(0,0)
console.log((addelment));
