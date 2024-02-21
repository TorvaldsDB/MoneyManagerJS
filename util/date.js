export const getFormattedDate = (date) => {
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2); // Pads zero for single-digit months
  const day = ("0" + date.getDate()).slice(-2); // Pads zero for single-digit days

  return `${year}-${month}-${day}`;
};

export const getDateMinusDays = (date, days) => {
  // return new Date(date.getTime() - days * 24 * 60 * 60 * 1000);
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
};
