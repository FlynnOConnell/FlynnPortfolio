// Handles scrolling to a specific element on the page
import { getCurrentInstance, onMounted } from 'vue';
export function useSmoothScroll() {
  const instance = getCurrentInstance();
  let isMounted = false;

  if (instance) {
    onMounted(() => {
      isMounted = true;
    });
  }

  function scrollTo(target: string, options: ScrollToOptions = {}) {
    if (isMounted) {
      const element = document.querySelector(target);

      if (element) {
        const defaultOptions: ScrollToOptions = {
          top: element.getBoundingClientRect().top + window.pageYOffset - 100, // Add offset if needed
          left: element.getBoundingClientRect().left + window.pageXOffset,
          behavior: 'smooth',
        };

        const mergedOptions: ScrollToOptions = {
          ...defaultOptions,
          ...options,
        };

        window.scrollTo(mergedOptions);
      }
    }
  }

  return { scrollTo };
}