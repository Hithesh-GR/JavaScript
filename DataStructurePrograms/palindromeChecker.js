var Utility=require('../utility/Utility');
var dequeue=require('../DataStructurePrograms/utility/checkerDeque.js');
/******************************************************************************
 *  @Purpose        : A palindrome is a string that reads the same forward and backward,
                      forexample,radar,toot,and madam. We would like to construct an 
                      algorithm to input a string of characters and check whether it is a 
                      palindrome.    
 *  @file           : palindromeChecker.js
 *  @overview       : we will take dequeue here to check a string of character from left to 
                      right and then pop the characters from front and rear and if it matches 
                      then its a pallindrome otherwise its not a pallindrome.    
 *  @author         : HITHESH G R
 *  @version        : v8.15.0
 *  @since          : 11-01-2019
 ******************************************************************************/
function palindromeChecker(){
    /**
     * here we read the input from user that input function stored in utility.
     */
    var read=Utility.input();
    read.question("Enter a string: ",function(str){
        if(str>='a' && str<='z'||str>='A' && str>='Z'){
            dequeue.Palindrome(str);    
        }
        /**
         * check if string is empty
         */
        else if(str==""){
            console.log("Plz enter a string....");
        }
        /**
         * check if its not an charcter string it will print error msg
         */
        else {
            console.log("Plz enter a character string only...");
        }
        read.close();
    });
}
palindromeChecker();