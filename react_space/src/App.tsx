import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from "./Header/Header";
import MultipleItems from './RocketCarousel/RocketCarousel';
import RocketDetails from './RocketDetails/RocketDetails';
import AstronautCarousel from './AstronautCard/AstonautCarousel';
import Frame2 from './Frame2.png'
import Frame325 from './Frame 325.png'

const astronauts = [
    {
      image: 'path-to-image1',
      name: 'Dave Johnson',
      role: 'St. Mechanic',
    },
    {
      image: 'path-to-image2',
      name: 'Jane Doe',
      role: 'Engineer',
    },
    // Add more astronauts as needed
  ];

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
                      <MultipleItems/>
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
        <div className='video'>
        <iframe width="1321px" height="536px" src="https://www.youtube.com/embed/921VbEMAwwY?si=D16q75wSf7yGEoI9" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" style={{
        borderRadius: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        overflow: 'hidden',
      }}></iframe>
        </div>
    <div>
        <h1>TEAM</h1>
      <AstronautCarousel astronauts={astronauts} />
    </div>
        </div>
        </>
    )
}

export default App