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

type Fn<Args extends any[] = any[], Return = void> = (...args: Args) => Return;
type P = () => void;

export const useThrottleFn = <T extends Fn>(fn: T, wait: number): P => {
  let previous = 0;

  return () => {
    if (+new Date() - previous > wait) {
      fn();
      previous = +new Date();
    }
  };
};
