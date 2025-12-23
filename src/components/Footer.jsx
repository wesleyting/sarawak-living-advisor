export default function Footer() {
  return (
    <footer className="border-t border-zinc-200">
      <div className="mx-auto max-w-6xl px-5 py-8 text-xs text-zinc-600">
        <div className="font-semibold text-zinc-800">Sarawak Living Advisor</div>
        <p className="mt-2 max-w-xl leading-relaxed">
          Independent advisory service. Formal SMM2H applications are handled by
          government-recognised licensed partners.
        </p>
        <p className="mt-3 text-zinc-500">© {new Date().getFullYear()} Sarawak Living Advisor</p>
      </div>
    </footer>
  );
}
