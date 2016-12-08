function VerifyOrder()
{
    PickLetter1();
    PickLetter2();
    PickLetter3();
    LetterColor();
    ShirtColor();
    ShirtsSmall();
    ShirtsMedium();
    ShirtsLarge();
    ShirtsXLarge();
    ShirtsXXLarge();
}

function PickLetter1()
{
    var letter1 = document.getElementById("letter1").selectedIndex;
    var letter1Choice = "";

    if (letter1 == 0)
    {
        letter1Choice = "Alpha";
    }
    else if (letter1 == 1)
    {
        letter1Choice = "Beta";
    }
    else if (letter1 == 2)
    {
        letter1Choice = "Gamma";
    }
    else if (letter1 == 3)
    {
        letter1Choice = "Delta";
    }
    else if (letter1 == 4)
    {
        letter1Choice = "Epsilon";
    }
    else if (letter1 == 5)
    {
        letter1Choice = "Zeta";
    }
    else if (letter1 == 6)
    {
        letter1Choice = "Eta";
    }
    else if (letter1 == 7)
    {
        letter1Choice = "Theta";
    }
    else if (letter1 == 8)
    {
        letter1Choice = "Iota";
    }
    else if (letter1 == 9)
    {
        letter1Choice = "Kappa";
    }
    else if (letter1 == 10)
    {
        letter1Choice = "Lambda";
    }
    else if (letter1 == 11)
    {
        letter1Choice = "Mu";
    }
    else if (letter1 == 12)
    {
        letter1Choice = "Nu";
    }
    else if (letter1 == 13)
    {
        letter1Choice = "Xi";
    }
    else if (letter1 == 14)
    {
        letter1Choice = "Omicron";
    }
    else if (letter1 == 15)
    {
        letter1Choice = "Pi";
    }
    else if (letter1 == 16)
    {
        letter1Choice = "Rho";
    }
    else if (letter1 == 17)
    {
        letter1Choice = "Sigma";
    }
    else if (letter1 == 18)
    {
        letter1Choice = "Tau";
    }
    else if (letter1 == 19)
    {
        letter1Choice = "Upsilon";
    }
    else if (letter1 == 20)
    {
        letter1Choice = "Phi";
    }
    else if (letter1 == 21)
    {
        letter1Choice = "Psi";
    }
    else if (letter1 == 22)
    {
        letter1Choice = "Chi";
    }
    else if (letter1 == 23)
    {
        letter1Choice = "Omega";
    }

    document.getElementById("outputLetter1").innerHTML = "Letter 1 is: " + letter1Choice;
}

function PickLetter2()
{
    var letter2 = document.getElementById("letter2").selectedIndex;
    var letter2Choice = "";

    if (letter2 == 0)
    {
        letter2Choice = "Alpha";
    }
    else if (letter2 == 1)
    {
        letter1Choice = "Beta";
    }
    else if (letter2 == 2)
    {
        letter2Choice = "Gamma";
    }
    else if (letter2 == 3)
    {
        letter2Choice = "Delta";
    }
    else if (letter2 == 4)
    {
        letter2Choice = "Epsilon";
    }
    else if (letter2 == 5)
    {
        letter2Choice = "Zeta";
    }
    else if (letter2 == 6)
    {
        letter2Choice = "Eta";
    }
    else if (letter2 == 7)
    {
        letter2Choice = "Theta";
    }
    else if (letter2 == 8)
    {
        letter2Choice = "Iota";
    }
    else if (letter2 == 9)
    {
        letter2Choice = "Kappa";
    }
    else if (letter2 == 10)
    {
        letter2Choice = "Lambda";
    }
    else if (letter2 == 11)
    {
        letter2Choice = "Mu";
    }
    else if (letter2 == 12)
    {
        letter2Choice = "Nu";
    }
    else if (letter2 == 13)
    {
        letter2Choice = "Xi";
    }
    else if (letter2 == 14)
    {
        letter2Choice = "Omicron";
    }
    else if (letter2 == 15)
    {
        letter2Choice = "Pi";
    }
    else if (letter2 == 16)
    {
        letter2Choice = "Rho";
    }
    else if (letter2 == 17)
    {
        letter2Choice = "Sigma";
    }
    else if (letter2 == 18)
    {
        letter2Choice = "Tau";
    }
    else if (letter2 == 19)
    {
        letter2Choice = "Upsilon";
    }
    else if (letter2 == 20)
    {
        letter2Choice = "Phi";
    }
    else if (letter2 == 21)
    {
        letter2Choice = "Psi";
    }
    else if (letter2 == 22)
    {
        letter2Choice = "Chi";
    }
    else if (letter2 == 23)
    {
        letter2Choice = "Omega";
    }

    document.getElementById("outputLetter2").innerHTML = "Letter 2 is: " + letter2Choice;
}

