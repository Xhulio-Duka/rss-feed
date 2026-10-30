export default function Loading() {
  return (
    <div
      className="animate-fade-in flex flex-col gap-8"
      role="status"
      aria-live="polite"
      aria-label="Loading articles"
    >
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="flex flex-col gap-3 border-t border-line pt-8"
          style={{ animationDelay: `${i * 80}ms` }}
        >
          <div
            className="h-3 w-40 rounded-sm"
            style={{
              background:
                "linear-gradient(90deg, #d5dae6 25%, #eef1f7 50%, #d5dae6 75%)",
              backgroundSize: "200% 100%",
              animation: "shimmer 1.4s linear infinite",
            }}
          />
          <div
            className="h-7 w-[85%] rounded-sm"
            style={{
              background:
                "linear-gradient(90deg, #d5dae6 25%, #eef1f7 50%, #d5dae6 75%)",
              backgroundSize: "200% 100%",
              animation: "shimmer 1.4s linear infinite",
            }}
          />
          <div
            className="h-16 w-full rounded-sm"
            style={{
              background:
                "linear-gradient(90deg, #d5dae6 25%, #eef1f7 50%, #d5dae6 75%)",
              backgroundSize: "200% 100%",
              animation: "shimmer 1.4s linear infinite",
            }}
          />
        </div>
      ))}
      <span className="sr-only">Loading articles…</span>
    </div>
  );
}
