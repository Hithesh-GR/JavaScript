var Utility=require('../utility/Utility');
var readline=require('readline-sync');
function vendingM()
{
    
        var val=readline.question("enter amoumt :");
        //console.log(val);
        Utility.vending(val,0,0);
}

vendingM();