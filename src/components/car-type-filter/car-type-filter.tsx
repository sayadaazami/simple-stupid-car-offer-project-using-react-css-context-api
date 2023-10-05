import { useAppContext } from "../../context/context";
import { CarType } from "../../types";
import "./styles.css";
import { CarTypeFilterItemProps, CarTypeFilterProps } from "./types";

function CarTypeFilterItem({ type }: CarTypeFilterItemProps) {
  const { type: current, setType } = useAppContext();

  return (
    <button
      className={type === current ? "selected transition" : "transition"}
      onClick={() => setType(type)}
    >
      {type || "all"}
    </button>
  );
}

export default function CarTypeFilter({ className }: CarTypeFilterProps) {
  return (
    <section className={`CarTypeFilter ${className} ButtonGroup`}>
      <CarTypeFilterItem />

      {Object.values(CarType).map((type) => (
        <CarTypeFilterItem type={type} />
      ))}
    </section>
  );
}
