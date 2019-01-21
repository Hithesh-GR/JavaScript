/******************************************************************************
 *  @Purpose        : To Print the Modified Message with proper validation.     
 *  @file           : regularExpression.js
 *  @overview       : Read the given message then then replace the data with 
                      proper values and print modified message. 
 *  @author         : HITHESH G R
 *  @version        : v8.15.0
 *  @since          : 18-01-2019
 ******************************************************************************/
var prompt = require('prompt-sync')();
function regularExpression() {
    // Validates that a value matches a regular expression.
    // var regex =require("regex");
    //variables result1,result2,result3,fullname used to store final result
    var result1, result2, result3, fullName;
    //storing each string into a respective variables
    var str = "Hello <<name>>, We have your fullname as <<full name>> in our system.";
    var str1 = "Your contact number is <<91­xxxxxxxxxx>>.";
    var str2 = "Thank you!! BridgeLabz <<dd-mm-yyyy>> ";
    /*another way calling the constructor function of the RegExp object,
    var regex = new Regex();*/

    //Using a regular expression literal,which consists of a pattern enclosed between slashes
    nameRestriction = /[a-z]/ig;
    contactRestriction = /[0-9]/g;

    //asking user to enter a name & stored in name variable
    var name = prompt("Please enter your name: ");
    if (nameRestriction.test(name) && name.length > 3) {
        result = str.replace(/<<name>>/, name);
    }
    else {
        console.log("Invalid name!");
        return false;
    }

    //asking user to enter a fullname & stored in fullName variables
    fullName = prompt("Please enter your full name: ");
    if (nameRestriction.test(fullName) && fullName.length > 3) {
        result1 = result.replace(/<<full name>>/, fullName);
    }
    else {
        console.log("Invalid full name!");
        return false;
    }

    //asking user to enter a contactNUmber & stored in contactNum
    var contactNum = prompt("Please enter your contact number: ");
    if (contactRestriction.test(contactNum) == true && contactNum.length == 10) {
        result2 = str1.replace(/<<91­xxxxxxxxxx>>/, contactNum);
    }
    else {
        console.log("Invalid number!");
        return false;
    }

    //printing results getting from result1 and result2
    console.log(result1 + " " + result2);

    //uses Date function for getting date,month and year
    var d = new Date();
    var date = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
    result3 = str2.replace(/<<dd-mm-yyyy>>/, date);
    console.log(result3);
}
regularExpression();