function PickLetter3()
{
    var letter3 = document.getElementById("letter3").selectedIndex;
    var letter3Choice = "";

    if (letter3 == 0)
    {
        letter3Choice = "Alpha";
    }
    else if (letter3 == 1)
    {
        letter3Choice = "Beta";
    }
    else if (letter3 == 2)
    {
        letter3Choice = "Gamma";
    }
    else if (letter3 == 3)
    {
        letter3Choice = "Delta";
    }
    else if (letter3 == 4)
    {
        letter3Choice = "Epsilon";
    }
    else if (letter3 == 5)
    {
        letter3Choice = "Zeta";
    }
    else if (letter3 == 6)
    {
        letter3Choice = "Eta";
    }
    else if (letter3 == 7)
    {
        letter3Choice = "Theta";
    }
    else if (letter3 == 8)
    {
        letter3Choice = "Iota";
    }
    else if (letter3 == 9)
    {
        letter3Choice = "Kappa";
    }
    else if (letter3 == 10)
    {
        letter3Choice = "Lambda";
    }
    else if (letter3 == 11)
    {
        letter3Choice = "Mu";
    }
    else if (letter3 == 12)
    {
        letter3Choice = "Nu";
    }
    else if (letter3 == 13)
    {
        letter3Choice = "Xi";
    }
    else if (letter3 == 14)
    {
        letter3Choice = "Omicron";
    }
    else if (letter3 == 15)
    {
        letter3Choice = "Pi";
    }
    else if (letter3 == 16)
    {
        letter3Choice = "Rho";
    }
    else if (letter3 == 17)
    {
        letter3Choice = "Sigma";
    }
    else if (letter3 == 18)
    {
        letter3Choice = "Tau";
    }
    else if (letter3 == 19)
    {
        letter3Choice = "Upsilon";
    }
    else if (letter3 == 20)
    {
        letter3Choice = "Phi";
    }
    else if (letter3 == 21)
    {
        letter3Choice = "Psi";
    }
    else if (letter3 == 22)
    {
        letter3Choice = "Chi";
    }
    else if (letter3 == 23)
    {
        letter3Choice = "Omega";
    }

    document.getElementById("outputLetter3").innerHTML = "Letter 3 is: " + letter3Choice;
}

function LetterColor()
{
    var letterColor = document.getElementById("letterColor").selectedIndex;
    var letterColorChoice = "";

    if (letterColor == 0)
    {
        letterColorChoice = "Black";
    }
    else if (letterColor == 1)
    {
        letterColorChoice = "White";
    }
    else if (letterColor == 2)
    {
        letterColorChoice = "Red";
    }
    else if (letterColor == 3)
    {
        letterColorChoice = "Yellow";
    }
    else if (letterColor == 4)
    {
        letterColorChoice = "Blue";
    }
    else if (letterColor == 5)
    {
        letterColorChoice = "Green";
    }
    else if (letterColor == 6)
    {
        letterColorChoice = "Orange";
    }
    else if (letterColor == 7)
    {
        letterColorChoice = "Violet";
    }

    document.getElementById("outputLetterColor").innerHTML = "Letter color is: " + letterColorChoice;
}

function ShirtColor()
{
    var shirtColor = document.getElementById("shirtColor").selectedIndex;
    var shirtColorChoice = "";

    if (shirtColor == 0)
    {
        shirtColorChoice = "Black";
    }
    else if (shirtColor == 1)
    {
        shirtColorChoice = "White";
    }
    else if (shirtColor == 2)
    {
        shirtColorChoice = "Red";
    }
    else if (shirtColor == 3)
    {
        shirtColorChoice = "Yellow";
    }
    else if (shirtColor == 4)
    {
        shirtColorChoice = "Blue";
    }
    else if (shirtColor == 5)
    {
        shirtColorChoice = "Green";
    }
    else if (shirtColor == 6)
    {
        shirtColorChoice = "Orange";
    }
    else if (shirtColor == 7)
    {
        shirtColorChoice = "Violet";
    }

    document.getElementById("outputShirtColor").innerHTML = "Letter color is: " + shirtColorChoice;
}

function ShirtsSmall()
{
    var smallShirts = parseFloat(document.getElementById("smallShirtQty").value);
    document.getElementById("outputShirtQtyS").innerHTML = "Small Shirt Quantity is: " + smallShirts;
}

function ShirtsMedium()
{
    var mediumShirts = parseFloat(document.getElementById("mediumShirtQty").value);
    document.getElementById("outputShirtQtyM").innerHTML = "Medium Shirt Quantity is: " + mediumShirts;
}

function ShirtsLarge()
{
    var largeShirts = parseFloat(document.getElementById("largeShirtQty").value);
    document.getElementById("outputShirtQtyL").innerHTML = "Large Shirt Quantity is: " + largeShirts;
}

function ShirtsXLarge()
{
    var xLargeShirts = parseFloat(document.getElementById("xlShirtQty").value);
    document.getElementById("outputShirtQtyXL").innerHTML = "XL Shirt Quantity is: " + xLargeShirts;
}

function ShirtsXXLarge()
{
    var xxLargeShirts = parseFloat(document.getElementById("xxlShirtQty").value);
    document.getElementById("outputShirtQtyXXL").innerHTML = "XXL Shirt Quantity is: " + xxLargeShirts;
}

function Total()
{
    //var shirtsTotal = 0;
    var pricePerShirt = 10;
    //var shirtCost = 0;
    var shipping = 15;
    var smallShirts = parseFloat(document.getElementById("smallShirtQty").value);
    var mediumShirts = parseFloat(document.getElementById("mediumShirtQty").value);
    var largeShirts = parseFloat(document.getElementById("largeShirtQty").value);
    var xLargeShirts = parseFloat(document.getElementById("xlShirtQty").value);
    var xxLargeShirts = parseFloat(document.getElementById("xxlShirtQty").value);
    var salesTax = parseFloat(document.getElementById("stateSalesTax").value);
    //var salesTaxAmount = 0;
    //var salesTaxTotal = 0;
    var totalCost = 0;

    shirtsTotal = smallShirts + mediumShirts + largeShirts + xLargeShirts + xxLargeShirts;

    shirtCost = shirtsTotal * pricePerShirt;

    salesTaxAmount = salesTax / 100;

    salesTaxTotal = shirtCost * salesTaxAmount;

    if (shirtsTotal <= 29)
    {
        totalCost = shirtCost + salesTaxTotal + shipping
    }
    else if (shirtsTotal >= 30)
    {
        totalCost = (shirtCost + salesTaxTotal) * 0.9;
    }

    document.getElementById("total").innerHTML = "Total is: $" + totalCost.toFixed(2);

}