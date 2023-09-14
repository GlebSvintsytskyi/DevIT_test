const mapObject = (obj, parentKey = '') => {
    const result = {};
  
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const newKey = parentKey ? `${parentKey}/${key}` : key;
  
        if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
          const nestedMap = mapObject(obj[key], newKey); // Рекурсивно обробляємо вкладені об'єкти
          Object.assign(result, nestedMap);
        } else {
          result[newKey] = obj[key];
        }
      }
    }
  
    return result;
}
  
const object = {
a: {
    b: {
        c: 12,
        d: 'Hello World'
    },
    e: [1, 2, 3]
}
};
  
console.log( mapObject(object) );
  