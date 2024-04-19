import { test,expect } from 'vitest';
import { trier } from 'src/tri';

test('Test avec un tableau vide', () => {
    const result = trier([]);
    expect(result).toEqual([]);
});

test('Test avec un tableau déjà trié', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = trier(arr);
    expect(result).toEqual(arr);
});

test('Test avec un tableau non trié', () => {
    const arr = [3, 1, 4, 5, 2];
    const result = trier(arr);
    expect(result).toEqual([1, 2, 3, 4, 5]);
});
