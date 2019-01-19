/******************************************************************************
 *  @Purpose        : To create the JSON from Inventory Object and output the JSON String.     
 *  @file           : inventory.js
 *  @overview       : To Extend the inventory program to Create InventoryManager to manage the Inventory.
                      The Inventory Manager will use InventoryFactory to create Inventory Object from JSON.
                      The InventoryManager will call each Inventory Object in its list to calculate the Inventory
                      Price and then call the Inventory Object to return the JSON String  
 *  @author         : HITHESH G R
 *  @version        : v8.15.0
 *  @since          : 18-01-2019
 ******************************************************************************/
var prompt = require('prompt-sync')();
var fs = require('fs');
var data = fs.readFileSync('../OopsPrograms/JSONfiles/inventory.json');
var jsonGrocery = JSON.parse(data);
//console.log(jsonGrocery);
function inventory() {
    console.log("1: Rice");
    console.log("2: Wheat");
    console.log("3: Pulses");
    var item = prompt("Please enter your choice: ");
    switch (parseInt(item)) {
        case 1:
            var weight = prompt("Please enter the weight of rice you want to purchase: ");
            if (!isNaN(weight)) {
                for (var i = 0; i < jsonGrocery.Rice.length; i++) {
                    console.log("Per Kg. of " + jsonGrocery.Rice[i].name + " costs " + jsonGrocery.Rice[i].price + " and for " + weight + " Kgs. costs " + weight * jsonGrocery.Rice[i].price);
                }
            }
            else {
                console.log("please enter integers only!");
            }
            break;
        case 2:
            var weight = prompt("Please enter the weight of wheat you want to purchase: ");
            if (!isNaN(weight)) {
                for (var i = 0; i < jsonGrocery.Wheat.length; i++) {
                    console.log("Per Kg. of " + jsonGrocery.Wheat[i].name + " costs " + jsonGrocery.Wheat[i].price + " and for " + weight + " Kgs. costs " + weight * jsonGrocery.Wheat[i].price);
                }
            } else {
                console.log("please enter integers only!");
            }
            break;
        case 3:
            var weight = prompt("Please enter the weight of pulses you want to purchase: ");
            if (!isNaN(weight)) {
                for (var i = 0; i < jsonGrocery.Pulses.length; i++) {
                    console.log("Per Kg. of " + jsonGrocery.Pulses[i].name + " costs " + jsonGrocery.Pulses[i].price + " and for " + weight + " Kgs. costs " + weight * jsonGrocery.Pulses[i].price);
                }
            } else {
                console.log("please enter integers only!");
            }
            break;
        default:
            console.log("Please select a valid item!!");
    }
}
inventory();