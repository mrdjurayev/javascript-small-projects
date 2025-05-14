const ShoppingCart = {
    cart: [],

    addProduct: function(productId, quantity) {
        const product = products.find(p => p.id === productId);
        if (product) {
            this.cart.push({
                id: product.id,
                name: product.name,
                quantity: quantity,
                price: product.price
            });
        }
    },

    removeProduct: function(productId) {
        this.cart = this.cart.filter(product => product.id !== productId);
    },

    viewCart: function() {
        this.cart.forEach(product => alert(`Name: ${product.name}, Quantity: ${product.quantity}, Price: ${product.price}$`));
    },

    getTotalPrice: function() {
        return this.cart.reduce((sum, curr) => sum += curr.price * curr.quantity, 0);
    },

    clearCart: function() {
        this.cart = [];
    }
}   

const products = [
    {id: 1, name: "Iphone", price: 999},
    {id: 2, name: "Macbook", price: 1499},
    {id: 3, name: "Monitor", price: 450}
];

ShoppingCart.addProduct(1, 2); 
ShoppingCart.addProduct(2, 1); 

ShoppingCart.viewCart();

alert(`Total Price: $${ShoppingCart.getTotalPrice()}`);

ShoppingCart.clearCart();

ShoppingCart.viewCart();

