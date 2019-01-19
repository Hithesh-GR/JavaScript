/******************************************************************************
 *  @Purpose        : Create a Program which creates Banking Cash Counter where people 
                      come in to deposit Cash and withdraw Cash. Have an input panel to 
                      add people to Queue to either deposit or withdraw money and dequeue 
                      the people. Maintain the Cash Balance.    
 *  @file           : bankCashQueue.js
 *  @overview       : We will create a queue to add people while they perform withdrawal or
                      deposit and maintain the queue to add from rear and remove from front 
                      of queue through enqueue and dequeue operations.     
 *  @author         : HITHESH G R
 *  @version        : v8.15.0
 *  @since          : 11-01-2019
 ******************************************************************************/
var read=require('readline-sync');
var Utility=require('../DataStructurePrograms/utility/bccQueue.js');
    /**
     * read the value of persons from user to perform queue operations.
     */
function bankingCash(){
    var input=read.question("Enter the number of transactions: ");
    /**
     * validating if found any character string.
     */
    if(input>='a' && input<='z'||input>='A' && input<='Z'){
        console.log("Plz enter integers only....");
    }
    else{
        Utility.Banking(read,input);
    }
}
bankingCash();
