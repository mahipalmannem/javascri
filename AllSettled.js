function customAllSettled(promises) {
  return Promise.all(
    promises.map(promise =>
      Promise.resolve(promise)
        .then(value => ({ status: 'fulfilled', value }))
        .catch(reason => ({ status: 'rejected', reason }))
    )
  );
}
const p1 = Promise.resolve(42);
const p2 = Promise.reject("Error occurred");
const p3 = new Promise(res => setTimeout(() => res("Delayed success"), 1000));

customAllSettled([p1, p2, p3]).then(results => {
  console.log(results);
});
