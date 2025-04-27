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
