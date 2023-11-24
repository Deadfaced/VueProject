<template>
  <div class="max-w-md mx-auto">
    <div class="card card-side bg-base-100 shadow-xl p-4 mt-4 flex">
      <figure class="flex-none mr-4">
        <img src="https://pplware.sapo.pt/wp-content/uploads/2022/12/GeForce-GTX-1650.jpg" alt="Item" class="w-40 h-auto" />
      </figure>
      <div class="card-body">
        <h2 class="card-title text-sm">{{ Title }} | {{ Description }}</h2>
        <h2 class="card-title text-sm">{{ Category }}</h2>
        <h2 class="card-title text-sm">Qty: {{ Qty }}</h2>
        <h2 class="card-title text-sm">Unit Cost: {{ Price }}</h2>
        <h2 class="card-title text-sm">In stock</h2>
        <h2 class="card-title text-sm">Total: 600€</h2>
        <div class="card-actions justify-end">
        </div>
      </div>
    </div>
  </div>
</template>


  

<script>
export default {
    data() {
        return {
            Title : 'GeForce-GTX-1650',
            Category: 'Graphics Card',
            Description: '4GB ',
            Qty: '2',
            Price : '300€'
        };
    },
}
</script>

<style>

</style>