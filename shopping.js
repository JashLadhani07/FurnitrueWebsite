function changeQuantity(productId, action) {
    let countElement = document.getElementById('count' + productId.slice(-1));
    let count = parseInt(countElement.innerText);

    if (action === 'increase') {
        count++;
    } else if (action === 'decrease' && count > 0) {
        count--;
    }

    countElement.innerText = count;

    // If count becomes 0, remove the item from the cart
    if (count === 0) {
        removeItem(productId);
    } else {
        updatePrice(productId, count);
        updateTotalPrice();
    }
}


function updatePrice(productId, count) {
    let priceElement = document.getElementById('priceValue' + productId.slice(-1));
    let pricePerItem = getPriceForProductId(productId); // Get the price per item based on productId
    let totalPrice = pricePerItem * count;
    priceElement.innerText = 'Rs.' + totalPrice.toFixed(2);
}

function updateTotalPrice() {
    let totalItems = document.querySelectorAll('.Cart-Items').length;
    let totalPrice = 0;

    for (let i = 1; i <= totalItems; i++) {
        let count = parseInt(document.getElementById('count' + i).innerText);
        let pricePerItem = getPriceForProductId('product' + i); // Get the price per item based on productId
        totalPrice += count * pricePerItem;
    }

    document.querySelector('.total-amount').innerText = 'Rs.' + totalPrice.toFixed(2);
}

function getPriceForProductId(productId) {
    // You need to implement this function to return the price for the given productId
    // For example:
    if (productId === 'product1') {
        return 4600;
    } else if (productId === 'product2') {
        return 4900;
    }
    // Add more cases for other products
}

function addToCart(productId) {
    // You need to implement this function to add the product details to the shopping cart
    // For example:
    let productName = getProductName(productId);
    let productPrice = getPriceForProductId(productId);
    let productImage = getProductImage(productId);

    // Add logic to display the product details in the shopping cart
}

function getProductName(productId) {
    // You need to implement this function to return the name of the product for the given productId
    // For example:
    if (productId === 'product1') {
        return 'Chair 01';
    } else if (productId === 'product2') {
        return 'Chair 02';
    }
    // Add more cases for other products
}

function getProductImage(productId) {
    // You need to implement this function to return the image URL of the product for the given productId
    // For example:
    if (productId === 'product1') {
        return 'p1.jpg';
    } else if (productId === 'product2') {
        return 'p2.jpg';
    }
    // Add more cases for other products
}

function removeAll() {
    // 1. Get all product elements:
    const productElements = document.querySelectorAll('.Cart-Items');
  
    // 2. Loop through each product element and remove it:
    productElements.forEach(productElement => productElement.remove());
  
    // 3. Reset total price to 0:
    document.querySelector('.total-amount').innerText = '$0.00';
  }
  function myFunction() {
    alert("Thank You for your Purchase!");
    }
    function removeItem(productId) {
        // Remove the product element from the DOM
        let productElement = document.getElementById(productId);
        productElement.remove();
    
        // Update the total price after removing the item
        updateTotalPrice();
    }
  

