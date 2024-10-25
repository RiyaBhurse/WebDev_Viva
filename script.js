
let transactions = [];

function addTransaction(amount, type) {
    const transaction = type === 'debit' ? -amount : amount;
    transactions.push(transaction);
    displaySummary();
}
function calculateTotal() {
    let totalBalance = 0; 
    for (let transaction of transactions) {
        totalBalance += transaction; 
    }
    return totalBalance; 
}
function displaySummary() {
    let credit = 0;
    let debit = 0;

    transactions.forEach(transaction => {
        if (transaction > 0) {
            credit += transaction;
        } else {
            debit += transaction;
        }
    });
    console.log(credit);
    console.log(Math.abs(debit));
    console.log(calculateTotal());
}

// when subbmit button will get clicked we can call the onclick function.
let onclick = function() {
    const amount = parseFloat(document.getElementById("amountInput").value);
    const type = document.getElementById("typeInput").value;

    if (!isNaN(amount) && amount > 0) {
        addTransaction(amount, type);
    } else {
        console.log("Please enter a valid amount.");
    }
};
