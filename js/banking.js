function getInputValue(inputId) {
    const inputFild = document.getElementById(inputId);
    const inputAmountText = inputFild.value;
    const amountValue = parseFloat(inputAmountText);
    // clear input 
    inputFild.value = '';
    return amountValue;
}
function updateTotalFild(TotalFoldId, Amount) {
    const totalElement = document.getElementById(TotalFoldId);
    const TotalText = totalElement.innerText;
    const previouseTotal = parseFloat(TotalText);
    totalElement.innerText = previouseTotal + Amount;
}
document.getElementById('Deposit-btn').addEventListener('click', function () {
    /*     const DepositInput = document.getElementById('input-Deposit');
        const DepositAmountText = DepositInput.value;
        const DepositAmount = parseFloat(DepositAmountText); */
    const DepositAmount = getInputValue('input-Deposit');

    // Get currant Deposit
    /* const depositTotal = document.getElementById('total-deposit');
    const depositTotalText = depositTotal.innerText;
    const previouseDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = previouseDepositTotal + DepositAmount; */
    updateTotalFild('total-deposit', DepositAmount);

    // updated balance
    const balanceTotal = document.getElementById('total-amount');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + DepositAmount;
})

document.getElementById('widthrow-btn').addEventListener('click', function () {

    /* const widthrowInput = document.getElementById('input-withdrow');
    const widthrowAmountText = widthrowInput.value;
    const widthrowAmount = parseFloat(widthrowAmountText);
     */
    const widthrowAmount = getInputValue('input-withdrow');

    // Get currant withdrow
    /* const withdrowTotal = document.getElementById('withdrow-total');
    const withdrowTotalText = withdrowTotal.innerText;
    const previousWitdrowTotal = parseFloat(withdrowTotalText)
    

    withdrowTotal.innerText = previousWitdrowTotal + widthrowAmount; */

    updateTotalFild('withdrow-total', widthrowAmount);

    // Get currant balanceTotal
    const balanceTotal = document.getElementById('total-amount');
    const balanceTotalText = balanceTotal.innerText;
    const PreviousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = PreviousBalanceTotal - widthrowAmount;
})