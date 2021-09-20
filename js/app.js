// const toCurrency = (n, curr, LanguageFormat = undefined) =>
//   Intl.NumberFormat(LanguageFormat, {
//     style: 'currency',
//     currency: curr,
//   }).format(n);


let penny = document.getElementById('penny').value * 0.01.toFixed(2);
   //come back and fix rounding prob on nickles, dimes, quarters --> 2 x .25 = $0.5 instead of $0.50 
   let nickle = document.getElementById('nickle').value * 0.05.toFixed(2);
   let dime = document.getElementById('dime').value * 0.10.toFixed(2);
   let quarter = document.getElementById('quarter').value * 0.25.toFixed(2);
   let oneDollar = document.getElementById('dollar').value * 1.00.toFixed(2);
   let fiveDollar = document.getElementById('five-dollar').value * 5.00.toFixed(2);
   
function calculate(){
   let penny = document.getElementById('penny').value * 0.01.toFixed(2);
   //come back and fix rounding prob on nickles, dimes, quarters --> 2 x .25 = $0.5 instead of $0.50 
   let nickle = document.getElementById('nickle').value * 0.05.toFixed(2);
   let dime = document.getElementById('dime').value * 0.10.toFixed(2);
   let quarter = document.getElementById('quarter').value * 0.25.toFixed(2);
   let oneDollar = document.getElementById('dollar').value * 1.00.toFixed(2);
   let fiveDollar = document.getElementById('five-dollar').value * 5.00.toFixed(2);
   let total = (penny + nickle + dime + quarter + oneDollar + fiveDollar).toFixed(2);

//== UPDATE SPAN NEXT TO INPUT WITH MONEY TOTAL FOR JUST THAT INPUT ==
   document.getElementsByClassName('penny-total')[0].innerHTML = "X .01 = $" +  penny;
   document.getElementsByClassName('nickle-total')[0].innerHTML = "X .05 = $" +  nickle;
   document.getElementsByClassName('dime-total')[0].innerHTML = "X .10 = $" +  dime;
   document.getElementsByClassName('quarter-total')[0].innerHTML = "X .25 = $" +  quarter;
   document.getElementsByClassName('dollar-total')[0].innerHTML = "X 1.00 = $" +  oneDollar;
   document.getElementsByClassName('five-dollar-total')[0].innerHTML = "X 5.00 = $" +  fiveDollar;


   document.getElementById('calculated-amount').innerHTML = `<span class="currentcey-symbol">$</span>${total}`;

   let displayTotal = document.getElementById('calculated-amount').setAttribute("value", total);
   let displayValue = document.getElementById('calculated-amount');
   if (displayValue) {
      let value = displayValue.getAttribute('value');
      console.log("This is the value " + value);
   }
   

   console.log(penny);
   console.log(nickle);
   //console.log(totalP);
   //console.log(totalN);
   console.log(oneDollar);
   console.log(fiveDollar);
   console.log(total);
}

// ARRAY   
let x = 0;
// DEFINE ARRAY MONEY TOTAL WILL BE SAVED TO.
let saved_Money = Array();

function saveTotal() {
   //Get the value 
    let displayValue = document.getElementById('calculated-amount').getAttribute('value');
    console.log("Saved total function " + displayValue);
   
   // Save value to array, assign index number "x" then increment 1 for next index. 
   saved_Money[x] = displayValue;
   alert(`$ ${saved_Money[x]} has been saved to savedMoney array. Index= ${x}`);
   x++;
   //Clear value from element.
   document.getElementById('calculated-amount').value = "";
}

function display_totals(){
   let e = "<hr/>";   
    
   for (var y=0; y<saved_Money.length; y++)
   
   {
     e += "Element " + y + " = " + saved_Money[y] + "<br/>";
     console.log(y + "This is Y's current index");
     console.log(saved_Money + " <=== Whats in the array");
   }
   document.getElementById('display-saved-totals').innerHTML = e;
   console.log(e + " <== This is E which is suppose to be from array");
}