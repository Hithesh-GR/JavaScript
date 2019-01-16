/******************************************************************************
 *  @Purpose        : In this program we have to store the Prime Number and Anagram Number.  
                      For e.g.17 and 71 are both Prime and Anagrams.Like that 0 to 1000 range.  
                      Further store in a 2D Array the numbers that are Anagram and numbers 
                      that are not Anagram. 
 *  @file           : primeAnagram.js
 *  @overview       : Here we have to print the given range of Prime Numbers with Anagram and
                      Prime Numbers with not an Anagram in 2D Array.    
 *  @author         : HITHESH G R
 *  @version        : v8.15.0
 *  @since          : 11-01-2019
 ******************************************************************************/
var primeAna=require('../DataStructurePrograms/utility/primeAna2D.js');
var show = require('util');
var anaPrimes = [[],[],[],[],[],[],[],[],[],[]];
var initial = 0;
var final = 1000;
/*
* This condition calculates the initial to final value range
*/
for(let index=0 ; index < 1 ; index++){
    anaPrimes[index] = primeAna.findAnaPrime(initial,final);
    //initial = initial + 100;
    //final = final + 100;
}
var start = 0;
var end = 1000;
console.log("---Range of Prime numbers which are Anagrams---");
console.log("");
/*
* This condition checks the Prime & Anagram number range from starting to ending values 
*/
for(let index1=0 ; index1<1 ; index1++){
    show.print("[" +"[" +start+"-"+end+ "]" +" "+ "[" + anaPrimes[index1]+ "]"+"]" );
    //start = start + 100;
    //end = end + 100;
    console.log("\n");
}
