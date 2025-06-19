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

// import { Player } from "./classes/Player.js";

// const Mashrafi = new Player("Mashrafi", 40, "BD");
// const Shakib = new Player("shakib", 35, "BD");

// Mashrafi.play();
// Shakib.play();

// const players: Player[] = [];

// players.push(Mashrafi);
// console.log(players);

//Access modifiers

///  Working with Interfaces
/// interface for object
// interface RectangleOptions{
//     width:number;
//     length:number;

// }

// function drawRectangle(options:RectangleOptions) {
//   let width = options.width;
//   let length = options.length;
// }

// let threeDoptions={
//     width:30,
//     length:20,
//     height:10,
// }

// drawRectangle(threeDoptions);

/// interface for classes

/// interface
// import { Player } from "./classes/Player.js";
// import { isPlayer } from "./interfaces/isPlayer.js";

// const Mashrafi = new Player("Mashrafi", 40, "bangladesh");
// let sakib: isPlayer;
// sakib = new Player("Shakib", 40, "Bangladesh");

// const players: isPlayer[] = [];
// players.push(sakib);
// console.log(players);


/// Generics (reusable block of code)

// const addId = 
// <T extends {
//     name:string,
//     age:number
// }>(obj:T)=>{
//     let id = Math.floor(Math.random()*100);
//     return { ...obj,id};
// };

// let user = addId({
//     name:"Mashrafi",
//     age:40,
//     country:"BD",
// });


// addId(user);


/// generic with interface 

// interface APIResponse <T>{
//     status:number;
//     type:string;
//     data:T;
// }

// const response1:APIResponse <object> = {
//     status:200,
//     type:"good",
//     data:{
//         name:"text",
//         something:300,
//     }
// }



/// enum Types
 
// enum Rtype {SUCCESS,FAILURE,UNAUTHENTICATED,FORBIDDEN};

// interface APIResponse<T>{
//     status:number;
//     type:Rtype;
//     data:T;
// }

// const response1:APIResponse<string>={
//     status:200,
//     type:Rtype.FAILURE,
//     data:"test",
// }

// console.log(response1);


/// TUPLES   (order is important ) 

let a=[3,'hello',{p:3}];

let b:[number,string,object] = [4,'hello',{p:2}];

b[1] = 3; /// error dibe 



