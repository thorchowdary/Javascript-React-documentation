console.log(x);
//console.log(a); // a is not is global space it is in it's own respective functional space
hello();
var x = 10; // anything that you created out side the function will be in global space.
function hello() {
  var a = 10; //everything that you create inside the function will be in it's own function respective space.
  console.log("hello");
}

//will get undefined and hello
// Hoisting:  we can access variables and functions even before initilizinfg them
// when Js start executing the code GEC [GLOBAL EXECUTON CONTEXT WILL GET CREATED]--memory block where all variables and funtion declaration
// stores and code execution block
//it has 2 phases memory phase and code execution phase

//passing function as a argument and returns the function is called higher order functions.
function y(x) {
  x(); // x is the function you pass as an argument
}

y(function () {
  console.log("hello");
});

//currying -- reusing the exiisting function
let multiply = function (x, y) {
  console.log(x * y);
};

let multiplyBy2 = multiply.bind(this, 2); // here we are notwriting the new code for mulby2 we are resuing the multoly method
multiplyBy2(5);

let multiplyBy4 = multiply.bind(this, 4); // here we are notwriting the new code for mulby4 we are resuing the multoly method
multiplyBy4(5);

//call --this is used to call a function in other place also called function borrowing

let name1 = {
  firstName: "tharun",
  lastName: "K",
};

let printDetails = function (homeTown, state) {
  console.log(
    this.firstName +
      "" +
      this.lastName +
      " from " +
      homeTown +
      ",state " +
      state
  );
};

printDetails.call(name1, "Ap", "Rayachoty");
//bind is similar to call but the difference is bind make the copy of the function whereas call overrides the exisisting function
