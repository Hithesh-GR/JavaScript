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