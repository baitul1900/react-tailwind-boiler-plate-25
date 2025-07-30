import React, { useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from "framer-motion";

const splitText = (text) =>
  text.split("").map((char, index) => ({
    char,
    key: `${char}-${index}`,
  }));

const ScrollTextReveal = ({ paragraph }) => {
  const containerRef = useRef(null);

  // Watch scroll position relative to this element
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // Start fading when top enters bottom
  });

  const characters = splitText(paragraph);

  return (
    <div ref={containerRef} className="px-6 py-20 sm:px-20">
      <p
        className="text-lg sm:text-xl leading-relaxed text-gray-200 font-mono flex flex-wrap"
        style={{ maxWidth: "60ch", lineHeight: "2" }}
      >
        {characters.map((item, index) => {
          // Add a scroll-based delay per character
          const start = 0 + index * 0.00125; // small incremental offset
          const end = start + 0.3; // control how long each fades in

          // eslint-disable-next-line react-hooks/rules-of-hooks
          const opacity = useTransform(scrollYProgress, [start, end], [0.2, 2]);

          return (
            <motion.span
              key={item.key}
              style={{
                opacity,
                display: "inline-block",
                whiteSpace: "pre-wrap",
              }}
            >
              {item.char}
            </motion.span>
          );
        })}
      </p>
    </div>
  );
};

export default ScrollTextReveal;
