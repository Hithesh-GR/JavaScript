/******************************************************************************
 *  @Purpose        :     
 *  @file           : binarysearchTree.js
 *  @overview       :      
 *  @author         : HITHESH G R
 *  @version        : v8.15.0
 *  @since          : 11-01-2019
 ******************************************************************************/
var binaryTree=require('../DataStructurePrograms/utility/calendar2D.js');
var read = require('readline-sync');
function findBSTs() {
    console.log("Enter the number of BSTs you  want: ");
    var bst = binaryTree.inputread();
    try{

        if (bst % 1 != 0) throw "Number required , Floating value found"
    if (bst < 0) throw "BSTs value is Invalid , Please Enter a positive value"
    if (bst == "") throw "No input found"
    if (isNaN(bst)) throw "No input or String found , Please Enter a value in range 1-12";
    while (bst-- > 0) {
        console.log("");
        console.log("Enter number of nodes you want in the BST");
        var n = binaryTree.inputread();

        try{

            if (n % 1 != 0) throw "Number required , Floating value found"
            if (n < 0) throw "BSTs value is Invalid , Please Enter a positive value"
            if (n == "") throw "No input found"
            if (isNaN(n)) throw "No input or String found , Please Enter a value in range 1-12";

        // find count of BST and binary trees with n odes 
        var count;
        count = binaryTree.countBST(n);


        // print count of BST and  binary trees with n nodes 
        console.log("Total number of BSTs with " + n + " nodes is " + count);
        }catch(err){
            console.log("Error: " + err);
    }
    console.log();
}
}catch(err){
    console.log("Error: " + err);
}
}

findBSTs();

