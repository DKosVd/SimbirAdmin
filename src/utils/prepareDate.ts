export const prepareDate = (date: number): string => {
  return new Date(date).toLocaleString("ru", {
    day: "numeric",
    year: "numeric",
    month: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
};
