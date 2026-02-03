let p1 = new Promise((res, rej) => {
  setTimeout(() => {
    res(1);
  }, 200);
});
let p2 = new Promise((res, rej) => {
  setTimeout(() => {
    res(2);
  }, 500);
});
let p3 = new Promise((res, rej) => {
  setTimeout(() => {
    rej(3);
  }, 100);
});
let p4 = new Promise((res, rej) => {
  setTimeout(() => {
    res(4);
  }, 700);
});

let arr = [p1, p2, p3, p4];

Promise.myAny = function(arr) {
    return new Promise((res, rej) => {
        let resultArray = [];
        let counter = 0;

        arr.forEach((element, i) => {
          element.then((data) => {
            res(data);
          }).catch((error) =>{
            counter++;
            resultArray[i] = error;
            if(counter == arr.length) rej(resultArray)
          })
        });
    })
}

Promise.myAny(arr)
    .then((data) =>{
        console.log(data);
    })
    .catch((error) =>{
        console.error(error)
    })