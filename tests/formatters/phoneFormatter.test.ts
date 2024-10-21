import { formatPhoneNumber } from '../../src/formatters/phoneFormatter';

test('Phone number formatting', () => {
  // expect(formatPhoneNumber('0812345678')).toBe('081 234 5678');
  expect(formatPhoneNumber('0812345678')).toBe('081 234 5678');
  expect(formatPhoneNumber('021234567')).toBe('02 123 4567');
});
