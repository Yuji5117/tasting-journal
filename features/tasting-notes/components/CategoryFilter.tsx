import { categories } from "../constants/categories";

export function CategoryFilter() {
  return (
    <div className="mb-5 flex gap-2 overflow-x-auto pb-1">
      {categories.map((category, index) => {
        const isActive = index === 0;

        return (
          <button
            key={category.value}
            className={
              isActive
                ? "rounded-full bg-rose-900 px-4 py-2 text-sm font-medium text-white"
                : "rounded-full border border-stone-200 bg-white px-4 py-2 text-sm text-stone-700"
            }
          >
            {category.label}
          </button>
        );
      })}
    </div>
  );
}