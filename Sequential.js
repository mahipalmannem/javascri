async function runSequentialTasks() {
  await task1();
  await task2();
  await task3();
  console.log('All tasks done in sequence');
}

// Simulated async tasks
function task1() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('Task 1 done');
      resolve();
    }, 1000);
  });
}

function task2() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('Task 2 done');
      resolve();
    }, 1000);
  });
}

function task3() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('Task 3 done');
      resolve();
    }, 1000);
  });
}

// Start the process
runSequentialTasks();
