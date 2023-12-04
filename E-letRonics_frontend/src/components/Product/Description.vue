<template>
  <p :class="{ 'long-text': isLongText }">
    {{ shortenedDescription }}
  </p>
</template>

<script>
export default {
  props: ['description'],
  computed: {
    isLongText() {
      return this.description.length > 20;
    },
    shortenedDescription() {
      return this.isLongText ? this.description.slice(0, 20) + '...' : this.description;
    },
  },
};
</script>

<style scoped>
.long-text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
