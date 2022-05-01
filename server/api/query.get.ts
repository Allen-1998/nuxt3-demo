export default defineEventHandler((event) => {
  const query = useQuery(event);
  return { query };
});
