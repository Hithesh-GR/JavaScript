/*
*@purpose : generate the insertion sort array for given array
*@parameter  : res-array
*@description: take array,arrange elements according size using insertion sort,and return the result
*/
var Utility=require('../utility/Utility');
var readline=require('readline-sync');
function insert()
{
  var arr = [];
  var res = Utility.inputArray(arr);
  var res1 = Utility.insertion(res);
  console.log(res1);
}
insert();