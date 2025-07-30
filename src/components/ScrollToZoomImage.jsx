import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollToZoomImageWithContent = ({ image }) => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Scale zoom from 0.8 to 7 smoothly
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 7]);

  // Fade in content + slide up from center
  const contentOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.3, 0.5], [50, 0]);

  return (
    <div
      ref={containerRef}
      className="relative h-[220vh] w-full overflow-hidden"
    >
      {/* Sticky Zooming Background */}
      <motion.div
        style={{
          scale,
          position: "sticky",
          top: 0,
        }}
        className="w-full h-screen z-0 overflow-hidden"
      >
        <motion.img
          src={image}
          alt="Zooming Background"
          className="w-full h-full object-cover"
          style={{ willChange: "transform" }}
        />
      </motion.div>

      {/* Content Over Zoomed Image */}
      <motion.div
        style={{
          opacity: contentOpacity,
          y: contentY,
        }}
        className="absolute top-0 left-0 translate-y-1/2 h-screen w-full flex items-center justify-center z-10 pointer-events-none"
      >
        <div className="max-w-4xl mx-auto px-6 text-white pointer-events-auto flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold mb-8 text-center">
            Scroll into the Experience
          </h1>
          <p className="text-lg leading-relaxed mb-10 text-center">
            The background image zooms in as you scroll, and content appears
            within the frame — immersive and clean.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((card) => (
              <div
                key={card}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-2">Card {card}</h3>
                <p className="text-sm leading-relaxed">
                  Scroll continues with content layered over the zooming
                  background.
                </p>
              </div>
            ))}
          </div>
          <p className="text-lg leading-relaxed mb-10 text-center">
            The background image zooms in as you scroll, and content appears
            within the frame — immersive and clean.
          </p>
          <p className="text-lg leading-relaxed mb-10 text-center">
            The background image zooms in as you scroll, and content appears
            within the frame — immersive and clean.
          </p>
          <p className="text-lg leading-relaxed mb-10 text-center">
            The background image zooms in as you scroll, and content appears
            within the frame — immersive and clean.
          </p>
          <p className="text-lg leading-relaxed mb-10 text-center">
            The background image zooms in as you scroll, and content appears
            within the frame — immersive and clean.
          </p>
          v
          <p className="text-lg leading-relaxed mb-10 text-center">
            The background image zooms in as you scroll, and content appears
            within the frame — immersive and clean.
          </p>
          <p className="text-lg leading-relaxed mb-10 text-center">
            The background image zooms in as you scroll, and content appears
            within the frame — immersive and clean.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ScrollToZoomImageWithContent;
