function* asyncAwait() {
  console.log("A");
  let result = yield new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("rejected after 2 seconds");
      console.log("IN");
    }, 2000);
  });
  console.log(result)
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
  let { value, done } = call.next();
  if (!done) {
    value
      .then((res, rej) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        run(k);
      });
  }
}
run(k);
