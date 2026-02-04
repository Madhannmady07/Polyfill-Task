let p1 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res(1)
    },200)
})
let p2 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res(2)
    },500)
})
let p3 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res(3)
    },100)
})
let p4 = new Promise((res,rej)=>{
    setTimeout(()=>{
        rej(4)
    },600)
})

let arr = [p1,p2,p3,p4];



Promise.myAll  = function(arr){
    return new Promise((res, rej) =>{
        // check whether it is an array or not
      if (!Array.isArray(arr) || arr.length === 0) {
        return reject(new TypeError("Argument must be an array"));
      }
        let counter = 0;
        let resultArray = [];

        arr.forEach((element,i) => {
            element.then((data) =>{
                counter++;
                resultArray[i]=data;
                if(counter == arr.length) res(resultArray) 
            }).catch((data) =>{
                rej(data);
            })
        });
    })
}

Promise.myAll(arr)
    .then((data) => {
        console.log(data);
    })
    .catch((data) => {
        console.error(data);
    })