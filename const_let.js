//Global scope


var carName = "Volvo";

// code here can use carName

function myFunction() {
  // code here can also use carName
}

//Function scope

// code here can NOT use carName

function myFunction() {
    var carName = "Volvo";
    // code here CAN use carName
  }
  
  // code here can NOT use carName



  //------------------------
  var x = 10;
// Here x is 10
{
  var x = 2;
  // Here x is 2
}
// Here x is 2


//using let in block


var x = 10;
// Here x is 10
{
  let x = 2;
  // Here x is 2
}
// Here x is 10

//-----------------------------

//loop scope

var i = 5;
for (var i = 0; i < 10; i++) {
  // some statements
}
// Here i is 10


let i = 5;
for (let i = 0; i < 10; i++) {
  // some statements
}
// Here i is 5


//-----------Redeclaring a var variable with let, in the same scope, or in the same block, is not allowed:

var x = 2;       // Allowed
let x = 3;       // Not allowed

{
  var x = 4;   // Allowed
  let x = 5   // Not allowed
}

//----------Redeclaring a let variable with let, in the same scope, or in the same block, is not allowed:
let x = 2;       // Allowed
let x = 3;       // Not allowed

{
  let x = 4;   // Allowed
  let x = 5;   // Not allowed
}


//----const keyword

//Variables defined with const behave like let variables, except they cannot be reassigned:


const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error

//===Block scope

var x = 10;
// Here x is 10
{
  const x = 2;
  // Here x is 2
}
// Here x is 10


//-------Constant Objects can Change
//------You can change the properties of a constant object:


// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";

//---But you can NOT reassign a constant object:

const car = {type:"Fiat", model:"500", color:"white"};
car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR


//------exapmles


//----var

function nodeSimplified(){
    var a =10;
    console.log(a);  // output 10
    if(true){
     var a=20;
     console.log(a); // output 20
    }
    console.log(a);  // output 20
  }

//----let
function nodeSimplified(){
    let a =10;
    console.log(a);  // output 10
    if(true){
     let a=20;
     console.log(a); // output 20
    }
    console.log(a);  // output 10
  }
 // It is almost the same behavior we see in most language.
  
  function nodeSimplified(){
    let a =10;
    let a =20; //throws syntax error
    console.log(a); 
  }
  //Error Message: Uncaught SyntaxError: Identifier 'a' has already been declared.
  
 // However, with var, it works fine.
  
  function nodeSimplified(){ 
    var a =10;   
    var a =20;   
    console.log(a);  //output 20 
  }

  //-----const

  function nodeSimplified(){
    const MY_VARIABLE =10;
    console.log(MY_VARIABLE);  //output 10
    MY_VARIABLE =20;           //throws type error
    console.log(MY_VARIABLE); 
  }