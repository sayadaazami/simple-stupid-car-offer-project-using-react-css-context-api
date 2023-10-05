import CarList from "../../components/car-list";
import SearchBar from "../../components/search-bar";
import "./styles.css";

export default function HomeView() {
  return (
    <section className="HomeView">
      <SearchBar />
      <CarList />
    </section>
  );
}
