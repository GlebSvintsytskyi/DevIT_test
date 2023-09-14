const objectToArray = (obj) => {
    const result = [];

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];

            if (typeof value === 'object' && !Array.isArray(value)) {
                result.push([key, objectToArray(value)]); // Рекурсивний виклик для вкладенних об'єктів
            } else {
                result.push([key, value]);
            }
        }
    }

    return result;
}

const object = {
    name: 'developer',
    age: 5,
    skills: {
        html: 4,
        css: 5,
        js: 5
    }
};

console.log( objectToArray(object) );
