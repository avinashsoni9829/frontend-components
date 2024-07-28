
import './App.css';
import { DropDown } from './components/DropDown';
import { ImageAnimationHover } from './components/imageHoverAnimation';
import { SmoothNavBarScroll } from './components/SmoothNavBarScroll';
import { TextAnimationComponent } from './components/textAnimation';

function App() {
  return (
    <div className="App">
       {/* <TextAnimationComponent/> */}
       {/* <ImageAnimationHover/> */}
       {/* <DropDown/> */}
       <SmoothNavBarScroll/>
    </div>
  );
}

export default App;
