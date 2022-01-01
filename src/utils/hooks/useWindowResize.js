import { ref, onMounted, onUnmounted } from "vue";
import { useThrottleFn } from "./useThrottleFn";

export const useWindowResize = () => {
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
