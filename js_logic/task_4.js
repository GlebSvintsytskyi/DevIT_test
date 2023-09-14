const arrayToObject = (arr) => {
    const result = {};

    for (const item of arr) {
        const [key, value] = item;

        if (Array.isArray(value)) {
            result[key] = arrayToObject(value); // Рекурсивний виклик для вкладенних массивів
        } else {
            result[key] = value;
        }
    }

    return result;
}

const arr = [['name', 'developer'], ['age', 5], ['skills', [['html', 4], ['css', 5], ['js', 5]]]];

console.log( arrayToObject(arr) );
