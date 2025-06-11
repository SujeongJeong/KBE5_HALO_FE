// src/utils/dateUtils.ts

/**
 * Helper function to format a Date object into 'YYYY-MM-DD' string
 * for API calls.
 */
export const getFormattedDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };