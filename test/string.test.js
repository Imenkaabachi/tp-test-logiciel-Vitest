import { test,expect } from 'vitest';
import { transformer } from 'src/string';

test('Test avec une chaîne vide', () => {
    const result = transformer('');
    expect(result).toBe('');
});

test('Test avec des caractères en minuscules', () => {
    const result = transformer('hello');
    expect(result).toBe('HELLO');
});

test('Test avec des caractères spéciaux', () => {
    const result = transformer('abc@123');
    expect(result).toBe('ABC@123');
});
