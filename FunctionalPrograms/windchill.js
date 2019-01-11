/******************************************************************************
 *  @Purpose        : To find windchill through command line   
 *  @file           : windchill.js
 *  @overview       : Given the temperature t (in Fahrenheit) and the wind speed v (in miles per hour),
                      the National Weather Service defines the effective temperature (the wind chill) 
                       to be calculated.      
 *  @author         : HITHESH G R
 *  @version        : v8.15.0
 *  @since          : 03-01-2019
 ******************************************************************************/
var Utility=require('../utility/Utility');
var readline=require('readline-sync');
function windchill()
{
    Utility.wind();
}
return windchill();