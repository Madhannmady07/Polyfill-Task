function memoize(fn) {
    let cache = {};

    return function(...args){
        let key = JSON.stringify(args);

        // if the key is already present in the cache, then simply return it
        if(key in cache){
            return cache[key];
        }

        // else if not present, then add the key with respective 
        // value (result of certain action)
        let result = fn.apply(this, args);
        cache[key] = result;

        return result;

    }
}


function add(a, b) {
  console.log("For the first time...");
  return a + b;
}

const memoizedAdd = memoize(add);

console.log(memoizedAdd(5,2));
console.log(memoizedAdd(5,2));
