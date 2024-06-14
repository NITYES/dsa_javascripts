//check is prime or not
function isPrime(num){
    let isprime=true;
    if(num<=1){
        return false
    }else if(num >1){
        for(let i=2;i<num;i++){
            if(num % i ==0){
              isprime=false;
              break;
            }
      }
    }
    
    
    return isprime
}

// console.log(isPrime(4))
//find nth prime number

function nthPrimeNumber(n){
    let i=2;
    let totalloop=0;
    while(totalloop <n){
        if(isPrime(i)){
            console.log(i)
            totalloop++;
        }
        i++
    }
return i
}

// nthPrimeNumber(5)

//3.printh nth fibbonaci series

function printFibonnaci(n){
    let f1=0;
    let f2=1;
   let fb=`${f1},${f2},`
    for(let i=2;i<n;i++){
        let a=f1+f2;
        f1=f2;
        f2=a;
        fb +=f2+","
    }
    console.log(fb)
}

// printFibonnaci(6)

//factorial using recursion

function factorial(n){
    let f=1;
    for(let i=2;i<=n;i++){
        f *=i;
    }
    return f
}


console.log(factorial(4))

//using recursion

function facctorialRecursion(n){
    let fact;
    if(n==0){
        return 1
    }
    return n*facctorialRecursion(n-1)

}

console.log(facctorialRecursion(5))