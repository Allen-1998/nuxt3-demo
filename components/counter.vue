<template>
  <div>
    <span class="btn" @click="decrement"> - </span>
    <span class="ml10 mr10">{{ counter }}</span>
    <span class="btn" @click="increment"> + </span>
  </div>
</template>

<script setup lang="ts">
const { counter, increment, decrement } = useCount();
</script>

<style scoped></style>
