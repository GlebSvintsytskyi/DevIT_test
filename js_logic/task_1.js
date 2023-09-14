// Перевірка об'єктів на идентичність

const deepEqual = (obj1, obj2) => {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

console.log(deepEqual({ name: 'test' }, { name: 'test' })); // true
console.log(deepEqual({ name: 'test' }, { name: 'test1' })); // false
console.log(deepEqual({ name: 'test', data: { value: 1 } }, { name: 'test', data: { value: 2 } })); // false
console.log(deepEqual({ name: 'test' }, { name: 'test', age: 10 })); // false
  