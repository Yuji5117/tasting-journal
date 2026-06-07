import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { mockTastingNotes } from "@/features/tasting-notes/data/mockNotes";

type NoteDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function NoteDetailPage({ params }: NoteDetailPageProps) {
  const { id } = await params;
  const note = mockTastingNotes.find((note) => note.id === id);

  if (!note) notFound();

  return (
    <main className="mx-auto min-h-screen max-w-md bg-white pb-6">
      <header className="flex h-20 items-center justify-between px-6">
        <Link href="/notes" className="text-3xl text-stone-900">
          ‹
        </Link>
        <button className="text-2xl text-stone-900">•••</button>
      </header>

      <div className="relative h-64 w-full bg-stone-200">
        <Image
          src={note.imageUrl}
          alt={note.name}
          fill
          className="object-cover"
          priority
        />

        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          <span className="h-2 w-2 rounded-full bg-white" />
          <span className="h-2 w-2 rounded-full bg-white/50" />
          <span className="h-2 w-2 rounded-full bg-white/50" />
        </div>
      </div>

      <section className="border-b border-stone-200 px-6 py-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-stone-900">{note.name}</h1>
            <p className="mt-2 text-sm font-medium text-stone-600">
              🍷 ワイン ｜ 赤
            </p>
          </div>

          <div className="text-right">
            <p className="text-xl text-amber-500">
              {"★".repeat(note.rating)}
              <span className="text-stone-300">
                {"★".repeat(5 - note.rating)}
              </span>
            </p>
            <p className="mt-2 text-sm text-stone-500">{note.createdAt}</p>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 px-6 py-5">
        <dl className="grid grid-cols-[90px_1fr] gap-y-2 text-sm">
          <dt className="font-semibold text-stone-800">生産者</dt>
          <dd className="text-stone-700">Penfolds</dd>

          <dt className="font-semibold text-stone-800">産地</dt>
          <dd className="text-stone-700">
            {note.country} ｜ {note.region}
          </dd>

          <dt className="font-semibold text-stone-800">品種</dt>
          <dd className="text-stone-700">Cabernet Sauvignon, Shiraz</dd>

          <dt className="font-semibold text-stone-800">価格</dt>
          <dd className="text-stone-700">AUD 65</dd>
        </dl>
      </section>

      <section className="space-y-5 px-6 py-5">
        <DetailText title="香り">
          ブラックベリー、カシス、バニラ、チョコレートの香り。
        </DetailText>

        <DetailText title="味わい">
          フルボディで濃厚。タンニンはしっかりしているが滑らか。
          ブラックベリーの果実味と樽の風味が調和。
        </DetailText>

        <DetailText title="ペアリング">
          ステーキ、ラムチョップ、熟成チーズとよく合う。
        </DetailText>

        <DetailText title="メモ">
          オーストラリアらしい力強さ。コスパ良い。また飲みたい。
        </DetailText>
      </section>

      <section className="grid grid-cols-2 gap-4 px-6">
        <Link
          href={`/notes/${note.id}/edit`}
          className="rounded-xl border border-rose-900 py-3 text-center font-semibold text-rose-900"
        >
          編集する
        </Link>

        <button className="rounded-xl bg-rose-900 py-3 font-semibold text-white">
          削除する
        </button>
      </section>
    </main>
  );
}

function DetailText({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="font-bold text-stone-900">{title}</h2>
      <p className="mt-1 leading-relaxed text-stone-800">{children}</p>
    </div>
  );
}