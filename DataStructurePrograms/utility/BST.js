/******************************************************************************
 *  Execution       :   1. default node         cmd> node fileName.js                 
 *  Purpose         : TO deploy all the business logic.
 *  @file           : BST.js
 *  @overview       : ALl the business logic bus be here.
 *  @module         : read-line modules are installed
 *  @author         : HITHESH G R
 *  @version        : v8.15.0
 *  @since          : 11-01-2019
 ******************************************************************************/
var read = require('readline-sync');
/**
* exports:if a object that get exposed to a module and it is by default in every js file.
**/
module.exports = {
binomialCoeff(n, k) {
    var res = 1;
    // Since C(n, k) = C(n, n-k) 
    if (k > n - k) {
        k = n - k;
    }
    /*
    * Calculate value of  [n*(n-1)*---*(n-k+1)] [k*(k-1)*---*1] 
    */
    for (let i = 0; i < k; ++i) {
        res = res * (n - i);
        res = Math.floor(res / (i + 1));
    }
    return res;
},
inputread() {
    var indices = read.question("");
    return indices;
},
/**
 * A Binomial coefficient based method to find nth catalan number  
 */
catalan(n) {
    // Calculate value of 2nCn 
    var c = this.binomialCoeff(2 * n, n);
    var z = parseInt(n);
    var s = c / (z + 1);
    return s;
},
/**
 * A function to count number of  BST with n nodes using catalan number
 */
countBST(n) {
    // find nth catalan number 
    let count = this.catalan(n);

    // return nth catalan number 
    return count;
} 
}
