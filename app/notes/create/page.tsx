import Link from "next/link";

import { TastingNoteForm } from "@/features/tasting-notes/components/TastingNoteForm";

export default function CreateTastingNotePage() {
  return (
    <main className="mx-auto min-h-screen max-w-2xl bg-stone-50 px-4 py-6">
      <header className="mb-6">
        <Link
          href="/notes"
          className="text-sm text-stone-500 hover:text-stone-900"
        >
          ← Back to Notes
        </Link>

        <h1 className="mt-4 text-3xl font-bold text-stone-900">
          Create Tasting Note
        </h1>

        <p className="mt-2 text-sm text-stone-500">
          Record your tasting experience.
        </p>
      </header>

      <section className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
        <TastingNoteForm />
      </section>
    </main>
  );
}