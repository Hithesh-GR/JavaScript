var Utility=require('../utility/Utility');
var readline=require('readline-sync');
function mergesort()
{
    var arr=[];
    var res1=Utility.inputArray(arr);
    var res2=Utility.mergeSort(res1);
    console.log("Merge sorted result ",+res2);
}
mergesort();
