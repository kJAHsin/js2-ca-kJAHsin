/**
 * Removes a specified item from localStorage by its key.
 * 
 * @param {string} key - The key of the item to remove from localStorage.
 * 
 * @throws {Error} If the key provided is not a string.
 * 
 * @returns {null} - Returns null after attempting to remove the item.
 * 
 * @example
 * // Removes the 'accessToken' item from localStorage
 * clearData('accessToken');
 * 
 * @example
 * // Throws an error if the key is not a string
 * clearData(123); // Error: Key must be a string
 */
export function clearData(key) {
    if (typeof key !== 'string') {
        throw new Error('Key must be a string');
    }

    try {
        localStorage.removeItem(key);
    } catch (err) {
        console.error(`There was a problem removing data: ${err}`);
    }

    return null;
}
