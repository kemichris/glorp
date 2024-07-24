
import { useEffect } from 'react';
import './App.css';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { Loading } from './components/Loading';
import { MarqueeBox } from './components/MarqueeBox';
import { Navbar } from './components/Navbar';
import { Roadmap } from './components/Roadmap';
import { Tokenomics } from './components/Tokenomics';
import { Topcontainer } from './components/Topcontainer';

function App() {

  // const [mediaLoaded, setMediaLoaded] = useState(false);

  useEffect( ()=> {
    // const images = document.querySelectorAll("img");
    // const videos = document.querySelectorAll("video");
    // const totalMedia = images.length + videos.length;

    const loadingDiv = document.querySelector(".loading");

    window.addEventListener("load", ()=> {
      if (loadingDiv) {
        loadingDiv.style.display ="none";
      }
    } )

    // let loadedCount = 0;

    // images.forEach((img) => {
    //   img.onload = () => {
    //     loadedCount++;
    //     if (loadedCount === totalMedia) {
    //       setMediaLoaded(true);
          
    //     }
    //   }
    // })

    // videos.forEach((video) => {
    //   video.onload = () => {
    //     loadedCount++;
    //     if (loadedCount === totalMedia) {
    //       setMediaLoaded(true);
          
    //     }
    //   }
    // })

    // if (!mediaLoaded) {
      

    //   loadingDiv.style.display ="none";
      
    // }

  })
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Loading />
        <Topcontainer />
        <MarqueeBox/>
        <About />
        <Tokenomics/>
        <Roadmap/>
      </main>
      <footer>
        <Footer/>
      </footer>

    </div>
  );
}

export default App;
