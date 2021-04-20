import {
  useEffect,
  useState,
  useCallback,
  useRef,
} from "react";

export const CheckResize = () => {
  const [isMobile, setMobile] = useState(false);
  const clearRef = useRef(null);

  const resizeHandler = useCallback(async () => {
    const w = await promiseHandler();
    if (w < 600) {
      console.log(w);
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [promiseHandler]);
  function promiseHandler() {
    clearTimeout(clearRef.current);
    return new Promise((res, rej) => {
      clearRef.current = setTimeout(() => {
        res(window.innerWidth);
      }, 1000);
    });
  }

  useEffect(() => {
    if (typeof window.innerWidth !== undefined) {
      window.addEventListener(
        "resize",
        resizeHandler
      );
    }

    () =>
      removeEventListener(
        "resize",
        resizeHandler
      );
  }, []);

  return isMobile;
};

export const IsMobile = () => {
  const [initWidth, setInit] = useState(false);
  useEffect(() => {
    var match =
      window.matchMedia || window.msMatchMedia;
    if (match) {
      var mq = match("(pointer:coarse)");
      return mq.matches;
    }
  }, []);

  return false;
};

export const InitWidth = () => {
  const [initWidth, setInit] = useState(false);

  useEffect(() => {
    if (typeof window.innerWidth !== undefined) {
      if (window.innerWidth < 600) {
        setInit(true);
      }
    }
  }, []);

  return initWidth;
};
