import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Homepage from './pages/homepage';
import LuxuryTrainsPage from './pages/luxurytrainspage';
import Packages from './pages/packages';
import CreatePackagepage from './pages/createpackagepage';
import LoginPage from './pages/loginpage';
import AllUser from './pages/allUser';
import Pilgrimpage from './pages/pilgrimpage';
import ProfilePage from './pages/profilepage';
import Allbookingpage from './pages/allbookingpage';
import TourDetailPage from './pages/tourdetailspage';
import SouthIndiaPage from './pages/southindiapage';
import EastIndiaPage from './pages/eastindiapage';
import WestIndiaPage from './pages/westindiapage';
import CentralIndiaPage from './pages/centralindiapage';




function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path="/luxurytrains/:name" element={<LuxuryTrainsPage/>}/>
      <Route path='/createpackage' element={<CreatePackagepage/>}/>
      <Route path="/updatepackage/:_id" element={<CreatePackagepage />} />
      <Route path='/northindia' element={<Packages/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/alluser'element={<AllUser/>}/>
      <Route path='/allPackage' element={<Pilgrimpage/>}/>
      <Route path='/profile' element={<ProfilePage/>}/>
      <Route path='/allbooking' element={<Allbookingpage/>}/>
      <Route path='/tourdetails/${pkg._id}' element={<TourDetailPage/>} />
      <Route path='/southindia'element={<SouthIndiaPage/>}/>
      <Route path='/eastindia'element={<EastIndiaPage/>}/>
      <Route path='/westindia' element={<WestIndiaPage/>}/>
      <Route path='/centralindia' element={<CentralIndiaPage/>}/>
      
      
    </Routes>
    </BrowserRouter>
   
    </>
  );
}

export default App;
