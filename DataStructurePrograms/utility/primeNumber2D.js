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
module.exports = {
/**
 * exports:if a object that get exposed to a module and it is by default in every js file.
 */
/*checkPrime(min1, max1) {
    let size = (Math.floor(max1 / 100) + 1);
    let range = Math.floor(min1 / 100);
    let arr1 = [];
    if (min1 == 0 || min1 == 1) {
        min = 2;
    }
    else {
        min = min1;
    }
    if (min1 == 0 && max1 > 100) {
        max = 100;
    }
    else if (max1 < 100) {
        max = max1;
    }
    else {
        max = ((range + 1) * 100);
    }
    for (let index = range + 1; index <= size; index++) {
        if ((max - min) <= 100 && max <= max1 && (max - min) != 0) {
            let prime = new Array();
            for (let i = min; i <= max; i++) {
                let count = 0;
                for (let j = 1; j <= i; j++) {
                    if (i % j == 0) {
                        count++;
                    }
                }
                if (count <= 2) {
                    prime.push(i);
                }
            }
            arr1.push(prime);
            if (max1 - max < 100) {
                range = Math.floor(min / 100);
                min = (min + ((range + 1) * 100) - min);
                max = max1;
            }
            else {
                range = Math.floor(min / 100);
                min = (min + ((range + 1) * 100) - min);
                max = max + 100;
            }
        }
    }
    console.log('\n Prime Numbers in the given range are :'+arr1)
    console.log(arr1);
}*/
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