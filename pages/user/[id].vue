<!-- pages/user/[id].vue -->
<!-- 路由 /user/:id 将渲染 -->
<template>
  <div>user / {{ $route.params.id }}</div>
</template>
<script setup>
definePageMeta({
  middleware: ["id"],
  // or middleware: 'auth'
});
</script>
