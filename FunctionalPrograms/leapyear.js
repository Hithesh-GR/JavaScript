/******************************************************************************
 *  @Purpose        : To check if year is leap year or not.   
 *  @file           : leapyear.js
 *  @overview       : To take year from user which must be divisible by 4 and 400 and 
                        must not divisible by 100 if by 4 and print leap year.
 *  @author         : HITHESH G R
 *  @version        : v8.15.0
 *  @since          : 03-01-2019
 ******************************************************************************/
var Utility=require('../utility/Utility');
 var readline=require('readline-sync');
function leapyear()
{
    Utility.leap();
}
leapyear(); 