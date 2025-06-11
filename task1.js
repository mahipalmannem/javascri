async function task1() {
  console.log("Task 1");
  return "result1";
}

async function task2(input) {
  console.log("Task 2 received:", input);
  return "result2";
}

async function task3(input) {
  console.log("Task 3 received:", input);
  return "result3";
}

async function runTasks() {
  const result1 = await task1();
  const result2 = await task2(result1);
  const result3 = await task3(result2);
  console.log("Final Result:", result3);
}

runTasks();
task1()
  .then(result1 => task2(result1))
  .then(result2 => task3(result2))
  .then(result3 => console.log("Final Result:", result3))
  .catch(err => console.error("Error:", err));
