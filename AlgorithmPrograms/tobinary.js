var Utility=require('../utility/Utility');
var readline=require('readline-sync');
function tobinary()
{
 var num=readline.question("Enter your decimal value ");
  var res=Utility.tobin(num);
  console.log("convertes form ",res);
}
tobinary();