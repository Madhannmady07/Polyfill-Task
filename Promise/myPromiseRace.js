let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 200);
});
let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 500);
});
let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(3);
  }, 100);
});
let p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(4);
  }, 700);
});

let arr = [p1, p2, p3, p4];

Promise.myRace = function(arr) {
    return new Promise((resolve, reject) =>{
      // check whether it is an array or not
      if (!Array.isArray(arr) || arr.length === 0) {
        return reject(new TypeError("Argument must be an array"));
      }

        // is the first promise is resolved or reject, we will use then or catch to give the 
        // appropriate response
        arr.forEach((promise) => {
            promise.then(resolve).catch(reject); 
        });
    })
}

Promise.myRace(arr)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error,"error");
  });