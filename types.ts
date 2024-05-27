import { AppDispatch, RootState } from "@/Redux/store";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
export interface BublType {
  id?: string;
  title: string;
  desc: string;
  image: string;
  cost: string;
  ingredients: string[];
  count: string;
}
export interface Bubl {
  id: string;
  title: string;
  desc: string;
  image: string;
  cost: string;
  ingredients: string[];
  count: string;
}
export type searchProps = {
  [key: string]: string | undefined;
};
// type ingrType = {
//   id: number;
//   value: string;
// };

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
