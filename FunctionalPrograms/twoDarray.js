var Utility=require('../utility/Utility');
 var readline=require('readline-sync');
function twoD()
{
    var col=readline.question('Enter the required column number ');
    var row=readline.question('Enter the required row number ');
    var res=Utility.twoDarry(row,col);

console.log(res)
}
twoD(); 