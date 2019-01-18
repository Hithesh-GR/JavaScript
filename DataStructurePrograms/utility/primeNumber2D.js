/******************************************************************************
 *  Execution       :   1. default node         cmd> node fileName.js                 
 *  Purpose         : TO deploy all the business logic.
 *  @file           : primeNumber2D.js
 *  @overview       : ALl the business logic bus be here.
 *  @module         : read-line modules are installed
 *  @author         : HITHESH G R
 *  @version        : v8.15.0
 *  @since          : 11-01-2019
 ******************************************************************************/
/**
* exports:if a object that get exposed to a module and it is by default in every js file.
*/
module.exports = {
    /*
    * This condition will checks the prime numbers.
    */
    checkPrime(s1, s2) {
        var count = 0, flag = 0, k = 0;
        var array = [];
        for (var i = s1; i <= s2; i++) {
            for (var j = 2; j < i; j++) {
                if (i % j == 0) {
                    flag = 0;
                    count++;
                    break;
                }
                else {
                    flag = 1;
                }
            }
            if (flag == 1) {
                array[k++] = i;
            }
        }
        return array;
    }
}