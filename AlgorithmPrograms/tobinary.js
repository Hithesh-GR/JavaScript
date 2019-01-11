/*
* @purpose : calculate the binary value 
* @description : take decimal value from user and convert that into binary value 
*/
var Utility=require('../utility/Utility');
var readline=require('readline-sync');
function tobinary()
{
 var num=readline.question("Enter your decimal value ");
  var res=Utility.tobin(num);
  console.log("convertes form ",res);
}
tobinary();