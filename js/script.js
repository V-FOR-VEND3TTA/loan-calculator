// The logic is based on mathematical standards banks use to calculate loans
function computeLoan() {
  var amount = document.getElementById('amount').value
  var interestRate = document.getElementById('interestRate').value
  var months = document.getElementById('months').value
  var interest = (amount * (interestRate * 0.01)) / months
  var payment = (amount / months + interest).toFixed(2) // To 2 decimal places

  payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') // Regex for pattern recognition
  document.getElementById('payment').innerHTML =
    'Monthly Payment is $ ' + payment
}
