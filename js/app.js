const toCurrency = (n, curr, LanguageFormat = undefined) =>
  Intl.NumberFormat(LanguageFormat, {
    style: 'currency',
    currency: curr,
  }).format(n);

function calculate(){
   let penny = document.getElementById('penny').value * 0.01.toFixed(2);
   //come back and fix rounding prob on nickles, dimes, quarters --> 2 x .25 = $0.5 instead of $0.50 
   let nickle = document.getElementById('nickle').value * 0.05.toFixed(2);
   let dime = document.getElementById('dime').value * 0.10.toFixed(2);
   let quarter = document.getElementById('quarter').value * 0.25.toFixed(2);
   let oneDollar = document.getElementById('dollar').value * 1.00.toFixed(2);
   let fiveDollar = document.getElementById('five-dollar').value * 5.00.toFixed(2);
   
   total = (penny + nickle + dime + quarter + oneDollar + fiveDollar).toFixed(2);
//== UPDATE SPAN NEXT TO INPUT WITH MONEY TOTAL FOR JUST THAT INPUT ==
   document.getElementsByClassName('penny-total')[0].innerHTML = "X .01 = $" +  penny;
   document.getElementsByClassName('nickle-total')[0].innerHTML = "X .05 = $" +  nickle;
   document.getElementsByClassName('dime-total')[0].innerHTML = "X .10 = $" +  dime;
   document.getElementsByClassName('quarter-total')[0].innerHTML = "X .25 = $" +  quarter;
   document.getElementsByClassName('dollar-total')[0].innerHTML = "X 1.00 = $" +  oneDollar;
   document.getElementsByClassName('five-dollar-total')[0].innerHTML = "X 5.00 = $" +  fiveDollar;

   let displayTotal = document.getElementById('calculated-amount').setAttribute("value", total);
   console.log(displayTotal);
   document.getElementById('calculated-amount').innerHTML = `<span class="currentcey-symbol">$</span>${total}`;





   console.log(penny);
   console.log(nickle);
   //console.log(totalP);
   //console.log(totalN);
   console.log(oneDollar);
   console.log(fiveDollar);
   console.log(total);
   console.log("calculated-amount");
}