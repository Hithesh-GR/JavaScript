/******************************************************************************
 *  @Purpose        : Add the Prime Numbers that are Anagram in the Range of 0-1000
                      in a Queue using the Linked List and Print the Anagrams from the
                      Queue.
 *  @file           : primeAnagram.js
 *  @overview       : Here we have to display the Prime number with Anagram Numbers 
                      in a Queue using the linked list.   
 *  @author         : HITHESH G R
 *  @version        : v8.15.0
 *  @since          : 11-01-2019
 ******************************************************************************/
var primeAnaQueue=require('../DataStructurePrograms/utility/primeAnaQueue.js');
var primeAna=require('../DataStructurePrograms/utility/primeAna2D.js');
var show = require('util');
var queueLink = new primeAnaQueue.QueuedLinkedList;
var primes = [[],[],[],[],[],[],[],[],[],[]];
var initial = 0;
var final = 100;
for(let i = 0 ; i < primes.length ; i++){
    queueLink.enque(primes[i]);
}
for(let i=0 ; i < 10 ; i++){
    primes[i] = primeAna.findPrime(initial,final);
    initial = initial + 100;
    final = final + 100;
}
var start = 0;
var end = 100;
for(let i=0 ; i<10 ; i++){
    show.print(start+"-"+end + " ---> " + primes[i]  );
    start = start + 100;
    end = end + 100;
    console.log();
}
