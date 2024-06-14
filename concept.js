//1.  currying...
// currying creates a chain of function and each function return a function until final result is obtained .

function add(a){
  return function (b){
                 return a+b
  }
}

const res=add(2)(3);
console.log(res)

function props(obj){
    return function(key){
        return obj[key]
    }
}

const access=props({name:'nitesh',age:12});

console.log(access('name'));

// infinite curring .

  function add(num1){
      return function (num2){
        if(num2){
            return add(num1+num2)
        }
        return num1
      }
  }


  // IIFE 
  // Whenever a function is invoked, as soon as it is defined ;

  //* Use CASES *//
  //* 1. create private variable, which can be accessed only inside IIFE ; *//

  const appcounter=(function appCounter(){
    let count=0;
     return function (){
       return count++
     }
  })()

// console.log(appcounter());
// console.log(appcounter());
// console.log(appcounter());

//* 2. create modular approach

const makeWithdraw = (balance) =>
  ((copyBalance) => {
    let balance = copyBalance; // This variable is private
    const doBadThings = () => {
      console.log("I will do bad things with your money");
    };
    doBadThings();
    return {
      withdraw(amount) {
        if (balance >= amount) {
          balance -= amount;
          return balance;
        }
        return "Insufficient money";
      },
    };
  })(balance);

// const firstAccount = makeWithdraw(100); // "I will do bad things with your money"
// console.log(firstAccount.balance); // undefined
// console.log(firstAccount.withdraw(20)); // 80
// console.log(firstAccount.withdraw(30)); // 50
// console.log(firstAccount.doBadThings); // undefined; this method is private
// const secondAccount = makeWithdraw(20); // "I will do bad things with your money"
// console.log(secondAccount.withdraw(30)); // "Insufficient money"
// console.log(secondAccount.withdraw(20)); // 0

// * CLOSURE ==> closure is an inner function that has access to the outer function variables and parameter . 
// * It allow inner function to access and manipulate the outer function variables, even outer function has returned .

function outer() {
  var x = 10;

  function inner() {
    console.log(x);
  }

  x = 20;

  return inner;
}

var innerFunc = outer();

//innerFunc(); // output will be 20, as after assigning new value, inner function is returned ;

//* 3. prototype,prototype chain

const obj={
  a:2,
  b:3
}

console.log(Object.prototype);

















  




