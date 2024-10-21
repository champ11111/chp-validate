export const formatPhoneNumber = (phoneString: string, separator: string = " "): string => {
  const digitsOnly = phoneString.replace(/\D/g, "");

  if (digitsOnly.length === 9) {
    return digitsOnly.replace(/(\d{2})(\d{3})(\d{4})/, `$1${separator}$2${separator}$3`);
  }

  return digitsOnly.replace(/(\d{3})(\d{3})(\d{4})/, `$1${separator}$2${separator}$3`);
};
