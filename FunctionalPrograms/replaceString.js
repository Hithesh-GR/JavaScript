
var Utility=require('../utility/Utility');
 var readline=require('readline-sync');
function replace()
{
    var a=readline.question("Enter your name");
    Utility.replace(a);
}
return replace();
 
    