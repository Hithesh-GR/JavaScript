var Utility=require('../utility/Utility');
/*var rl = require('readline');
var prompt = rl.createInterface(process.stdin, process.stdout);*/
function payment()
{
    /*var P=+prompt.question("enter the principal loan amount");
    var Y=prompt.question("enter the year");
    var R=prompt.question("enter the rate");*/
    var P=+process.argv[2];
    var Y=+process.argv[3];
    var R=+process.argv[4];
    Utility.payment(P,Y,R);
}
    payment();