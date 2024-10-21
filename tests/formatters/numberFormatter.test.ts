import { formatNumber } from '../../src/formatters/numberFormatter';

test('Number with commas', () => {
  expect(formatNumber(1234567)).toBe('1,234,567');
});

test('Number with abbreviations', () => {
  expect(formatNumber(1500000, true)).toBe('1M');
  expect(formatNumber(1000000000, true)).toBe('1B');
});
