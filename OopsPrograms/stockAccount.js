/*************************************************************************************************
 *  @Purpose        : To create the JSON from Inventory Object and output the JSON String.      
 *  @file           : stockAccount.js
 *  @overview       : To Extend the inventory program to Create InventoryManager to manage the Inventory.
                      The Inventory Manager will use InventoryFactory to create Inventory Object from JSON.
                      The InventoryManager will call each Inventory Object in its list to calculate the Inventory
                      Price and then call the Inventory Object to return the JSON String.
 *  @author         : HITHESH G R
 *  @version        : v8.15.0
 *  @since          : 18-01-2019
 ***************************************************************************************************/
var fs = require('fs');
var prompt = require('prompt-sync')();//node-module prompt-sync
let data = fs.readFileSync('../OopsPrograms/JSONfiles/stockAccount.json');//read file from json
/*
* function JSON.parse() is used to convert the string into a JavaScript Objects
*/
var arrayOfObjects = JSON.parse(data);
/**
 * creating a stockAccount node to create any new node with null values.
 */
class stockAccount {
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
        try {
            /**
             * add shares of stock to account 
             */
            var stock = prompt('enter number of stocks: ');
            if (isNaN(stock)) throw "invalid input"
        } catch (err) {
            console.log(err);
        }
        for (var i = 1; i <= stock; i++) {
            try {
            var name = prompt('enter the name: ');
            if (!isNaN(name)) throw "invalid input"
            var number = prompt('enter the number of share: ');
            if (isNaN(number)) throw "invalid input"
            var price = prompt('enter the price: ');
            if (isNaN(price)) throw "invalid input"
            arrayOfObjects.push({
                "name": name,
                "number_of_share": number,
                "price": price
            })
            console.log(arrayOfObjects);
        } catch (err) {
            console.log(err);
        }
        }
    }
    /**
     * logic for selling
     */
    sell() {
        /**
         * subtract shares of stock from account 
         */
        var i = prompt('which index u want to sell ? : ');
        /**
         * deleting the element 
         */
        delete arrayOfObjects[i];
        console.log(arrayOfObjects);
    }
    /**
     * to save data to file
     */
    save() {
        /**
         * save account to file 
         */
        var res = JSON.stringify(arrayOfObjects)
        fs.writeFileSync('/home/admin1/HitheshGR/OopsPrograms/JSONfiles/commercial.json', res, 'utf-8')
    }
    /**
     * to display the data 
     */
    printReport() {
        /**
         * print a detailed report of stock & values 
         */
        var sum = 0;
        console.log(arrayOfObjects.length);
        for (var i = 0; i < arrayOfObjects.length; i++) {
            //console.log(i);
            var num = parseInt(arrayOfObjects[i].number_of_share * arrayOfObjects[i].price);
            console.log("the total price of each stock is: " + num);
            sum = parseInt(sum + num);
        }
        console.log("the total price of stock is: " + sum);
    }
}
var obj = new stockAccount();
while (1) {
    console.log('1.Buy the  Stocks');
    console.log('2.Sell the Stocks');/**print all the choices to user */
    console.log('3.Print the Stock Report');
    console.log('4.save the file');
    console.log('5.Exit');
    var choice = prompt('choose an option to perform desired operation :');
    switch (choice) {
        /**
         * switch case implementation to perform the required operation 
         */
        case '1': obj.buy()
            break;
        case '2': obj.sell()
            function filterByID(item) {
                console.log(item.name);
                if (item.name !== undefined) {
                    return true;
                }
                count++;
                return false;
            }
            arrayOfObjects = arrayOfObjects.filter(filterByID);
            console.log('Filtered Array\n', arrayOfObjects);
            break;
        case '3': obj.printReport();
            break;
        case '4': obj.save();
            break;
        case '5': process.exit();
        default: console.log('No Such Option ')
            break;
    }
}