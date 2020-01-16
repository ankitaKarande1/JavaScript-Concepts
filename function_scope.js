/* functiion scope 
1. Hoisting 
2. Nested scope

Hoisting -variable Hoisting
*/

console.log(hoist); // Output: undefined

var hoist = 'The variable has been hoisted.';

// what the code looks like to the interpreter

var hoist;

console.log(hoist); // Output: undefined
hoist = 'The variable has been hoisted.';

/*Because of this, we can use variables before we declare them. However, we have to be 
careful because the hoisted variable is initialised with a value of undefined. 
The best option would be to declare and initialise our variable before use.*/

//variable within function 
function hoist() {
    console.log(message);
    var message='Hoisting is all the rage!'
  }
  
  hoist();

  //how interpreter views the above code

  function hoist() {
    var message;
    console.log(message);
    message='Hoisting is all the rage!'
  }
  
  hoist(); // Ouput: undefined

  //https://scotch.io/tutorials/understanding-hoisting-in-javascript#toc-hoisting-classes
  //visit site for detail
