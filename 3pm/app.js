//console.log("hello");
//alert("hello");

// variable  : -  local ( let , cosnt , var)   global ( let , cosnt , var)


// datatype
/* 
1. number 
2. string 
3. boolean
4. undefined
5. null
6. object // complex datatype*/ 


/*let data ={
    // key : value
    name: "veer",
    city: "bhilai",
    age: 40,
    address:{
       birth: 12,
       pin: 123
    }
}

console.log(data.address.birth);*/






// opearator

// Arithmatic 

 // +, -, *, /, %, **;


// relational / comparision

// <, >, <=, >=, ==, ===, !=

// logical 

// &&  ||  !


/*let a = 10;
let b = 20;
let c = 30;
let d = 40;


console.log(a<b && d<c);
console.log(a<b || d<c);
console.log(!(a<b && d<c));*/



// assignment\

 //let a =10;
  //a = a +20;
  //a += 20;

// bitwise

// logic gate -->   AND, OR,  NOT, XOR,

 /*0 - 0 = false 
 1 - 1 = false 
 1 - 0 = true 
 0 - 1 = true */

 // binary to decimal and decimal to binary 

 // 1011 = 11   
 // 8 4 2 1 

 // 7 = 0111
 // 0 1 1 1

 // 0 0 0 0
 // 0 1 0 1


 /*let a = 7;//   0 1 1 1 
 let b = 9;  // 1 0 0 1
             // 1 1 1 0 
            

 result = a ^ b;
 console.log(result);*/


//statement  : conditional / iteration / switch*/

// condition 
// syntax

/*if(condtion){
    // true statement 
}

else {
    // else statement 
}*/


/*let age = 17;

if(age >= 18){
    console.log("aligible for vote ");
}
else {
    console.log("not eligible for vote ");
}*/

/* ternary operator 
let age  = 20;

// ( Condition) ? " true statement "  :  " false statement"
console.log(( age > 18 && age < 40) ? "aligible for marrige " : " not aligible for marrige ")*/

// else if

/*let age = 62;

if(age > 1 && age < 18){
    console.log('minor');
}
else if(age > 18 && age < 40){
    console.log('adult');
}

else if (age > 40 && age < 60){
    console.log('men');
}

else {
    console.log('senior citizion');
}*/


// nested if else 

/*age = 18;
gender = 'female'

if(gender == 'male'){
    if(age >= 21){
        console.log('algible for marrige');
    }

    else {
        console.log('not eligible for marrige ');
    }
}

else if (gender == 'female'){
    if(age >= 18){
        console.log('you are aligible for marrige ');
    }
    else {
        console.log('not eligible for marrige ');
    }
}

else {
    console.log('your input is wrong');
}*/


// iteration ( loop ) :  for..lop    while..loop    do while..loop

//for(intialization; condition; increment/ decrement ){
    //statement 
//}

// 1,2,3,4,5,6,7,8,9,10

// for(let i=1; i< 11;i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }

// var i=1;

// while(i<11){
//     if(i % 2 === 0){
//         console.log(i);   
//     }
//     i++;
// }


// let data= {
//     name: 'veer',
//     age : 40
// }

// //......................................................... fo....in  ( object )

// for (let i in data){
//     console.log( i + ':' +data[i]);
//}


// ....................................................Array ...................... 1D , 2D , 3D

//  array declaration 
// array is collection of multiple type element

// const arr = [1,2,3,4,5,'hii']

// // indexs : 0, 1, 2, 3, 4, ,5

// // specific value print 
// console.log(arr[2]);

// // full array print 
// console.log(arr);


// // array update 
//   arr[5] = 'ram'
// console.log(arr);
// arr[2] = 'veer'
// console.log(arr);

// // pop delete value (last)
// arr.pop()
// console.log(arr);

// // push add value (last)
// arr.push('ram')
// console.log(arr);

// // shift
// arr.shift()
// console.log(arr);

// // unshift 
// arr.unshift('start')
// console.log(arr);

// // splice 

// arr.splice(2, 1)
// console.log(arr);

// // splice 
// arr.splice(1, 0, 'veer')
// console.log(arr);

//  arr.splice(1, 1, 'replace')
//  console.log(arr);

//  for ..in ( object )
 // for ..of 

//  arr= [1,2,3,4,5]

//  .............................................................for(let i of arr){
//     console.log(i);
//  }

// for(let i=0; i<arr.length;i++){
//     console.log(arr[i]);
// }

// 
// 1 2 3
// 1 2 3
// 1 2 3

// for(let i=1; i<4; i++){
//     process.stdout.write(i.toString());
// }

// 1 loop - row 
// 1 row 2 column



//row

// 1.row  = 1 1 1
// 2.row  = 2 2 2 
// 3.row  = 3 3 3 


//................................................................. funtion  ( blockk of statement / block of scope / block of code)


// function Add(){
//     console.log('this is function ');
// }

// Add()

// normal function
// function Add(){
//     let a =20;
//     let b= 30;
//     c =  b-a
//     console.log(c);
// }

// parameter function
// function Add(a, b) {
//     let c = a + b;
// }
// Add(10, 20)

// return function 

// function Add(a, b){
//     return a + b;
// }
// res=Add(10 ,30)
// console.log(res);
//.....................................................................................
// expression function 

// Add = function(a, b){
//    return a + b;
// }

// console.log(Add(4,5));


// Arrow Function 

// Add = (age) =>{

//    if(age > 18){
//     console.log('aligible');
//    }
// }
// Add(46)

// 1 factorial 
// 2 even odd
 

// DOM 





