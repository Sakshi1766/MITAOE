// Get all the modal elements
const orderModal = document.getElementById("orderModal");
const paymentModal = document.getElementById("paymentModal");
const closeBtns = document.querySelectorAll(".close-btn");
const confirmOrderBtn = document.getElementById("confirmOrderBtn");

// Function to open the Order Modal
function openOrderModal(itemName, price, quantityId) {
  // Get the quantity from the input field
  const quantity = document.getElementById(quantityId).value;
  const totalAmount = price * quantity;
  
  // Update modal with item details
  document.getElementById("selectedItem").textContent = `Item: ${itemName}`;
  document.getElementById("itemPrice").textContent = `Price: ₹${price}`;
  document.getElementById("itemQuantity").textContent = `Quantity: ${quantity}`;
  document.getElementById("totalAmount").textContent = `Total: ₹${totalAmount}`;
  
  // Show the order modal
  orderModal.style.display = "block";
  
  // Handle confirming the order
  confirmOrderBtn.onclick = function () {
    openPaymentModal(totalAmount);
    orderModal.style.display = "none"; // Hide the order modal
  };
}
const crowdData = [
  { time: "08:00 AM - 09:00 AM", people: 10 },
  { time: "09:00 AM - 10:00 AM", people: 25 },
  { time: "10:00 AM - 11:00 AM", people: 40 },
  { time: "11:00 AM - 12:00 PM", people: 35 },
  { time: "12:00 PM - 01:00 PM", people: 70 },
  { time: "01:00 PM - 02:00 PM", people: 90 },
  { time: "02:00 PM - 03:00 PM", people: 60 },
  { time: "03:00 PM - 04:00 PM", people: 30 },
  { time: "04:00 PM - 05:00 PM", people: 20 },
  { time: "05:00 PM - 06:00 PM", people: 15 },
  { time: "06:00 PM - 07:00 PM", people: 8 },
  { time: "07:00 PM - 08:00 PM", people: 5 }
];

function getStatusClass(people) {
  if (people <= 20) return 'status-low';
  else if (people <= 50) return 'status-medium';
  else return 'status-high';
}

const tbody = document.getElementById('crowdStatusBody');

crowdData.forEach(slot => {
  const row = document.createElement('tr');
  row.className = getStatusClass(slot.people);

  const timeCell = document.createElement('td');
  timeCell.textContent = slot.time;

  const peopleCell = document.createElement('td');
  peopleCell.textContent = slot.people;

  row.appendChild(timeCell);
  row.appendChild(peopleCell);
  tbody.appendChild(row);
});


// Function to open the Payment Modal
function openPaymentModal(totalAmount) {
  document.getElementById("paymentAmount").textContent = `Total: ₹${totalAmount}`;
  paymentModal.style.display = "block";
}

// Handle closing modals when clicking the close button
closeBtns.forEach((btn) => {
  btn.onclick = function () {
    orderModal.style.display = "none";
    paymentModal.style.display = "none";
  };
});

// Handle the payment process
function makePayment(paymentMethod) {
  const totalAmount = document.getElementById("paymentAmount").textContent;
  alert(`Payment of ₹${totalAmount} using ${paymentMethod} is successful!`);
  paymentModal.style.display = "none"; // Close payment modal after success
}

// Close modals if clicked outside of modal content
window.onclick = function (event) {
  if (event.target === orderModal) {
    orderModal.style.display = "none";
  }
  if (event.target === paymentModal) {
    paymentModal.style.display = "none";
  }
}

// Add event listeners to all the "Order" buttons
const orderButtons = document.querySelectorAll('.order-btn');

orderButtons.forEach((button) => {
  button.addEventListener('click', function() {
    const itemName = this.getAttribute('data-item');
    const itemPrice = parseInt(this.getAttribute('data-price'));
    const quantityId = this.getAttribute('data-quantity-id');
    openOrderModal(itemName, itemPrice, quantityId);
  });
});
