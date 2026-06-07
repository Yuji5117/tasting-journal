export type TastingNote = {
  id: string;
  name: string;
  category: "wine" | "sake" | "beer" | "shochu" | "other";
  country: string;
  region: string;
  rating: number;
  createdAt: string;
};