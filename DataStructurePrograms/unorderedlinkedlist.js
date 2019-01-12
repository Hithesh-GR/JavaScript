/******************************************************************************
 *  Execution       :   1. default node         cmd> node fileName.js                 
 *  Purpose         : TO deploy all the business logic.
 *  @file           : unorderedlinkedlist.js
 *  @overview       : ALl the business logic bus be here.
 *  @module         : read-line modules are installed
 *  @author         : HITHESH G R
 *  @version        : v8.15.0
 *  @since          : 11-01-2019
 ******************************************************************************/
var unorderedlist=require('../DataStructurePrograms/utility/unorderedlist');
var Utility=require('../utility/Utility');

var data = fs.readFileSync('test1.txt');
console.log("String read from file: "+data);
data= data.toString().toLocaleLowerCase().split(' ');
function unorderedlinkList()
{
    /**
     * here we read the input from user that input function stored in utility.
     */
    var read=Utility.input();
    read.question("Enter the element to search: ",function(ele)
    {
        /**
         * Validating the element which should not accept any integer value.
         */
        if(ele>='a'&&ele<='z'||ele>='A'&&ele<='Z')
        {
            unorderedlist.unorderedList(data,ele); 
        }
        else
        console.log("plz enter a string...");
        read.close();
    } 
    );  
}
unorderedlinkList();