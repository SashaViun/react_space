import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from "./Header/Header";
import MultipleItems from './RocketCarousel/RocketCarousel';
import RocketDetails from './RocketDetails/RocketDetails';
import TeamSlider from './SliderComponent/SliderComponent';
import Frame2 from './Frame2.png'
import Frame325 from './Frame 325.png'

function App() {
    return (
        <>
        <div>
            <Header />


   
            
            <Router>
            <Routes>
                <Route path='/'element={

                  <div>

<div className="diveDeep">
                <img src={Frame2} alt="frame" className="frame"/>
            </div>
            
<div className="title">
                OUR ROCKETS
            </div>
                    <div className='AppDiv'>
                      <MultipleItems/>
                    </div>
                  </div>
                } />
            
            
                <Route path="/rocket/:rocketId" element={<RocketDetails />} />
            </Routes>
        </Router>

        <div>
            <img src={Frame325} alt="frame" className='launches'/>
        </div>

        <div className='about'>
            ABOUT US
        </div>
        <div className='video'>
        <iframe width="1321px" height="536px" src="https://www.youtube.com/embed/921VbEMAwwY?si=D16q75wSf7yGEoI9controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" style={{
        borderRadius: '40px',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        overflow: 'hidden',
      }}></iframe>
        </div>
    <div>
        
      <TeamSlider/>
    </div>
        </div>
        </>
    )
}

export default App