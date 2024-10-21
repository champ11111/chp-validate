import { isValidThaiPhoneNumber } from '../../src/validators/thaiPhoneValidator';

test('Valid Thai phone numbers', () => {
  expect(isValidThaiPhoneNumber('0812345678')).toBe(true);
  expect(isValidThaiPhoneNumber('021234567')).toBe(false);
});

test('Invalid Thai phone numbers', () => {
  expect(isValidThaiPhoneNumber('12345678')).toBe(false);
  expect(isValidThaiPhoneNumber('080000')).toBe(false);
});
