<template>
    <div class="mx-4 my-10 rounded-xl px-6 py-8 text-white border-gray-100">
        <p class="mb-6 text-2xl font-medium">Summary</p>
        <p class="mb-6">Total Articles: {{ cartStore.cartItemCount }}</p>
        <hr class="my-6 border-t">
        <p v-if="cartStore.discountPercentage" class="mt-6 mb-6">Discount Percentage: {{ cartStore.discountPercentage }}%</p>
        <p v-if="cartStore.discountValue" class="mt-6 mb-6">Discount Value: {{ cartStore.discountValue }}€</p>
        <p class="mt-6 mb-6">Total Payable: {{ cartStore.totalPriceCart }}€</p>
        <div class="flex w-[20rem] rounded bg-white" x-data="{ search: '' }">
            <form @submit.prevent="checkCoupon">
                <input type="text" class="w-full border-none bg-transparent px-5 text-gray-900 focus:outline-none"
                    placeholder="Coupon" v-model="couponCode" />
                <button type="submit" class="m-2 rounded px-4 py-2 font-semibold text-gray-100 bg-blue-500">Search</button>
            </form>
        </div>
        <button @click="checkout"
            class="w-full rounded-xl bg-green-600 px-4 py-3 my-4 text-xl font-medium text-white">Payment</button>
    </div>
</template>

<script>
import { fetchData } from '../../Services/apiService';
import { useCartStore } from '../../CartStorePinia.js';
import { ref, watch } from 'vue';

export default {
    setup() {
        const cartStore = useCartStore();

        const couponCode = ref(cartStore.couponCode);

        watch(() => cartStore.couponCode, (newVal) => {
            couponCode.value = newVal;
        });

        async function checkCoupon() {

            try {
                const response = await fetchData('http://localhost:3333/check-coupon', { couponCode: couponCode.value }, 'post');
                if (response.success) {
                    cartStore.applyCoupon(couponCode, response.discount);
                } else {
                    alert(response.message);
                }
            } catch (error) {
                alert('An error occurred during checkout.');
            }
        }

        async function checkout() {
            const cart = cartStore.cart;
            const products = cart.map(item => ({ id: item.id, quantity: item.qty }));
            const coupon = cartStore.couponCode;

            try {
                const response = await fetchData('http://localhost:3333/checkout', { products, coupon }, 'post');
                console.log(response);
                if (response.success) {
                    alert(response.message);
                } else {
                    alert(response.message);
                }
            } catch (error) {
                alert('An error occurred during checkout.');
            }
        }

        return {
            checkCoupon,
            checkout,
            cartStore, 
            couponCode, 
        };
    },
};
</script>