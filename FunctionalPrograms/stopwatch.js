/******************************************************************************
 *  @Purpose        : To find  elapsed time from current time.   
 *  @file           : stopwatch.js
 *  @overview       : To Write a Stopwatch Program for measuring the time that elapses between 
                        the start and end clicks
 *  @author         : HITHESH G R
 *  @version        : v8.15.0
 *  @since          : 03-01-2019
 ******************************************************************************/
var Utility=require('../utility/Utility');
var readline=require('readline-sync');
function stopWatch()
{
    var startTime=readline.question('Press 1 to start time  =>');
     {
        if(startTime=="1")
        {
           var start=Utility.getCurrentTime();
            var stopTime=readline.question('Press 0 to stop time=> ');
            {
             if(stopTime=="0")
             {
                 var stop=Utility.getCurrentTime();
                 var res=Utility.elapsedTime(start,stop);
             }
             console.log("elapsed Time is = "+res+"sec");
                  
            }
        }
            else
        {
            console.log("invalid input");
            stopWatch();
        }
    
    
    }
}
stopWatch();