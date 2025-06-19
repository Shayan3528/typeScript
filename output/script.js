"use strict";
// normal variable
// let b: string | number;
/// array
// let arr: (string | number)[] = [];
// arr.push("bd");
// arr.push(23);
// arr.push(true);
// console.log(arr);
/// object
// let c:{name:string};
// c = {name:"bd"};
// c.name = "bd";
// console.log(c);
// let d :object;
// d = [1,2,34];
/// dynamin type or any type
// let a:any[] = [];
/// function
// const  myFunc =(a:string,b:string,c:string='true'): string=>{
//     return a+b;
// }
// myFunc('A','B','False');
// type aliases
// type stringOrNum = string | number;
// type userType = {
//   name: string;
//   age: number;
// };
// const userDetails = (id: stringOrNum, user:userType) => {
//   console.log(`User id is ${id} , name is ${user.name} and age is ${user.age}`);
// };
// const sayHello = (user:userType) => {
//   console.log(`Hello ${user.age > 50 ? "Sir" : "Mr."}  ${user.name} `);
// };
/// function Signatures
// let calculation:(x:number,y:number,z:string)=>number;
// calculation = (a:number,b:number,z:string)=>{
//   if(z === "add"){
//     return a+b;
//   }else{
//     return a-b;
//   }
// }
// console.log(calculation(5,6,'minus'));
// let userDetails :(id:number|string,userInfo:{
//     name:string,
//     age:number,
// })=>void;
// ;
// userDetails = (id:number|string,user:{
//     name:string,
//     age:number,
// })=>{
//  console.log(`hi ${user.name} & your age is ${user.age}`);
// }
// userDetails(4,{name:"babu",age:31});
/// classes
// class Player {
//   private name: string;
//   private age: number;
//   readonly country: string;
//   constructor(n: string, a: number, c: string) {
//     this.name = n;
//     this.age = a;
//     this.country = c;
//   }
//   play() {
//     console.log(`${this.name} from ${this.country} is payling`);
//   }
// }
/// class duita ekoi kaj korbe .. 
/// access modifier explicitly bola thakle shortcut vabe lekha  jai nicher moto kore 
// class Player {
//   constructor(
//     public name: string,
//     private age: number,
//     readonly country: string
//   ) {}
//   play() {
//     console.log(`${this.name} from ${this.country} is payling`);
//   }
// }
// const Mashrafi = new Player("Mashrafi", 40, "BD");
// const Shakib = new Player("shakib", 35, "BD");
// // Mashrafi.play();
// // Shakib.play();
// Shakib.country = "France ";
// const players: Player[] = [];
// players.push(Mashrafi);
// console.log(players);
/// Access modifiers
