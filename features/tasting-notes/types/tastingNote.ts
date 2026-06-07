import { TastingNoteCategory } from "../constants/categories";

export type TastingNote = {
  id: string;
  name: string;
  category: TastingNoteCategory;
  country: string;
  region: string;
  rating: number;
  createdAt: string;
  imageUrl: string;
};