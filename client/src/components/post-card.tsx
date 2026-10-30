import type { PostType } from "../types/post-type";

function formatDate(isoDate?: string, pubDate?: string) {
  const raw = isoDate || pubDate;
  if (!raw) return "";
  const date = new Date(raw);
  if (Number.isNaN(date.getTime())) return pubDate ?? "";
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function truncate(text: string, max = 180) {
  const cleaned = text.replace(/\s+/g, " ").trim();
  if (cleaned.length <= max) return cleaned;
  return `${cleaned.slice(0, max).trimEnd()}…`;
}

export default function PostCard({ post }: { post: PostType }) {
  const snippet = truncate(post["content:encodedSnippet"] ?? "");
  const date = formatDate(post.isoDate, post.pubDate);
  const categories = post.categories?.slice(0, 3) ?? [];

  return (
    <article className="group py-8 sm:py-10">
      <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink-muted">
        {date && (
          <time dateTime={post.isoDate || post.pubDate}>{date}</time>
        )}
        {post.creator && (
          <>
            <span aria-hidden className="text-line">
              ·
            </span>
            <span>{post.creator}</span>
          </>
        )}
      </div>

      {categories.length > 0 && (
        <ul className="mb-3 flex flex-wrap gap-2">
          {categories.map((category) => (
            <li
              key={category}
              className="font-display text-[0.65rem] font-bold tracking-[0.14em] text-ink-muted uppercase"
            >
              {category}
            </li>
          ))}
        </ul>
      )}

      <h3 className="font-display text-2xl leading-tight font-bold tracking-tight text-ink transition-colors duration-200 group-hover:text-signal sm:text-[1.7rem]">
        <a
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="outline-offset-4 focus-visible:outline-2 focus-visible:outline-signal"
        >
          {post.title}
        </a>
      </h3>

      {snippet && (
        <p className="mt-3 max-w-prose text-[1.05rem] leading-relaxed text-ink-muted">
          {snippet}
        </p>
      )}

      <a
        href={post.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-2 font-display text-sm font-bold tracking-wide text-signal transition-transform duration-200 group-hover:translate-x-0.5"
      >
        Read article
        <span
          aria-hidden
          className="transition-transform duration-200 group-hover:translate-x-1"
        >
          →
        </span>
      </a>
    </article>
  );
}
