import useFetchPosts from "../hooks/use-fetch-posts";
import Error from "./error";
import Loading from "./loading";
import PostCard from "./post-card";
import type { PostType } from "../types/post-type";

export default function PostList() {
  const { data, error, isLoading } = useFetchPosts();

  if (error) return <Error error={error} />;
  if (isLoading) return <Loading />;

  const posts: PostType[] =
    data?.map((entry: { item: PostType }) => entry.item) ?? [];

  return (
    <section aria-label="Latest posts" className="animate-fade-in flex flex-col">
      <div className="mb-6 flex items-baseline justify-between gap-4">
        <h2 className="font-display text-sm font-bold tracking-[0.18em] text-ink uppercase">
          Latest
        </h2>
        <p className="text-sm text-ink-muted">{posts.length} articles</p>
      </div>

      <ul className="flex flex-col">
        {posts.map((post, i) => (
          <li
            key={post.guid ?? i}
            className="animate-rise border-t border-line"
            style={{ animationDelay: `${80 + i * 60}ms` }}
          >
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </section>
  );
}
