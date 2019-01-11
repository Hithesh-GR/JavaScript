/******************************************************************************
 *  @Purpose        : To add the number is equal to 0   
 *  @file           : sumof3int.js
 *  @overview       :  A program with cubic running time. Read in N integers and counts the 
                        number   of   triples   that   sum   to   exactly   0.
 *  @author         : HITHESH G R
 *  @version        : v8.15.0
 *  @since          : 03-01-2019
 ******************************************************************************/
var Utility=require('../utility/Utility');
 var readline=require('readline-sync');
function triplets()
{
    var array=[];
    var arr=Utility.inputArray(array);
    console.log(arr);
    Utility.tripple(arr);
}
triplets(); 