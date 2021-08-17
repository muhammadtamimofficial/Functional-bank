document.getElementById('Deposit-btn').addEventListener('click', function () {
    const DepositInput = document.getElementById('input-Deposit');
    const DepositAmountText = DepositInput.value;
    const DepositAmount = parseFloat(DepositAmountText);

    // Get currant Deposit
    const depositTotal = document.getElementById('total-deposit');
    const depositTotalText = depositTotal.innerText;
    const previouseDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = previouseDepositTotal + DepositAmount;

    // updated balance
    const balanceTotal = document.getElementById('total-amount');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal + DepositAmount;

    // clear input 
    DepositInput.value = '';
})

document.getElementById('widthrow-btn').addEventListener('click', function () {

    const widthrowInput = document.getElementById('input-withdrow');
    const widthrowAmountText = widthrowInput.value;
    const widthrowAmount = parseFloat(widthrowAmountText);
    console.log(widthrowAmount);

    // Get currant withdrow
    const withdrowTotal = document.getElementById('withdrow-total');
    const withdrowTotalText = withdrowTotal.innerText;
    const previousWitdrowTotal = parseFloat(withdrowTotalText)
    withdrowTotal.innerText = previousWitdrowTotal + widthrowAmount;
    console.log(withdrowTotal);

    // Get currant balanceTotal
    const balanceTotal = document.getElementById('total-amount');
    const balanceTotalText = balanceTotal.innerText;
    const PreviousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = PreviousBalanceTotal - widthrowAmount;

    console.log(PreviousBalanceTotal);

    // clear input
    widthrowInput.value = '';
})