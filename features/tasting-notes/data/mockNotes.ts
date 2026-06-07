import { TastingNote } from "../types/tastingNote";

export const mockTastingNotes: TastingNote[] = [
  {
    id: "1",
    name: "Penfolds Bin 389",
    category: "wine",
    country: "Australia",
    region: "South Australia",
    rating: 4,
    createdAt: "2024/06/07",
    imageUrl: "/images/wine-red.jpg",
  },
  {
    id: "2",
    name: "獺祭 純米大吟醸 45",
    category: "sake",
    country: "Japan",
    region: "Yamaguchi",
    rating: 5,
    createdAt: "2024/06/05",
    imageUrl: "/images/sake.jpg",
  },
  {
    id: "3",
    name: "Cloudy Bay Sauvignon Blanc",
    category: "wine",
    country: "New Zealand",
    region: "Marlborough",
    rating: 4,
    createdAt: "2024/06/02",
    imageUrl: "/images/wine-white.jpg",
  },
];