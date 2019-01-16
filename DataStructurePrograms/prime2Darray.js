var Prime=require('./utility/primeNumber2D.js');
/******************************************************************************
 *  @Purpose        : Take a range of 0-1000 Numbers and find the Prime numbers in
                      that range.Store the prime numbers in a 2D Array, the first 
                      dimension represents the range 0-­100,100­-200, and so on.While
                      the second dimension represents the prime numbers in that range.   
 *  @file           : prime2Darray.js
 *  @overview       : Here we have to print the given range of prime numbers in 2D Array.   
 *  @author         : HITHESH G R
 *  @version        : v8.15.0
 *  @since          : 11-01-2019
 ******************************************************************************/
/*function primeNumbers(){
    var read=Utility.input();
    read.question("Enter min value: ",function(min){
        read.question("Enter max value: ",function(max){
            if(min>='a' && min<='z'|| min>='A' && min<='Z'){
                console.log('Plz enter integers only..');
            }
            else{
                prime.checkPrime(min,max);
            }
            read.close();
        })
    });  
}
primeNumbers();*/
var show = require('util');
var primes = [[],[],[],[],[],[],[],[],[],[]];
var initial = 0;
var final = 100;
console.log('--Prime Numbers in the given range are :--\n');
/*
* This condition calculates the initial to final value range
*/
for(let index=0 ; index < 10 ; index++){
    primes[index] = Prime.checkPrime(initial,final);
    initial = initial + 100;
    final = final + 100;
}
var start = 0;
var end = 100;
/*
* This condition checks the prime number range from starting to ending values 
*/
for(let index1=0 ; index1<10 ; index1++){
    show.print("[" + "[" +start+ "-" +end+ "]" + " " + "[" + primes[index1] + "]" + "]");
    start = start + 100;
    end = end + 100;
    console.log();
}
