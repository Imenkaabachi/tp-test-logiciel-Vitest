export function trier(arr) {
    // Vérifiez si l'entrée est un tableau
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array');
    }

    // Vérifiez si tous les éléments du tableau sont des nombres
    if (!arr.every(element => typeof element === 'number')) {
        throw new Error('Array must contain only numbers');
    }

    // Triez le tableau en ordre croissant
    return arr.slice().sort((a, b) => a - b);
}
