var Utility=require('../utility/Utility');
var readline=require('readline-sync');
function findnum()
{
var k=readline.question("Enter a number N, where N = 2^N");
var isPower= Utility.isPowerOfTwo(k);
 
if(isPower)
{
 var n = (Math.sqrt(k,2));

 if(n % 2 == 0)
 
 console.log("Think of an integer between 0 and "+ (k-1)); 
 var toFind = Utility.search(0, k);
  console.log("Your number is: " + toFind);
}
else
{
  console.log("Invalid Input");
} 
}
findnum();