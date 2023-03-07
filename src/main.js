//IMPORTS
/*import checkCashRegister from "./module.js";
console.log(checkCashRegister)*/
// Variables
const button = document.getElementById('button');
const returnChange = document.getElementById('return-change');
const returnStatus = document.getElementById('return-status');
const cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];
console.log(cid)
//payment
const cashInput = document.getElementById("payment");
var payment
const paymentHandler = e => {
    cash = e.target.value;
    console.log(cash);
    payment = cash
};
cashInput.addEventListener('input', paymentHandler);

//price
const priceInput = document.getElementById("price");
var newPrice
const priceHandler = e => {
  price = e.target.value;
  console.log(price);
  newPrice = price
};
priceInput.addEventListener('input', priceHandler);

button.onclick = ()=>{
  document.getElementById('output').innerHTML = payment
}



  console.log(newPrice);
  console.log(payment);
  console.log(cid);

// button.addEventListener('click', cashRegisterFunction())
