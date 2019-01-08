var Utility=require('../utility/Utility');
 var readline=require('readline-sync');
function coupunNum()
{
    console.log("How many coupan number you wants");
    var l = readline.question();
    if(l>=0)
    Utility.coupan(l);//calling of Coupan method.
    else
    console.log("Please enter correct Number");
}
coupunNum(); 