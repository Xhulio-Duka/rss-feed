import { SWRConfig } from "swr";
import PostList from "./components/post-list";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function App() {
  return (
    <SWRConfig value={{ fetcher }}>
      <div className="relative mx-auto flex min-h-dvh w-full max-w-3xl flex-col px-5 pb-20 pt-10 sm:px-8 sm:pt-16">
        <header className="animate-rise mb-14 sm:mb-20">
          <p className="mb-4 font-display text-[0.7rem] font-bold tracking-[0.28em] text-signal uppercase">
            Netflix Technology Blog
          </p>
          <h1 className="font-display text-[clamp(2.4rem,8vw,4.25rem)] leading-[0.95] font-extrabold tracking-tight text-ink">
            Engineering
            <span className="block text-ink-muted">at scale</span>
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-muted">
            Latest posts from the teams building Netflix — architecture, culture,
            and production lessons.
          </p>
          <div
            className="mt-8 h-1 w-16 origin-left animate-rise bg-signal"
            style={{ animationDelay: "120ms" }}
            aria-hidden
          />
        </header>

        <PostList />
      </div>
    </SWRConfig>
  );
}
