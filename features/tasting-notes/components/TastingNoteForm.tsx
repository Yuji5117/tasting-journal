"use client";

import { useState } from "react";
import { TastingNoteCategory } from "../constants/categories";

export function TastingNoteForm() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState<TastingNoteCategory>("wine");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [grapeOrRice, setGrapeOrRice] = useState("");
  const [rating, setRating] = useState(3);
  const [aroma, setAroma] = useState("");
  const [taste, setTaste] = useState("");
  const [pairing, setPairing] = useState("");
  const [memo, setMemo] = useState("");

  const handleSubmit: React.ComponentProps<"form">["onSubmit"] = (event) => {
    event.preventDefault();

    console.log({
      name,
      category,
      country,
      region,
      grapeOrRice,
      rating,
      aroma,
      taste,
      pairing,
      memo,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="mb-1 block text-sm font-medium text-stone-700">
          名前
        </label>
        <input
          className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-stone-900"
          placeholder="例：Penfolds Bin 389"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-stone-700">
          種類
        </label>
        <select
          className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-stone-900"
          value={category}
          onChange={(event) =>
            setCategory(event.target.value as TastingNoteCategory)
          }
        >
          <option value="wine">Wine</option>
          <option value="sake">Sake</option>
          <option value="beer">Beer</option>
          <option value="shochu">Shochu</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-stone-700">
          国
        </label>
        <input
          className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-stone-900"
          placeholder="例：Australia"
          value={country}
          onChange={(event) => setCountry(event.target.value)}
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-stone-700">
          地域
        </label>
        <input
          className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-stone-900"
          placeholder="例：South Australia"
          value={region}
          onChange={(event) => setRegion(event.target.value)}
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-stone-700">
          品種 / 米 / 原料
        </label>
        <input
          className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-stone-900"
          placeholder="例：Shiraz, 山田錦"
          value={grapeOrRice}
          onChange={(event) => setGrapeOrRice(event.target.value)}
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-stone-700">
          評価
        </label>
        <select
          className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-stone-900"
          value={rating}
          onChange={(event) => setRating(Number(event.target.value))}
        >
          {[1, 2, 3, 4, 5].map((value) => (
            <option key={value} value={value}>
              {value} stars
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-stone-700">
          香り
        </label>
        <textarea
          className="min-h-24 w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-stone-900"
          placeholder="例：ブラックベリー、バニラ、スパイス"
          value={aroma}
          onChange={(event) => setAroma(event.target.value)}
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-stone-700">
          味わい
        </label>
        <textarea
          className="min-h-24 w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-stone-900"
          placeholder="例：果実味が強く、タンニンはしっかり"
          value={taste}
          onChange={(event) => setTaste(event.target.value)}
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-stone-700">
          ペアリング
        </label>
        <textarea
          className="min-h-20 w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-stone-900"
          placeholder="例：ステーキ、ラム、焼き鳥"
          value={pairing}
          onChange={(event) => setPairing(event.target.value)}
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-stone-700">
          メモ
        </label>
        <textarea
          className="min-h-24 w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-stone-900"
          placeholder="自由メモ"
          value={memo}
          onChange={(event) => setMemo(event.target.value)}
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-xl bg-stone-900 px-4 py-3 font-medium text-white"
      >
        保存する
      </button>
    </form>
  );
}