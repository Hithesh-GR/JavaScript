var Utility=require('../utility/Utility');
 var readline=require('readline-sync');
function permutation()
{
var r=readline.question("Enter a word whose permutations you want to find: ");
Utility.getAllPermutations(r);
}
permutation(); 