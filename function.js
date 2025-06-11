function timeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
timeout(2000).then(() => {
  console.log('Executed after 2 seconds');
});
