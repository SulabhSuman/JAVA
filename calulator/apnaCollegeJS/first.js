// const student = {
//     fullName: "Sulabh Suman",
//     age: 20,
//     cgpa: 8.2,
//     isPass: true,
// };
// to change the age in the student Object
// student["age"] = student["age"]+1;
// console.log(student["age"]);

// to change the name in the student Object
// student ["fullName"]= "Raushan";
// console.log(student["fullName"]);


// new Object product
// const product={
//     title :"Ball pen",
//     rating : 3 ,
//     offer :5, 
//     price : 200,
// };
// console.log(product);


//Arithmetc operators
// let a=3;
// let b=4;
 
// console.log("a=",a ,"&b=",b);
// console.log("a+b=",a+b);
// console.log("a-b=",a-b);
// console.log("a*b=",a*b);
// console.log("a/b=",a/b);
// console.log("a%b=",a%b);

// Unary operator
// let a=3;
// let b=4;

// console.log("a=",a ,"&b=",b);
// console.log("a--=",a--);
// console.log("a=",a);

// Assignment operator
// let a=5;
// let b=4;
// a+=4;
// console.log("a=",a );
// a-=4;
// console.log("a=",a );
// a*=2;
// console.log("a=",a );
// a/=5;
// console.log("a=",a );
// a**=2;
// console.log("a=",a );

// Comparison operator

// let a=5;
// let b=4;

// console.log("5==4",a==b);
// console.log("5!==4",a!==b);

// conditional operator

// let age =25;
// if(age>=18){
//     console.log("you can vote");
// }
//   if(age<18){
//     console.log("you cannot vote");
//   }

// if else statement--->

// let mode ="light";
// let color;

// if(mode === "dark" ){
//     color="black";
// }
// else{
//     color="white";
// }
//   console.log(color);


//   odd or even

// let x=10;
// if (x%2===0){
//     console.log(x,"is even");
// }
// else{
//     console.log(x,"is odd");
// }

// else if statement

// ternary operator
// conditiions?true output:false output
// let age=25;
// let result =age>18?"adult":"not adult";
// console.log(result);

// to check multiply of 5

// let num = prompt("enter a number");

// if (num%5===0){
//     console.log(num,"is multiple of 5");
// }
// else{
//     console.log(num,"is not a multiple of 5");
// }


// for loops
// initialization condition ;stopping condition ; upgradation;
// for(let count=1; count<=5; count++){
//     console.log("apna college");
// }
// console.log("loop has ended");


// let sum=0;
// for (let i=1; i<=5; i++){
//     sum= sum+i;
// }
// console.log("sum=",sum);

// or

// let sum=0;
// let n=5;
// for (let i=1; i<=n; i++){
//     sum= sum+i;
// }
// console.log("sum=",sum);

// print 1 to 5

// for(let i=1; i<=5; i++){
//     console.log("i=",i);
// }

// while loop

// let i=1;
// while(i<=10){
//     console.log("apna college");
//     i++;
// }

// do while loop

// let i=1;
// do{
//   console.log("i=",i);
//   i++;
// }
// while(i<=10);

// for-of loop --->for , string and arrays 
// let str="apna college";  
// for(let i of str){
//     console.log("i=",i);

// }

// let student ={
//     name:"ravi",
//     age:20,
//     cgpa:9.3,
//     isPass:true,
// };

// for(let key in student){
//     console.log("key=", key, "value=",student[key]);
// }

// print even number from 0 to 100
// practice 01

// for(let num=0; num<=100; num++){
//     if(num%2===0){
//         console.log("num=",num);
//     }
// }

// for odd

// for(let num=0; num<=100; num++){
//     if(num%2 !==0){
//         console.log("num=",num);
//     }
// }

// practice 02

// let gameNum=25;
// let userNum =prompt("Guess the game number:");

// while(userNum != gameNum){
//    userNum= prompt("you entererd wrong number, guess again:");
// }
// console.log("Congratulations, you entered the right number");

// Strings

// let str = "sulabh";

// console.log(str[5]);  
// // -->h

// str.length --->6

// Arrays--->collection of items

// let marks= [34, 54,63,22,39];
// console.log(marks);
// console.log(marks.length);  //property


// let heroes=["ironman, shaktiman , hulk"];
// console.log(heroes);

// let marks= [34, 54,63,22,39];
// console.log(marks);
// console.log(marks.length);

// looping over an array
 
// let heroes=["ironman, shaktiman , hulk"];
// // for loop->
// for (let i=0; i<Array.length; i++){
// console.log(heroes[i]);
// }

//  let cities= ["delhi","sasaram", "mumbai", "hydrabad"];
// for-of loop->
//  for(let city of cities){
//     console.log(city);
//  }

// practice

// let marks=[85,97,44,37,76,60];
// let sum=0;
// for(let val of marks){
//     sum += val;
// }
  
// let avg= sum / marks.length;
// console.log('avg marks of the class = ${avg}');


// practice2--> remaining 31:20 in array video


//   let items= [250,645,300,900,50];
//   let i=0;
//   for (let val of items){
//     console.log('value at index ${i} =${val}');
//     i++;
//   }

// push() in array--> add to end
// let foodItems= ["potato","onion","apple","tomato"];
// foodItems.push("chips","kurkure");
// console.log(foodItems);

// pop() in array  ->delete from end and return
// let foodItems= ["potato","onion","apple","tomato"];
// console.log(foodItems);
// foodItems.pop();
// console.log(foodItems);

// toString()  in array--> convert into string
// let foodItems= ["potato","onion","apple","tomato"];
// console.log(foodItems);
// console.log(foodItems.toString());
// console.log(foodItems);

// concat()  in Array-->join multiple array and return result
// let marvelHeroes= ["thor","spiderman","ironman"];
// let dcHeroes= ["superman","batman"];
// let indianHeroes= ["krish"];
// let heroes=marvelHeroes.concat(dcHeroes, indianHeroes);
// console.log(heroes);

// unshift() in array-->add to start

// let marvelHeroes= ["thor","spiderman","ironman"];
// marvelHeroes.unshift("antman");

// shift() in array--> to delete form start and return
// let marvelHeroes= ["thor","spiderman","ironman"];
// let val=marvelHeroes.shift();
// console.log("deleted",val);

// slice() method->return a piece of an array

// let marvelHeroes= ["thor", "spiderman"," ironman"," antman"];
// console.log(marvelHeroes);

// console.log(marvelHeroes.slice(1,3));

// or ex.

// let marvelHeroes= ["thor", "spiderman"," ironman"," antman"];
// console.log(marvelHeroes);

// console.log(marvelHeroes.slice(1));

// splice()  method-->change original Array(add, remove ,replace)

// let arr= [1,2,3,4,5,6,7];
// arr.splice(2,2,101,102);
// or
// arr.splice(2,0,101);

//   FUNCTION IN JS--->

// function myFunction(){
//     console.log("Welcome to apna college");
//     console.log("Thanks for coming");
// }
// myFunction();

function myFunction(msg){
    // parameter ->input
    console.log(msg);
}
myFunction("I love JS"); //ARGUMENT

// function and arrow function difference, what is scope, local variable and globle variable

let pro
