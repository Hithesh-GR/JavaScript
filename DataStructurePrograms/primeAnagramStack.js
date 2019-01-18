/******************************************************************************
 *  @Purpose        : Add the Prime Numbers that are Anagram in the Range of 0-1000
                      in a Stack using the Linked List and Print the Anagrams in the
                      Reverse Order. 
 *  @file           : primeAnagram.js
 *  @overview       : Here we have to display the Prime number with Anagram Numbers 
                      in reverse order using stack in a linked list.
 *  @author         : HITHESH G R
 *  @version        : v8.15.0
 *  @since          : 11-01-2019
 ******************************************************************************/
var primeAnaStack=require('../DataStructurePrograms/utility/primeAnaStack.js');
var primeAna=require('../DataStructurePrograms/utility/primeAna2D.js');
function printAnaprimes()
{
    var stackLink = new primeAnaStack.StackedLink;
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