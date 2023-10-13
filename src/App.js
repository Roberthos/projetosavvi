import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Nav from "./components/nav/nav";
import Body from "./components/body/body";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="main">
      <Nav />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
