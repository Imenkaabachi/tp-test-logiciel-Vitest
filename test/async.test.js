import { test,expect,fail } from 'vitest';
import { fetchRandomUser } from 'src/async';

test('Test de la fonction fetchRandomUser', async () => {
    try {
        const user = await fetchRandomUser();

        expect(typeof user).toBeDefined;

        expect(user).toHaveProperty('name');
        expect(user).toHaveProperty('email');
        expect(user).toHaveProperty('dob');

    } catch (error) {
        fail('Should not throw any error');    }
});
