import { useAppContext } from "../../context/context";
import "./styles.css";
import { CarNameFilterProps } from "./types";

export default function CarNameFilter({ className }: CarNameFilterProps) {
  const { search, setSearch } = useAppContext();

  return (
    <input
        className={`CarNameFilter transition ${className}`}
        value={search}
        placeholder="Enter the car name"
        onChange={(e) => setSearch(e.target.value)}
      />
  );
}
