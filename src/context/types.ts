import { Car, CarColor, CarType } from "../types";

export type ContextData = {
  loading: boolean;
  setLoading: (value: boolean) => void;
  error?: string;
  setError: (value?: string) => void;
  search: string;
  setSearch: (value: string) => void;
  type?: CarType;
  setType: (type?: CarType) => void;
  color?: CarColor;
  setColor: (color?: CarColor) => void;
  items: Car[];
  fetchItems: () => void;
  filteredItems: Car[];
};
