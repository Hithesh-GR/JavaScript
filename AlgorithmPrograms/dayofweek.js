var Utility=require('../utility/Utility');
var readline=require('readline-sync');
function dayOfWeek()
{
    var day=+process.argv[2];
     var month=+process.argv[2];
     var year=+process.argv[4];
    Utility.dayOfWeek(day,month,year);
}
dayOfWeek();