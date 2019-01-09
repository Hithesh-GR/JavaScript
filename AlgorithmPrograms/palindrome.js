var Utility=require('../utility/Utility');
var readline=require('readline-sync');
function palindrome() 
{
    var num = readline.question("Enter the range");
    console.log("The Palindrome and Anagaram are present in that range")
    for (let i = 2; i < num; i++) 
    {
        if (Utility.isPrime(i) && Utility.palindrome(i)) 
        {
            console.log(i);
        }
    }
}
palindrome();