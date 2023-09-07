type DebounceFunction = (
  func: Function,
  delay: number
) => (...args: any[]) => void;

function debounce(func: Function, delay: number): (...args: any[]) => void {
  let timeoutId: NodeJS.Timeout | undefined;
  return (...args: any[]) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
      timeoutId = undefined;
    }, delay);
  };
}

export default debounce;
