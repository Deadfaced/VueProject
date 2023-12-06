<template>
    <div class="bg-base-100 shadow-xl p-4 mt-4 max-w-xs">
        <img :src="image" alt="Item" class="rounded-lg object-cover"/>
      <div class="card-body">
        <h2 class="card-title text-sm">{{ name }}</h2>
        <h2 class="card-title text-sm">Qty: {{ cartQty }}</h2>
        <h2 class="card-title text-sm">Unit Cost: {{ price }}</h2>
        <h2 class="card-title text-sm">{{ availability }}</h2>
        <h2 class="card-title text-sm">Total: {{ totalPrice }}</h2>
        <div class="card-actions justify-end">
        </div>
      </div>
    </div>
</template>


  

<script>
export default {
    props: ['image', 'name', 'cartQty', 'price', 'availability', 'totalPrice'],
    data() {
        return {
            
        };
    },
}
</script>

<style>
  
</style>