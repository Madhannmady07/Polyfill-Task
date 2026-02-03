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
    resolve(3);
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
        arr.forEach((promise) => {
          Promise.resolve(promise)
            .then(resolve, reject) 
            .catch(reject); 
        });
    })
}

Promise.myRace(arr)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });