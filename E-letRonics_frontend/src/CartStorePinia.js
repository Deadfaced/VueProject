import { defineStore } from 'pinia';

export const useCartStore = defineStore({
    id: 'cart',
    state: () => ({
        cart: JSON.parse(localStorage.getItem('cart')) || [],
        totalPrice: parseInt(localStorage.getItem('totalPrice')) || 0,
        couponCode: localStorage.getItem('couponCode') || '',
        discountPercentage: parseInt(localStorage.getItem('discountPercentage')) || 0,
        discountValue: parseInt(localStorage.getItem('discountValue')) || 0,
        CartItemProperties: [],
    }),
    getters: {
        cartItemCount() {
            let count = 0;
            for (let i = 0; i < this.cart.length; i++) {
                count += this.cart[i].qty;
            }
            return count;
        },
        totalPriceCart() {
            return Math.round( ( this.totalPrice - this.discountValue) * 100 ) / 100;
        },
    },
    actions: {
        async fetchCartItems() {
            const cartList = JSON.parse(localStorage.getItem('cart')) || [];
            this.CartItemProperties = [];
            for (const element of cartList) {
                const response = await fetch(`http://127.0.0.1:3333/products/${element.id}`);
                const data = await response.json();
                this.CartItemProperties.push({
                    id: element.id,
                    image: data.image,
                    name: data.name,
                    cartQty: element.qty,
                    price: data.price + "€",
                    availability: data.quantity > 0 ? 'In Stock' : 'Out of Stock',
                    totalPrice: (data.price * element.qty).toFixed(2) + "€",
                });
            }
        },
        deleteCartItem(itemId) {
            const itemToRemove = this.cart.find(item => item.id === itemId);
            const cartList = JSON.parse(localStorage.getItem('cart')) || [];
            const updatedCart = cartList.filter(item => item.id !== itemId);
            localStorage.setItem('cart', JSON.stringify(updatedCart));

            let newCardItemCount = 0;
            for (const item of updatedCart) {
                newCardItemCount += item.qty;
            }
            localStorage.setItem('cartItemCount', newCardItemCount.toString());

            this.cart = this.cart.filter(item => item.id !== itemId);

            this.totalPrice -= itemToRemove.price * itemToRemove.qty;
            localStorage.setItem('totalPrice', this.totalPrice.toString());
            this.fetchCartItems();
        },
        addToCart(product, quantity) {
            let found = this.cart.find((el) => el.id === product.id);
            if (found) {
                found.qty += quantity;
            } else {
                this.cart.push({ id: product.id, qty: quantity, price: product.price });
            }
            localStorage.setItem('cart', JSON.stringify(this.cart));

            this.totalPrice += product.price * quantity;
            localStorage.setItem('totalPrice', this.totalPrice.toString());
        },

        
        applyCoupon(couponCode, discountPercentage) {
            this.couponCode = couponCode;
            this.discountPercentage = discountPercentage;
            this.discountValue = this.totalPrice * discountPercentage / 100;
            localStorage.setItem('couponCode', this.couponCode);
            localStorage.setItem('discountPercentage', this.discountPercentage.toString());
            localStorage.setItem('discountValue', this.discountValue.toString());
        },

        clearCoupon() {
            this.couponCode = '';
            this.discountPercentage = 0;
            this.discountValue = 0;
            localStorage.removeItem('couponCode');
            localStorage.removeItem('discountPercentage');
            localStorage.removeItem('discountValue');
        },
    },
});