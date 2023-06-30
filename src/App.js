import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/home'
import Events from './pages/events'
import OurMission from './pages/ourMission'
import AboutUs from './pages/aboutUs'
import PreviousArtists from './pages/previousArtists'
import PreviousEvents from './pages/previousEvents'
import ArtistOfTheMonth from './pages/artistOfTheMonth'
import ContactUs from './pages/contactUs'



function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/events" element={<Events/>}/>
      <Route path="/ourmission" element={<OurMission/>}/>
      <Route path="/aboutus" element={<AboutUs/>}/>
      <Route path="/previousevents" element={<PreviousEvents/>}/>
      <Route path="/artistofthemonth" element={<ArtistOfTheMonth/>}/>
      <Route path="/previousartists" element={<PreviousArtists/>}/>
      <Route path="/contactus" element={<ContactUs/>}/>
    </Routes>

   <Events/>
   <OurMission/>
   <AboutUs/>
   <PreviousEvents/>
   <PreviousArtists/>
   <ContactUs/>
   </>
  );
}

export default App;
