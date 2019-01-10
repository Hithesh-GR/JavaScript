var Utility=require('../utility/Utility');
var readline=require('readline-sync');
function nibble()
{
        var num=readline.question("enter any key to show decimal value\n");
        var y=Utility.swap(num);
        console.log("Converted binary to decimal num is\n" +Utility.swap(y)); 
        //Utility.swap();
}
nibble();