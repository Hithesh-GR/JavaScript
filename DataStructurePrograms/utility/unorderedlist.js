/******************************************************************************
 *  Execution       :   1. default node         cmd> node fileName.js                 
 *  Purpose         : TO deploy all the business logic.
 *  @file           : unorderedlist.js
 *  @overview       : ALl the business logic bus be here.
 *  @module         : read-line modules are installed
 *  @author         : HITHESH G R
 *  @version        : v8.15.0
 *  @since          : 11-01-2019
 ******************************************************************************/
/**
 * creating a class node to create any new node with null values.
 */
class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}
/**
 *  creating class linkedlist which will create new nodes and perform operation like 
 *  add,remove,insertAt,insertFrom.
 */
class linkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    add(element) {
      /**
       * creating a new node
       */
        var node = new Node(element);
        /**
         * to store current node 
         **/
        var current;
        /**
         * if list is empty add an element and make it head. 
         **/
        if (this.head == null){
            this.head = node;
        }
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }   
            current.next = node;
        }
        this.size++;
    }
    /*
    * insert the string into file
    */
    insertAt(element, index) {
        if (index > 0 && index > this.size){
            return false;
        }
        else {    
            var node = new Node(element);
            var current, previous;
            current = this.head;
            /**
             * add element to first index 
             **/
            if (index == 0) {
                node.next = head;
                this.head = node;
            }
            else {
                current = this.head;
                var iteration = 0; 
                while (iteration < index) {
                    iteration++;
                    previous = current;
                    current = current.next;
                }
                /** 
                 * adding an element 
                 **/ 
                node.next = current;
                previous.next = node;
            }
            this.size++;
        }
    }
    /*
    * remove the item from file
    */
    removeFrom(index) {
        /**
         * remove element from given index  
         **/
        if (index > 0 && index > this.size){
            return -1;
        }
        else {
            var current, previous, iteration = 0;
            current = this.head;
            previous = curr;
            /**
             * deleting first element 
             **/ 
            if (index === 0) {
                this.head = current.next;
            }
            else {
                while (iteration < index) {
                    iteration++;
                    previous = current;
                    current = current.next;
                }
                /** 
                 * remove the element */ 
                previous.next = current.next;
            }
            this.size--;
            /**
             *  return the remove element */
            return current.element;
        }
    }
    /* 
    * remove the string or element,if it already exists
    */
    removeElement(element) {
        var current = this.head;
        var previous = null;
        while (current != null) {
            if (current.element === element) {
                if (previous == null) {
                    this.head = current.next;
                } 
                else {
                    previous.next = current.next;
                }
                this.size--;
                return current.element;
            }
            previous = current;
            current = current.next;
        }
        return -1;
    }
    /*
    * checks the index value
    */
    indexOf(element) {
        var count = 0;
        var current = this.head;
        while (current != null) {      
            if (current.element === element){
                return count;
            }
            count++;
            current = current.next;
        }
       /** 
        *  not found */
        return -1;
    }
    /*
    checks if file is empty are not
    */
    isEmpty() {
        return this.size == 0;
    }
    /*
    checks the string size in file
    */
    sizeOflist() {
        //console.log(this.size);
        return this.size;
    }
    printList() {
        /**
         * print the given list after performing changes.
         */
        var current = this.head;
        var string = "";
        while (current) {
            string += current.element+" ";
            current = current.next;
        }
        console.log(string);
        return string;
    }
}
/**
* open file 
**/
fileSystem = require('fs');
/**
 * exports if a object that get exposed to a module and it is by default in every js file.
 */
module.exports = {
    unorderedList(array, element) {
        /*
        * create a new list
        */
        var list = new linkedList();
        for (var i = 0; i < array.length; i++) {
            list.add(array[i]);
        }  
        /*
        * This condition checks for adding the item,if item not exists in file
        */
        if (list.indexOf(element) == -1) {
            list.add(element);
            console.log("Added successfully..\n");
        }
        /*
        * This condition checks for removing the item,if item already exists in file
        */
        else {
            list.removeElement(element);
            console.log("Removed successfully....\n");
        }  
        /**
         * write operation to save updated list into the file.
         */
        var dataWrite=list.printList();
        fileSystem.writeFileSync("/home/admin1/HitheshGR/DataStructurePrograms/file.txt",dataWrite); 
    }
}