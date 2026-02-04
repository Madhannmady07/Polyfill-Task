function myDeepCopy(obj) {
  // check whether it is primitive or not null
  if (!(typeof obj == "object") || typeof obj == null) return obj;

  // Create an array or object depending on the type of obj
  let store = Array.isArray(obj) ? [] : {};

  for (key in obj) {
    store[key] = myDeepCopy(obj[key]);
  }

  return store;
}

let person = {
  name: "Madhan",
  age: 12,
  address: {
    pin: 632001,
    place: "vellore",
  },
};

let np = myDeepCopy(person);

// reference level
np.address.pin = 632002;
console.log(person.address);
console.log(np.address);

// value level
np.name = "Sugu";
console.log(person.name);
console.log(np.name);