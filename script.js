/*const calculateTip = () => {
    const billAmount = document.getElementById('billAmount').value;
    const tipPercentage = document.getElementById('tipPercentage').value;

    const tipAmount = billAmount * tipPercentage;
    const totalAmount = parseFloat(billAmount) + parseFloat(tipAmount);

    document.getElementById('totalAmount').textContent = `${totalAmount.toFixed(2)}`;
}

document.getElementById('calculateBtn').addEventListener('click', calculateTip);

*/




const calculate=document.getElementById('calculateBtn');
const total=document.getElementById('totalAmount');


function calc(){
    const bill=document.getElementById('billAmount').value;
    const tip=document.getElementById('tipPercentage').value;

    const mul=bill*tip;
    const tot=parseFloat(bill)+parseFloat(mul);
    
    total.textContent=`${tot.toFixed(2)}`;
}

calculate.addEventListener('click',calc);