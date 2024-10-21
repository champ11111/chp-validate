// Helper function to format a number with commas
export const formatNumberWithCommas = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// Helper function to format a number into an abbreviated form (K, M, B, T)
export const formatNumberWithAbbreviations = (num: number): string => {
  if (num >= 1_000_000_000_000) return `${Math.floor(num / 1_000_000_000_000)}T`;
  if (num >= 1_000_000_000) return `${Math.floor(num / 1_000_000_000)}B`;
  if (num >= 1_000_000) return `${Math.floor(num / 1_000_000)}M`;
  if (num >= 1_000) return `${Math.floor(num / 1_000)}K`;
  return num.toString(); // Fallback for numbers below 1000
};

// Main function to decide which format to use (abbreviated or commas)
export const formatNumber = (num: number, abbreviate?: boolean): string => {
  if (abbreviate) {
    return formatNumberWithAbbreviations(num);
  }
  return formatNumberWithCommas(num);
};
