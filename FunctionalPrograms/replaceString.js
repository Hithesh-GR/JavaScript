/******************************************************************************
 *  @Purpose        : User Input and Replace String Template“Hello<<UserName>>,How are you?”
 *  @file           : replaceString.js
 *  @overview       : diplayname takes the userinput and print it with some sentence
 *  @author         : HITHESH G R
 *  @version        : v8.15.0
 *  @since          : 03-01-2019
 ******************************************************************************/

var Utility=require('../utility/Utility');
var readline=require('readline-sync');
function replace()
{
    var a=readline.question("Enter your name");
    Utility.replace(a);
}
return replace();
 
    