/**
 * Generates a random alphanumeric ID of a specified length.
 * @param {number} [length=11] - The length of the ID to be generated. Default is 11.
 * @returns {string} A random alphanumeric ID.
 * @throws {Error} Throws an error if length is less than or equal to 0.
 */
export function generateRandomId(length: number = 11): string {
    if (length <= 0) {
        throw new Error('Length must be greater than 0.');
    }

    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomId = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        randomId += charset.charAt(randomIndex);
    }
    return randomId;
}