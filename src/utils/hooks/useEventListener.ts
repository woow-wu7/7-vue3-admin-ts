// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

interface EventOptions {
  target: any;
  capture: boolean;
  once: boolean;
  passive: boolean;
}

interface UseEventListener<T extends Event = Event> {
  (event: string, listener: T, options: EventOptions): void;
}

export const useEventListener: UseEventListener = (
  event,
  listener,
  options
) => {
  const { target, capture, once, passive } = options;

};
