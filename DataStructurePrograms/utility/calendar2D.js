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
        // ensure year is of four digit
    
        //condition for checking leap 
        if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
            return true;
        }
        else{
            return false;
        }
    },
    /*isLeapYear(year) {
        if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
            return "";
        }
        else {
            return "not";
        }
    },*/
    /*day( month, day, year) {
        let y = year - Math.floor((14 - month) / 12);
        let  x = Math.floor(y + y/4 - y/100 + y/400);
        let m = month + Math.floor(12 * ((14 - month) / 12) - 2);
        let d = Math.floor((day + x + (31*m)/12) % 7);
        return d;
    },*/
    day(day, month, year) {
        var y0 = year - Math.floor((14 - month) / 12);
        var x = y0 + Math.floor((y0 / 4)) - Math.floor((y0 / 100)) + Math.floor((y0 / 400));
        m0 = month + 12 * Math.floor((14 - month) / 12) - 2;
        var d0 = (day + x + Math.floor((31 * m0) / 12)) % 7;
        //console.log(d0);
        return d0;
    },
}
