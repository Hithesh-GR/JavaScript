/******************************************************************************
 *  @Purpose        : total random number needed to have all distinct numbers
 *  @file           : coupunNum.js
 *  @overview       : Given N distinct Coupon Numbers, how many random numbers do you need to generate 
                      distinct coupon number? This program simulates this random process.
 *  @author         : HITHESH G R
 *  @version        : v8.15.0
 *  @since          : 03-01-2019
 ******************************************************************************/
var Utility=require('../utility/Utility');
var readline=require('readline-sync');
function coupunNum()
{
    console.log("How many coupan number you wants");
    var l = readline.question();
    if(l>=0)
    Utility.coupan(l);//calling of Coupan method.
    else
    console.log("Please enter correct Number");
}
coupunNum(); 