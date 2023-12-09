<template>
    <div class="mx-4 my-10 rounded-xl px-6 py-8 text-white shadow-xl border-gray-100">
        <p class="mb-6 text-2xl font-medium">Summary</p>
        <p class="mb-6">Total Articles: {{ cartQty }}</p>
        <hr class="my-6 border-t">
        <p class="mt-6 mb-6">Total Payable: {{ totalPrice }}</p>
        <div class="flex w-[20rem] rounded bg-white" x-data="{ search: '' }">
            <input type="search" class="w-full border-none bg-transparent px-5 text-gray-900 focus:outline-none"
                placeholder="Coupun" />
            <button class="m-2 rounded px-4 py-2 font-semibold text-gray-100 bg-blue-500">Search</button>
        </div>
        <button class="w-full rounded-xl bg-green-600 px-4 py-3 my-4 text-xl font-medium text-white">Payment</button>
    </div>
</template>

<script>
export default {
    props: ['id', 'image', 'name', 'description', 'price', 'cartQty', 'totalPrice'],
    
}
</script>

<style scoped></style>