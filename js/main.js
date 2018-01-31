console.log('JS Logic Loops');

/* if statements */
if('foo' === 'foo'){
  console.log('Of course these strings are equal!');
}

if(5 > 10){
  console.log('You will NEVER see this.');
} else {
  console.log('You will ALWAYS see this!');
}

// write a new if statement
// that checks if a number stored in a var
// is greater than 100
var num = 10;
if(num > 100){
  console.log('this will never be true');
} else {
  console.log(num + ' is not > 100');
}
// if the var is NOT > 100, let the user know what is was.

// is a string stored in a variable, the same as another string?
var myString = 'foo';
if(myString === 'foo'){
  console.log('Hey, here you are!');
} else {
  console.log('You are in the else');
}

// the else if statement
if(5 < 4){
  console.log('you will not end up here');
} else if(5 >= 5){
  console.log('You will end up here');
} else {
  console.log('you will not end up here either');
}

// a function that returns something
function topSpeed(){
  return (75 + 5); // return the number 80
}

console.log(topSpeed()); // logs the number 80

// write a function that accepts arguments
// this now means that we are required to provide values for those args
// when we invoke the invoke the function
function addNumbers(num1, num2){
  return (num1 + num2); // the values of my args are now used as vars inside my func
}
console.log(addNumbers(100, 3000)); // logs 3100 to the console

// returns true
if(addNumbers(50, 50) === 100){
  console.log('Congrats!!')
}

// This function does not return anything, we just 'do something' immediately
// this is a named function
function fullName(fName, lName){
  console.log(fName + ' ' + lName);
}

fullName('Bill', 'Keller');

// we can also create a function and store it in a variable
// it's an anonymous function, stored in a variable
var myGreatFunc = function(){
  console.log('function stored in var');
};

myGreatFunc();

// 1) Write a function that accepts an argument. Let's call the arg 'door'
function openDoor(door){
  console.log(door);
  // based on the value of door, log a prize
  if(door === 'green'){
      console.log('you opened the green door! you win a skateboard');
  } else if(door === 'red'){
    console.log('you opened the red door, you win a scooter');
  }
}

// 2) Based on the value of 'door', console.log a prize.
openDoor('red');

var foo = {
  color: 'red'
};
console.log(typeof foo.color);

var cartoons = ['garfield', 'heathcliff', 'snoopy'];
console.log(cartoons.length) // log 3
