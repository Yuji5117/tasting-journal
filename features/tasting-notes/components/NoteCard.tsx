import Link from "next/link";

import { TastingNote } from "../types/tastingNote";

type TastingNoteCardProps = {
  note: TastingNote;
};

export function TastingNoteCard({ note }: TastingNoteCardProps) {
  return (
    <Link
      href={`/notes/${note.id}`}
      className="flex gap-4 rounded-2xl border border-stone-200 bg-white p-3 shadow-sm transition hover:shadow-md"
    >
      <div className="h-28 w-28 shrink-0 overflow-hidden rounded-xl bg-stone-200">
        <img
          src={note.imageUrl}
          alt={note.name}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between py-1">
        <div>
          <h2 className="line-clamp-1 font-semibold text-stone-900">
            {note.name}
          </h2>

          <p className="mt-1 text-sm text-stone-600">
            {note.category} / {note.country}
          </p>

          <p className="text-sm text-stone-500">{note.region}</p>
        </div>

        <div className="flex items-end justify-between">
          <p className="text-amber-500">
            {"★".repeat(note.rating)}
            <span className="text-stone-300">
              {"★".repeat(5 - note.rating)}
            </span>
          </p>

          <p className="text-xs text-stone-400">{note.createdAt}</p>
        </div>
      </div>
    </Link>
  );
}