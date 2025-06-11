async function retry(fn, retries = 3, delay = 1000) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await fn();
    } catch (err) {
      if (attempt === retries) throw err;
      console.warn(`Attempt ${attempt} failed. Retrying in ${delay}ms...`);
      await new Promise(res => setTimeout(res, delay));
    }
  }
}
function fetchData(url) {
  return () => fetch(url).then(res => {
    if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
    return res.json();
  });
}

retry(fetchData("https://jsonplaceholder.typicode.com/posts/1"), 3, 1000)
  .then(data => console.log("Fetched data:", data))
  .catch(err => console.error("Failed after retries:", err.message));
