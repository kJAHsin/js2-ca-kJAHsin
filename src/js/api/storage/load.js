export function loadData(key) {
    if (typeof key !== 'string') {
        throw new Error('Key must be a string');
    }

    // mock json data to pass tests running in node environment
    const jsonData = typeof localStorage !== 'undefined'
        ? localStorage 
        : {
            getItem: () => {},
        }
    const userData = jsonData.getItem(key);

    if (userData) {
        return JSON.parse(userData);
    }

    return null;
}
