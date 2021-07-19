export const isBase64 = (url: string): string => {
  return url && url.includes("base64")
    ? url
    : "https://api-factory.simbirsoft1.com/" + url;
};
