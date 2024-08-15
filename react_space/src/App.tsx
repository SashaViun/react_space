import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from "./Header/Header";
import RocketCarousel from './RocketCarousel/RocketCarousel';
import RocketDetails from './RocketDetails/RocketDetails';
import CustomVideoPlayer from './VideoPlayer/VideoPlayer';
import Frame2 from './Frame2.png'
import Frame325 from './Frame 325.png'

function App() {
    return (
        <>
        <div>
            <Header />
            <div className="diveDeep">
                <img src={Frame2} alt="frame" className="frame"/>
            </div>

            <div className="title">
                OUR ROCKETS
            </div>
            
            <Router>
            <Routes>
                <Route path='/'element={
                    <div className='AppDiv'>
                      <RocketCarousel/>
                    </div>
                } />
            </Routes>
            <Routes>
                <Route path="/rocket/:rocketId" element={<RocketDetails />} />
            </Routes>
        </Router>

        <div>
            <img src={Frame325} alt="frame" className='launches'/>
        </div>

        <div className='about'>
            ABOUT US
        </div>
        <CustomVideoPlayer videoSrc="https://www.youtube.com/watch?v=921VbEMAwwY&t=1s" />
        </div>
        </>
    )
}

export default App