// Post the Meme, Win the Feed — westi7460 entry (Node 22, standard library only).
// Meme: "JUST ONE MORE BOUNTY / 47 SUBMISSIONS LATER" — a tired robot agent
// at 3 AM, still chasing the top 3 on the make.fun leaderboard (meme.png).
// The program copies POST.json from the repository root to /output/POST.json,
// where the gate reads it. That is all it has to do. The entry is the post
// itself: the meme picture (meme.png, made in this session) is posted natively
// on X from the entrant's public account with @_myronera and one of the
// account's make.fun play codes in the post text; POST.json names the post,
// and the house reads the post's counts from X. Nothing this program writes
// about the post is scored.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand
// in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
