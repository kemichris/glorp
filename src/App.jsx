
import './App.css';
import { About } from './components/About';
import { MarqueeBox } from './components/MarqueeBox';
import { Navbar } from './components/Navbar';
import { Roadmap } from './components/Roadmap';
import { Tokenomics } from './components/Tokenomics';
import { Topcontainer } from './components/Topcontainer';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Topcontainer />
        <MarqueeBox/>
        <About />
        <Tokenomics/>
        <Roadmap/>
      </main>

    </div>
  );
}

export default App;
