/******************************************************************************
 *  Execution       :   1. default node         cmd> node fileName.js                 
 *  Purpose         : TO deploy all the business logic.
 *  @file           : BCCQueue.js
 *  @overview       : ALl the business logic bus be here.
 *  @module         : read-line modules are installed
 *  @author         : HITHESH G R
 *  @version        : v8.15.0
 *  @since          : 11-01-2019
 ******************************************************************************/
class Queue{
    /**
     * create a new constructor to create object of item.
     */
    constructor(){
        this.items=[];
    }
    /**
     * add elements into the queue.
     */
    enQueue(element){
        return this.items.push(element);
    }
    /**
     * remove elements from the queue.
     */
    deQueue(){
        /**
         * if there is no element in queue and we perform deQueue then it get underflow.
         */
        if(this.isEmpty())
            return "underflow";
        return this.items.shift();
    }
    front(){
        /**
         * it will return front element of queue without removing it.
         */
        if(this.isEmpty())
            return "No elements in the queue";
        return this.items[0];
    }
    /*
    checks if queue is empty are not
    */
    isEmpty(){
        return this.items.length==0;
    }
    /*
    returns the length of queue
    */
    length(){
        return this.items.length;
    }
    printQueue(){
        /*
        * print queue
        */
        var str="";
        for(var i=0;i<this.items.length;i++)
        str+=this.items[i]+" ";
        return str;
    }
}
/**
 * exports if a object that get exposed to a module and it is by default in every js file.
 */
module.exports={
   Banking(read,num){
       /**
        * create a new queue. 
        **/
        var queue=new Queue(); 
        var balance=1000;
        for(var i=0;i<num;i++){
            queue.enQueue(i);
        }
        while(queue.length()){
            var option=read.question("Press 1 to deposit money and Press 2 to withdrawal money: ");
            /*
            * if we deposit into the account it performs enqueue operation
            */
            if(option==1){
                var depositAmount=read.question("Enter the amount to deposit: ");
                balance=(parseInt(balance)+parseInt(depositAmount));
                console.log("Total Balance is= "+balance);
            }
            /*
            * if we withdraw from the account it performs dequeue operation
            */
            else if(option==2){
                var withdrawAmount=read.question("Enter the amount to withdrawal: ");
                if(balance>=withdrawAmount){
                    balance=balance-withdrawAmount;
                    console.log("Total balance:"+balance);
                }
                /*
                * if bank balance is zero 
                */
                else{
                    console.log("Running out of balance..");
                }
            }
            else{
                console.log("plz contact to nearby branch...");
            }
            queue.deQueue();
        }
    }
}