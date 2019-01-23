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
class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }
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
    display() {
        var curr = this.head;
        while (curr) {
            console.log(curr.data);

            curr = curr.next;
        }
    }
    isEmpty() {
        return this.head == null;
    }
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
    displayReverse(head) {
        var show = require('util');
        if (head == null)
            return;

        this.displayReverse(head.next);
        show.print(head.data);
        if (head.next != head)
            show.print("-->");
    }
    getHead() {
        return this.head;
    }
}
module.exports = {
    Queue
}
