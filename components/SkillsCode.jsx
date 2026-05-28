"use client";

import { motion } from "framer-motion";

const T = {
  c: "text-comment italic",
  k: "text-keyword",
  s: "text-string",
  f: "text-fn",
  p: "text-prop",
  tx: "text-text",
};

const lines = [
  [{ t: "// utils/fetchSkills.js", c: T.c }],
  null,
  [
    { t: "export", c: T.k },
    { t: " ", c: T.tx },
    { t: "async", c: T.k },
    { t: " ", c: T.tx },
    { t: "function", c: T.k },
    { t: " ", c: T.tx },
    { t: "fetchSkills", c: T.f },
    { t: "({ ", c: T.tx },
    { t: "stack", c: T.p },
    { t: ", ", c: T.tx },
    { t: "passion", c: T.p },
    { t: ", ", c: T.tx },
    { t: "agency", c: T.p },
    { t: " }) {", c: T.tx },
  ],
  [
    { t: "  ", c: T.tx },
    { t: "return", c: T.k },
    { t: " {", c: T.tx },
  ],
  [
    { t: "    ", c: T.tx },
    { t: "stack", c: T.p },
    { t: ",", c: T.tx },
  ],
  [
    { t: "    ", c: T.tx },
    { t: "passion", c: T.p },
    { t: ",", c: T.tx },
  ],
  [
    { t: "    ", c: T.tx },
    { t: "agency", c: T.p },
    { t: ",", c: T.tx },
  ],
  null,
  [
    { t: "    ", c: T.tx },
    { t: "languages", c: T.p },
    { t: ":  [ ", c: T.tx },
    { t: "'JavaScript'", c: T.s },
    { t: ", ", c: T.tx },
    { t: "'PHP'", c: T.s },
    { t: ", ", c: T.tx },
    { t: "'HTML5'", c: T.s },
    { t: ", ", c: T.tx },
    { t: "'CSS3'", c: T.s },
    { t: " ],", c: T.tx },
  ],
  [
    { t: "    ", c: T.tx },
    { t: "frameworks", c: T.p },
    { t: ": [ ", c: T.tx },
    { t: "'Next.js'", c: T.s },
    { t: ", ", c: T.tx },
    { t: "'React'", c: T.s },
    { t: " ],", c: T.tx },
  ],
  [
    { t: "    ", c: T.tx },
    { t: "cms", c: T.p },
    { t: ":        [ ", c: T.tx },
    { t: "'WordPress (tema custom)'", c: T.s },
    { t: ", ", c: T.tx },
    { t: "'Headless WordPress'", c: T.s },
    { t: ", ", c: T.tx },
    { t: "'Sanity'", c: T.s },
    { t: " ],", c: T.tx },
  ],
  [
    { t: "    ", c: T.tx },
    { t: "styling", c: T.p },
    { t: ":    [ ", c: T.tx },
    { t: "'Tailwind CSS'", c: T.s },
    { t: ", ", c: T.tx },
    { t: "'Sass'", c: T.s },
    { t: ", ", c: T.tx },
    { t: "'CSS3'", c: T.s },
    { t: " ],", c: T.tx },
  ],
  [
    { t: "    ", c: T.tx },
    { t: "animations", c: T.p },
    { t: ": [ ", c: T.tx },
    { t: "'GSAP'", c: T.s },
    { t: ", ", c: T.tx },
    { t: "'Framer Motion'", c: T.s },
    { t: " ],", c: T.tx },
  ],
  [
    { t: "    ", c: T.tx },
    { t: "tools", c: T.p },
    { t: ":      [ ", c: T.tx },
    { t: "'Git'", c: T.s },
    { t: ", ", c: T.tx },
    { t: "'GitHub'", c: T.s },
    { t: ", ", c: T.tx },
    { t: "'Vercel'", c: T.s },
    { t: ", ", c: T.tx },
    { t: "'Figma'", c: T.s },
    { t: " ],", c: T.tx },
  ],
  [
    { t: "    ", c: T.tx },
    { t: "deploy", c: T.p },
    { t: ":     [ ", c: T.tx },
    { t: "'Vercel'", c: T.s },
    { t: ", ", c: T.tx },
    { t: "'cPanel / hosting tradizionale'", c: T.s },
    { t: " ],", c: T.tx },
  ],
  [
    { t: "    ", c: T.tx },
    { t: "soft", c: T.p },
    { t: ":       [ ", c: T.tx },
    { t: "'client communication'", c: T.s },
    { t: ", ", c: T.tx },
    { t: "'agenzia'", c: T.s },
    { t: ", ", c: T.tx },
    { t: "'deadline'", c: T.s },
    { t: " ],", c: T.tx },
  ],
  [{ t: "  }", c: T.tx }],
  [{ t: "}", c: T.tx }],
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.03, delayChildren: 0.15 } },
};

const lineAnim = {
  hidden: { opacity: 0, x: -6 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.2, ease: "easeOut" } },
};

export default function SkillsCode() {
  return (
    <div className="px-4 md:px-8 pt-10">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex flex-col"
      >
        {lines.map((tokens, i) => (
          <motion.div
            key={i}
            variants={lineAnim}
            className="flex items-baseline min-h-[1.6em]"
          >
            <span className="w-6 md:w-8 text-right text-[12px] text-muted select-none mr-4 md:mr-8 shrink-0 tabular-nums">
              {i + 1}
            </span>
            <span className="text-[14px] leading-[1.6] whitespace-pre-wrap md:whitespace-pre break-all md:break-normal">
              {tokens
                ? tokens.map((token, j) => (
                    <span key={j} className={token.c}>
                      {token.t}
                    </span>
                  ))
                : " "}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
