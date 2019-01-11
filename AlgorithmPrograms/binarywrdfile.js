/*
* @purpose: method take file values and strings
*/
var Utility=require('../utility/Utility');
var readline=require('readline-sync');
function binarysearchwrdfrmfile()
{
  var res=Utility.fileCall();
  var res1=res.sort();
  console.log(res1);
  var target=readline.question("Enter the word do you want to search \n");
  var high=res1.length-1;
  var low=0;
  var ab=Utility.binarySearch(res1,low,high,target);
  console.log("your word present at the index:  "+ab);
}
binarysearchwrdfrmfile();
