import { useAppContext } from "../../context/context";
import { CarColor } from "../../types";
import "./styles.css";
import { CarColorFilterItemProps, CarColorFilterProps } from "./types";

function CarColorFilterItem({ color }: CarColorFilterItemProps) {
  const { color: current, setColor } = useAppContext();

  return (
    <button
      className={color === current ? "selected transition" : "transition"}
      onClick={() => setColor(color)}
    >
      {color || "all"}

      <div style={{ background: color }} />
    </button>
  );
}

export default function CarColorFilter({ className }: CarColorFilterProps) {
  return (
    <section className={`CarColorFilter ${className} ButtonGroup`}>
      <CarColorFilterItem />
      {Object.values(CarColor).map((color) => (
        <CarColorFilterItem color={color} />
      ))}
    </section>
  );
}
