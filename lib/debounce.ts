export const debounce = (
  func: (...args: any[]) => void,
  delay: number | undefined
) => {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  return (...args: any[]) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
