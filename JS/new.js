function NEW(className, ...args) {
  const obj = {};
  obj.__proto__ = className.prototype;
  const res = className.call(obj, ...args);
  return (typeof res === "object" && res !== null) || typeof res === "function"
    ? res
    : obj;
}

function classA(age) {
  this.name = "start";
  this.age = age;
}
classA.prototype.sayName = function() {
  console.log(this.name);
};
classA.prototype.sayAge = function() {
  console.log(this.age);
};

const a = NEW(classA, 19);
a.sayName();
a.sayAge();
a.name = "a";
a.sayName();
