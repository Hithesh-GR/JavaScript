/******************************************************************************
 *  @Purpose        : To Check if the arrays returned by two string functions are equal.   
 *  @file           : permutation.js
 *  @overview       : to return all permutations of a string.
 *  @author         : HITHESH G R
 *  @version        : v8.15.0
 *  @since          : 03-01-2019
 ******************************************************************************/
var Utility=require('../utility/Utility');
 var readline=require('readline-sync');
function permutation()
{
var r=readline.question("Enter a word whose permutations you want to find: ");
Utility.getAllPermutations(r);
}
permutation(); 
