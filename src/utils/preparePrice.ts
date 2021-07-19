export const preparePrice = (str: number): string => {
  if (str) {
    const string = str.toString();
    return string.length === 4
      ? string.slice(0, 1) + " " + string.slice(1)
      : string.length === 5
      ? string.slice(0, 2) + " " + string.slice(2)
      : string;
  }
  return "";
};
