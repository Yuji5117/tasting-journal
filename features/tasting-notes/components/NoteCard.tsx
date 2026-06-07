import Link from "next/link";
import { TastingNote } from "../types/tastingNote";

type NoteCardProps = {
  note: TastingNote;
};

export function NoteCard({ note }: NoteCardProps) {
  return (
    <Link
      href={`/notes/${note.id}`}
      className="block rounded-2xl border border-stone-200 bg-white p-4 shadow-sm"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="font-semibold text-stone-900">{note.name}</h2>
          <p className="mt-1 text-sm text-stone-500">
            {note.category} / {note.country}
          </p>
          <p className="text-sm text-stone-500">{note.region}</p>
        </div>

        <div className="text-right">
          <p className="text-amber-500">{"★".repeat(note.rating)}</p>
          <p className="mt-1 text-xs text-stone-400">{note.createdAt}</p>
        </div>
      </div>
    </Link>
  );
}