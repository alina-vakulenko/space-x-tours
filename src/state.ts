import { atom } from "recoil";

export type Tour = {
  id: string;
  title: string;
  subtitle: string;
  imagePath: string;
};

const savedTours = localStorage.getItem("favTours");

export const favourites = atom({
  key: "favourites",
  default: savedTours ? (JSON.parse(savedTours) as Tour[]) : ([] as Tour[]),
});
