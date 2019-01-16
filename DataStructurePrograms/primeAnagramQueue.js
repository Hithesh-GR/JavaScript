/******************************************************************************
 *  @Purpose        : Add the Prime Numbers that are Anagram in the Range of 0-1000
                      in a Queue using the Linked List and Print the Anagrams from the
                      Queue.Note no Collection Library can be used.
 *  @file           : primeAnagram.js
 *  @overview       :    
 *  @author         : HITHESH G R
 *  @version        : v8.15.0
 *  @since          : 11-01-2019
 ******************************************************************************/
var primeAnaQueue=require('../DataStructurePrograms/utility/primeAnaQueue.js');
var primeAna=require('../DataStructurePrograms/utility/primeAna2D.js');
var show = require('util');
var queueLink = new primeAnaQueue.QueuedLinkedList;
var primes = [[],[],[],[],[],[],[],[],[],[]];
// primes[0] = Utility.findPrime(100,200);
// show.print(primes[0]);
var initial = 0;
var final = 100;
for(let i = 0 ; i < primes.length ; i++){
    queueLink.enque(primes[i]);
}
for(let i=0 ; i < 10 ; i++)
{
    primes[i] = primeAna.findPrime(initial,final);
    initial = initial + 100;
    final = final + 100;
}
var start = 0;
var end = 100;
for(let i=0 ; i<10 ; i++)
{
    show.print(start+"-"+end + " --> " + "[ " + primes[i] + " ]" );
    start = start + 100;
    end = end + 100;
    console.log();
}
