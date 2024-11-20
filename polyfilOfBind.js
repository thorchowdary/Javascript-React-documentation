let name1 = {
  firstname: "Tharun",
  lastName: "k",
};

let printFullName = function (homeTown, state) {
  console.log(this.firstname, this.lastName, homeTown, state);
};

let printByName = printFullName.bind(name1, "rct");
printByName("ap");

Function.prototype.mybind = function (...args) {
  //we use Function.prototype this will make sure that it is available to use for every method like bind
  let obj = this; //inorder to get the access to the function of "printFullName" we use "this"
  parms = args.slice(1); // it will remove the first ele in array and give all other elements which is an array again
  return function (...args1) {
    //obj.call(args[0], parms);// since params is an array we cannot use call
    // will use apply since 2nd argument take array as an argument
    //obj.apply(args[0], parms);
    // we need to use the arguments sent from the function(...args) to do that we use like this
    //[...args,...parms] this will concatinate two arrays and pass into apply method
    obj.apply(args[0], [...args1, ...parms]);
  };
};

let printByNameWithMyBind = printFullName.mybind(name1, "rct");
//printByNameWithMyBind(); //if we send argument for here then we need to add ...args in function(...args) in mybing
printByNameWithMyBind("ap");
