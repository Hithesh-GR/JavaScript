/******************************************************************************
 *  @Purpose        : Create the Week Object having a list of WeekDay objects each storing
                      the day(i.e S,M,T,W,Th,..)and the Date(1,2,3..).The WeekDay objects
                      are stored in a Queue implemented using Linked List.Further maintain
                      also a Week Object in a Queue to finally display the Calendar.
 *  @file           : weekday.js
 *  @overview       : Here we have to print calendar through Queue implemented using Linked List.   
 *  @author         : HITHESH G R
 *  @version        : v8.15.0
 *  @since          : 11-01-2019
 ******************************************************************************/
var calendar=require('./utility/calendar2D.js');
var linkedQueue=require('../DataStructurePrograms/utility/primeAnaQueue.js');
/*
* creating calender function to create any new node with null values.
 */
function calender(){
    var linkedqueue = new linkedQueue.QueuedLinkedList;
    var linkedqueue2 = new linkedQueue.QueuedLinkedList;
    var months = [
        "",
        "January", "February", "March",
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December"
    ];
    /*
    * days[i] = number of days in month i
    */
    var days = [
        0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
    ];
    var day = ["S", "M", "Tu", "W", "Th", "F", "S"];
    try {
        var month = + process.argv[2];
        var year = + process.argv[3];
        /*
        * here we have to pass the integer values
        */
        var newMonth = parseInt(month);
        var newYear = parseInt(year);

        if (newMonth < 1 || newMonth > 12) throw "Month value is Invalid , Please Enter value in range 1-12"
        if (newMonth == undefined || newYear == undefined) throw "No input found"
        if (isNaN(newMonth) || isNaN(newYear)) throw "No input or String found , Please Enter a valid input";
        if (newMonth % 1 != 0 || newYear % 1 != 0) throw "Number required , Floating value found"
        /* 
        * starting day
        */
        var d = calendar.day(newMonth, 1, newYear);
        /*
        * check for leap year
        */
        if (newMonth == 2 && calendar.isLeapYear(newYear)) days[newMonth] = 29;

        console.log("     " + months[newMonth] + " " + year);
        /*
        * print the calendar
        */
        for (let i = 0; i < 7; i++) {
            linkedqueue.enque(day[i]);
        }
        linkedqueue.display2();
        for (let i = 0; i < d; i++) {
            linkedqueue2.enque(" ");
        }
        for (let i = 1; i <= days[newMonth]; i++) {
            linkedqueue2.enque(i);
        }   
        linkedqueue2.displayCalender(d);
        console.log(" ");
    }       catch (err) {
                console.log("Error: " + err);
            }
}
calender();