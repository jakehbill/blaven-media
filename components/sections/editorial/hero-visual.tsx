"use client";

import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

type HeroVisualProps = {
  className?: string;
};

const sand = "#d7c9b4";
const olive = "#303a30";

const cx = 210;
const cy = 180;
const orbit = 138;

const nodes = [
  { key: "website", label: "Website", x: cx, y: cy - orbit },
  { key: "linkedin", label: "LinkedIn", x: cx + orbit, y: cy },
  { key: "blog", label: "Blog", x: cx, y: cy + orbit },
  { key: "email", label: "Email", x: cx - orbit, y: cy },
] as const;

const waveCount = 4;
const waveDuration = 4.2;
const waveStartR = 38;
const waveEndR = orbit + 28;

function NodeIcon({
  type,
  x,
  y,
}: {
  type: (typeof nodes)[number]["key"];
  x: number;
  y: number;
}) {
  if (type === "linkedin") {
    return (
      <g transform={`translate(${x} ${y})`}>
        <rect x="-10" y="-10" width="20" height="20" rx="3" fill={olive} />
        <g fill={sand}>
          <path d="M-5.7 -2.15 h2.4 v8.35 h-2.4 z" />
          <circle cx="-4.5" cy="-4.5" r="1.35" />
          <path d="M-1.5 -2.15 h2.4 v1.2 c.45-.75 1.25-1.45 2.65-1.45 2.15 0 2.7 1.2 2.7 2.95 V6.2 h-2.4 V1.1 c0-.9 0-2-1.25-2 s-1.45.95-1.45 1.95 V6.2 H-1.5 z" />
        </g>
      </g>
    );
  }

  if (type === "email") {
    return (
      <path
        d={`M${x - 9} ${y - 6} h18 v12 h-18 z M${x - 9} ${y - 6} l9 7 9 -7`}
        stroke={olive}
        strokeWidth="1.75"
        strokeLinejoin="round"
        fill="none"
      />
    );
  }

  if (type === "blog") {
    return (
      <g>
        <rect
          x={x - 8}
          y={y - 9}
          width="16"
          height="18"
          rx="2"
          fill={olive}
        />
        <line
          x1={x - 4}
          y1={y - 4}
          x2={x + 4}
          y2={y - 4}
          stroke={sand}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1={x - 4}
          y1={y}
          x2={x + 4}
          y2={y}
          stroke={sand}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1={x - 4}
          y1={y + 4}
          x2={x + 2}
          y2={y + 4}
          stroke={sand}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>
    );
  }

  return (
    <g stroke={olive} strokeWidth="1.6" strokeLinecap="round" fill="none">
      <circle cx={x} cy={y} r="8" />
      <ellipse cx={x} cy={y} rx="3.5" ry="8" />
      <line x1={x - 8} y1={y} x2={x + 8} y2={y} />
      <path d={`M${x - 7} ${y - 4} H${x + 7} M${x - 7} ${y + 4} H${x + 7}`} />
    </g>
  );
}

/**
 * Content constellation: insight at the center, formats radiating out.
 * No panel background; sits directly on the sage hero.
 */
function HeroVisual({ className }: HeroVisualProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={cn("relative w-full", className)}
      aria-hidden
      initial={reduce ? false : { opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.85, ease: [0.2, 0.7, 0.2, 1], delay: 0.08 }}
    >
      <svg
        viewBox="0 0 420 368"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full"
      >
        {reduce ? (
          <>
            <circle
              cx={cx}
              cy={cy}
              r={orbit * 0.58}
              stroke={sand}
              strokeOpacity="0.18"
              strokeWidth="1"
            />
            <circle
              cx={cx}
              cy={cy}
              r={orbit}
              stroke={sand}
              strokeOpacity="0.12"
              strokeWidth="1"
            />
          </>
        ) : (
          Array.from({ length: waveCount }, (_, index) => (
            <motion.circle
              key={`wave-${index}`}
              cx={cx}
              cy={cy}
              r={waveStartR}
              stroke={sand}
              strokeWidth="1.25"
              fill="none"
              initial={{ r: waveStartR, strokeOpacity: 0.42 }}
              animate={{
                r: [waveStartR, waveEndR],
                strokeOpacity: [0.42, 0.22, 0],
              }}
              transition={{
                duration: waveDuration,
                repeat: Infinity,
                ease: "easeOut",
                delay: (index * waveDuration) / waveCount,
                times: [0, 0.55, 1],
              }}
            />
          ))
        )}

        {nodes.map((node, index) => (
          <motion.line
            key={`line-${node.key}`}
            x1={cx}
            y1={cy}
            x2={node.x}
            y2={node.y}
            stroke={sand}
            strokeWidth="1.25"
            strokeLinecap="round"
            initial={reduce ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            animate={
              reduce ? undefined : { strokeOpacity: [0.28, 0.52, 0.28] }
            }
            transition={{
              opacity: {
                duration: 0.55,
                ease: [0.2, 0.7, 0.2, 1],
                delay: 0.18 + index * 0.05,
              },
              strokeOpacity: {
                duration: 4.2 + index * 0.35,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1 + index * 0.25,
              },
            }}
          />
        ))}

        {nodes.map((node, index) => (
          <motion.g
            key={node.key}
            initial={reduce ? false : { opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.55,
              ease: [0.2, 0.7, 0.2, 1],
              delay: 0.32 + index * 0.06,
            }}
          >
            <motion.g
              animate={reduce ? undefined : { y: [0, -3.5, 0] }}
              transition={{
                duration: 3.8 + index * 0.45,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.35,
              }}
            >
              <circle cx={node.x} cy={node.y} r="26" fill={sand} />
              <NodeIcon type={node.key} x={node.x} y={node.y} />
              <text
                x={node.x}
                y={node.y + 42}
                textAnchor="middle"
                fill={sand}
                fillOpacity="0.7"
                style={{
                  fontSize: "9px",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  fontFamily: "var(--font-sans), system-ui, sans-serif",
                }}
              >
                {node.label.toUpperCase()}
              </text>
            </motion.g>
          </motion.g>
        ))}

        <motion.g
          initial={reduce ? false : { opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1], delay: 0.08 }}
        >
          <motion.g
            animate={reduce ? undefined : { scale: [1, 1.04, 1] }}
            style={{ transformOrigin: `${cx}px ${cy}px` }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <circle cx={cx} cy={cy} r="34" fill={sand} />
            <rect
              x={cx - 7}
              y={cy - 16}
              width="14"
              height="20"
              rx="7"
              fill={olive}
            />
            <path
              d={`M${cx - 12} ${cy + 1} v3 a12 12 0 0 0 24 0 v-3`}
              stroke={olive}
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
            <line
              x1={cx}
              y1={cy + 14}
              x2={cx}
              y2={cy + 19}
              stroke={olive}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </motion.g>
          <text
            x={cx}
            y={cy + 56}
            textAnchor="middle"
            fill={sand}
            style={{
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.14em",
              fontFamily: "var(--font-sans), system-ui, sans-serif",
            }}
          >
            INSIGHT
          </text>
        </motion.g>
      </svg>
    </motion.div>
  );
}

export { HeroVisual };
