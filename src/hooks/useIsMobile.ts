import { useEffect, useLayoutEffect, useState } from "react";
import debounce from "../util/debounce";

const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useLayoutEffect(() => {
    const updateSize = (): void => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", debounce(updateSize, 250));
    return (): void => window.removeEventListener("resize", updateSize);
  }, []);

  return isMobile;
};

export default useIsMobile;
