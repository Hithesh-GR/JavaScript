/******************************************************************************
 *  Execution       :   1. default node         cmd> node fileName.js                 
 *  Purpose         : TO deploy all the business logic.
 *  @file           : primeAnaStack.js
 *  @overview       : ALl the business logic bus be here.
 *  @module         : read-line modules are installed
 *  @author         : HITHESH G R
 *  @version        : v8.15.0
 *  @since          : 11-01-2019
 ******************************************************************************/
var show = require('util');
class Node{

    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class StackedLink{

    constructor(){
        this.top = null;
        
    }

    push(item){
         var temp = new Node();
         temp.data = item; 
         temp.next = this.top;
         this.top = temp;
    }

    pop(){
      
        if(this.top == null)
        {
            console.log("Stack Underflowed");
            return;
        }
        this.top = this.top.next;
       
    }

    isEmpty(){
        return this.top == null;
    }

    peek(){
        if(!this.isEmpty()){
            return this.top.data;
        }else{
            console.log("stack is empty");
            return -1;
        }
    }

    display(){
        if (this.top == null) { 
            console.log("Stack Underflowed"); 
            return;
        } 
        else { 
            var temp = this.top; 
            var show = "";
            while (temp != null) { 
                 
                show = show + temp.data;
                if(temp.next!=null)
                {
                    show = show + " --> "
                }              
                temp = temp.next; 
            } 
            console.log(show);
        } 
    }

    displayDays(){

        if (this.top == null) { 
            console.log("Stack Underflowed"); 
            return;
        } 
        else { 
            var temp = this.top; 
            var show = "";
            while (temp != null) { 
                 
                show = show + temp.data;
                if(temp.next!=null)
                {
                    show = show + "  "
                }              
                temp = temp.next; 
            } 
            console.log(show);
        } 

    }

    displayCalender(d){
       
        var t = this.top;
       
      
         var count = 0;
    
        while(t.data == " ")
        {
       show.print("   ");
       
       t = t.next;
        }
        while(t!=null)
        {   
            count++;
            show.print(" ", t.data);
         if(t.data < 10){
             show.print(" ");
         }
         

         if (((count + d) % 7 == 0) ) {
            console.log("");
        }
       t = t.next;
    }
    count = 0;
}
    
    reverse(){
        var prev = null;
        var current = this.top ;
        var next = null;

        while(current!= null){
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.top = prev;
       
    }
  
    displayReverse(top){
       
      if(top == null)
      return;
    
        this.displayReverse(top.next);
        show.print(top.data);
        if(top.next!=top)
         show.print( " --> "); 
      
    }
    getHead(){
        return this.top;
    }
}
/**
     * exports:if a object that get exposed to a module and it is by default in every js file.
    **/
module.exports = {
    StackedLink
}
