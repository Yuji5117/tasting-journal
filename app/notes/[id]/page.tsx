import Link from "next/link";
import { notFound } from "next/navigation";

import { mockTastingNotes } from "@/features/tasting-notes/data/mockNotes";

type TastingNoteDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function TastingNoteDetailPage({
  params,
}: TastingNoteDetailPageProps) {
  const { id } = await params
  const note = mockTastingNotes.find((note) => note.id === id);

  if (!note) {
    notFound();
  }

  return (
    <main className="mx-auto min-h-screen max-w-2xl bg-stone-50 px-4 py-6">
      <Link
        href="/notes"
        className="text-sm text-stone-500 hover:text-stone-900"
      >
        ← Back to Notes
      </Link>

      <section className="mt-6 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
        <p className="text-sm text-stone-500">{note.category}</p>

        <h1 className="mt-2 text-3xl font-bold text-stone-900">
          {note.name}
        </h1>

        <p className="mt-3 text-amber-500">{"★".repeat(note.rating)}</p>

        <div className="mt-6 space-y-3 text-sm text-stone-700">
          <p>
            <span className="font-medium text-stone-900">Country:</span>{" "}
            {note.country}
          </p>

          <p>
            <span className="font-medium text-stone-900">Region:</span>{" "}
            {note.region}
          </p>

          <p>
            <span className="font-medium text-stone-900">Created:</span>{" "}
            {note.createdAt}
          </p>
        </div>
      </section>
    </main>
  );
}