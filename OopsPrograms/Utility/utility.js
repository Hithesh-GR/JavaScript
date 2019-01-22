/******************************************************************************
 *  Execution       :   1. default node         cmd> node fileName.js                 
 *  Purpose         : TO deploy all the business logic.
 *  @file           : utility.js
 *  @overview       : ALl the business logic bus be here.
 *  @module         : read-line modules are installed
 *  @author         : HITHESH G R
 *  @version        : v8.15.0
 *  @since          : 11-01-2019
 ******************************************************************************/
//var filestream = require('fs');
//var readline = require('readline-sync');
//module.exports = {
class Node {
    // constructor
    constructor(element) {
        this.element = element;
        this.next = null
    }
}
// linkedlist class
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // functions to be implemented
    // add(element)
    // adds an element at the end
    // of list
    add(element) {
        // creates a new node
        var node = new Node(element);

        // to store current node
        var current;

        // if list is Empty add the
        // element and make it head
        if (this.head == null)
            this.head = node;
        else {
            current = this.head;

            // iterate to the end of  the list
            while (current.next) {
                current = current.next;
            }

            // add node
            current.next = node;
        }
        this.size++;
    }


    // insert element at the position index
    // of the list
    insertAt(element, index) {
        if (index > 0 && index > this.size)
            return false;
        else {
            // creates a new node
            var node = new Node(element);
            var curr, prev;

            curr = this.head;

            // add the element to the first index
            if (index == 0) {
                node.next = head;
                this.head = node;
            } else {
                curr = this.head;
                var it = 0;

                // iterate over the list to find
                // the position to insert
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                // adding an element
                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }
    // insertAt(element, location)
    // removeFrom(location)

    // removes an element from the
    // specified location
    removeFrom(index) {
        if (index > 0 && index > this.size)
            return -1;
        else {
            var curr, prev, it = 0;
            curr = this.head;
            prev = curr;

            // deleting first element
            if (index == 0) {
                this.head = curr.next;
            }
            else {
                // iterate over the list to the position to removce an element
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                // remove the element
                prev.next = curr.next;
            }
            this.size--;

            // return the remove element
            return curr.element;
        }
    }
    // removes a given element from the list
    removeElement(element) {
        var current = this.head;
        var prev = null;

        // iterate over the list
        while (current != null) {
            // comparing element with current element if found then remove the & return true
            if (current.element === element) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }

    // finds the index of element
    indexOf(element) {
        var count = 0;
        var current = this.head;

        // iterae over the list
        while (current != null) {
            // compare each element of the list with given element
            if (current.element == element)
                return count;
            count++;
            current = current.next;
        }

        // not found
        return -1;
    }

    isEmpty() {                    //it returns true if the ;ist is empty,otherwise it returns false
        return this.size == 0;
    }

    // removeElement(element)

    size_of_list() {                 //it gives the size of the list
        console.log(this.size);
    }
    printList() {                       //it prints all the elements present in the list
        var curr = this.head;
        var str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log(str);
    }
    printList1() {
        var curr = this.head;
        var str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        return str;
    }
    GetElement(index) {                   //it is used to get the element present in a particular index
        var current = this.head;
        var count = 0;                      /* index of Node we are currently looking at */
        while (current != null) {
            if (count == index)
                return current.element;
            count++;
            current = current.next;
        }

        /* if we get to this line, the caller was asking 
        for a non-existent element so we assert fail */

        return 0;
    }
    insertSort(element) {

        var node = new Node(element);

        /* Special case for head node */
        if (this.head == null || this.head.element >= node.element) {
            node.next = this.head;
            this.head = node;
        }
        else {
            /* Locate the node before point of insertion. */
            var current = this.head;

            while (current.next != null &&
                current.next.element < node.element)
                current = current.next;

            //  console.log(current.next.element);


            node.next = current.next;
            current.next = node;
        }

    }
}
    module.exports={
        LinkedList
    }


