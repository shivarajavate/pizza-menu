import Header from "./Header";
import Menu from "./Menu";
import pizzasList from "../data";
import Footer from "./Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu pizzasList={pizzasList} />
      <Footer />
    </div>
  );
}

export default App;
