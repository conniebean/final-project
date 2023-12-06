
const pastTransfers = JSON.parse(localStorage.getItem('pastTransfers')) || [];

displayTransfers();

document.getElementById('transferForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const amount = document.getElementById('amount').value;
    const toAccount = document.getElementById('toAccount').value;

    addTransfer({ amount, toAccount });
    event.target.reset();
});

function addTransfer(transfer) {
    pastTransfers.push(transfer);
    localStorage.setItem('pastTransfers', JSON.stringify(pastTransfers)); 
    displayTransfers();
}

function displayTransfers() {
    const transfersDiv = document.getElementById('pastTransfers');
    transfersDiv.innerHTML = '';

    pastTransfers.forEach(transfer => {
        const transferDiv = document.createElement('div');
        transferDiv.className = 'p-4 mb-2 bg-gray-100 rounded flex justify-between';
        transferDiv.innerHTML = `
            <span>$${transfer.amount}</span>
            <span>-> ${transfer.toAccount}</span>
        `;
        transfersDiv.appendChild(transferDiv);
    });
}
