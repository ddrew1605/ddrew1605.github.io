function alarm()
{
    alert("It's the cheif, your script is running and ready to go!");
}

function askName()
{   
    var userName = prompt("What is your name?");
    return userName;
}

function askMood ()
{
    var userMood = prompt("How are you feeling today?");
    return userMood;
}

function todaysDate ()
{
    var today = new Date();
    return (today.getMonth() + 1) + " / " + today.getDate() +
                    " / " + today.getFullYear(); 
}

function currentTime ()
{
    var time = new Date();
    return time.getHours() + ":" + time.getMinutes() + "." +
                time.getSeconds();
}

function doNotPress()
{
    alert("YOU HAVE A VIRUS ON YOUR COMPUTER!!");
    alert("... okay you called my bluff, but it COULD'VE been really bad.");
    alert("what if something blew up.");
    alert("Or you could've gotten a virus.");
    alert("Okay, last alert, but this is your fault for pressing the button.");
}

function quickMath()
{
    var userNum1 = prompt("Please enter a number: ");
    var userNum2 = prompt("Please enter another number: ");
    var userNum3 = prompt("Please enter one more number: ");
    var userNum4 = prompt("I was wrong, need one more tehe: ");

    num1 = parseInt(userNum1);
    num2 = parseInt(userNum2);
    num3 = parseInt(userNum3);
    num4 = parseInt(userNum4);

    var sum1 = parseInt(num1 + num2);
    var sum2 = parseInt(num3 + num4);
    var product = parseInt(sum1 * sum2);

    alert(userNum1 + " + " + userNum2 + " = " + sum1);
    alert(userNum3 + " + " + userNum4 + " = " + sum2);
    alert(sum1 + " * " + sum2 + " = " + product);
    alert("QUICK MATHS!!!!")
}

function mathPractice()
{
    var score = 0;
    var userNum1 = prompt("Enter first number");
    var userNum2 = prompt("Enter third number");
    var userNum3 = prompt("... I can't count, this is the third number");

    var num1 = parseInt(userNum1);
    var num2 = parseInt(userNum2);
    var num3 = parseInt(userNum3);

    alert("IT IS TIME FOR MATH, LET'S GO!!")

    var answer1 = prompt(num1 + " + " + num2 + " = ?");
    if (answer1 == (num1 + num2))
    {
        alert("CORRECT, NEXT!");
        score++;
    } else {
        alert("I'm sorry, that is incorrect :(");
    }

    var answer2 = prompt(num2 + " * " + num3 + " = ?");
    if (answer2 == (num2 * num3))
    {
        alert("CORRECT, NEXT!");
        score++;
    } else {
        alert("I'm sorry, that is incorrect :(");
    }

    var answer2 = prompt(num2 + " * " + num3 + " * " +
                            num1 + " + " + num3 +  " = ?");
    if (answer2 == (num2 * userNum3 * num1 + num3))
    {
        alert("CORRECT, NEXT!");
        score++;
    } else {
        alert("I'm sorry, that is incorrect :(");
    }

    if (score == 3)
    {
        alert("WOWZA, YOU'RE A GENIUS!!");
    } else if (score == 2) {
        alert("Not bad, you think you could get a perfect score next time?");
    } else if (score == 1) {
        alert("Math can be challenging, it defenitly is for you.");
    } else {
        alert("... you should probably keep a calculator on you.");
    }
}

function dogYears()
{
    var userAge = prompt("How old are you?");
    var dogAge = userAge * 7;
    alert("If you were a dalmation, you would be " + dogAge +
            " years old, woof woof!" );
}

function salaryCheck()
{
    var userHours = prompt("How many hours would you work a day");
    var userDays = prompt("How many days a week would you work?");

    var hours = parseInt(userHours);
    var days = parseInt(userDays);

    var salary = hours * days * 25.50;
    alert("If you worked with us, you would make around $" + salary + 
            " for a normal work week, so what are you waiting for?!?!");
}

function getShape(numSides)
{
    if (numSides == 1)
    {
        alert("Your polygon is called a henagon because it has 1 side.");
    } else if (numSides == 2)
    {
        alert("Your polygon is called a digon because it has 2 sides.");
    } else if (numSides == 3)
    {
        alert("Your polygon is called a trigon because it has 3 sides.");
    } else if (numSides == 4)
    {
        alert("Your polygon is called a tetragon because it has 4 sides.");
    } else if (numSides == 5)
    {
        alert("Your polygon is called a pentagon  because it has 5 sides.");
    } else if (numSides == 6)
    {
        alert("Your polygon is called a hexagon because it has 6 sides.");
    } else if (numSides == 7)
    {
        alert("Your polygon is called a heptagon because it has 7 sides.");
    } else if (numSides == 8)
    {
        alert("Your polygon is called a octagon because it has 8 sides.");
    } else if (numSides == 9)
    {
        alert("Your polygon is called a enneagon because it has 9 sides.");
    } else if (numSides == 10)
    {
        alert("Your polygon is called a decagon because it has 10 sides.");
    } else if (numSides == 11)
    {
        alert("Your polygon is called a hendecagon  because it has 11 sides.");
    } else if (numSides == 12)
    {
        alert("Your polygon is called a dodecagon because it has 12 sides.");
    } else if (numSides == 13)
    {
        alert("Your polygon is called a triskaidecagon because it has 13 sides.");
    } else if (numSides == 14)
    {
        alert("Your polygon is called a tetrakaidecagon because it has 14 sides.");
    } else if (numSides == 15)
    {
        alert("Your polygon is called a pentakaidecagon because it has 15 sides.");
    } else if (numSides == 16)
    {
        alert("Your polygon is called a hexakaidecagon because it has 16 sides.");
    }
    
}

function validateEntry(entry)
{
    if (entry >= 0.5 && entry <= 16.4 ||
        entry <= -0.5 && entry >= -16.4) 
    {
    var newEntry = Math.abs(parseFloat(entry));
    var newEntry = Math.round(newEntry);
    return entry;

    } else 
    {
        var retry = prompt(entry + " is an invalid entry, try again!");
        validateEntry(retry);   
    }
}
