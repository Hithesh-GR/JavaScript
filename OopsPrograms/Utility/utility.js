/******************************************************************************
 *  Execution       :   1. default node         cmd> node fileName.js                 
 *  Purpose         : TO deploy all the business logic.
 *  @file           : utility.js
 *  @overview       : ALl the business logic bus be here.
 *  @module         : read-line modules are installed
 *  @author         : HITHESH G R
 *  @version        : v8.15.0
 *  @since          : 18-01-2019
 ******************************************************************************/
module.exports =
    {
        /**
         * 
         * @param {*} alphabet 
         */
        sort(alphabet) {
            return function (a, b) {
                var index_a = alphabet.indexOf(a[0]);
                index_b = alphabet.indexOf(b[0]);
                if (index_a == index_b) {
                    /**
                     * same first character, sort regular
                     */
                    if (a < b) {
                        return -1;
                    }
                    else if (a > b) {
                        return 1;
                    }
                    return 0;
                }
                else {
                    return index_a - index_b;
                }
            }
        }
    }

