import { atom } from "recoil";

type Tour = {
  __typename?: "Rocket" | undefined;
  id?: string | null | undefined;
  title?: string | null | undefined;
  subtitle?: string | null | undefined;
  imagePath: string;
};

export const favourites = atom({
  key: "favourites",
  default: [] as Tour[],
});
