<template>
  <div>
    <NuxtLayout name="custom" />
    <Counter></Counter>
    <NuxtLink to="/">Index Page</NuxtLink>
    <NuxtLink to="https://www.baidu.com/"> to baidu </NuxtLink>
    <div @click="conuter++">{{ conuter }}</div>
    <div>data: {{ data }}</div>
    <div>error: {{ error }}</div>
    <button @click="open = true">Open Modal</button>
    <ClientOnly>
      <Teleport to="body">
        <div v-if="open" class="modal">
          <p>Hello from the modal!</p>
          <button @click="open = false">Close</button>
        </div>
      </Teleport>
    </ClientOnly>
  </div>
</template>
<script setup lang="ts">
// 定义元信息
definePageMeta({
  foo: "bar",
  layout: false,
  // keepalive: true, // TODO:无效
});

// 获取当前路由
const route = useRoute();

// 获取元信息
const { meta } = route;
console.log(
  toRaw(meta) // 输出 { foo: 'bar' }
);

// 状态共享
const conuter = useCounter();

// 数据获取
const { data, error } = await useFetch("/api/config");

// 运行时配置
const config = useRuntimeConfig();
console.log("Runtime config:", toRaw(config));
if (process.server) {
  console.log("API secret:", config.apiSecret);
}

// Teleport
const open = ref(false);
</script>
