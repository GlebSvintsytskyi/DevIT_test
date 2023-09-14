function bulkRun(functions) {
    const results = [];
  
    function executeFunction(fn, args) {
      return new Promise((resolve) => {
        fn(...args, (result) => {
          results.push(result);
          resolve();
        });
      });
    }
  
    async function runAllFunctions() {
      for (const [fn, args] of functions) {
        await executeFunction(fn, args);
      }
    }
  
    return runAllFunctions().then(() => results);
  }
  
  const f1 = (cb) => { cb(1); };
  const f2 = (a, cb) => { cb(a); };
  const f3 = (a, b, cb) => { setTimeout(() => cb([a, b]), 1000); }
  
  bulkRun([
    [f1, []],
    [f2, [2]],
    [f3, [3, 4]]
  ]).then(console.log);
  