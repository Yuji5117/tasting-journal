import Link from "next/link";

import { TastingNoteForm } from "@/features/tasting-notes/components/TastingNoteForm";

export default function CreateNotePage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-xl bg-white px-5 pb-8 pt-6">
      <header className="mb-6 flex items-center justify-between">
        <Link href="/notes" className="text-3xl text-stone-900">
          ‹
        </Link>

        <h1 className="text-xl font-bold text-stone-900">
          新しいテイスティング
        </h1>

        <button
          type="submit"
          form="tasting-note-form"
          className="font-semibold text-rose-900"
        >
          保存
        </button>
      </header>

      <TastingNoteForm />
    </main>
  );
}
