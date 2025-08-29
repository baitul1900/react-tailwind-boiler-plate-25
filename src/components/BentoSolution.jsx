import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const BentoSolution = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // 200ms delay between each image
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className="container mx-auto p-6 my-10 bg-gray-800 text-white rounded-lg shadow-lg h-screen"
      ref={ref}
    >
      <motion.div
        className="masonry-grid flex w-auto gap-x-4 gap-y-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="masonry-item w-[33.3333%]">
          <motion.div className="mb-4" variants={itemVariants}>
            <img src="/public/item-1.png" alt="" />
          </motion.div>
          <motion.div className="mb-4" variants={itemVariants}>
            <img src="/public/item-4.png" alt="" />
          </motion.div>
        </div>
        <div className="masonry-item w-[33.3333%]">
          <motion.div className="mb-4" variants={itemVariants}>
            <img src="/public/item-2.png" alt="" />
          </motion.div>
          <motion.div className="mb-4" variants={itemVariants}>
            <img src="/public/item-5.png" alt="" />
          </motion.div>
        </div>
        <div className="masonry-item w-[33.3333%]">
          <motion.div className="mb-4" variants={itemVariants}>
            <img src="/public/item-3.png" alt="" />
          </motion.div>
          <motion.div className="mb-4" variants={itemVariants}>
            <img src="/public/item-6.png" alt="" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default BentoSolution;
