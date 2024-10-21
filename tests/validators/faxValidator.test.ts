import { isValidFaxNumber } from '../../src/validators/faxValidator';

test('Valid fax numbers', () => {
  expect(isValidFaxNumber('021234567')).toBe(true);
  expect(isValidFaxNumber('1234567890')).toBe(true);
});

test('Invalid fax numbers', () => {
  expect(isValidFaxNumber('123')).toBe(false);
  expect(isValidFaxNumber('abcd1234')).toBe(false);
});
