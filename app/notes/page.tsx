import Link from "next/link";
import { CategoryFilter } from "@/features/tasting-notes/components/CategoryFilter";
import { NoteCard } from "@/features/tasting-notes/components/NoteCard";
import { mockNotes } from "@/features/tasting-notes/data/mockNotes";

export default function NotesPage() {
  return (
    <main className="mx-auto min-h-screen max-w-2xl bg-stone-50 px-4 py-6">
      <header className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm text-stone-500">Tasting Journal</p>
          <h1 className="text-2xl font-bold text-stone-900">Notes</h1>
        </div>

        <Link
          href="/notes/create"
          className="rounded-full bg-stone-900 px-4 py-2 text-sm font-medium text-white"
        >
          + Add
        </Link>
      </header>

      <CategoryFilter />

      <section className="space-y-3">
        {mockNotes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </section>
    </main>
  );
}