<template>
    <div class="card-container">
      <div class="card glass">
        <figure>
          <img src="https://static.pcdiga.com/media/catalog/product/cache/4a9972e1440204cef7cf19ceb7c4fc35/2/_/2_p061426.jpg" alt="PC" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Life Hack</h2>
          <p>Discover the art of parking your car in your garage with ease.</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Learn Now!</button>
            <Rating></Rating>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Rating from './Rating.vue';
  
  export default {
    setup() {
      return {};
    },
    components: {
      Rating,
    },
  };
  </script>
  
  <style scoped>
  .card-container {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 600px;
    margin: 0 auto;
    height: 100vh;
  }
  
  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(0.5rem);
    transition: all 0.3s ease-in-out;
    width: 100%;
  }
  
  .card:hover {
    transform: scale(1.05);
  }
  
  .card figure img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  
  .card-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 1rem;
  }
  
  .card-title {
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
  }
  
  .card-actions {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 1rem;
  }
  
  .btn {
    width: 100%;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
  
  .Rating {
    text-align: center;
  }
  </style>