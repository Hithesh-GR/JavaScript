/*
*@purpose : generate the bubble sort array  for given array
*@description: take array,arrange elements according size using bubble sort,and return the result
*/
var Utility=require('../utility/Utility');
var readline=require('readline-sync');
function bubblesort()
{
    var arr=[];
  var res=Utility.inputArray(arr);
 var res1=Utility.bubbleSort(res);
  console.log(res1);
}
bubblesort();