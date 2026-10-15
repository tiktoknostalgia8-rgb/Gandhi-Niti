import React, { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion, MotionValue } from "motion/react";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.85, 0.95] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 0.6], [18, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 0.6], [0, -60]);

  return (
    <div
      className="h-[52rem] sm:h-[60rem] md:h-[72rem] flex items-center justify-center relative p-2 sm:p-6 md:p-12 overflow-hidden"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-20 w-full relative"
        style={{
          perspective: "1200px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({
  translate,
  titleComponent,
}: {
  translate: MotionValue<number>;
  titleComponent: string | React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="max-w-5xl mx-auto text-center mb-8 px-4"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 0 1px rgba(184, 144, 43, 0.4), 0 10px 30px -10px rgba(46, 27, 15, 0.25), 0 25px 50px -12px rgba(46, 27, 15, 0.18)",
      }}
      className="max-w-5xl -mt-6 sm:-mt-10 mx-auto h-[32rem] sm:h-[36rem] md:h-[42rem] w-full border-2 border-[#B8902B] p-2 sm:p-4 md:p-6 bg-[#2E1B0F] rounded-[16px] md:rounded-[24px] shadow-2xl relative"
    >
      {/* Decorative Royal Corner Accents */}
      <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#D9B44A] pointer-events-none" />
      <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#D9B44A] pointer-events-none" />
      <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#D9B44A] pointer-events-none" />
      <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#D9B44A] pointer-events-none" />

      {/* Screen Frame */}
      <div className="h-full w-full overflow-hidden rounded-[10px] md:rounded-[16px] bg-[#F1E6CC] border border-[#5A3A22]/30 text-[#2E1B0F] p-4 sm:p-6 md:p-8 flex flex-col justify-between">
        {children}
      </div>
    </motion.div>
  );
};
