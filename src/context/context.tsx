import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { browseCars } from "../api/cars";
import { Car, CarColor, CarType } from "../types";
import { ContextData } from "./types";

const context = createContext({} as ContextData);
const { Provider } = context;

export const useAppContext = () => useContext(context);

export const AppProvider = ({ children }: PropsWithChildren) => {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [error, setError] = useState<string | undefined>();
  const [type, setType] = useState<CarType | undefined>();
  const [color, setColor] = useState<CarColor | undefined>();
  const [items, setItems] = useState<Car[]>([]);
  const filteredItems = items.filter((x) => {
    let isOk = true;
    if (type) isOk = x.type === type;
    if (color) isOk &&= x.color === color;
    if (search) isOk &&= x.name.toLowerCase().includes(search.toLowerCase());
    return isOk;
  });

  const fetchItems = () => {
    browseCars()
      .then((response) => {
        setItems(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message || "unknown error");
      });
  };

  useEffect(fetchItems, []);

  return (
    <Provider
      value={{
        loading,
        setLoading,
        error,
        setError,
        search,
        setSearch,
        type,
        setType,
        color,
        setColor,
        items,
        fetchItems,
        filteredItems,
      }}
    >
      {children}
    </Provider>
  );
};
