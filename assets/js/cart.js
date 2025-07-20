// ==========================================================
// ==      ADIDAS WEBSITE - CART JAVASCRIPT (FINAL)        ==
// ==========================================================
// Phiên bản này bao gồm tất cả chức năng: Giỏ hàng, Modal, Tìm kiếm, Thanh toán...

// Biến này được khai báo MỘT LẦN DUY NHẤT ở đây.
let addedToCartModal;

document.addEventListener('DOMContentLoaded', () => {
    // Chỉ khởi tạo modal nếu phần tử tồn tại
    const modalElement = document.getElementById('addedToCartModal');
    if (modalElement) {
        addedToCartModal = new bootstrap.Modal(modalElement);
    }
    
    // Luôn cập nhật icon giỏ hàng khi tải trang
    updateCartIcon();

    // Xử lý Form Tìm kiếm ở Header
    const searchForm = document.getElementById('header-search-form');
    if (searchForm) {
        const searchInput = searchForm.querySelector('input[type="search"]');
        searchForm.addEventListener('submit', (event) => {
            event.preventDefault(); 
            const query = searchInput.value.trim();
            if (query) {
                // Sử dụng đường dẫn tương đối để hoạt động trên mọi host
                window.location.href = `search.html?query=${encodeURIComponent(query)}`;
            }
        });
    }

    // Gán sự kiện cho các nút "Thêm vào giỏ" có sẵn trên trang
    reinitializeCartButtons();

    // Gọi các hàm hiển thị tương ứng với từng trang
    if (window.location.pathname.endsWith('/Cart.html') || window.location.pathname.endsWith('/Cart')) {
        displayCart();
    }
    if (window.location.pathname.endsWith('/ThanhToan.html') || window.location.pathname.endsWith('/ThanhToan')) {
        setupCheckoutPageOldUI();
    }
});

/**
 * Gán lại sự kiện click cho tất cả các nút .add-to-cart-btn.
 * Cần thiết cho các nút được tạo ra động bằng JS (như trên trang tìm kiếm).
 */
function reinitializeCartButtons() {
    const buyButtons = document.querySelectorAll('.add-to-cart-btn');
    buyButtons.forEach(button => {
        // Thay thế nút bằng một bản sao để xóa các event listener cũ
        const newButton = button.cloneNode(true);
        button.parentNode.replaceChild(newButton, button);
        
        // Gán sự kiện mới
        newButton.addEventListener('click', handleAddToCartClick);
    });
}

/**
 * Hàm xử lý logic khi một nút "Thêm vào giỏ" được nhấn.
 * @param {Event} event - Sự kiện click.
 */
function handleAddToCartClick(event) {
    const productContainer = event.target.closest('.col, .col-3, .col-4, .col-md-3, .card');
    if (productContainer) {
        const productNameElement = productContainer.querySelector('h1, h4, h5, p, .card-title');
        const productPriceElement = productContainer.querySelector('h4, h5');
        const productImageElement = productContainer.querySelector('img');

        if (productNameElement && productPriceElement && productImageElement) {
            const productName = productNameElement.innerText.split('\n')[0].trim();
            const productPriceText = productPriceElement.innerText;
            const productPrice = parseFloat(productPriceText.replace(/\./g, '').replace(/[^0-9]/g, ''));
            
            if (isNaN(productPrice)) {
                alert('Lỗi: Sản phẩm này hiện không có giá.');
                return;
            }

            const product = { name: productName, price: productPrice, image: productImageElement.src, quantity: 1 };
            addToCart(product);
        }
    }
}


// ==========================================================
// ==               CÁC HÀM XỬ LÝ GIỎ HÀNG                 ==
// ==========================================================

function showAddedToCartModal(product) {
    if (!addedToCartModal) return;
    const formatPrice = (price) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
    document.getElementById('modal-product-image').src = product.image;
    document.getElementById('modal-product-name').textContent = product.name;
    document.getElementById('modal-product-price').textContent = formatPrice(product.price);
    addedToCartModal.show();
}

function addToCart(productData) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProductIndex = cart.findIndex(item => item.name === productData.name);
    if (existingProductIndex > -1) {
        cart[existingProductIndex].quantity += 1;
    } else {
        productData.quantity = 1; // Đảm bảo sản phẩm mới có số lượng là 1
        cart.push(productData);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartIcon();
    showAddedToCartModal(productData); 
}

function updateCartIcon() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartIconCount = document.getElementById('cart-item-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartIconCount) {
        cartIconCount.innerText = totalItems;
        cartIconCount.style.display = totalItems > 0 ? 'block' : 'none';
    }
}

