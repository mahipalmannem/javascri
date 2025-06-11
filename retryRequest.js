async function retryRequest(fn, options = {}) {
  const {
    retries = 3,
    delay = 1000,
    backoff = true,
    onRetry = (err, attempt) => {
      console.warn(`Attempt ${attempt} failed: ${err.message}`);
    }
  } = options;

  let attempt = 0;

  while (attempt < retries) {
    try {
      return await fn();
    } catch (err) {
      attempt++;
      if (attempt >= retries) {
        throw new Error(`All ${retries} attempts failed: ${err.message}`);
      }
      onRetry(err, attempt);
      const wait = backoff ? delay * 2 ** (attempt - 1) : delay;
      await new Promise(res => setTimeout(res, wait));
    }
  }
}
function fetchUser(userId) {
  return () =>
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(res => {
        if (!res.ok) throw new Error(`Status ${res.status}`);
        return res.json();
      });
}

// Use the retry mechanism
retryRequest(fetchUser(1), {
  retries: 3,
  delay: 1000,
  backoff: true,
  onRetry: (err, attempt) => console.log(`Retry ${attempt}: ${err.message}`)
})
  .then(data => console.log("User data:", data))
  .catch(err => console.error("Final failure:", err.message));
