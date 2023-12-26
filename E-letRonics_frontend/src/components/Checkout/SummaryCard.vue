<template>
    <div class="mx-4 my-10 rounded-xl px-6 py-8 text-white shadow-xl border-gray-100">
        <p class="mb-6 text-2xl font-medium">Summary</p>
        <p class="mb-6">Total Articles: {{ cartItemCount }}</p>
        <hr class="my-6 border-t">
        <p class="mt-6 mb-6">Total Payable: {{ totalPriceCart }}€</p>
        <div class="flex w-[20rem] rounded bg-white" x-data="{ search: '' }">
            <form @submit.prevent="checkCoupon">
                <input type="text" class="w-full border-none bg-transparent px-5 text-gray-900 focus:outline-none"
                    placeholder="Coupon" v-model="couponCode" />
                <button type="submit" class="m-2 rounded px-4 py-2 font-semibold text-gray-100 bg-blue-500">Search</button>
            </form>
        </div>
        <button class="w-full rounded-xl bg-green-600 px-4 py-3 my-4 text-xl font-medium text-white">Payment</button>
    </div>
</template>

<script>
import { fetchData } from '../../Services/apiService';
import { EventBus } from '../../event-bus.js';

export default {
    data() {
        return {
            cartItemCount: parseInt(localStorage.getItem('cartItemCount')) || 0,
            totalPriceCart: parseInt(localStorage.getItem('totalPrice')) || 0,
            couponCode: '',
        }
    },
    watch: {
        cartItemCount(newVal) {
            localStorage.setItem('cartItemCount', newVal);
        },
        totalPriceCart(newVal) {
            localStorage.setItem('totalPrice', newVal);
        },
    },
    mounted() {
        EventBus.on('product-added-to-cart', eventData => {
            this.cartItemCount += eventData.quantity;
            this.totalPriceCart = eventData.totalPrice;
        });

        EventBus.on('product-quantity-decreased', eventData => {
            this.cartItemCount--;
            this.totalPriceCart = eventData.totalPrice;
        });

        EventBus.on('product-removed-from-cart', eventData => {
            if (this.cartItemCount < 0) this.cartItemCount = 0;
        });

        EventBus.on('all-products-removed', () => {
            this.cartItemCount = 0;
        });

        EventBus.on('update-cart-count', (updatedItemCount) => {
            this.cartItemCount = updatedItemCount;
        });
    },
    beforeUnmount() {
        EventBus.off('product-added-to-cart');
        EventBus.off('product-removed-from-cart');
        EventBus.off('all-products-removed');
        EventBus.off('update-cart-count');
    },
    methods: {
        async checkCoupon() {
            try {
                const response = await fetchData('http://localhost:3333/check-coupon', { couponCode: this.couponCode }, 'post');
                if (response.success) {

                    const totalPriceNumber = Number(this.totalPrice.replace('€', ''));
                    const discountAmount = totalPriceNumber * response.discount / 100;
                    const newTotalPrice = totalPriceNumber - discountAmount;
                    this.totalPrice = newTotalPrice.toFixed(2) + "€";
                    EventBus.$emit('total-price-updated', this.totalPrice);
                    EventBus.emit('coupon-applied-successfully');
                } else {
                    EventBus.emit('coupon-applied-failed');
                }
            } catch (error) {
                EventBus.emit('coupon-applied-failed');
            }
        },
    },
}
</script>