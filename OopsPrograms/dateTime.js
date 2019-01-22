/*************************************************************************************************
 *  @Purpose        : Read the Json file having properties Details for stock with properties
                      stockname, noOfShares, shareprice.In this program we have to buy or sell
                      and manage stock report.
 *  @file           : dateTime.js
 *  @overview       : 
 *  @author         : HITHESH G R
 *  @version        : v8.15.0
 *  @since          : 18-01-2019
 ***************************************************************************************************/
var read = require('readline-sync');
var file = require('fs');
var linked = require('../OopsPrograms/Utility/queueLinkedList');
class stockAccount {
    /**
     * class for stock Account
     */
    constructor(filename) {
        try {
            this.filedata = file.readFileSync(filename, 'utf8');//read the file 
            this.obj = JSON.parse(this.filedata);//convert into object
            this.stk = this.obj.stock;
            this.timedata = file.readFileSync('/home/admin1/HitheshGR/OopsPrograms/JSONfiles/queueDateTime.json');//read the file 
            this.time = JSON.parse(this.timedata)
            this.llshare = new linked.LinkedList();
            this.llshare.add();
        } catch (err) {
            console.log("file Not found please check your file ");
            //break;
        }
    }/**
     * Purpose :To update date and time in json file.
     * @param {String} symbol 
     * @param {Number} shareprice 
     * @param {type} tp 
     */
    Datepush(symbol, shareprice, tp) {
        var dt = new Date;
        var givedate = dt.getDate() + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear();
        this.obj[symbol].push({
            type: tp,
            time: dt.getHours() + ":" + dt.getMinutes(),
            date: givedate,
            amount: shareprice
        });
    }
    /**
     *purpose:If User want to to buy shares
     @returns:Nothing 
     */
    buy() {//for buy the stock
        var dt = new Date;
        console.log(" Enter the Amount you want to buy ");
        var shareprice = this.inputNum();
        console.log("Enter the symbol of stock which you want to buy");
        var symbol = this.inputString();
        var key = this.search(symbol);//search the share available or not
        if (key == -1) {// if not available then add it to object
            console.log(" Enter the name of stock ");
            var name = this.inputString();
            this.stk.push({
                stockname: name,
                Symbol: symbol,
                share_price: shareprice
            });
            this.obj[symbol] = [];
            this.Datepush(symbol, shareprice, "Buy");
        } else {//or update privious one.
            var stkprice = parseInt(this.stk[key].share_price) + Number(shareprice);
            this.stk[key].share_price = stkprice;
            this.Datepush(symbol, shareprice, "Buy");
        }
        this.llshare.add(shareprice);
        /**
         * for printing the object.
         */
        for (var key in this.stk) {
            console.log(this.stk[key]);
        }
    }
    inputString() {
        var flag = true;
        var val = read.question();
        while (flag) {
            if (isNaN(val)) {
                flag = false;
                return val;
            } else {
                var val = read.question("Wrong input !!!...Please enter  correct value ");
            }
        }
    }
    inputNum() {
        var flag = true;
        var val = read.question();
        while (flag) {
            if (!isNaN(val)) {
                flag = false;
                return val;
            } else {
                var val = read.question("Wrong input !!!...Please enter  correct value ");
            }
        }
    }
    /**
     * purpose: For Searching the stock is available in file or not.
     * @param {String} stockname 
     * return Key
     */
    search(sy) {
        var stn = this.stk;
        for (var key in stn) {
            if (stn[key].Symbol == sy) {
                return key;
            }
        }
        return -1;
    }
    /**
     * purpose:For selling the stock or shares
     * @returns Nothing.
     */
    sell() {
        console.log("Enter the symbol of stock which you want to sell ");
        var symbol = this.inputString();
        console.log(" Enter the price of your share you want to sell ");
        var shareprice = this.inputNum();
        var key = this.search(symbol);
        if (key >= 0)
            var price = parseInt(this.stk[key].share_price);
        if (key == -1 || price < Number(shareprice)) {
            console.log("You also not have stock in your account ");
        } else {
            this.stk[key].share_price = price - shareprice;
            console.log("After selling ");
            this.Datepush(symbol, shareprice, "Sell");
            this.llshare.p
            for (var key in this.stk) {
                console.log(this.stk[key]);
            }
        }
    }
    /**
     * purpose: For Save the object in file.
     * @param {String} filename 
     */
    save(filename) {
        file.writeFileSync(filename, JSON.stringify(this.obj));
        console.log("file Save Successfully ");
    }
    /**
     * purpose:for Print the object data.
     */
    printReport() {
        for (var key in this.stk) {
            console.log(this.stk[key]);
        }
    }
    /**
     * purpose:For calculating total value of shares.
     */
    valueOf() {
        var sum = 0;
        for (var key in this.stk) {
            sum = sum + this.stk[key].share_price;
        }
        return sum;
    }
}
module.exports = {
    stockAccount
}