/******************************************************************************
 *  Execution       :   1. default node         cmd> node fileName.js                 
 *  Purpose         : TO deploy all the business logic.
 *  @file           : companySharesLinkedList.js
 *  @overview       : ALl the business logic bus be here.
 *  @module         : read-line modules are installed
 *  @author         : HITHESH G R
 *  @version        : v8.15.0
 *  @since          : 18-01-2019
 ******************************************************************************/
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    /**
     * adds an data at the end of list 
     */
    add(data) {
        /**
         * creates a new node 
         */
        var node = new Node(data);
        /**
         * to store current node
         */ 
        var current;
        /**
         * if list is Empty add the data and make it head
         */ 
        if (this.head == null)
            this.head = node;
        else {
            current = this.head;
            /**
             * iterate to the end of the list
             */ 
            while (current.next) {
                current = current.next;
            }
            /**
             *  add node 
             */
            current.next = node;
        }
        this.size++;
    }
    /**
     *  prints the list items
     */ 
    printList() {
        var curr = this.head;
        var str = [];
        while (curr) {
            str.push(curr.data);
            curr = curr.next;
        }
        console.log(str);
    }
    /**
     * prints the list items and copy it to a string
     */
    printList1() {
        var curr = this.head;
        var str = [];
        while (curr) {
            str.push(curr.data);
            curr = curr.next;
        }
        return str;
    }
    /**
     * finds the index of data
     */ 
    indexOf(data) {
        var count = 0;
        var current = this.head;
        //console.log('DATA IS :',data);
        /**
         * iterae over the list
         */ 
        while (current != null) {
            /**
             * compare each data of the list with given data
             */ 
            if (current.data === data)
                return count;
            count++;
            current = current.next;
        }
        // not found 
        return -1;
    }
    search(str) {
        var current = this.head;   //Initialize current 
        while (current != null) {
            if ((current.data) === str)
                return true;    //data found 
            current = current.next;
        }
        return false;    //data not found 
    }
    /**
     * removes an data from the specified location
     */ 
    removeFrom(index) {
        if (index > 0 && index > this.size)
            return -1;
        else {
            var curr, prev, iterator = 0;
            curr = this.head;
            prev = curr;
            /**
             * deleting first data
             */ 
            if (index === 0) {
                this.head = curr.next;
            }
            else {
                /**
                 * iterate over the list to the position to removce an data
                 */ 
                while (iterator < index) {
                    iterator++;
                    prev = curr;
                    curr = curr.next;
                }
                /**
                 * remove the data
                 */ 
                prev.next = curr.next;
            }
            this.size--;
            return curr.data;// return the remove data
        }
    }
    /**
     * gives the size of the list
     */ 
    listSize() {
        return this.size;
    }
    get(index) {
        var current = this.head;
        var count = 0; /* index of Node we are 
                          currently looking at */
        while (current != null) {
            if (count == index)
                return current.data;
            count++;
            current = current.next;
        }
    }
    deleteList() {
        return this.head = null;
    }
    popIndex(index) {
        if (index < 0) {
            console.log("please enter correct index");
            return false;
        }
        else if (index == 1) {
            this.deleteFirst();
            return;
        }
        var curr = this.head, pre = curr, c = 0;
        while (curr) {
            if (c == index - 1) {
                pre.next = curr.next;
                this.size--;
                return curr.data;
            }
            c++;
            pre = curr;
            curr = curr.next;
        }
        return null;
    }
    deleteFirst() {
        if (this.head == null) {
            console.log("Linked List empty");
            return;
        }
        var n = this.head.data;
        this.head = this.head.next;
        this.size--;
        return n;
    }
}
module.exports =
    {
        LinkedList
    }