export default function Error({ error }: { error: Error }) {
  function handleReloadWindow() {
    window.location.reload();
  }

  return (
    <div
      className="animate-rise rounded-xl border border-line bg-paper-elevated/80 px-6 py-10 backdrop-blur-sm sm:px-8"
      role="alert"
    >
      <p className="mb-2 font-display text-[0.7rem] font-bold tracking-[0.22em] text-signal uppercase">
        Something went wrong
      </p>
      <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
        Couldn’t load the feed
      </h2>
      <p className="mt-3 max-w-md text-ink-muted">{error.message}</p>
      <button
        type="button"
        onClick={handleReloadWindow}
        className="mt-8 cursor-pointer bg-signal px-5 py-2.5 font-display text-sm font-bold tracking-wide text-white transition-colors duration-200 hover:bg-signal-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
      >
        Reload
      </button>
    </div>
  );
}
