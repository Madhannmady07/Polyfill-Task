Function.prototype.myApply = function(context, argsArray){
  // check1: check if undefined or null
  if (context == null || context == undefined) {
    context = globalThis;
  } else {
    context = Object(context);
  }

  // check2: Handle argsArray - check if null/undefined
  if (argsArray == null) {
    argsArray = [];
  } else if (!Array.isArray(argsArray)) {
    // Type checking - throw error if not an array
    throw new TypeError("Second argument to apply must be an array");
  }

  // create a sym as props on object context and store the function to be pointed
  let sym = Symbol();
  context[sym] = this;

  // call the function with the array passed
  let result = context[sym](...argsArray);

  // delete that prop on context object
  delete context[sym];

  return result;
}