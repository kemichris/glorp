import { useEffect, useState } from "react";
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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };
    window.addEventListener("load", handleLoad);
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);


  return (
    <div className="App">
      {loading ? <Loading /> : (
        <>
          <header>
            <Navbar />
          </header>
          <main>
            <Topcontainer />
            <MarqueeBox />
            <About />
            <Tokenomics />
            <Roadmap />
          </main>
          <footer>
            <Footer />
          </footer>
        </>
      )}
    </div>
  );
}

export default App;
