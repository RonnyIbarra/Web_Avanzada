// Datos de producto simulados
const products = [
    { id: 1, name: 'LAPTOP', price: 250 },
    { id: 2, name: 'TABLET', price: 210 },
    { id: 3, name: 'PC', price: 380 },
    { id: 4, name: 'MOUSE', price: 15 },
    { id: 5, name: 'KEYBOARD', price: 20 },
  ];
  
  let cart = [];
  
  // Función para simular la obtención de productos mediante una devolución de llamada
  function fetchProductsWithCallback(callback) {
    setTimeout(() => {
      callback(products);  // Simulamos la llamada a una API con setTimeout
    }, 1000);  // El retardo de 1 segundo simula la espera de una API real
  }
  
  // Función para añadir un producto al carrito
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingProduct = cart.find(item => item.id === product.id);
  
    // Si el producto ya está en el carrito, aumentamos la cantidad
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      // Si no está, lo añadimos al carrito con una cantidad inicial de 1
      cart.push({ ...product, quantity: 1 });
    }
    renderCart();  // Actualizamos la vista del carrito
  }
  
  // Función para eliminar un producto del carrito
  function removeFromCart(productId) {
    // Filtramos el carrito para eliminar el producto con el id especificado
    cart = cart.filter(item => item.id !== productId);
    renderCart();  // Actualizamos la vista del carrito
  }
  
  // Función para obtener productos con Promesas
  function fetchProductsWithPromise() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);  // Simulamos la llamada con una promesa
      }, 1000);
    });
  }
  
  // Función para obtener productos con async/await
  async function fetchProductsWithAsyncAwait() {
    // Esperamos a que la promesa devuelva los productos
    const products = await fetchProductsWithPromise();
    renderProducts(products);  // Mostramos los productos en la página
  }
  
  // Representar productos en la interfaz de usuario
  function renderProducts(products) {
    const productsList = document.getElementById('products-list');
    productsList.innerHTML = '';  // Limpiamos el contenido anterior
  
    // Por cada producto, creamos un div para mostrarlo
    products.forEach(product => {
      const productItem = document.createElement('div');
      productItem.classList.add('product-item');
      productItem.innerHTML = `
        <span>${product.name} - $${product.price}</span>
        <button class="btn-style" onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productsList.appendChild(productItem);
    });
  }
  
  // Representar el carrito en la interfaz de usuario
  function renderCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';  // Limpiamos el contenido anterior
  
    // Por cada producto en el carrito, mostramos su nombre, precio y cantidad
    cart.forEach(item => {
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      cartItem.innerHTML = `
        <span>${item.name} - $${item.price} x ${item.quantity}</span>
        <button class="btn-style" onclick="removeFromCart(${item.id})">Remove</button>
      `;
      cartItems.appendChild(cartItem);
    });
  }
  
  // Proceso de pago con async/await
  async function checkout() {
    alert('Processing checkout...');
    // Simulamos un retraso para el proceso de compra
    await new Promise(resolve => setTimeout(resolve, 2000));  // Espera 2 segundos
    alert('Checkout complete!');
    cart = [];  // Vaciamos el carrito
    renderCart();  // Actualizamos la vista del carrito
  }
  
  // Inicializar la aplicación y cargar productos
  document.getElementById('checkout-btn').addEventListener('click', checkout);  // Acción al hacer checkout
  
  // Obtener y renderizar productos usando async/awaitA
  fetchProductsWithAsyncAwait();
  