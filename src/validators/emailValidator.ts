export const isValidEmail = (email: string): boolean => {
  const emailPattern = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i;
  return emailPattern.test(email);
};
