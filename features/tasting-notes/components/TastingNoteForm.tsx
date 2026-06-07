"use client";

import { useState } from "react";

import { categories } from "../constants/categories";

export function TastingNoteForm() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("wine");
  const [producer, setProducer] = useState("");
  const [area, setArea] = useState("");
  const [variety, setVariety] = useState("");
  const [tastedAt, setTastedAt] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState(4);
  const [aroma, setAroma] = useState("");
  const [taste, setTaste] = useState("");
  const [pairing, setPairing] = useState("");
  const [memo, setMemo] = useState("");

  const handleSubmit: React.ComponentProps<"form">["onSubmit"] = (event) => {
    event.preventDefault();

    console.log({
      name,
      category,
      producer,
      area,
      variety,
      tastedAt,
      price,
      rating,
      aroma,
      taste,
      pairing,
      memo,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <section>
        <p className="mb-2 text-sm font-semibold text-stone-700">
          写真を追加 <span className="text-stone-400">（最大5枚）</span>
        </p>

        <div className="flex gap-3 overflow-x-auto">
          <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-stone-200">
            <img
              src="/images/wine-red.jpg"
              alt="wine bottle"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-stone-200">
            <img
              src="/images/wine-glass.jpg"
              alt="wine glass"
              className="h-full w-full object-cover"
            />
          </div>

          <button
            type="button"
            className="flex h-24 w-24 shrink-0 items-center justify-center rounded-xl border border-dashed border-stone-300 bg-white text-3xl text-stone-500"
          >
            +
          </button>
        </div>
      </section>

      <section className="space-y-3">
        <FormRow label="種類">
          <select
            className="h-10 w-full rounded-lg border border-stone-200 bg-white px-3 text-sm text-stone-900"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </FormRow>

        <FormRow label="名前">
          <Input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Penfolds Bin 389"
          />
        </FormRow>

        <FormRow label="生産者">
          <Input
            value={producer}
            onChange={(event) => setProducer(event.target.value)}
            placeholder="Penfolds"
          />
        </FormRow>

        <FormRow label="産地">
          <Input
            value={area}
            onChange={(event) => setArea(event.target.value)}
            placeholder="Australia｜South Australia"
          />
        </FormRow>

        <FormRow label="品種">
          <Input
            value={variety}
            onChange={(event) => setVariety(event.target.value)}
            placeholder="Cabernet Sauvignon, Shiraz"
          />
        </FormRow>

        <FormRow label="飲んだ日">
          <Input
            value={tastedAt}
            onChange={(event) => setTastedAt(event.target.value)}
            placeholder="2024/06/07"
          />
        </FormRow>

        <FormRow label="価格">
          <Input
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            placeholder="AUD 65"
          />
        </FormRow>

        <FormRow label="評価">
          <div className="flex gap-1 text-3xl">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setRating(value)}
                className={
                  value <= rating ? "text-amber-500" : "text-stone-300"
                }
              >
                ★
              </button>
            ))}
          </div>
        </FormRow>
      </section>

      <section className="space-y-3">
        <TextArea
          label="香り"
          value={aroma}
          onChange={(event) => setAroma(event.target.value)}
          placeholder="ブラックベリー、カシス、バニラ、チョコレートの香り。"
        />

        <TextArea
          label="味わい"
          value={taste}
          onChange={(event) => setTaste(event.target.value)}
          placeholder="フルボディで濃厚。タンニンはしっかりしているが滑らか。"
        />

        <TextArea
          label="ペアリング"
          value={pairing}
          onChange={(event) => setPairing(event.target.value)}
          placeholder="ステーキ、ラムチョップ、熟成チーズとよく合う。"
        />

        <TextArea
          label="メモ"
          value={memo}
          onChange={(event) => setMemo(event.target.value)}
          placeholder="オーストラリアらしい力強さ。コスパ良い。また飲みたい。"
        />
      </section>
    </form>
  );
}

function FormRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[90px_1fr] items-center gap-3">
      <label className="text-sm font-semibold text-stone-800">{label}</label>
      {children}
    </div>
  );
}

function Input(props: React.ComponentProps<"input">) {
  return (
    <input
      {...props}
      className="h-10 w-full rounded-lg border border-stone-200 bg-white px-3 text-sm text-stone-900 outline-none focus:border-rose-900"
    />
  );
}

function TextArea({
  label,
  ...props
}: React.ComponentProps<"textarea"> & { label: string }) {
  return (
    <label className="block rounded-xl border border-stone-200 bg-white p-3">
      <span className="mb-1 block text-sm font-bold text-stone-900">
        {label}
      </span>
      <textarea
        {...props}
        className="min-h-20 w-full resize-none text-sm leading-relaxed text-stone-900 outline-none"
      />
    </label>
  );
}