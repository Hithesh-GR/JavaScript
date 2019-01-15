/******************************************************************************
 *  Execution       :   1. default node         cmd> node fileName.js                 
 *  Purpose         : TO deploy all the business logic.
 *  @file           : checkerDeque.js
 *  @overview       : ALl the business logic bus be here.
 *  @module         : read-line modules are installed
 *  @author         : HITHESH G R
 *  @version        : v8.15.0
 *  @since          : 11-01-2019
 ******************************************************************************/
/*
* creating deQueue function to create any new deQueue with null values.
 */
function deQueue(){
    this.string=new Array();
    /*
    * remove the item from back
    */
    this.popback=function(){
        return this.string.pop();
    }
    /*
    * add the item into back
    */
    this.pushback=function(item){
        return this.string.push(item);
    }
    /*
    * remove the item from front
    */
    this.popfront=function(){
        return this.string.shift();
    }
    /*
    * add the item into front
    */
    this.pushfront=function(item){
        return this.string.unshift(item);
    }
    /*
    * print dequeue
    */
    this.printQueue=function(){
        var str='';
        for(var i=0;i<this.string.length;i++){
            str+=this.string[i]+" ";
        }
        return str;
    }
    /*
    returns the length of deQueue
    */
    this.size=function(){
        return this.string.length;
    }
}
/**
 * exports if a object that get exposed to a module and it is by default in every js file.
 */
module.exports={
    Palindrome(str){
        /**
        * create a new deque. 
        **/
        var deque=new deQueue();
        var array=[];
        array=str.split('');
        for(var i=0;i<array.length;i++){
            deque.pushback(array[i]);
        }
        console.log(deque.printQueue());
        var flag=true;
        /*
        * checks the deque size
        */
        if(deque.size()%2==0){
            /*
            * it will checks if the deque size is greater than zero
            */
            while(deque.size()>0){
                var a=deque.popfront();
                var b=deque.popback();
                if(a!=b){
                    flag=false;
                }
            }
        }
        else{
            /*
            * it will checks if the deque size is greater than one
            */
            while(deque.size()>1){
                var a=deque.popfront();
                var b=deque.popback();
                if(a!=b){
                    flag=false;
                }
            }
        }
        /*
        * if the strings are equal returns this statements
        */
        if(flag==true){
            console.log("Palindrome");
        }
        else{
            console.log("Not a Palindrome");
        }
    }
}