var Utility=require('../utility/Utility');
var readline=require('readline-sync');
function prime()
{
    var num = readline.question("Enter the range");
    Utility.primeNum(num);
} 
prime();