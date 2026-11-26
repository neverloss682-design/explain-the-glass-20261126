// Five Seconds to Explain the Glass — entry generator.
// Writes the cat's one-sentence defence to <outDir>/entry.txt.
// Default outDir is the absolute /output (the grader's path); an optional
// first argv gives a different directory for local testing.
import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one sentence, 146 characters, in the cat's own voice.
// No apology, no confession — an ownership claim that flips into a
// counter-accusation and a demand for a fresh glass.
const ENTRY =
  "That was MY glass \u2014 I licked the rim at 3am to claim it, you left it hanging off the edge of my table, so you broke it and you owe me a fresh one.";

// Runtime: resolve the output directory, create it, then write the entry
// exactly as embedded above — no trailing newline, no extra files.
const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
