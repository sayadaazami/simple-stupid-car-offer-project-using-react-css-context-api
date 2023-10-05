import CarColorFilter from "../car-color-filter/car-color-filter";
import CarNameFilter from "../car-name-filter";
import CarTypeFilter from "../car-type-filter/car-type-filter";
import "./styles.css";
import { SearchBarProps } from "./types";

export default function SearchBar({ className }: SearchBarProps) {
  return (
    <section className={`SearchBar ${className}`}>
      <CarNameFilter />
      <CarColorFilter />
      <CarTypeFilter />
    </section>
  );
}
