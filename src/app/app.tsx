import Layout from "../components/layout";
import { AppProvider } from "../context";
import HomeView from "../views/home";

export default function App() {
  return (
    <Layout title="Car Offer">
      <AppProvider>
        <HomeView />
      </AppProvider>
    </Layout>
  );
}
