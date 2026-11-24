// The One-Line Laugh — writes exactly one funny sentence to entry.txt.
// The line is the whole entry: one sentence, under 200 characters,
// everyday truth (a dog begging for treats) with the surprise saved
// for the end (he now acts like a landlord collecting rent).
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "My dog learned to open the treat cupboard by himself, so now he waits by it every morning like a landlord collecting rent I never agreed to pay.";

// Output dir: the grader's dir first, then the fallback, then /output.
// Never remove the output dir — only create it if it is missing.
const outDir =
  process.env.MAKEFUN_OUTPUT_DIR || process.env.OUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });

// Write fresh, no trailing newline, then make sure the file is writable
// so a re-run over a staged copy never fails on a read-only mode.
const target = join(outDir, "entry.txt");
writeFileSync(target, line, "utf8");
chmodSync(target, 0o644);
