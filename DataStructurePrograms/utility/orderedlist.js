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
/*
* creating node function to create any new node with null values.
 */
function Node(element) { 
    this.element = element; 
    this.next = null; 
} 
function linkedList(){ 
    /**
     * refernces for each function used in linked list operations.
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
    this.numGetvalue=numGetvalue;
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
function insert(newElement, item) {
    /**
     * creating a new node-Node. */ 
    var newNode = new Node(newElement); 
    var current = this.find(item); 
    newNode.next = current.next; 
    current.next = newNode; 
}
function display() { 
    /**
     * display the updated string of integer. */
    var currentNode = this.head; 
    while (!(currentNode.next == null)) {
        console.log(currentNode.next.element); 
        currentNode = currentNode.next; 
    } 
} 
function findPrevious(item) { 
    var currentNode = this.head; 
    while (!(currentNode.next == null) && (currentNode.next.element != item)) { 
        currentNode = currentNode.next; 
    } 
    return currentNode; 
} 
function remove(item) { 
    var previousNode = this.findPrevious(item); 
    if(!(previousNode.next == null)) { 
        previousNode.next = previousNode.next.next; 
    } 
}
function search(values){ 
    /**
     * search element from list and print it. 
     */
    var temp=this.head
    while(temp.element!=values && temp.next !=null){
        temp=temp.next;
    }
        console.log('element is'+temp.element)
    if(temp.element===values){
        return true; 
    }
    else {
        return false;
    }
}
function size(){
    var temp=this.head;
    var count=0;
    while(temp.next!=null){
        temp=temp.next
        count++;
    }
    return count;
}
function getValue(){
    var temp=this.head;
    var a='';
    while (!(temp.next == null)){        
        temp=temp.next;
        a=a+temp.element;
        a=a+' '     
    }
return a;
}
function numGetvalue(){
    var temp=this.head;
    var a='';
    while(!(temp.next==null)){
        temp=temp.next;
        a=a+temp.element
        a=a+' '
    }
return a;
}
function searchNumber(values){
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
module.exports={
    orderedList: function (data,num) {
        /**
         * open file */
        var fileSystem = require('fs'); 
        var arr1 = []
        for (var i = 0; i < data.length; i++) {
            var a = data[i]
            arr1.push(a);
        }
        arr1 = arr1.sort(function (a, b) {
            return a - b;
        });
        var l = new linkedList();
        l.insert(arr1[0],'head')
        for (var i = 1; i < arr1.length; i++) {
            l.insert(arr1[i], arr1[i - 1])
        }
        l.display()
        var bool = l.searchNumber(num)
        if (bool) {
            console.log('deleting....');
            l.remove(num);
            var a = l.numGetvalue();
            console.log(a);
            fileSystem.writeFileSync('file1.txt', a.trim())
            console.log('deleted sucessfully..')
            process.exit();
        }
        else {
            console.log('adding....');
            l.insertPosition(num);
            var a = l.numGetvalue();
            console.log(a)
            fileSystem.writeFileSync('file1.txt', a.trim());
            console.log('added sucessfully');
            process.exit();
        }
    }
}