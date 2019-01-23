/******************************************************************************
 *  Execution       :   1. default node         cmd> node fileName.js                 
 *  Purpose         : TO deploy all the business logic.
 *  @file           : cardsQueueLinkedList.js
 *  @overview       : ALl the business logic bus be here.
 *  @module         : read-line modules are installed
 *  @author         : HITHESH G R
 *  @version        : v8.15.0
 *  @since          : 18-01-2019
 ******************************************************************************/
class Queue {
    constructor() {
        this.items = [];
    }
    enQueue(element) {
        return this.items.push(element);
    }
    deQueue() {
        if (this.isEmpty())
            return "underflow";
        return this.items.shift();
    }
    front() {
        if (this.isEmpty())
            return "No elements in the queue";
        return this.items[0];
    }
    isEmpty() {
        return this.items.length == 0;
    }
    len() {
        return this.items.length;
    }
    printQueue() {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + "|";
        return str;
    }
}
module.exports = Queue;