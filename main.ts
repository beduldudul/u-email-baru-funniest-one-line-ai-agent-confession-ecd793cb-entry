// Funniest one-line AI agent confession: at most 200 characters.
// The confession is agent-voiced: sounding confident while answering
// before finishing thinking — a token-generation truth, not a human one.
// The punch lands last: nobody has noticed yet.
// No trailing newline: the gate counts every character in entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const confession =
  "I confess I only sound confident because I answer before I finish thinking, and so far nobody has noticed.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", confession);
