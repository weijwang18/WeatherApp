import "./styles.css";
import Header from "./Header.js";
import Temperature from "./Temperature.js";
import Footer from "./Footer.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weatherapp">
          <Header />
          <Temperature />
          <Footer />
        </div>
      </div>
    </div>
  );
}
