<template>
  <div class="my-8 mx-8">
    <h2 class="text-2xl font-semibold text-center mb-2">Our Location</h2>
    <div class="map-container h-70h">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16758.037000187664!2d-8.611833970531218!3d41.1499684981293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2465abc4e153c1%3A0xa648d95640b114bc!2sPorto!5e0!3m2!1sen!2spt!4v1637761348492!5m2!1sen!2spt"
        width="100%"
        height="100%"
        style="border: 0;"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.map-container {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
iframe {
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 8px;
}
</style>
