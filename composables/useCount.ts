export const useCount = () => {
  const counter = ref(0);
  const increment = () => counter.value++;
  const decrement = () => counter.value--;
  return { counter, increment, decrement };
};

// useState 的第一参数为 key，第二参数为初始化的工厂函数
export const useCounter = () => useState("counter", () => 100);
