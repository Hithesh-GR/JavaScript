/******************************************************************************
 *  @Purpose        : Add the Prime Numbers that are Anagram in the Range of 0-1000
                      in a Stack using the Linked List and Print the Anagrams in the
                      Reverse Order.Note no Collection Library can be used. 
 *  @file           : primeAnagram.js
 *  @overview       : 
 *  @author         : HITHESH G R
 *  @version        : v8.15.0
 *  @since          : 11-01-2019
 ******************************************************************************/
var primeAnaStack=require('../DataStructurePrograms/utility/primeAnaStack.js');
var primeAna=require('../DataStructurePrograms/utility/primeAna2D.js');
function printAnaprimes()
{
var stackLink = new primeAnaStack.StackedLink;
//var show = require('util');

var anaPrimes = [[]];

    anaPrimes = primeAna.findAnaPrime(0,1000);
   
for(let i = 0 ; i < anaPrimes.length ; i++){
    stackLink.push(anaPrimes[i]);
}

console.log();
console.log("------Initial LinkList------");
stackLink.display();
var top =  stackLink.getHead();
//console.log(top);
console.log();
console.log("------Reversed LinkList------");
stackLink.displayReverse(top);
//console.log(stackLink.peek());
}
printAnaprimes();