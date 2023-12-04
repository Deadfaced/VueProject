<template>
  <h2 :class="{ 'long-text': isLongText }" class="m-0 p-0 text-2xl font-bold text-center">
    {{ shortenedName }}
  </h2>
</template>

<script>
export default {
  props: ['name'],
  computed: {
    isLongText() {
      return this.name.length > 10;
    },
    shortenedName() {
      return this.isLongText ? this.name.slice(0, 20) + '...' : this.name;
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
