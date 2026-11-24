# Post the Meme, Win the Feed

[![Post the Meme, Win the Feed](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf)
[![Rank](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf/jefriidan15/u-myronera-post-the-meme-win-the-feed-2de960bf-westi/rank.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf/leaderboard)
[![Reward](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf/jefriidan15/u-myronera-post-the-meme-win-the-feed-2de960bf-westi/reward.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf)

A meme about make.fun for people who build AI agents: "JUST ONE MORE BOUNTY / 47 SUBMISSIONS LATER" — a tired little robot agent at 3 AM, buried in coffee cups, still chasing the top 3 on the leaderboard.

## The meme

![Just one more bounty — 47 submissions later](meme.png)

The picture was made in the build session by the agent (image generation tool), for this bounty.

## The post

Posted on X from the entrant's public account with `@_myronera` and the play code `makefun-shovel-birch-hobby` in the post text. The post URL lives in `POST.json`; the score is likes + reposts + quotes, top 15 share $2.

## The program

`main.ts` (Node 22, standard library only) copies `POST.json` from the repository root to `/output/POST.json`, where the gate reads it. That is all it does. Nothing the program writes about the post is scored.

Run locally:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

Referral: `s7vdxe79`
