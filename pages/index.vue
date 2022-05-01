<template>
  <div>
    <div>index page</div>
    <!--跳转链接-->
    <NuxtLink to="/test">Test Page</NuxtLink>
    <div @click="conuter++">{{ conuter }}</div>
  </div>
</template>
<script lang="ts" setup>
const conuter = useCounter();
</script>
