import { isValidThaiNationalID } from '../../src/validators/thaiNationalIDValidator';

test('Valid Thai National ID', () => {
  expect(isValidThaiNationalID('1212121212121')).toBe(true);
});

test('Invalid Thai National ID', () => {
  expect(isValidThaiNationalID('1234567890123')).toBe(false);
  expect(isValidThaiNationalID('11017001543')).toBe(false); // Less than 13 digits
});
