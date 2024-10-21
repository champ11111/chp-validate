export const isValidFaxNumber = (fax: string): boolean => {
  // Fax number should be digits only, between 9 and 10 digits long
  const faxPattern = /^\d{9,10}$/;
  return faxPattern.test(fax);
};
