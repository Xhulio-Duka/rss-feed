# RSS Feed — Netflix Technology Blog

A web app that fetches and displays the latest posts from the Netflix Technology Blog RSS feed.

## What it does

- Fetch the Netflix Technology Blog RSS feed from an Express API
- Show posts in a chronological list with title, date, author, and categories
- Display a truncated content snippet for each article
- Open the full article on Medium in a new tab
- Handle loading (skeleton placeholders) and error states with a reload action
- Cache and revalidate feed data on the client with SWR

The React client calls `/api/v1/feed`; the Express server parses `https://netflixtechblog.com/feed` with `rss-parser` and returns the items as JSON.

## Stack

**Client**

- React 19 + TypeScript
- Vite
- Tailwind CSS 4
- SWR

**Server**

- Express 5 + TypeScript
- rss-parser
- CORS + dotenv

## Structure

```
client/
  src/
    App.tsx                      # layout, header, SWR provider
    hooks/use-fetch-posts.tsx    # SWR fetch against the feed API
    components/post-list.tsx     # list, loading/error routing
    components/post-card.tsx     # single post + link out
    components/loading.tsx       # skeleton placeholders
    components/error.tsx         # error UI + reload
    types/post-type.ts           # PostType shape from the feed
server/
  server/
    server.ts                    # Express app, CORS, listen
    routes/feed-routes.ts        # GET /api/v1/feed
    controllers/rss-parser.ts    # parse Netflix RSS URL
    controllers/get-all-feed.ts  # return parsed articles as JSON
```

## Getting started

Start the API (port 4000 by default):

```bash
cd server
pnpm install
pnpm dev
```

Start the client (port 5173; needs `VITE_API_URL` pointing at the feed endpoint):

```bash
cd client
pnpm install
pnpm dev
```

Set `client/.env.local` (example):

```
VITE_API_URL=http://localhost:4000/api/v1/feed
```

Production build (client):

```bash
cd client
pnpm build
pnpm preview
```
