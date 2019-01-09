var readline = require('readline-sync');
module.exports =
{
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
    flipcoin(rn)
    {
        var heads=0;
        var tails=0;
        var flip=readline.question('enter the num of times to flip coin');
		for(var i=1;i<=flip;i++)
		{
            var rn=Math.floor(Math.random()*5);
			if(rn==1)
			{
                heads++;
            }
			else
			{
				tails++;
			}
        }
        var res=(heads/flip)*100;
        console.log("Percentage of Heads is "+res);
        var res1=(tails/flip)*100;
		console.log("Percentage of tails is "+res1);
    },
    leap(year)
    {
        var year=0000;
          var year=readline.question("enter the year");
	      if(year.length >= 4)
	      {
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
                console.log("enter year format like yyyy");
    },
    power(pow)
    {
    var pow=readline.question("enter power");
		if(pow==0)
		{
			console.log(1);
		}
		for(var i=1;i<=pow;i++)
		{
			console.log(Math.pow(2, i));
        }
    },
    Harmonic(num)
    {
     var num=readline.question("enter N th number");
		var sum=0;
		for(var i=1;i<=num;i++)
		{
			sum=sum+1/i;
			
		}
        console.log("N th Harmonic number is " +sum);
    },
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
    Gambler(totalTime)
    {
        var stake=readline.question("enter the stake value");
        goal=readline.question("enter the goal value");
        noftimes=readline.question("enter no. of times");
        win=0;
        noftimes=0;
        while (stake != 0 && goal != stake && noftimes < totalTime) 
        {
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
        var wining = (win / totalTime) * 100;
        var loosing = 100 - wining;
        console.log("Number of wins " + win)
        console.log("wining percentage " + wining);
        console.log("lossing percentage " + loosing);
    },
    coupan(l) 
    {
        var arr = new Array(l);
        var h = 0;
        var count = 0;
        var flag = true;
        while (l > 0) {
          flag = true;
          var n = Math.floor((Math.random() * 10000) + 1000);//geting randomNumber between 0 to Highest value;
          if (n > 9999) {
            n = Math.floor(n / 10);
          }
          count++;//counting of random number.
          for (let index = 0; index < (h + 1) && flag; index++) {
            if (arr[index] == n) {
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
    display2dArray(array)
    {
         for (let index = 0; index < array.length; index++) 
         {
          console.log(array[index]);
         }
    },
    twoDarry(row, col) 
    {
        var arr = [];
        console.log("enter elements ");
        for (var i = 0; i < row; i++) 
        {
            arr.push([]);
            for (var j = 0; j < col; j++) 
            {
                arr[i][j] = readline.question('');
            }
        }
        return arr;
    },
    dist()
    {
        var x =readline.question("enter the distance value x");
	    
        var y =readline.question("enter the distance value y");
        
        var dist=Math.sqrt((Math.pow(x, 2))+(Math.pow(y, 2)));
        console.log("distance from (" + x + ", " + y + ") to (0, 0) = " + dist);
    },   
    wind()
    {
        var t=readline.question("enter the value of t ");
        var v=readline.question("enter the value of v ");
	    var w=35.74 + 0.6215*t + (0.4275*t - 35.75) * Math.pow(v, 0.16);
	        console.log("Temperature = " + t);
	        console.log("Wind speed  = " + v);
	        console.log("Wind chill  = " + w);
    },
    quad()
    {
        var a=readline.question("enter the value of a");
		b=readline.question("enter the value of b");
        c=readline.question("enter the value of c");
        delta= b*b-4*a*c;
        root1= (-b+Math.sqrt(delta))/(2*a);
        root2= (-b-Math.sqrt(delta))/(2*a);
        console.log("1st root of the equation is "+root1);
		console.log("2nd root of the equation is "+root2);
    },
    tripple(arr)
    {
        for (var i = 0; i < arr.length-2; i++) 
        for (var j = i+1; j < arr.length-1; j++) 
        for (var k = j+1; k < arr.length; k++) 
        if (arr[i]+arr[j]+arr[k] == 0) 
        { 
           console.log("the sum of three integers" +arr[i]+" "+arr[j]+" "+arr[k]); 
        } 
    },
    inputArray(array) 
    {
        var number = readline.question("Enter total number of array elements");
        for (var i = 0; i < number; i++) 
        {
            array[i] = Number(readline.question(" "));
        }
        return array;
    },
         
    getAllPermutations(string) 
    {
        var results = [];
        if (string.length == 1) 
        {
          results.push(string);
          return results;
        }
          for (var i = 0; i < string.length; i++) 
          {
          var firstChar = string[i];
          var charsLeft = string.substring(0, i) + string.substring(i + 1);
          var innerPermutations = readline.question(charsLeft);
          for (var j = 0; j < innerPermutations.length; j++) 
          {
            results.push(firstChar + innerPermutations[j]);
          }
        }
        return results;
    },
    getCurrentTime()
    {
    var date = new Date();
    var n = date.getSeconds();
    return n;
    },
    elapsedTime(start, stop) 
    {
    var elapsed = (stop - start);
    return elapsed;
    },
    isAnagram(string1, string2) 
    {
       string1=string1+"";
       string2=string2+"";
       if (string1.length != string2.length)
        {
            return false;
        }
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
                   arr[code - 97]++;
              } 
              else if (ch >= 'A' && ch <= 'Z') 
              {
                  var code = ch.charCodeAt(0);
                  arr[code - 65]++;
              } 
              else 
              {
                  var code = ch.charCodeAt(0);
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
        for (let index = 0; index < 36; index++) 
        {
            if (arr[index] != 0) 
            {
                return false;
            }
        }
        return true;
    },
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
    else {
        return false;
    }
},
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
// method to check the prime numbers 
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
    payment(principle, year, rate) 
    {
    var R = rate / (12 * 100);
    var n = 12 * year;
    var rs = Math.pow((1 + R), (-n));
    var calculation = (principle * R) / (1 - (rs));
    console.log("Monthly payment " + calculation);
},
convertTemp(number)
{
    //Celsius to Fahrenheit
    if (number == 1) 
    {
        var num = readline.question("Enter your celsius value :");
        var fahrenheit = (num * 9 / 5) + 32;
        console.log("Temperature in Fahrenheit: " + fahrenheit);
    }
    else if(number==2)
    {
        //Fahrenheit to Celsius
        var num1 = readline.question("Enter your celsius value :");
        var celsius = (num1 - 32) * 5 / 9;
        console.log("Temperature in Celsius: " + celsius);
    }
    else{
        console.log("invalid value");
    }
},
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
}


