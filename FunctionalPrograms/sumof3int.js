var Utility=require('../utility/Utility');
 var readline=require('readline-sync');
function triplets()
{
    var array=[];
    var arr=Utility.inputArray(array);
    console.log(arr);
    Utility.tripple(arr);
}
triplets(); 