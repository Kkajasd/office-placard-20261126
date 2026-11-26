import { mkdirSync, writeFileSync } from "node:fs";

// One-line museum placard for an ordinary office object, written as if it
// were an ancient artifact: a sticky note carrying a lost civilisation's
// entire surviving literature.
const ENTRY =
  // Joke angle: a mundane sticky note catalogued as a museum artefact — the civilisation's entire surviving literature.
  "Sticky note, Cat. no. 2011.047. Paper, adhesive, faded ink. Donor unknown. It carries the civilisation's entire surviving literature: 'buy milk'.";

if (!ENTRY.trim() || ENTRY.includes("\n") || ENTRY.length < 1 || ENTRY.length > 180) {
  throw new Error("invalid entry line");
}

if (ENTRY.length < 1 || ENTRY.length > 180) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-180`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
