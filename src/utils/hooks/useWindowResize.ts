import { ref, onMounted, onUnmounted, Ref } from "vue";
import { useThrottleFn } from "./useThrottleFn";

type UseWindowResize = () => {
  width: Ref;
  height: Ref;
};

export const useWindowResize: UseWindowResize = () => {
  const width = ref(NaN);
  const height = ref(NaN);

  const getSize = () => {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
  };

  onMounted(getSize);
  onMounted(() =>
    window.addEventListener("resize", useThrottleFn(getSize, 100))
  );
  onUnmounted(() =>
    window.removeEventListener("resize", useThrottleFn(getSize, 100))
  );

  return {
    width,
    height,
  };
};
