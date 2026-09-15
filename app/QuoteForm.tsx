export default function QuoteForm() {
  return (
    <form className="relative bg-brand rounded-[1.75rem] p-2 shadow-[0_30px_60px_-25px_rgba(246,166,35,0.55)] overflow-hidden">
      <div className="blob-orange absolute inset-0 pointer-events-none" />
      <div className="relative bg-brand rounded-[calc(1.75rem-0.5rem)] p-6 space-y-3.5">
        {["Name*", "Email*", "Phone*"].map((ph) => (
          <input
            key={ph}
            type={ph.startsWith("Email") ? "email" : "text"}
            required
            placeholder={ph}
            className="w-full rounded-xl bg-white px-4 py-3.5 text-sm text-ink placeholder:text-ink-soft/70 shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)] outline-none focus:ring-2 focus:ring-navy/40 transition-shadow"
          />
        ))}
        <textarea
          placeholder="Message"
          rows={3}
          className="w-full rounded-xl bg-white px-4 py-3.5 text-sm text-ink placeholder:text-ink-soft/70 outline-none focus:ring-2 focus:ring-navy/40 transition-shadow resize-none"
        />
        <button
          type="submit"
          className="group w-full bg-navy text-white rounded-full py-3.5 font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-ink active:scale-[0.98]"
        >
          Free Estimate
          <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-[1px]">
            →
          </span>
        </button>
      </div>
    </form>
  );
}
