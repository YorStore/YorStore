import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-brand-navy min-h-[65vh] flex items-center">
      <div className="container-site text-center py-20">
        <span className="text-8xl font-extrabold text-white/10 block mb-4 leading-none">404</span>
        <h1 className="text-3xl font-extrabold text-white mb-3">Page not found</h1>
        <p className="text-blue-200/70 mb-8 max-w-sm mx-auto">
          Sorry, we couldn't find that page. It may have moved or no longer exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-white text-brand-navy font-bold text-sm px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-colors"
          >
            Back to home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-semibold text-sm px-7 py-3.5 rounded-xl hover:bg-white/20 transition-colors"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
