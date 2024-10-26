export function loadData(key) {
    if (typeof key !== 'string') {
        throw new Error('Key must be a string');
    }
    const jsonData = localStorage.getItem(key);
    if (jsonData) {
        return JSON.parse(jsonData);
    }
    return null;
}
