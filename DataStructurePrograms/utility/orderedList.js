/******************************************************************************
 *  Execution       :   1. default node         cmd> node fileName.js                 
 *  Purpose         : TO deploy all the business logic.
 *  @file           : orderedList.js
 *  @overview       : ALl the business logic bus be here.
 *  @module         : read-line modules are installed
 *  @author         : HITHESH G R
 *  @version        : v8.15.0
 *  @since          : 11-01-2019
 ******************************************************************************/
/*
* creating node function to create any new node with null values.
 */
function Node(element) { 
    this.element = element; 
    this.next = null; 
} 
function linkedList(){ 
    /**
     * refernces for each function used in linkedlist operations.
     */
    this.head = new Node("head"); 
    this.find = find; 
    this.insert = insert; 
    this.remove = remove; 
    this.display = display; 
    this.findPrevious = findPrevious; 
    this.remove = remove;
    this.search=search;
    this.size=size;
    this.getValue=getValue;
    this.searchNumber=searchNumber;
    this.insertPosition=insertPosition;
} 
function find(item) { 
    /**
     * find each item if available.
     */
    var currentNode = this.head; 
    while (currentNode.element != item ) { 
        currentNode = currentNode.next; 
    } 
    return currentNode;
} 
/*
* insert an item into the file
*/
function insert(newElement, item) {
    /**
     * creating a new node-Node. 
     **/ 
    var newNode = new Node(newElement); 
    var current = this.find(item); 
    newNode.next = current.next; 
    current.next = newNode; 
}
function display() { 
    /**
     * display the updated string of integer. 
     **/
    var currentNode = this.head; 
    while (!(currentNode.next == null)) {
        console.log(currentNode.next.element); 
        currentNode = currentNode.next; 
    } 
} 
function findPrevious(item) { 
    /**
     * find the previous item. 
     **/
    var currentNode = this.head; 
    while (!(currentNode.next == null) && (currentNode.next.element != item)) { 
        currentNode = currentNode.next; 
    } 
    return currentNode; 
} 
function remove(item) { 
    /**
     * remove the item from file. 
     **/
    var previousNode = this.findPrevious(item); 
    if(!(previousNode.next == null)) { 
        previousNode.next = previousNode.next.next; 
    } 
}
function search(values){ 
    /**
     * search item from the list and print it. 
     */
    var temp=this.head
    while(temp.element!=values && temp.next !=null){
        temp=temp.next;
    }
        console.log('element is\n'+temp.element)
    if(temp.element===values){
        return true; 
    }
    else {
        return false;
    }
}
function size(){
    /**
     * checks the size of integers from file 
     **/
    var temp=this.head;
    var count=0;
    while(temp.next!=null){
        temp=temp.next
        count++;
    }
    return count;
}
function getValue(){
    /**
     * returns the item value. 
     **/
    var temp=this.head;
    var a='';
    while (!(temp.next == null)){        
        temp=temp.next;
        a=a+temp.element;
        a=a+' '     
    }
return a;
}
function searchNumber(values){
    /**
     * searching the number of item. 
     **/
    var temp=this.head
    while((temp.element)!== values && temp.next !== null){
        temp=temp.next;   
    }
    if((temp.element)==values){
        return true;
    }
    else {
        return false;
    }
}
function insertPosition(values){ 
    /**
     * insert at specific position.
     */
    var newNode = new Node(values)  
    var current=this.head.next;
    var temp=this.head;
    while(current!=null&&(current.element)<newNode.element){  
        temp=current;
        current=current.next;
    }
    newNode.next=current;
    temp.next=newNode;
}
/**
 * exports if a object that get exposed to a module and it is by default in every js file.
 */
module.exports={
    orderedList: function (data,num) {
        /**
         * open file 
         **/
        var fileSystem = require('fs'); 
        var array = []
        for (var i = 0; i < data.length; i++) {
            var a = data[i]
            array.push(a);
        }
        array = array.sort(function (a, b) {
            return a - b;
        });
        /*
        * create a new list
        */
        var list = new linkedList();
        list.insert(array[0],'head')
        for (var i = 1; i < array.length; i++) {
            list.insert(array[i], array[i - 1])
        }
        list.display();
        var bool = list.searchNumber(num)
        if (bool) {
            /*
            * This condition checks for deleting the item,if item already exists in file
            */
            console.log('deleting....');
            list.remove(num);
            var a = list.getValue();
            console.log(a);
            fileSystem.writeFileSync('file1.txt', a.trim())
            console.log('deleted sucessfully..')
            process.exit();
        }
        else {
            /*
            * This condition checks for adding the item,if item not exists in file
            */
            console.log('adding....');
            list.insertPosition(num);
            var a = list.getValue();
            console.log(a)
            fileSystem.writeFileSync('file1.txt', a.trim());
            console.log('added sucessfully');
            process.exit();
        }
    }
}