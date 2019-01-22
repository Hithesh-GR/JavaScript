/*************************************************************************************************
 *  @Purpose        :     
 *  @file           : stockAccount.js
 *  @overview       : 
 *  @author         : HITHESH G R
 *  @version        : v8.15.0
 *  @since          : 18-01-2019
 ***************************************************************************************************/
var fs = require('fs');
var prompt = require('prompt-sync')();
var company = require('../OopsPrograms/Utility/utility.js');
var util=require('util');
let data = fs.readFileSync('/home/admin1/HitheshGR/OopsPrograms/JSONfiles/commercial.json');
var list = JSON.parse(data);
//var list=new  company(data);
class companyShares {
    constructor(stockname, numberofshare, shareprice) {
        /**
         * creating an object for stockname,numberofshare & shareprice 
         */
        this.stockname = stockname;
        this.numberofshare = numberofshare;
        this.shareprice = shareprice;
    }
    /**
     * to buy shares
     */
    buy() {     
        /**
         * add shares of stock to account 
         */
        var stock = prompt('enter number of stocks: ');
        for (var i = 1; i <= stock; i++) {
            var name = prompt('enter the name: ');
            var number = prompt('enter the number of share: ');
            var price = prompt('enter the price: ');
            var object={
                name:name,
                number:number,
                price:price
            }
            var z=util.inspect(object);
            list.add(z);
             list.printList();
        }
     }
    /**
     * logic for selling
     */
    sell() 
    {    /**
          * subtract shares of stock from account 
          */
         i = prompt('which index u want to sell ? : ');
         list.removeFrom(i);
        //console.log(k);
        list.printList();
     }
    }
var obj = new companyShares();
while (1) {
    console.log('1.Buy the  Stocks');
    console.log('2.Sell the Stocks');/**print all the choices to user */
    console.log('3.Exit ');
    var choice = prompt('choose an option to perform desired operation :');
    switch (choice) {
        /**
         * switch case implementation to perform the required operation
         */
        case '1': obj.buy();
            break;
        case '2': obj.sell();
            break;
        case '3': process.exit();
            break;
        }
}