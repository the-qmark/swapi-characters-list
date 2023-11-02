export default function (fn: any, timeout = 500) {
  let timer: any;
  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), timeout);
  };
}
