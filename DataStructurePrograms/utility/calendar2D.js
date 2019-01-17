/******************************************************************************
 *  Execution       :   1. default node         cmd> node fileName.js                 
 *  Purpose         : TO deploy all the business logic.
 *  @file           : calendar2D.js
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
    isLeapYear(year) {
        if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
            return "";
        }
        else {
            return "not";
        }
    },
    /*isLeapYear(year) 
    {
        if  ((year % 4 == 0) && (year % 100 != 0)) {
            return true;
        }
        if  (year % 400 == 0) {
            return true;
        }
        return false;
    },*/
    day( month, day, year) {
        let y = year - Math.floor((14 - month) / 12);
        let  x = Math.floor(y + y/4 - y/100 + y/400);
        let m = month + Math.floor(12 * ((14 - month) / 12) - 2);
        let d = Math.floor((day + x + (31*m)/12) % 7);
        return d;
    },
}
