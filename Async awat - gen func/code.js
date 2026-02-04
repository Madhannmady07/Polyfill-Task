function* asyncAwait() {
  console.log("A");
  let result = yield new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("rejected after 2 seconds");
      console.log("IN");
    }, 2000);
  });
//   console.log(result) use this when u pass something to .next(val)
  console.log("B");
  let result1 = yield new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("resolved after 2 seconds");
      console.log("IN");
    }, 2000);
  });
  console.log("C");
}

let k = asyncAwait();
function run(call) {
  // yield will return 2 things, val and done, done will be true only when it hits the 
  // end of code 
  let { value, done } = call.next();

  // so basically, when something is not yet executed completely, then do this...
  if (!done) {
    value
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        // irrespective of anything, if something is there to be executed, then run it
        run(k);
      });
  }
}
run(k);
