// One Line entry: writes one funny line to /output/entry.txt.
// Node 22, standard library only, no network, deterministic.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
// Confidence is the cheapest feature, and this agent ships it in bulk.
const line = 'My agent read the instructions, understood them perfectly, and did the exact opposite. Confidently.';

mkdirSync(outDir, { recursive: true });
// The punchline gets filed under its own name, so the joke never gets lost in the drawer.
// A variable holds the output path so the write call reads like a delivery, not a shout.
const entryPath = join(outDir, 'entry.txt');
writeFileSync(entryPath, line + '\n', 'utf8');
