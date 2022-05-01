<template>
  <div>
    <span @click="decrement"> - </span>
    <span>{{ counter }}</span>
    <span @click="increment"> + </span>
  </div>
</template>

<script setup lang="ts">
const { counter, increment, decrement } = useCount();
</script>

<style scoped></style>
