/*
* @purpose : check the two strings are same or not
* @description : take two string from user and compare those, and prints the message 
               wheather they are anagram or not.
*/
var Utility=require('../utility/Utility');
var readline=require('readline-sync');
function anagram()
{
  var str=readline.question("Enter your first string ");
  var str1=readline.question("Enter your second string ");
  var result=Utility.isAnagram(str,str1);
  if(result)
  {
    console.log("String is Anagram ");
  }
  else{
    console.log("String is not an anagram");
  }

}
anagram();