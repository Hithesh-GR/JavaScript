/******************************************************************************
 *  Execution       :   1. default node         cmd> node fileName.js                 
 *  Purpose         : TO deploy all the business logic.
 *  @file           : SBPStack.js
 *  @overview       : ALl the business logic bus be here.
 *  @module         : read-line modules are installed
 *  @author         : HITHESH G R
 *  @version        : v8.15.0
 *  @since          : 11-01-2019
 ******************************************************************************/
class Stack{
    /**
     * create a new constructor to create object of item.
     */
    constructor(){
        this.items=[];
    }
    /**
     * push elements into the stack.
     */
    push(element){
        this.items.push(element);
    }
    /**
     * pop elements from the stack.
     */
    pop(){
        /**
         * if there is no element in stack and we perform pop then it get underflow.
         */
        if(this.items.length==0)
           return "Underflow";
        return this.items.pop();
    }
    peek(){
        /**
         * it will return top element of stack without removing it.
         */
        return this.items[this.items.length-1];
    }
    isEmpty(){
        /*
        * checks if stack is empty are not
        */
        return this.items.length==0;
    }
    printStack(){
        /**
         * print stack 
         */
        var str="";
        for(var i=0;i<this.items.length;i++){
            str+=this.items[i]+"";
        }
            return str; 
    }
}
/**
 * exports if a object that get exposed to a module and it is by default in every js file.
 */
module.exports={
    balancedParenthesis(expression){
        /**
         * create a new stack. 
         **/
        var stack=new Stack();
        var count=0;
        var counter=0;
        for(var i=0;i<expression.length;i++){
            /**
             * if paranthesis opens it will perform push operation. 
            **/
            if(expression[i]=="("){
                stack.push(expression[i]);
                count++;
            }
            /**
             * while closing paranthesis it will perform pop opeartion. 
            **/
            else if(expression[i]==")"){
                stack.pop();
                counter++;
            }
        }
        if(count==counter){
            console.log("True"+"\n"+"Arithmetic expression is balanced");
        }
        else{
            console.log("False"+"\n"+"Arithmetic expression is not balanced");
        }
    }
}