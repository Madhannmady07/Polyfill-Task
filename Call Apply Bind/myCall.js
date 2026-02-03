Function.prototype.myCall = function(context, ...args){
  //check whether context is null or not, if null return global obj, else convert into resp obj
  if (context == null || context == undefined) {
    context = globalThis;
  } else {
    context = Object(context);
  }

  // create a sym as props on object context and store the function to be pointed
  let sym = Symbol();
  context[sym] = this; // this is the function to be pointing

  // call the function from that context and store it
  let result = context[sym](...args);

  // delete the function mounted on context, because original "context" doesn't have that fn
  delete context[sym];

  return result;
}


// testing
function show(arg) {
  console.log('this:', this);
  console.log('arg:', arg);
}

// Test with different contexts
show.myCall(null, 'A');        // globalThis
show.myCall(undefined, 'B');   // globalThis
show.myCall(5, 'C');           // Number {5}
show.myCall('hello', 'D');     // String {'hello'}
show.myCall(true, 'E');        // Boolean {true}
show.myCall({x: 1}, 'F');      // {x: 1}
