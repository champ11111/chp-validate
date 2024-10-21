export const isValidThaiPhoneNumber = (phoneString: string): boolean => {
  const digitsOnly = phoneString.replace(/\D/g, "");
  const phonePattern = /^0\d{9}$/; // Thai phone numbers start with 0 and 10 digits
  return phonePattern.test(digitsOnly);
};
