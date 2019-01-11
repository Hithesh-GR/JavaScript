/******************************************************************************
 *  @Purpose        : To read in 2D arrays of booleans,integers or doubles and print them out   
 *  @file           : 2Darray.js
 *  @overview       :  to take elements from user for integer,double or boolean and print it in 2D array.
 *  @author         : HITHESH G R
 *  @version        : v8.15.0
 *  @since          : 03-01-2019
 ******************************************************************************/
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