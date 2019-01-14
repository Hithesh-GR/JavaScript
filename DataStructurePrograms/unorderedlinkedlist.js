/******************************************************************************
 *  @Purpose        : Read the Text from a file, split it into words and arrange it as Linked List.
                      Take a user input to search a Word in the List. If the Word is not found then add it
                      to the list, and if it found then remove the word from the List. In the end save the
                      list into a file.      
 *  @file           : unorderedlinkedlist.js
 *  @overview       : We read a string from file then perform linked list operations and then we search 
                      elements from list if it is available then delete and if not available then add it.      
 *  @author         : HITHESH G R
 *  @version        : v8.15.0
 *  @since          : 11-01-2019
 ******************************************************************************/
var unorderedlist=require('../DataStructurePrograms/utility/unorderedlist');
var Utility=require('../utility/Utility');
var data = fileSystem.readFileSync('file.txt');
console.log("String read from file: \n\n"+data);
data= data.toString().toLocaleLowerCase().split(' ');
function unorderedList(){
    /**
     * here we read the input from user that input function stored in utility.
     */
    var read=Utility.input();
    read.question("Enter the element to search: \n",
    function(element){
        /**
         * Validating the element which should not accept any integer value.
         */
        if(element>='a' && element<='z'||element>='A' && element<='Z'){
            unorderedlist.unorderedList(data,element); 
        }
        else{
            console.log("plz enter a string...");
        }
        read.close();
    });  
}
unorderedList();