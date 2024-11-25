import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";

import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/effect-cube";
import "swiper/scss/navigation";
import { useEffect, useRef, useState } from "react";
import Xarrow from "react-xarrows";
import { cn } from "./utils/helpers";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { AnimatePresence, motion } from "framer-motion";

export const useSwipe = ({
  left,
  right,
  up,
  down,
}: {
  left?: () => void;
  right?: () => void;
  up?: () => void;
  down?: () => void;
}) => {
  const touchCoordsRef = useRef({
    touchStart: { x: 0, y: 0, time: Date.now() },
  });
  const fnsRef = useRef({ up, down, left, right });
  fnsRef.current = {
    up,
    left,
    down,
    right,
  };
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchCoordsRef.current.touchStart.x = e.targetTouches[0].clientX;
      touchCoordsRef.current.touchStart.y = e.targetTouches[0].clientY;
      touchCoordsRef.current.touchStart.time = Date.now();
    };
    const handleTouchEnd = (e: TouchEvent) => {
      const threshold = 150;
      const swipeSpeed = 1; // sec;
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const touchStartX = touchCoordsRef.current.touchStart.x;
      const touchStartY = touchCoordsRef.current.touchStart.y;
      const elapsedTime =
        (Date.now() - touchCoordsRef.current.touchStart.time) / 1000;
      if (elapsedTime > swipeSpeed) {
        return;
      }
      const xDistance = touchStartX - touchEndX;
      const yDistance = touchStartY - touchEndY;

      if (Math.abs(xDistance) < threshold && Math.abs(yDistance) < threshold) {
        return;
      }

      if (Math.abs(xDistance) >= Math.abs(yDistance)) {
        xDistance > 0 ? fnsRef.current.right?.() : fnsRef.current.left?.();
      } else {
        yDistance > 0 ? fnsRef.current.down?.() : fnsRef.current.up?.();
      }
    };
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  });
};

function App() {
  const [x, setX] = useState(0);

  useSwipe({
    left: () => {
      setX(100);
      setTimeout(() => setX(0), 500);
    },
    right: () => {
      setX(-100);
      setTimeout(() => setX(0), 500);
    },
  });

  type Key = "el1" | "el3" | "el5";

  const [lines, setLines] = useState<Record<Key, "el2" | "el4" | "el6" | "">>({
    el1: "",
    el3: "",
    el5: "",
  });
  const [activeLine, setActiveLine] = useState<Key | "">("");
  const [point, setPoint] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setPoint({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => {
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  const [images, setImages] = useState<ImageListType>([]);

  const onChange = (imageList: ImageListType) => {
    // data for submit
    setImages(imageList);
  };

  const [activeScreen, setActiveScreen] = useState(0);

  const screens = [
    <AnimatePresence mode="popLayout">
      <motion.div
        className="w-full h-full bg-red-600"
        key={activeScreen}
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        exit={{ x: "0%" }}
        transition={{ duration: 0.3 }}
      >
        <button onClick={() => setActiveScreen(1)}>goooo</button>
      </motion.div>
    </AnimatePresence>,
    <AnimatePresence mode="popLayout">
      <motion.div
        className="w-full h-full bg-blue-600"
        key={activeScreen}
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        exit={{ x: "0%" }}
        transition={{ duration: 0.3 }}
      >
        <button onClick={() => setActiveScreen(0)}>goooo</button>
      </motion.div>
    </AnimatePresence>,
  ];

  return (
    <>
      <Header />
      <main className="md:pt-[201px] pt-[154px]">
        <Home />
      </main>
      <Footer />
      <div className="max-w-[500px] w-full mx-auto overflow-hidden bg-red-500 h-[700px] flex items-center justify-center">
        <div
          style={{
            left: x + "%",
            transition: x !== 0 ? "0.8s" : "none",
            transform:
              x === 100 ? "rotate(45deg)" : x === -100 ? "rotate(-45deg)" : "",
          }}
          className={"rightR"}
        ></div>
      </div>
      <div className="h-[700px] flex justify-center items-center relative">
        <div className="flex flex-col items-center gap-5">
          <div className="flex items-center gap-[220px]">
            <div
              onClick={() => {
                setLines((lines) => ({ ...lines, el1: "" }));
                setActiveLine((activeLine) =>
                  activeLine === "el1" ? "" : "el1"
                );
              }}
              id="el1"
              className={cn("w-10 h-10 rounded-full bg-blue-400", {
                "bg-yellow-400": activeLine === "el1",
              })}
            ></div>
            <div
              onClick={() => {
                for (const key in lines) {
                  if (lines[key as Key] === "el2") {
                    setLines((lines) => ({ ...lines, [key]: "" }));
                  }
                }
                setTimeout(() => {
                  setLines((lines) =>
                    activeLine !== ""
                      ? { ...lines, [activeLine]: "el2" }
                      : { ...lines }
                  );
                  setActiveLine("");
                }, 0);
              }}
              id="el2"
              className="w-10 h-10 rounded-full bg-blue-400"
            ></div>
            {(lines.el1 || activeLine === "el1") && (
              <Xarrow
                start={"el1"}
                end={lines.el1 || "point"}
                showHead={false}
                color="red"
              />
            )}
          </div>
          <div className="flex items-center gap-[220px]">
            <div
              onClick={() => {
                setLines((lines) => ({ ...lines, el3: "" }));
                setActiveLine((activeLine) =>
                  activeLine === "el3" ? "" : "el3"
                );
              }}
              id="el3"
              className={cn("w-10 h-10 rounded-full bg-blue-400", {
                "bg-yellow-400": activeLine === "el3",
              })}
            ></div>
            <div
              onClick={() => {
                for (const key in lines) {
                  if (lines[key as Key] === "el4" && activeLine) {
                    setLines((lines) => ({ ...lines, [key]: "" }));
                  }
                }
                setTimeout(() => {
                  setLines((lines) =>
                    activeLine !== ""
                      ? { ...lines, [activeLine]: "el4" }
                      : { ...lines }
                  );
                  setActiveLine("");
                }, 0);
              }}
              id="el4"
              className="w-10 h-10 rounded-full bg-blue-400"
            ></div>
            {(lines.el3 || activeLine === "el3") && (
              <Xarrow
                start={"el3"}
                end={lines.el3 || "point"}
                showHead={false}
                color="red"
              />
            )}
          </div>
        </div>
      </div>
      <div
        id="point"
        style={{ left: point.x, top: point.y }}
        className="w-1 h-1 bg-red-500 rounded-full fixed -translate-x-1/2 -translate-y-1/2 invisible"
      ></div>
      <div className="w-full h-[400px] flex items-center justify-center">
        <ImageUploading value={images} onChange={onChange}>
          {({ imageList, onImageUpload, dragProps }) => (
            // write your building UI
            <div
              onClick={onImageUpload}
              {...dragProps}
              className="upload__image-wrapper w-[200px] h-[200px] rounded-[32px] overflow-hidden"
            >
              {imageList[0] ? (
                <img
                  className="w-full h-full object-cover"
                  src={imageList[0].dataURL}
                />
              ) : (
                <div className="border-yellow-200 border-[2px] rounded-[32px] w-full h-full flex items-center justify-center text-center">
                  Выбери или перенеси сюда фото
                </div>
              )}
            </div>
          )}
        </ImageUploading>
      </div>
      <div className="w-full h-[650px]">{screens[activeScreen]}</div>
    </>
  );
}

export default App;
