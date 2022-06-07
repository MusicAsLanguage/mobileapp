export const Wait = (timeout = 500) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};
