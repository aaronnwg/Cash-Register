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

const INSUFFICIENT_FUNDS = {
  status: 'INSUFFICIENT_FUNDS',
  change: []
};

const POSITION_CID = [
  ['ONE HUNDRED', 100],
  ['TWENTY', 20],
  ['TEN', 10],
  ['FIVE', 5],
  ['ONE', 1],
  ['QUARTER', 0.25],
  ['DIME', 0.1],
  ['NICKEL', 0.05],
  ['PENNY', 0.01]
];


//add function
const add = (a, b) => a + b[1];

//checkcashregister()
const checkCashRegister = (price, cash, cid) => {
  let finalChange = [];
  let changeDue = cash - price;
  const cidSum = cid.reduce(add, 0).toFixed(2);
  /*
  If there is exactly enough money to provide change, the
  status key is “CLOSED”, and the change key is cid.
  */
  if (cidSum == changeDue) {
    return {
  status: "CLOSED",
  change: cid
  };
  }
  /*
  If there is not enough money to provide change, the status key
  is “INSUFFICIENT_FUNDS” and the change key is an empty array.
  */
  if (cidSum < changeDue) {
    return INSUFFICIENT_FUNDS;
  }
  /*
  If there is enough money to provide change with money still
  left in the drawer, the change is then provided by going down
  a list of currency units from high to low, pushing them to
  the change array, and subtracting them from both the cash
  owed and the cid.
  */
  let cidReverse = cid.reverse();
  POSITION_CID.map((posCid, index) => {
    const billValue = posCid[1];
    while (changeDue >= billValue && cidReverse[index][1] >= billValue) {
      changeDue -= billValue; // minus change due from bill value
      changeDue = changeDue.toFixed(2); // fix rounding errors
      const hasBillValueAlready = finalChange.filter(p => p[0] === cidReverse[index][0]);
      if (hasBillValueAlready.length > 0) {
        finalChange = finalChange.map(k => (k[0] === posCid[0] && [k[0], (k[1] += billValue)]) || [k[0], k[1]]);
      } else {
        finalChange.push([cidReverse[index][0], billValue]);
      }
      cidReverse[index][1] -= billValue; // minus bill value from cash-in-drawer
    }
  });
  if (changeDue == 0) {
    return {
      status: 'OPEN',
      change: finalChange
    };
  } else {
    return INSUFFICIENT_FUNDS;
  }
};


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
