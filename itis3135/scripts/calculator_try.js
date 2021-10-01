function add()
{
    var x = parseFloat(prompt("Enter the fisrt number you" 
                                + " would like to add:"));
    var y = parseFloat(prompt("Enter the second number you" 
                                + " would like to add:"));

    var sum = x + y;
    
    alert(x + " + " + y + " = " + sum);
}

function subtract()
{
    var x = parseFloat(prompt("Enter the fisrt number you" 
                                + " would like to subtract:"));
    var y = parseFloat(prompt("Enter the second number you" 
                                + " would like to subtract:"));

    var difference = x - y;
    
    alert(x + " - " + y + " = " + difference);
}

function multiply()
{
    var x = parseFloat(prompt("Enter the fisrt number you" 
                                + " would like to multiply:"));
    var y = parseFloat(prompt("Enter the second number you" 
                                + " would like to multiply:"));

    var product = x * y;
    
    alert(x + " * " + y + " = " + product);
}

function divide()
{
    var x = parseFloat(prompt("Enter the fisrt number you" 
                                + " would like to divide:"));
    var y = parseFloat(prompt("Enter the second number you" 
                                + " would like to divide:"));

    var quotient = x / y;
    
    alert(x + " / " + y + " = " + quotient);
}