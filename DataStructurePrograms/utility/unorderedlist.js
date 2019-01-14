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
class Node 
{
    constructor(element) 
    {
        this.element = element;
        this.next = null;
    }
}
/**
 * creating class linkedlist which will create new nodes and perform operation like 
 *  add,remove,insertAt,insertFrom.
 */
class linkedList 
{
    constructor() 
    {
        this.head = null;
        this.size = 0;
    }
    add(element) {
      /**
       * creating a new node
       */
        var node = new Node(element);
        /**
         * to store current node */
        var current;
        /**
         * if list is empty add an element and make it head. */
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
    insertAt(element, index) {
        if (index > 0 && index > this.size){
            return false;
        }
        else {    
            var node = new Node(element);
            var current, previous;
            current = this.head;
            /**
             * add element to first index */
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
                /** adding an element */ 
                node.next = current;
                previous.next = node;
            }
            this.size++;
        }
    }
    removeFrom(index) {
        /**
         * remove element from given index  */
        if (index > 0 && index > this.size){
            return -1;
        }
        else {
            var current, previous, iteration = 0;
            current = this.head;
            previous = curr;

            /** deleting first element */ 
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
    isEmpty() {
        return this.size == 0;
    }
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
    getNth(index) {       
        var  current = this.head; 
        var count = 0; 
        while (current != null) { 
            if (count == index) {
                return current.element; 
                count++; 
                current = current.next; 
            }
        } 
        return 0; 
    }
}
fileSystem = require('fs');
module.exports = {
    unorderedList(array, element) {
        var l = new linkedList();
        for (var i = 0; i < array.length; i++) {
            l.add(array[i]);
        }  
        if (l.indexOf(element) == -1) {
            l.add(element);
            //l.printList();
            console.log("added successfully..\n");
        }
        else {
            l.removeElement(element);
            //l.printList();
            console.log("Removed successfully....\n");
        }  
        /**
         * write operation to save updated list into the file.
         */
        var dataWrite=l.printList();
        fileSystem.writeFileSync("/home/admin1/HitheshGR/DataStructurePrograms/file.txt",dataWrite); 
    }
}