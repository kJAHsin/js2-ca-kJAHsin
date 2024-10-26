export function saveData(key, data) {
    if (typeof key !== 'string') {
        throw new Error('Key must be a string');
    }
    localStorage.setItem(key, JSON.stringify(data));
}
