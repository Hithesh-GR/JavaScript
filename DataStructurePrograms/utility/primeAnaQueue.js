/******************************************************************************
 *  Execution       :   1. default node         cmd> node fileName.js                 
 *  Purpose         : TO deploy all the business logic.
 *  @file           : primeAnaQueue.js
 *  @overview       : ALl the business logic bus be here.
 *  @module         : read-line modules are installed
 *  @author         : HITHESH G R
 *  @version        : v8.15.0
 *  @since          : 11-01-2019
 ******************************************************************************/
var show = require('util');

class Qnode{
    constructor(key)
    {
        this.next = null;
        this.key = key;
    }
}
class QueuedLinkedList 
{
	constructor()
	{
		this.front = null;
		this.rear = null;
	}
	
	enque(key)
	{
		var temp = new Qnode(key);
		
		if(this.rear == null)
		{
			this.rear = this.front = temp;
			return;
		}
		
		this.rear.next = temp;
		this.rear = temp;
	}
	
	deque()
	{
		
		if(this.front == null)
		{
			return null;
		}
		
		var temp = this.front;
		this.front = this.front.next;
		
		if (this.front == null) 
		{
			 this.rear = null;
		}
	        return temp.key; 
	}
	
	display()
	{
		var t = this.front;
		
		while(t!=null)
		{
			show.print(t.key);
			if(t.next!=null)
				show.print(" --> ");
			t = t.next;
		}
		console.log("");
    }
    display2(){
        var t = this.front;
		
		while(t!=null)
		{
			show.print(t.key);
			if(t.next!=null)
				show.print("  ");
			t = t.next;
		}
        console.log();
        console.log();
    }

    displayCalender(d){
       
        var t = this.front;
        var t2 = this.front;
      
         var count = 0;
    
        while(t.key == " ")
        {
       show.print("   ");
       
       t = t.next;
        }
        while(t!=null)
        {   
            count++;
            show.print(" ", t.key);
         if(t.key < 10){
             show.print(" ");
         }
         

         if (((count + d) % 7 == 0) ) {
            console.log("");
        }
       t = t.next;
    }
    count = 0;
}
}
/**
* exports:if a object that get exposed to a module and it is by default in every js file.
**/
module.exports = {
    QueuedLinkedList 
}
