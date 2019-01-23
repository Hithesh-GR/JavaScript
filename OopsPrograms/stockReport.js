/******************************************************************************
 *  @Purpose        : To print the Stock Report.      
 *  @file           : stockReport.js
 *  @overview       : N number of Stocks, for Each Stock Read In the Share Name, 
                      Number of Share, and Share Price and calculate for each stock 
                      and total stock value.
 *  @author         : HITHESH G R
 *  @version        : v8.15.0
 *  @since          : 18-01-2019
 ******************************************************************************/
var prompt = require('prompt-sync')();//node-module prompt-sync
//var fs = require('fs');
/**
 * read file from json
 */
var data = require('../OopsPrograms/JSONfiles/stockReport.json', "utf8");
console.log(" data-->\n", data);
function stackReport() {
    console.log("Stocks Names-->");
    console.log("1: Google ");
    console.log("2: Microsoft");
    console.log("3: Apple");
    /*
    * enter choices to select inventory
    */
    var choice = prompt("Please enter your choice: ");
    /*
    * parse option to integer only
    */
    switch (parseInt(choice)) {
        case 1:
            console.log("Price per share in Google is: " + data.Stock[0].price);
            var share = prompt("Please enter the number of shares you want to purchase: ");
            if (!isNaN(share)) {
                var total = share * data.Stock[0].price;
                /**
                 * calculate total shares and print the price
                 */
                console.log("Per Stock in " + data.Stock[0].stockName + " is sold for Rs." + data.Stock[0].price + " and for " + share + " shares the price would be Rs." + total);
            }
            else {
                console.log("please enter integers only!");
            }
            break;
        case 2:
            console.log("Price per share in Microsoft is: " + data.Stock[1].price);
            var share = prompt("Please enter the number of shares you want to purchase: ");
            if (!isNaN(share)) {
                var total = share * data.Stock[1].price;
                /**
                 * calculate total shares and print the price
                 */
                console.log("Per Stock in " + data.Stock[1].stockName + " is sold for Rs." + data.Stock[1].price + " and for " + share + " shares the price would be Rs." + total);
            }
            else {
                console.log("please enter integers only!");
            }
            break;
        case 3:
            console.log("Price per share in Apple is: " + data.Stock[2].price);
            var share = prompt("Please enter the number of shares you want to purchase: ");
            if (!isNaN(share)) {
                var total = share * data.Stock[2].price;
                /**
                 * calculate total shares and print the price
                 */
                console.log("Per Stock in " + data.Stock[2].stockName + " is sold for Rs." + data.Stock[2].price + " and for " + share + " shares the price would be Rs." + total);
            }
            else {
                console.log("please enter integers only!");
            }
            break;
        /**
         * validating a number choice
         */
        default:
            console.log("Please select a valid choice!!");
    }
    /**
     * print the total price of all the stocks
     */
    console.log("The total price of all the stocks is " + (data.Stock[0].price + data.Stock[1].price + data.Stock[2].price));
}
stackReport();