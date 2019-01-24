/******************************************************************************
 *  Execution       :   1. default node         cmd> node fileName.js                 
 *  Purpose         : TO deploy all the business logic.
 *  @file           : queueLinkedList.js
 *  @overview       : ALl the business logic bus be here.
 *  @module         : read-line modules are installed
 *  @author         : HITHESH G R
 *  @version        : v8.15.0
 *  @since          : 18-01-2019
 ******************************************************************************/
/**
 * Queue implemented using LinkedList
 */
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
/**
* creating Queue class to create any new node with null values.
*/
class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    /**
	* it will add or store the items
	*/
    enqueue(data) {
        var newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
    /**
	* it will remove or access the items
	*/
    dequeue() {
        var newNode;
        if (this.head !== null) {
            newNode = this.head.data;
            this.head = this.head.next;
        }
        return newNode;
    }
    print() {
        var week = "";
        var curr = this.head;
        while (curr) {
            // console.log(curr.data);
            week += curr.data + " ";
            curr = curr.next;
        }
        return week;
    }
    /**
	* it will display the items
	*/
    display() {
        var curr = this.head;
        while (curr) {
            console.log(curr.data);

            curr = curr.next;
        }
    }
    /**
    * checks if queue is empty are not
    */
    isEmpty() {
        return this.head == null;
    }
    /**
	* it will display the calender
	*/
    displayCalender(d) {
        var show = require('util');
        var t = this.head;
        var count = 0;
        while (t != null) {
            count++;
            show.print("  ", t.data);
            if (t.data < 10) {
                show.print(" ");
            }

            if (((count + d) % 7 == 0)) {
                console.log("");
            }
            t = t.next;
        }
        count = 0;
    }
    /**
	* it will display the items
	*/
    display2() {
        var t = this.head;
        var show = require('util');
        while (t != null) {
            show.print("  " + t.data);
            if (t.next != null)
                show.print(" ");
            t = t.next;
        }
        console.log();
    }
    /*
	* it will display the items in reverse
	*/
    displayReverse(head) {
        var show = require('util');
        if (head == null)
            return;

        this.displayReverse(head.next);
        show.print(head.data);
        if (head.next != head)
            show.print("-->");
    }
    /**
    * get the data 
    */
    getHead() {
        return this.head;
    }
}
/**
 * exports if a object that get exposed to a module and it is by default in every js file.
 */
module.exports = {
    Queue
}
