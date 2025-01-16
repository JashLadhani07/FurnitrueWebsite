// Functions from previous code (changeQuantity, updatePrice, updateTotalPrice)

function populateCartItems() {
    const cartItemsElement = document.getElementById('cartItems');
    const totalItems = document.querySelectorAll('.Cart-Items').length;
  
    for (let i = 1; i <= totalItems; i++) {
      const productId = `product${i}`;
      const count = parseInt(document.getElementById(`count${i}`).innerText);
      const productName = getProductName(productId);
      const pricePerItem = getPriceForProductId(productId);
      const totalPrice = count * pricePerItem;
  
      const cartItemHTML = `
        <div class="cart-item">
          <span class="product-name">${productName}</span>
          <span class="quantity">x${count}</span>
          <span class="price">$${totalPrice.toFixed(2)}</span>
        </div>
      `;
      cartItemsElement.innerHTML += cartItemHTML;
    }
  
    const totalAmountElement = document.getElementById('totalAmount');
    totalAmountElement.innerText = '$' + updateTotalPrice();
  }
  
  populateCartItems(); // Call to populate cart items on page load
  
  // Handle form submission (assuming backend integration is not required)
  const checkoutForm = document.querySelector('.Billing-Info');
  checkoutForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
  
    // Simulate order confirmation (replace with actual order processing)
    alert(`Thank you, ${name}! Your order confirmation has been sent to ${email}. Your order details:\n  - Name: ${name}\n  - Email: ${email}\n  - Address: ${address}`);
  
    // Optionally, clear cart after successful order
    // removeAll(); // Function from previous code
  });
  