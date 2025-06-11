function withTimeout(promise, ms) {
  const timeout = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Operation timed out")), ms)
  );

  return Promise.race([promise, timeout]);
}
async function fetchWithTimeout(url, ms) {
  try {
    const response = await withTimeout(fetch(url), ms);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Fetch failed or timed out:", err.message);
    throw err;
  }
}

// Usage
fetchWithTimeout("https://jsonplaceholder.typicode.com/posts/1", 3000)
  .then(data => console.log("Data:", data))
  .catch(err => console.error("Error:", err.message));
