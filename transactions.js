
const transactions = [
    { date: '2023-01-01', type: 'Deposit', amount: 500 },
    { date: '2023-01-15', type: 'Withdrawal', amount: 200 },
    { date: '2023-01-30', type: 'Deposit', amount: 250}, 
    { date: '2023-02-22', type: 'Withdrawal', amount: 345},
    { date: '2023-03-28', type: 'Withdrawal', amount: 45},
    { date: '2023-04-17', type: 'Deposit', amount: 800},
    { date: '2023-05-16', type: 'Withdrawal', amount: 16},
    { date: '2023-06-04', type: 'Withdrawal', amount: 32},
    { date: '2023-07-26', type: 'Withdrawal', amount: 30},
    { date: '2023-08-09', type: 'Deposit', amount: 400},
    { date: '2023-09-12', type: 'Withdrawal', amount: 146},
    { date: '2023-09-20', type: 'Deposit', amount: 247},
    { date: '2023-10-22', type: 'Withdrawal', amount: 92},
    { date: '2023-11-22', type: 'Withdrawal', amount: 162},
    { date: '2023-12-22', type: 'Withdrawal', amount: 22},
    { date: '2023-12-22', type: 'Deposit', amount: 600},
    { date: '2023-12-22', type: 'Withdrawal', amount: 44}
  ];
  
 
// Sort transactions by date in descending order
transactions.sort((a, b) => new Date(b.date) - new Date(a.date));


function displayTransactions(transactionsToDisplay) {
    const list = document.getElementById('transactionList');
    list.className = 'max-w-2xl mx-auto'
    list.innerHTML = ''; 
  
    transactionsToDisplay.forEach(transaction => {
      const item = document.createElement('div');
      item.className = 'p-4 mb-2 bg-white rounded shadow flex justify-between text-lg';
  
      const dateDiv = document.createElement('div');
      dateDiv.innerHTML = `Date: ${transaction.date}`;
      
      const typeDiv = document.createElement('div');
      typeDiv.innerHTML = `Type: ${transaction.type}`;
  
      const amountDiv = document.createElement('div');
      amountDiv.innerHTML = `Amount: $${transaction.amount}`;
  
      item.appendChild(dateDiv);
      item.appendChild(typeDiv);
      item.appendChild(amountDiv);
  
      list.appendChild(item);
    });
  }


displayTransactions(transactions);

// Function to parse date string to Date object
function parseDateString(dateString) {
  const [year, month] = dateString.split('-').map(num => parseInt(num, 10));
  return new Date(year, month - 1);
}

function filterTransactions() {
    const selectedMonth = document.getElementById('filterMonth').value;
  
    // Check if a month is selected
    if(selectedMonth === "") {
      resetFilter();
      return;
    }
  
    const filteredTransactions = transactions.filter(transaction => {
      const transactionDate = new Date(transaction.date);
      return transactionDate.getMonth() === parseInt(selectedMonth, 10);
    });
  
    displayTransactions(filteredTransactions);
  }
  

function resetFilter() {
  displayTransactions(transactions);
}