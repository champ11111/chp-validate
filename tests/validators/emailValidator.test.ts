import { isValidEmail } from '../../src/validators/emailValidator';

test('Valid email addresses', () => {
  expect(isValidEmail('test@example.com')).toBe(true);
  expect(isValidEmail('hello.world@domain.co')).toBe(true);
});

test('Invalid email addresses', () => {
  expect(isValidEmail('invalid-email')).toBe(false);
  expect(isValidEmail('test@com')).toBe(false);
});
