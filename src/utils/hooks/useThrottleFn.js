// export function useThrottleFn(fn, wait) {
//   let run = 0;
//   return function () {
//     if (run) {
//       run = false;
//       let timer = setTimeout(() => {
//         fn();
//         run = true;
//         clearTimeout(timer);
//       }, wait);
//     }
//   };
// }

export const useThrottleFn = (fn, wait) => {
  let previous = 0;

  return () => {
    if (+new Date() - previous > wait) {
      fn();
      previous = +new Date();
    }
  };
};
