// utils/characterMapping.js
const characterMapping = {
  a: "ं",
  A: "ा",
  s: "े",
  S: "ै",
  d: "क",
  D: "क्",
  f: "ि",
  g: "ह",
  G: "ळ",
  h: "ी",
  j: "र",
  J: "श्र",
  k: "ा",
  K: "ज्ञ",
  l: "स",
  L: "स्",
  ";": "य",
  ":": "रु",
  q: "ु",
  Q: "फ",
  w: "ू",
  W: "ॅ",
  e: "म",
  E: "म्",
  r: "त",
  R: "त्",
  t: "ज",
  T: "ज्",
  y: "ल",
  Y: "ल्",
  u: "न",
  U: "न्",
  i: "प",
  I: "प्",
  o: "व",
  O: "व्",
  p: "च",
  P: "च्",
  "]": "द्व",
  "\\": ")",
  "~": "द्य",
  z: "्र",
  Z: "र्र्",
  x: "ग",
  X: "ग्",
  c: "ब",
  C: "ब्",
  v: "अ",
  V: "ट",
  b: "इ",
  B: "ठ",
  n: "द",
  N: "छ",
  m: "उ",
  M: "ड",
  ",": "ए",
  "<": "ढ",
  ">": "झ",
  "`": "़",
  1: "1",
  "!": "|",
  2: "2",
  "@": "/",
  3: "3",
  "#": ":",
  4: "4",
  $: "*",
  5: "5",
  "%": "-",
  6: "6",
  "^": "'",
  7: "7",
  "&": "'",
  8: "8",
  "*": "द्ध",
  9: "9",
  "(": "त्र",
  0: "0",
  ")": "ऋ",
  "-": ";",
  _: ".",
  "=": "ृ",
  "+": "्",
  "|": "(",
  /*   "ॅ": "ँ",
   */ "ं": "",

  "\u00BD": "½", // Alt+0189 mapped to ½
  "\u00BE": "¾", // Alt+0190 mapped to ¾
  "\u00D7": "×", // Alt+0215 mapped to ×
  "\u00D8": "Ø", // Alt+0216 mapped to Ø
  "\u00DE": "Þ", // Alt+0222 mapped to Þ
  "\u00DF": "ß", // Alt+0223 mapped to ß
  "\u00F7": "÷", // Alt+0247 mapped to ÷
  "\u0099": "™", // Alt+0153 mapped to ™
  "\u009A": "š", // Alt+0154 mapped to š
  "\u009B": "›", // Alt+0155 mapped to ›
  "\u009C": "œ", // Alt+0156 mapped to œ
  "\u00A9": "©", // Alt+0169 mapped to ©
  "\u00B9": "¹", // Alt+0185 mapped to ¹
  "\u0085": "•", // Alt+0149 mapped to •
  /*  half characters */

  "'": "श्",
  '"': "ष्",
  "{": "क्ष्‍",
  "/": "ध्",
  "?": "घ्",
  ".": "ण्",
  F: "थ्",
  H: "भ्",
  "[": "ख्",
  /* making half characters complete */
  "[A": "ख",
  "[k": "ख",
  ".A": "ण",
  ".k": "ण",
  "/A": "ध",
  "/k": "ध",
  "?A": "घ",
  "?k": "घ",
  "'A": "श",
  "'k": "श",
  '"A"': "ष",
  '"k"': "ष",
  HA: "भ",
  Hk: "भ",
  FA: "थ",
  Fk: "थ",
  "{A": "क्ष",
  "{k": "क्ष",
};

export default characterMapping;
