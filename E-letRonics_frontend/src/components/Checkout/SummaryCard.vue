<template>
    <div class="mx-4 my-10 rounded-xl px-6 py-8 text-white shadow-xl border-gray-100">
        <p class="mb-6 text-2xl font-medium">Summary</p>
        <p class="mb-6">Total Articles: {{ cartQty }}</p>
        <hr class="my-6 border-t">
        <p class="mt-6 mb-6">Total Payable: {{ totalPrice }}</p>
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
    props: ['id', 'image', 'name', 'description', 'price', 'cartQty', 'totalPrice'],

    data() {
        return {
            couponCode: ''
        }
    },
    methods: {
        async checkCoupon() {
            try {
                const response = await fetchData('http://localhost:3333/check-coupon', { couponCode: this.couponCode }, 'post');
                if (response.success) {
                    EventBus.emit('coupon-applied-successfully');
                } else {
                    window.alert('Coupon not found!');
                }
            } catch (error) {
                console.error(error);
                window.alert('Something went wrong!');
            }
        },
    },
}
</script>