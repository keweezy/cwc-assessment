import { useEffect, useState } from "react";

export function useDelayUnmount(isMounted, delayTime) {
  const [shouldRender, setShouldRender] = useState(isMounted);

  useEffect(() => {
    let timeoutId;

    if (isMounted) {
      setShouldRender(true);
    } else {
      timeoutId = setTimeout(() => {
        setShouldRender(false);
      }, delayTime);
    }

    return () => clearTimeout(timeoutId);
  }, [isMounted, delayTime]);

  return shouldRender;
}
