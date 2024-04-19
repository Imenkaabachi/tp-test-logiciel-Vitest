import { test ,expect} from 'vitest';
import { isPriceInRange } from 'src/boundary';

test('Test lorsque le prix est dans la plage', () => {
    // Prix à l'intérieur de la plage
    expect(isPriceInRange(50, 0, 100)).toBeTruthy();
    // Prix égal à la borne inférieure de la plage
    expect(isPriceInRange(0, 0, 100)).toBeTruthy();
    // Prix égal à la borne supérieure de la plage
    expect(isPriceInRange(100, 0, 100)).toBeTruthy();
});

test('Test lorsque le prix est en dehors de la plage', () => {
    // Prix inférieur à la plage
    expect(isPriceInRange(-10, 0, 100)).toBeFalsy();
    // Prix supérieur à la plage
    expect(isPriceInRange(150, 0, 100)).toBeFalsy();
});
