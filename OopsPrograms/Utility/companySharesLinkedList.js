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
/**
* creating node function to create any new node with null values.
*/
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
/**
 *  creating class linkedlist which will create new nodes and perform operation like 
 *  add,remove,insertFirst,insert.
 */
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
    /**
    * checks the items present in the file
    */
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
    /**
    * get the data from file
    */
    get(index) {
        var current = this.head;
        var count = 0;
        /** 
        * index of Node we are currently looking at 
        */
        while (current != null) {
            if (count == index)
                return current.data;
            count++;
            current = current.next;
        }
    }
    /**
    * remove the item from file
    */
    deleteList() {
        return this.head = null;
    }
    /**
    * remove the string or element,if it already exists
    */
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
    /*
    * delete first item from file
    */
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
/**
 * exports if a object that get exposed to a module and it is by default in every js file.
 */
module.exports = {
    LinkedList
}