import { useEffect, useState } from "react";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    const updateMatch = () => setMatches(mediaQueryList.matches);

    updateMatch(); // Ініціалізація
    mediaQueryList.addEventListener("change", updateMatch);

    return () => mediaQueryList.removeEventListener("change", updateMatch);
  }, [query]);

  return matches;
};

export const useDeviceType = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(min-width: 769px) and (max-width: 1023px)");
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return { isMobile, isTablet, isDesktop };
};
