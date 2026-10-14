"use client";

import { useEffect, useId, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface AnimatedGridPatternProps {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  strokeDasharray?: string | number;
  numSquares?: number;
  className?: string;
  maxOpacity?: number;
  duration?: number;
  repeatDelay?: number;
}

interface Square {
  id: number;
  pos: [number, number];
}

export function AnimatedGridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  numSquares = 30,
  className,
  maxOpacity = 1,
  duration = 2,
  repeatDelay = 0.5,
  ...props
}: AnimatedGridPatternProps) {
  const id = useId();
  const containerRef = useRef<SVGSVGElement | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [squares, setSquares] = useState<Square[]>([]);

  const getPos = useCallback(() => {
    return [
      Math.floor((Math.random() * (dimensions.width || 1)) / width),
      Math.floor((Math.random() * (dimensions.height || 1)) / height),
    ] as [number, number];
  }, [dimensions.width, dimensions.height, width, height]);

  const updateSquarePosition = (squareId: number) => {
    setSquares((currentSquares) =>
      currentSquares.map((sq) =>
        sq.id === squareId
          ? {
              ...sq,
              pos: getPos(),
            }
          : sq
      )
    );
  };

  useEffect(() => {
    const currentContainer = containerRef.current;
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const w = entry.contentRect.width;
        const h = entry.contentRect.height;
        setDimensions({
          width: w,
          height: h,
        });
        setSquares(
          Array.from({ length: numSquares }, (_, i) => ({
            id: i,
            pos: [
              Math.floor((Math.random() * (w || 1)) / width),
              Math.floor((Math.random() * (h || 1)) / height),
            ],
          }))
        );
      }
    });

    if (currentContainer) {
      resizeObserver.observe(currentContainer);
    }

    return () => {
      if (currentContainer) {
        resizeObserver.unobserve(currentContainer);
      }
    };
  }, [width, height, numSquares]);

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0  h-full w-full fill-gray-400/30 stroke-gray-400/30 bg-[#050a26]  ",
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
      <svg x={x} y={y} className="overflow-visible">
        {squares.map(({ pos: [squareX, squareY], id: squareId }, index) => (
          <motion.rect
            initial={{ opacity: 0 }}
            animate={{ opacity: maxOpacity }}
            transition={{
              duration,
              repeat: 1,
              delay: index * 0.1,
              repeatType: "reverse",
              repeatDelay,
            }}
            onAnimationComplete={() => updateSquarePosition(squareId)}
            key={`${squareX}-${squareY}-${index}`}
            width={width - 1}
            height={height - 1}
            x={squareX * width + 1}
            y={squareY * height + 1}
            fill="rgba(2c5048)"
            strokeWidth="0"
          />
        ))}
      </svg>
    </svg>
  );
}