function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const itemsContainer = document.getElementById('cart-items-container');
    const summarySection = document.getElementById('cart-summary-section');
    const totalPriceContainer = document.getElementById('total-price-container');
    if (!itemsContainer || !summarySection || !totalPriceContainer) return;

    itemsContainer.innerHTML = '';
    let grandTotal = 0;
    const formatPrice = (price) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);

    if (cart.length === 0) {
        itemsContainer.innerHTML = '<p class="text-center">Giỏ hàng của bạn đang trống.</p>';
        summarySection.style.display = 'none';
    } else {
        summarySection.style.display = 'block';
        cart.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            grandTotal += itemTotal;
            const cartRow = document.createElement('div');
            cartRow.className = 'row align-items-center mb-3';
            cartRow.innerHTML = `
                <div class="col-md-5 d-flex align-items-center"><img src="${item.image}" style="width: 80px; height: 80px; object-fit: cover; margin-right: 15px;"><span>${item.name}</span></div>
                <div class="col-md-2 text-center">${formatPrice(item.price)}</div>
                <div class="col-md-2 text-center"><input type="number" value="${item.quantity}" min="1" class="form-control" style="width: 80px; margin: 0 auto;" onchange="updateQuantity(${index}, this.value)"></div>
                <div class="col-md-2 text-center">${formatPrice(itemTotal)}</div>
                <div class="col-md-1 text-center"><button class="btn btn-sm btn-outline-danger" onclick="removeFromCart(${index})"><i class="fas fa-trash-alt"></i></button></div>
            `;
            itemsContainer.appendChild(cartRow);
        });
        totalPriceContainer.innerHTML = `<strong>Tổng cộng: ${formatPrice(grandTotal)}</strong>`;
    }
}

function updateQuantity(index, quantity) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const newQuantity = parseInt(quantity);
    if (newQuantity > 0) cart[index].quantity = newQuantity;
    else cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
    updateCartIcon();
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
    updateCartIcon();
}

// ==========================================================
// ==            CÁC HÀM XỬ LÝ TRANG THANH TOÁN            ==
// ==========================================================

function setupCheckoutPageOldUI() {
    displayOrderSummaryOldUI();
    const checkoutForm = document.getElementById('checkout-form');
    if (!checkoutForm) return;

    const paymentMethodRadios = document.querySelectorAll('input[name="paymentMethod"]');
    const creditCardForm = document.getElementById('credit-card-form');
    
    paymentMethodRadios.forEach(radio => {
        radio.addEventListener('change', (event) => {
            const isCardPayment = event.target.value === 'card';
            creditCardForm.style.display = isCardPayment ? 'block' : 'none';
            toggleCreditCardValidation(isCardPayment);
        });
    });

    checkoutForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (validateFormOldUI()) {
            placeOrder();
        } else {
            alert('Vui lòng kiểm tra lại các thông tin bắt buộc còn thiếu hoặc không hợp lệ.');
        }
    });
}

function toggleCreditCardValidation(isRequired) {
    const cardFields = document.querySelectorAll('#credit-card-form input');
    cardFields.forEach(field => {
        field.required = isRequired;
    });
}

function validateFormOldUI() {
    let isValid = true;
    const form = document.getElementById('checkout-form');
    const inputs = form.querySelectorAll('input[required]');
    inputs.forEach(input => {
        input.classList.remove('is-invalid');
        const feedback = input.nextElementSibling;
        if (feedback && feedback.classList.contains('invalid-feedback')) {
            feedback.style.display = 'none';
        }
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('is-invalid');
            if (feedback) feedback.style.display = 'block';
        } else if (input.type === 'email' && !/^\S+@\S+\.\S+$/.test(input.value)) {
            isValid = false;
            input.classList.add('is-invalid');
            if (feedback) feedback.style.display = 'block';
        }
    });
    return isValid;
}

function displayOrderSummaryOldUI() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const summaryContainer = document.getElementById('order-summary');
    if (!summaryContainer) return;

    if (cart.length === 0) {
        summaryContainer.innerHTML = '<p class="text-light">Không có sản phẩm nào để thanh toán.</p>';
        const payButton = document.querySelector('#checkout-form button[type="submit"]');
        if(payButton) payButton.disabled = true;
        return;
    }

    let grandTotal = 0;
    const formatPrice = (price) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
    
    let summaryHTML = '<ul style="list-style: none; padding: 0; color: white;">';
    cart.forEach(item => {
        grandTotal += item.price * item.quantity;
        summaryHTML += `<li class="d-flex justify-content-between mb-2"><span>${item.name} x${item.quantity}</span><span>${formatPrice(item.price * item.quantity)}</span></li>`;
    });
    summaryHTML += '<hr>';
    summaryHTML += `<li class="d-flex justify-content-between fw-bold fs-5"><span>Tổng cộng</span><span>${formatPrice(grandTotal)}</span></li></ul>`;
    summaryContainer.innerHTML = summaryHTML;
}

function placeOrder() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert("Giỏ hàng của bạn đang trống!");
        return;
    }
    const customerName = (document.getElementById('firstName').value + ' ' + document.getElementById('lastName').value).trim();
    const customerEmail = document.getElementById('email').value;
    const customerAddress = document.getElementById('address').value;
    const customerCity = document.getElementById('city').value;
    
    const orderDetails = {
        orderId: 'AD-' + Date.now(),
        orderDate: new Date().toLocaleDateString('vi-VN'),
        customer: { name: customerName, email: customerEmail, address: `${customerAddress}, ${customerCity}` },
        items: cart,
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    };
    sessionStorage.setItem('latestOrder', JSON.stringify(orderDetails));
    localStorage.removeItem('cart');
    // Sử dụng đường dẫn tương đối
    window.location.href = 'OrderConfirmation.html';
}