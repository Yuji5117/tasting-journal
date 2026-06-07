import { categories } from "../constants/categories";

export function CategoryFilter() {
  return (
    <div className="mb-4 flex gap-2 overflow-x-auto">
      {categories.map((category) => (
        <button
          key={category.value}
          className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm text-stone-700"
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}