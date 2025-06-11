function doSomething(data, callback) {
  setTimeout(() => {
    if (!data) return callback(new Error("No data"));
    callback(null, `Processed ${data}`);
  }, 1000);
}
function doSomethingAsync(data) {
  return new Promise((resolve, reject) => {
    doSomething(data, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
}
doSomethingAsync("input data")
  .then(result => console.log(result))
  .catch(err => console.error(err));
