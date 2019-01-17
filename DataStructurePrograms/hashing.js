/******************************************************************************
 *  @Purpose        : Create a Slot of 10 to store Chain of Numbers that belong
                      to each Slot to efficiently search a number from a given set
                      of number. 
 *  @file           : hashing.js
 *  @overview       : Here we have to store the numbers in slot and search the number
                      if that number in the list remove and if that number is not in the
                      list add that number into the specific slot or index.        
 *  @author         : HITHESH G R
 *  @version        : v8.15.0
 *  @since          : 11-01-2019
 ******************************************************************************/
var utility=require('../DataStructurePrograms/utility/linkedList.js');
var readline = require('readline-sync');
var take = require('util');
var filestream = require('fs');
var access = require('../DataStructurePrograms/util');
function hashing() {
    var f = filestream.readFileSync('hash.txt', 'utf8');
    var num = f.split(' ');
    var arr = new Array(10); 
    var remainder, n;

    for (let i = 0; i < num.length; i++) {
        n = Number(num[i]);
        remainder = n % 10;

        if (arr[remainder] === undefined) {
            arr[remainder] = new utility.LinkedList;
            arr[remainder].add(n);
        } else {
            arr[remainder].add(n);
        }
    }
    var str = "";
    for (let index = 0; index < 10; index++) {
        take.print(index + " elements    ");
        try {
            arr[index].show();

        } catch (err) {
            console.log("empty index");
        }
    }
    var number = readline.question(' Enter the number you want to search \n');
    if (!isNaN(number)) {
        remainder = Number(number % 10);
        console.log(remainder);
        console.log(arr[1]);
        if (arr[remainder] === undefined) {
            arr[remainder] = new utility.LinkedList;
        }
        if (arr[remainder].search(Number(number))) {
            console.log("The number is found in file");
            arr[remainder].remove(number);
        } 
        else {
            console.log("Number is not found in file");
            arr[remainder].add(number);
        }
        var flag;
        for (let index = 0; index < 10; index++) {
            flag = true;
            take.print(index + " result elements ,   ");
            try {
                arr[index].show();
                str = str + arr[index].getData();
                if (arr[index] !== 'undefined' && index < arr.length - 2) {
                    str = str + " ";
                }
            } catch (err) {
                console.log("Empty index");
            }
        } console.log(str);
        access.writeFile('hash.txt', str);
        console.log("\n\n");
    } else {
        console.log("Wrong input ");
    }
}
hashing();