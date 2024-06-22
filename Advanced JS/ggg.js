

// hoisting 
// sync & async 

console.log('A');
console.log('B');
setTimeout(() => {
    console.log('C');
},5000)
console.log('D');
console.log('E');