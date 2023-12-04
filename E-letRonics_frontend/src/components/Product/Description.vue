<template>
  <p :class="{ 'long-text': isLongText }" class="text-gray-400">
    {{ shortenedDescription }}
  </p>
</template>

<script>
export default {
  props: ['description'],
  computed: {
    isLongText() {
      return this.description.length > 30;
    },
    shortenedDescription() {
      return this.isLongText ? this.description.slice(0, 30) + '...' : this.description;
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
