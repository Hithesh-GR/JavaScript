var Utility=require('../utility/Utility');
 var readline=require('readline-sync');
function triplets()
{
    var arr=[];
    var a=Utility.inputArray(arr);
    console.log(a);
    Utility.tripple(a);
}
return triplets(); 