

function processForm() {
    
    //Extract Inputs from GUI
    var bill = document.getElementById("bill").value;
    var tipPer = document.getElementById("tipPer").value;
    
    
    //Keep Inputs positive with 2 decimal places for the bill and 2 integers for the tipPer
    //Use parseFloat to change back to numbers(the other methods change the numbers to strings)
    bill = parseFloat(Math.abs(bill).toFixed(2));
    tipPer = parseFloat(Math.abs(tipPer).toPrecision(2));
    
    //console.log(bill);
    //console.log(tipPer);
    
    
    //Calculate Tip Amount:
    tipAmount = bill * (tipPer / 100);
    
    //Round Tip Amount to 2 decimals and use parseFloat to change back to a number:
    tipAmount = parseFloat(tipAmount.toFixed(2));
    
    //console.log(tipAmount);
    
    //Calculate Total Bill(Bill Amount + Tip Amount):
    billTotal = bill + tipAmount;
    billTotal = billTotal.toFixed(2);
    
    //console.log(billTotal);
    
    
    //Display bill and tip totals on screen
    document.getElementById("bill__total--value").innerHTML = "$" + billTotal;
    document.getElementById("tip__total--value").innerHTML = "$" + tipAmount;
    
    
}



