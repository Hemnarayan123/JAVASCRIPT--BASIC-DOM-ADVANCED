//.............................................Topics....................................

// variable
// data type
// string
// operator
// statement
// Array

//............................................Output screen .....................................

// console.log()   // node , html
// document.write()  // html
// alert()   // html


// ........................................................varaible......................................
// variable typle - var , let , const

// variable is memory location of value

// a = 10; // var
// let a =10;
// const a = 10;
// var a = 10;

// const a = 10;
// a = 40;
// console.log(a);

// let a =10;
// a = 30;
// console.log(a);

// var b = 20;
// b = 30;
// console.log(b);

//......................................................... data type ...................................

//number   a =10
//string  a = 'veer'
// boolean - true false
// undefined      a = undefined ( varialbe is declare but value not defined )
// null   a = null ( no value means 0 )

//.................................................................... object  -->   complex data type...............................

// a = true;

// console.log(typeof(a));

// key : value   ( pair )

// var data = {
//     name: 'veer',
//     age: 40,
//     city: 'jodhpur',
//     pin: 252245,
//     profile: {
//         address: 'rajasthan',
//         capital: 'jaipur',
//         no: 24724
//     }
// }

// console.log(data.profile.capital);

//..................................................................... operator.........................................
// // arithmatic
// // relational ( < , >, ==, !=, ===)
// // assignment ( += -= *= */ )
// logic operator

// a = 10;
// b = '10';

// console.log(a === b);

// AND

//   0  0  0
//   1  0  0
//   0  1  0
//   1  1  1

// OR

//   0  0  0
//   1  0  1
//   0  1  1
//   1  1  1

// NOT
//  0  1
//  1  0

// logic operator ( &&  ||   !)

// a = 10;
// b= 20;

// console.log(!(a<b ||  a>b));

// Ternary operator
// bitwise opeartor


// .................................................................statement..................................................

// statements -  conditional     iterate    switch

// conditional  - if ,    if ...else ,     else if ,    nested if else

// var age = 20;

// if(age > 18){
//     console.log('aligible for vote ');
// }

// else {
//     console.log('not eligible for vote ');
// }

// age = 45;

// if(age < 18){
//     console.log('not eligible for vote ');
// }

// else if(age>18 && age < 60){
//     console.log('eligible for vote ');
// }

// else {
//     console.log('date expired ');
// }

// nested if else

// gender = "female";
// if (gender == "male") {
//   age = 19;

//   if (age >= 21) {
//     console.log("boys aligible for marrige ");
//   } else {
//     console.log("not eligible for marrige ");
//   }
// }

// else if(gender == 'female'){
//     age = 18;

//   if (age >= 18) {
//     console.log(" girls aligible for marrige ");
//   } else {
//     console.log("not eligible for marrige ");
//   }
// }


// ...................................................iteration ..................... ( for...      while      do ..while )

// for(i=1; i<10; i++){
//     console.log(i);
// }

// i = 1
// while(i<10){
//     console.log(i);
//     i++;
// }

// for...in  ( specially object bana hai)

// var data = {
//     name: 'veer',
//     city: 'bhilai',
//     age: 50
// }

// console.log(data.name);
// console.log(data.city);
// console.log(data.age);

// for(let i in data){
//     console.log(data[i]);
// }

// 1 
// 1 2 
// 1 2 3

// for(i=1; i<=3; i++){
//     for(j=1; j<=3; j++){
//         console.log(j);
//     }
//     console.log();
// }

//..................................................... Array ............................... (array is collection of multiple datatype values )
   


// console.log(arr);
// console.log(arr[4]);

// arr.pop()
// console.log(arr);

// arr.push(100)
// console.log(arr);

//  arr[4] = 'bye'
//  console.log(arr);

 // splice 

 //arr.splice(indexNUmber , ValueRemove,  valueAdd)
//  let arr = [1,2,3,4, 'hii', true ]
//  arr.splice(5, 1, 'add' )
//  console.log(arr);

// let arr = [1242,23,36,467,55,66,77,85,96,170]
// console.log(arr.length);

// for(i=0; i<arr.length; i++){

//     console.log(arr[i]);
// }

// for(let i of arr){
//     console.log(i);
// }


//...............................................function .............................................

//  function is a scope

// local space ,  global space 

//............................................. global space ............................

// let a = 10;
// var b = 'hello';
// const c = true;

// console.log(a);

// if(c == true){
//     let n =10;
//     console.log(a);
// }

// console.log(n);  //  error - n is undefined 

//........................simple function .........................................


// function add(){   // ..................simple 
//     let a =5
//     let b =5
//    c = a +b  
//   console.log(c)
// }

// add()  // function call ( with use of function name )

// function add(a, b){   // .............parameter 
//     let c = a + b;
//     console.log(c);
// }

// add(4,6)

// function add(a,b){    // .............. return with parameter
//     return a + b;
// }
//  result = add(10,10)
//  console.log(result);

//.............................................function declaration type ............................

//............................ normal function ..................

// function add(){

// }
// add()

// ....................... Expression function ................

// let add = function(){

// }
// add()

// ...........................Arrow function...................

// let add = (a, b) =>{
// return a +b
// }
// console.log(add(10,10));



// ....................... factorial ..........................

// fact = 1;

// for(i=1; i<=5; i++){
//     fact = fact * i;
// }
// console.log(fact);


// ..................... Prime number......................


// let primeFInd = (n) =>{
//     var count = 0;
//     for(i=1;i<=5;i++){
//         if(n%i === 0){
//             count++;
//         }
//     }
    
//     if(count === 2){
//         console.log(n + '  is prime number');
//     }
//     else{
//         console.log(n + '  is not prime number');
//     }
// }

// primeFInd(4)


// .................................DOM........................


// array method --- 4 
// map
// filter
// reduce
// forEach

// v v v v m m m imp methods hai javascript me ...for web development

// arr = [1,2,3,4,5]
// arr.forEach((num) => console.log(num *2))


