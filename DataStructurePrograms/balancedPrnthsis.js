var Utility=require('../utility/Utility');
var simpleBP=require('../DataStructurePrograms/utility/SBP.js');
/******************************************************************************
 *  @Purpose        : Take an Arithmetic Expression such that parentheses are used 
                      to order the performance of operations.Ensure parentheses must 
                      appear in a balanced fashion.    
 *  @file           : balancedPrnthsis.js
 *  @overview       : We will take an expression then if the brace opens we will push 
                      elements using stack and while closeing we will pop the elements 
                      then will check if the parantheses is balanced or not and return 
                      true or false.      
 *  @author         : HITHESH G R
 *  @version        : v8.15.0
 *  @since          : 11-01-2019
 ******************************************************************************/
function simpleBalancedparenthesis()
{
    var read=Utility.input();
    read.question("Enter an expression:",function(expression){
        /*
         * if expression is null then print an error message.
         */
        if(expression==""){
            console.log("plz enter an expression");
        }
        else{
            simpleBP.balancedParenthesis(expression);
        }
        read.close();
    }); 
}
simpleBalancedparenthesis();
