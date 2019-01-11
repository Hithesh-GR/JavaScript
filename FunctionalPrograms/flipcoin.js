/******************************************************************************
 *  @Purpose        : To count percentage of heads and tails.
 *  @file           : flipcoin.js
 *  @overview       : To flip a coin N no. of times and randomly generate a number 
                        and print percentage of heads and tails  
 *  @author         : HITHESH G R
 *  @version        : v8.15.0
 *  @since          : 03-01-2019
 ******************************************************************************/
var Utility=require('../utility/Utility');
 var readline=require('readline-sync');
function coinflip()
{
    Utility.flipcoin();
}
coinflip(); 