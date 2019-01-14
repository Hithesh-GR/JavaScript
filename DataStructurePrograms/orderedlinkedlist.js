/******************************************************************************
 *  @Purpose        : Read a List of Numbers from a file and arrange it ascending Order in a Linked list
                      Take user input for a number, if found then pop the number out of the list else 
                      insert the number in appropriate position.     
 *  @file           : orderedlinkedlist.js
 *  @overview       : We read a integer string from file then perform linked list operations and then we 
 *                    arrange it in sorted manner,we will search an integer if it is found then delete
 *                    it and if not found then add it.     
 *  @author         : HITHESH G R
 *  @version        : v8.15.0
 *  @since          : 11-01-2019
 ******************************************************************************/
var fs = require('fs');
var Utility=require('../utility/Utility');
var order=require('../DataStructurePrograms/utility/orderedlist');
var data = fs.readFileSync('test1.txt');
data= data.toString().split(' ');

function orderedlinkList()
{ 
    /**
    * here we read the input from user that input function stored in utility.
    */
    var read=Utility.input();
    read.question("Enter the element to be searched: ", 
    function(num)
    {
        /**
         * Validating the element which should not accept any string value.
         */
        if((num>='a' && num<='z')|| (num>='A' && num<='Z'))
        {
            console.log("plz enter integers only..")
        }
        else
        order.orderedList(data,num);
        read.close();
    });
}
orderedlinkList();