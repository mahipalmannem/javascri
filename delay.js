function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function runWithDelay() {
  console.log("Step 1");

  await delay(2000); // wait for 2 seconds

  console.log("Step 2 after 2 seconds");

  await delay(1000); // wait for 1 more second

  console.log("Step 3 after 3 seconds total");
}

runWithDelay();
