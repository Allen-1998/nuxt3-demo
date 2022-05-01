export default defineEventHandler((event) => {
  console.log("request url: " + event.req.url);
});
