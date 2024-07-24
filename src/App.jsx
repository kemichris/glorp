import { useEffect } from "react";
import "./App.css";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Loading } from "./components/Loading";
import { MarqueeBox } from "./components/MarqueeBox";
import { Navbar } from "./components/Navbar";
import { Roadmap } from "./components/Roadmap";
import { Tokenomics } from "./components/Tokenomics";
import { Topcontainer } from "./components/Topcontainer";

function App() {
  useEffect(() => {
    const loadingDiv = document.querySelector(".loading");

    window.addEventListener("load", () => {
      if (loadingDiv) {
        loadingDiv.style.display = "none";
      }
    });
  });
  
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Loading />
        <Topcontainer />
        <MarqueeBox />
        <About />
        <Tokenomics />
        <Roadmap />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
