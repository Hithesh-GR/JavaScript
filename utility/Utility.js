var readline = require('readline-sync');
module.exports =
{
     /*
     * Purpose   : By ensuring username with minimum 3 characters,replacing USERNAME with userinput
                  and print the string.
     *  @descriptipn: Declaring the function and passing the userinput as argument.
     *  @function: diplayname takes the userinput and print it with some sentence.
     */
    replace(a) 
    {
        if (a.length >= 3) 
        {
            var string = "Hello <<UserName>>, How are you?";
            // take one empty string
            var temp = "";
            var a1 = string.substring(0, 6);
            temp = temp + a1;

            temp = temp + a;
            var a2 = string.substring(18, 32);
            temp = temp + a2;
            console.log(temp);
        }
        else 
        {
            console.log("name should have atleat 3 characters");
        }
    },
    /*
     * @purpose : By using random function flip the coin no of times from user input
                  and print the percentage of head vs tails
     * @description : Declaring a function and passing the userinput for fliping the coin
                      no of times
     * @function: flipcoin takes the no of times to flip coin and print the percentage of
                  head and tail
     */
    flipcoin(rn)
    {
        var heads=0;
        var tails=0;
        var flip=readline.question('enter the num of times to flip coin');
         // loop for generating random number upto number of flip.
		for(var i=1;i<=flip;i++)
		{
            var rn=Math.floor(Math.random()*5);
            // if random number is greater than 0.5 or 5, increament head count.
			if(rn==1)
			{
                heads++;
            }
            // if lesser then increment tail count.
			else
			{
				tails++;
			}
        }
        //percentage of head and tail 
        var res=(heads/flip)*100;
        console.log("Percentage of Heads is "+res);
        var res1=(tails/flip)*100;
		console.log("Percentage of tails is "+res1);
    },
    /*
     * @purpose : Taking input as a fourdigit number check whether the given number is a leap year
                or not. 
     * @description : Declaring the function and passing a four digit number from userinput
     * @function:  Function compares the length of given number and prints the number 
                   is a leap year or not 
     */
    leap(year)
    {
         // ensure year is of four digit
        var year=0000;
          var year=readline.question("enter the year");
	      if(year.length >= 4)
	      {
              //condition for checking leap year or not 
              if(year % 4 ==0)
              {
              console.log("This is a leap year");
              }
              else 
              {
                console.log("This is not a leap year");
              }
            }
                else
                {
                    console.log("enter year format like yyyy");
                }
    },
    /*
    *@purpose : generate the power of two values 
    *@parameter  : user input value
    *@description : it prints the two's power value 
    */
    power(pow)
    {
        var pow=readline.question("enter power");
		if(pow==0)
		{
			console.log(1);
        }
        //loop for generate two's power value upto given user input
		for(var i=1;i<=pow;i++)
		{
			console.log(Math.pow(2, i));
        }
    },
     /* 
     * @purpose : To genarate harmonic numbers according to the userinput
     * @parameter : input from user
     * @description : To generate the sum of harmonic numbers by taking input from user
     * @function : Harmonic function takes user input and sum it no of times that user given
     */
    Harmonic(num)
    {
     var num=readline.question("enter N th number");
        var sum=0;
        // loop for generate the Nth Harmonic value
		for(var i=1;i<=num;i++)
		{
			sum=sum+1/i;
			
		}
        console.log("N th Harmonic number is " +sum);
    },
    /* 
     * @purpose : To genarate primeFactor numbers according to the userinput
      * @parameter : input from user
     * @description : Finding the primefactors of a given number */
    fact(number)
    {
        var number=readline.question("enter the number");
        for(var i=1;i<=number;i++)
		{
			var count=0;
			for(var j=1;j<=i;j++)
			{
				if(i%j==0)
				{
					count++;
				}
			}
			if(count==2)
			{
				while(number%i==0)
				{
					console.log(i);

					number=number/i;
				}
			}
        }
    },
    /*
    * @purpose : is to calculate the total number of wins and percentage of wins and loss
    * @parameter : totaltime -no of times he wants to play 
    * @description : the game continue upto,he lost his total number of times he want play.
    */
    Gambler(totalTime)
    {
        //stake - ammount that player have
        var stake=readline.question("enter the stake value");
        //goal-amount that player wants to win
        goal=readline.question("enter the goal value");
        noftimes=readline.question("enter no. of times");
        win=0;
        noftimes=0;
        //loop upto win and lost his all stake and upto total number of times he wants play 
        while (stake != 0 && goal != stake && noftimes < totalTime) 
        {
            // genearate the random number to check weather he wins or lost
            var ran = Math.round(Math.random());
            if (ran == 1) 
            {
                stake++;
                win++;
            }
            else {
                stake--;
            }
            noftimes++;
        }
        //calculate the total percentage
        var wining = (win / totalTime) * 100;
        var loosing = 100 - wining;
        console.log("Number of wins " + win)
        console.log("wining percentage " + wining);
        console.log("lossing percentage " + loosing);
    },
    /*
    * @purpose : is to generate random numbers
    * @parameter : l-user input value 
    * @description : generate distinct coupun number and simulates in random process
    */
    coupan(l) 
    {
        var arr = new Array(l);
        var h = 0;
        var count = 0;
        var flag = true;
        while (l > 0) 
        {
          flag = true;
          //geting randomNumber between 0 to Highest value;
          var n = Math.floor((Math.random() * 10000) + 1000);
        if (n > 9999) 
          {
            n = Math.floor(n / 10);
          }
          count++;//counting of random number.
          for (var index = 0; index < (h + 1) && flag; index++) 
          {
            if (arr[index] == n) 
            {
              flag = false;
            }
          }
          if (flag == true) 
          {
            arr[h++] = n;
            l--;
          }
        }
        this.display2dArray(arr);//display distinct coupan number.
       },
       //method to store the array elements
    display2dArray(array)
    {
         for (var index = 0; index < array.length; index++) 
         {
          console.log(array[index]);
         }
    },
      /*
        *@purpose :to print Two Dimensional Array,from user input elements 
        *@parameter  : row-number of rows 
                        column-number of columns
        *@description :ask user to enter total number of column and row
        *convert into two Dimenstional array format and prints 
        */
    twoDarry(row, col) 
    {
        var arr = [];
        console.log("enter elements ");
        //to generate the multi-dimensional array
        for (var i = 0; i < row; i++) 
        {
            arr.push([]);
             // adding elements by elements in generated array
            for (var j = 0; j < col; j++) 
            {
                arr[i][j] = readline.question('');
            }
        }
        return arr;
    },
    /*
     * @purpose : to calculate the distance between two point
     * @description : use distance formula and calculate the result 
     */
    dist()
    {
        // x -first distance
        var x =readline.question("enter the distance value x");
	    //y- second distance
        var y =readline.question("enter the distance value y");
        var dist=Math.sqrt((Math.pow(x, 2))+(Math.pow(y, 2)));
        console.log("distance from (" + x + ", " + y + ") to (0, 0) = " + dist);
    },   
    /*
    * @purpose :to find the windchill, by using user input temperature and volume
    * @description :first check the input for temperture is in range 
                     and for the volume range, and prints the results
     */
    wind()
    {
        //t-temperature from the user input
        var t=readline.question("enter the value of t ");
        //v-volume from the user input 
        var v=readline.question("enter the value of v ");
        //Formula for the Windchill calculation 
	    var w=35.74 + 0.6215*t + (0.4275*t - 35.75) * Math.pow(v, 0.16);
	        console.log("Temperature = " + t);
	        console.log("Wind speed  = " + v);
	        console.log("Wind chill  = " + w);
    },
    /*
    *@purpose : To calculate the Quadartic roots using user input value.
    *@description : calculate the roots by using the formula and prints all possible roots.
     */
    quad()
    {
        // a- first element
        var a=readline.question("enter the value of a");
        // b-second element
        b=readline.question("enter the value of b");
        // c- third element
        c=readline.question("enter the value of c");
        // check delta value 
        delta= b*b-4*a*c;
        //calculate the roots 
        root1= (-b+Math.sqrt(delta))/(2*a);
        root2= (-b-Math.sqrt(delta))/(2*a);
        console.log("1st root of the equation is "+root1);
		console.log("2nd root of the equation is "+root2);
    },
     /*
      * @purpose :to find triplets from user input array elements
      * @param   :array elements
      * @description :if sum of 3 array elemets equals to zero its called triplet
                      prints the total triplets formed and also no of triplets 
      */
    tripple(arr)
    {
        for (var i = 0; i < arr.length-2; i++) 
        for (var j = i+1; j < arr.length-1; j++) 
        for (var k = j+1; k < arr.length; k++) 
        // check sum of three elements are equals to zero
        if (arr[i]+arr[j]+arr[k] == 0) 
        { 
           console.log("the sum of three integers" +arr[i]+" "+arr[j]+" "+arr[k]); 
        } 
    },
    /*
    *@purpose : To generate the Array 
    *@description : this method is used to generate the array of user choice elements
                    and return the resultant array
    *@parameter : empty array.
    */
    inputArray(array) 
    {
        var number = readline.question("Enter total number of array elements");
        for (var i = 0; i < number; i++) 
        {
            array[i] = Number(readline.question(" "));
        }
        return array;
    },
    /*
    *@purpose :to find the permutation of given string and prints all combination
    *@parameter  : string-empty
                str-user input string 
                first-first index
                last-last index
    *@description :check all possible combination of stringuse recursion method to find possible
                   combination prints the all combination
    */
    getAllPermutations(string) 
    {
        var results = [];
        if (string.length == 1) 
        {
          results.push(string);
          return results;
        }
         //loop calculate the lenght of the string
          for (var i = 0; i < string.length; i++) 
          {
          var firstChar = string[i];
          var charsLeft = string.substring(0, i) + string.substring(i + 1);
          var innerPermutations = readline.question(charsLeft);
          //loop calculate the lenght of the inner string
          for (var j = 0; j < innerPermutations.length; j++) 
          {
            results.push(firstChar + innerPermutations[j]);
          }
        }
        return results;
    },
    /*
    * @purpose : to get the time in seconds 
    * @Description : create object of Date and get time in seconds by using inbuild function
    */
    getCurrentTime()
    {
    var date = new Date();
    var n = date.getSeconds();
    return n;
    },
    /*
    * @purpose : to get the time in seconds 
    * @parameter : start-when execution start
    * @parameter : stop - when execution stop
    * @Description : create object of Date and get time in seconds by using inbuild function
    */
    elapsedTime(start, stop) 
    {
    var elapsed = (stop - start);
    return elapsed;
    },
    /*
     * @purpose : check the two strings are same or not
     * @parameter: string1-first string of user input 
                    string2-second string of user input 
     * @description : take two string from user and compare those, and prints the message 
               wheather they are anagram or not.
    */
    isAnagram(string1, string2) 
    {
       string1=string1+"";
       string2=string2+"";
       //checking the length of the both string 
       if (string1.length != string2.length)
        {
            return false;
        }
        //create an empty array
          var arr = [];
          for (let index = 0; index < 36; index++) 
          {
              arr[index] = 0;
          }
          for (let index = 0; index < string1.length; index++) 
          {
              var ch = string1.charAt(index);
              if (ch >= 'a' && ch <= 'z') 
              {
                  var code = ch.charCodeAt(0);
                  //converting into ascii value 
                   arr[code - 97]++;
              } 
              else if (ch >= 'A' && ch <= 'Z') 
              {
                  var code = ch.charCodeAt(0);
                  //converting into ascii value 
                  arr[code - 65]++;
              } 
              else 
              {
                  var code = ch.charCodeAt(0);
                  //converting into ascii value 
                  arr[code - 22]++;
              }
              ch = string2.charAt(index);
              if (ch >= 'a' && ch <= 'z') 
              {
                  var code = ch.charCodeAt(0);
                  arr[code - 97]--;
              } 
              else if (ch >= 'A' && ch <= 'Z') 
              {
                  var code = ch.charCodeAt(0);
                  arr[code - 65]--;
              } 
              else 
              {
                var code = ch.charCodeAt(0);
                arr[code - 22]--;
              }
        }
        //loop for comparing the ascii values
        for (let index = 0; index < 36; index++) 
        {
            if (arr[index] != 0) 
            {
                return false;
            }
        }
        return true;
    },
    /*
    *@purpose : To check the number wheather its palindrome or not 
    *@parameter   : num-user input number 
    *@description : take number from user input and check its palindrome or not 
    */
    palindrome(num) 
    {
        var temp = num;
        var rem = 0, rev = 0;
        //loop untill num is not equal to zero
        while (num != 0) 
        {
        //take reminder of the number 
        rem = num % 10;
        //keep on adding element 
        rev = rev * 10 + rem;
        //devide the number to get next digit of given number  
        num = Math.floor(num / 10);
        }
        // check both number are equal and return result
        if (temp == rev) 
        {
        return true;
        }
        else 
        {
        return false;
        }
    },
    // method to check the prime numbers 
   primeNum(res) 
    {
    for (let i = 2; i < res; i++) 
    {
        if (this.isPrime(i)) 
        {
            console.log(i); 
        }
    }
    },
    isPrime(number) 
    {
    if (number == 0 || number == 1) 
    {
        return false;
    }
    for (var i = 2; i< number; i++) 
    {
        if (number % i == 0) 
        {
            return false;
        }
    }
    return true;
    },
    //Algorithm Programs
    /*
    *@purpose : to find day falls on the given user input date format
    *@param   : day-take date from command line of user choice 
    *           month-take month from command line of user choice
    *           year- take year from command line of user choice
    *@description : use formula and calculate the day 
    */
    dayOfWeek(day, month, year) 
    {
    var y0 = year - Math.floor((14 - month) / 12);
    var x = y0 + Math.floor((y0 / 4)) - Math.floor((y0 / 100)) + Math.floor((y0 / 400));
    var m0 = month + 12 * Math.floor((14 - month) / 12) - 2;
    var d0 = (day + x + Math.floor((31 * m0) / 12)) % 7;
    var res = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "saturday"];
    if (d0 <= res.length) 
    {
        console.log("Day is " + res[d0]);
    }
    else {
        console.log("Invalid day ");
    }
    },
    /*
    *@purpose: to find the monthly-payment and prints the results 
    *@parameter: principle-principle value from commandline
               year-year value from command line
               rate- rate value from command line
    *@description : take command line input of principle and year and rate 
    *and find the monthly payment 
    */
    payment(principle, year, rate) 
    {
        //formula to calculate the result
    var R = rate / (12 * 100);
    var n = 12 * year;
    var rs = Math.pow((1 + R), (-n));
    var calculation = (principle * R) / (1 - (rs));
    console.log("Monthly payment " + calculation);
    },
    /*
    *@purpose: convert the celsius to fahrenheit and vice versa of user choice conversion
    *@parameter : number-user choice 
    *@description: ask users wish, weather to celsius to fahrenheit or fahrenheit to celsius 
                   and convert according to his wish and prints the results.
    */
    convertTemp(number)
    {
    // convertion of Celsius to Fahrenheit
    if (number == 1) 
    {
        var num = readline.question("Enter your celsius value :");
        var fahrenheit = (num * 9 / 5) + 32;
        console.log("Temperature in Fahrenheit: " + fahrenheit);
    }
    //convertion of Fahrenheit to Celsius
    else if(number==2)
    {
        var num1 = readline.question("Enter your celsius value :");
        var celsius = (num1 - 32) * 5 / 9;
        console.log("Temperature in Celsius: " + celsius);
    }
    else{
        console.log("invalid value");
    }
    },
       /*
        *@purpose :to find square root for non negative number by using the newton method 
        *@parameter : num-user input value
        *@description :take value from the user and calculate the square of that number 
                        and prints the result.
        */
    sqrt(num) 
    {
    if (num > 0) 
    {
        //formula 
        var t = num;
        var epsilon = 1e-15;
        while (Math.abs(t - num / t) > epsilon * t) 
        {
            t = (num / t + t) / 2;
        }
        console.log("Squre root of non negative number is : ", t)
    }
    else 
    {
        console.log("Number should be positive ");
    }
    },
        /*
        *@purpose : is to dispence total minimum number of notes from vending machine 
        *@param   : value-user inputed value
                    I - zero
                    TOTAL-zero
        *@description : take a number from user and calculate minimum number of notes has to return 
                        vending machine use recursion method,and return the value  
        */
    vending(value,I,TOTAL)
    {
    		/*
			 *  array to store values of notes
			 */
			var NOTES = [ 1000 , 500 , 100, 50, 10, 5, 2, 1 ];
			/*
			 * Function to find the notes and print the output
			 * 
			 * @param value the amount to which the note to despenced
			 */
            if(Math.floor(value / NOTES[I]>0))
			{
              console.log(NOTES[I] + "rs notes :" + Math.floor(value / NOTES[I]));
              TOTAL=TOTAL+Math.floor(value / NOTES[I]);
              value = value % NOTES[I];
              this.vending(value,I+1,TOTAL);
              //return;
            }
            if (value==0 && I==NOTES.length) 
				{
					console.log("total notes :" + TOTAL);
					return;
                }
    },
      /*
        *@purpose :convertion of decimal value to the binary 
        *@description: take decimal value from user and conver it into the binary form
             swap the generated nibbles and by using that binary value convert it into decimal form
        */
    swap()
    {
        // x- decimal value
        var x=70;
        // formula to return binay value using bitwise operator
        return (Math.floor((x & 0x0F) << 4 | (x & 0xF0) >> 4));
    },
    // method to find power 
    isPowerOfTwo(n) 
    {
        if (n == 0)
            return false;
        while (n != 1) 
        {
            if (n % 2 != 0)
                return false;
            n = n / 2;
        }
        return true;
    },
    /*
    *@purpose : is to find the number of user guess
    *@param   : low-zer0
                 high-user input -1
    *@description : ask the user to enter 2's power value,and find his guessing number,
                    use recursion method return that number
    */
    search(low, high) 
    {
        if ((high - low) == 1) 
        {
            return low;
        }
        var mid = low + Math.floor(high - low) / 2;
        console.log("Is it less than " + mid + " ?");
        var ans=readline.question("Enter 0 for No and 1 for Yes ");
        console.log(ans);
        if (ans === "1") 
        {
            return this.search(low, mid);
        }
        else 
        {
            return this.search(mid, high);
        }
    },
    /*
     * @purpose : calculate the binary value 
     * @parameter : num-decimal value from user 
     * @description : take decimal value from user and convert that into binary value 
     */
    tobin(num) 
    {
    var str = "";
    while (num > 0) 
    {
        var r = num % 2;
        var str = r + str;
        num = Math.floor(num / 2);
    }
    //padding generate 4 byte 
    while (str.length < 8) 
    {
        str = "0" + str;
    }
    return str;
    },
    /*
    *@purpose : generate the insertion sort array for given array
    *@parameter  : res-array
    *@description: take array,arrange elements according size using insertion sort,and return the result
    * */
    insertion(res) 
    {
    for (let i = 1; i < res.length; i++) 
    {
        var point = res[i];
        var j = i - 1;
        while (j >= 0 && res[j] > point) 
        {
            res[j + 1] = res[j];
            j = j - 1;
        }
        res[j + 1] = point;
    }
    return res;
    },
    /*
    *@purpose : generate the bubble sort array  for given array
    *@parameter : res-array
    *@description: take array,arrange elements according size using bubble sort,and return the result
    */
    bubbleSort(res) 
    {
        // compare first and next elements in array and arrange 
           for (let i = 0; i < res.length; i++) 
           {
               for (let j = i + 1; j < res.length; j++) 
               {
                   if (res[i] > res[j]) 
                   {
                       var temp = res[i];
                       res[i] = res[j];
                       res[j] = temp;
                      }
               }
              }
           return res;
    },
    /*
    *@purpose : sort the array using the merge sort technique  
    *@parameter : res-array
    *@description : take array,divide into two halves,and sort the elements for both 
                    right and left halves 
    */
    mergeSort(res) 
    {
    var n = res.length;
    //if size is less than 2 return that.
    if (n < 2) 
    {
        return;
    }
    //cal mid value 
    var mid = Math.floor(n / 2);
    var left = [mid];
    var right = [n - mid];
    //store  elements in left array which are present before the mid   
    for (let i = 0; i < mid; i++) 
    {
        left[i] = res[i];
    }
    //store  elements in left array which are present before the mid  
    for (let j = mid; j < n; j++) 
    {
        right[j - mid] = res[j];
    }
    //call mergesort for left halve 
    this.mergeSort(left);
     //call mergesort for right halve 
    this.mergeSort(right);
    this.mergeSort(left, right, res);
    },
    //method take file values and strings 
    fileCall() 
    {
        var fileStream = require('fs');
        var f = fileStream.readFileSync('test.txt', 'utf8');
        console.log(f);
        var arr = f.split(' ');
        return arr;
    },
    /*
    *@purpose : generate the binary search for given array
    *@parameter: res-array
                low-initial value of array
                high-final value of array
                ele-elements wants to find in array
    *@description: take array, calculate the mid value,compare with elements,
                    use recursion method to search element  
     */
    binarySearch(res, low, high, ele) 
    {
        var mid;
        while (high >= low) 
        {
            // calculate mid value 
            mid = Math.floor(low + (high - low) / 2);
            // check mid with ele
            if (res[mid] == ele) 
            {
                return mid;
            }
            //check mid with ele 
            if (res[mid] > ele) 
            {
                //assign decremented mid to high 
                high = mid - 1;
            }
            else 
            {
                //assign inremented mid to low
                low = mid + 1;
            }
        }
        // if not found return -1
        return -1;
    },
}




