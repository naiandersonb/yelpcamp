import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CampgroundDetails } from './pages/CampgroundDetails';
import { Comment } from './pages/Comment';
import { CreateAccount } from './pages/CreateAccount';
import { Home } from './pages/Home';
import { LandingPage } from './pages/LandingPage';
import { Login } from './pages/Login';
import { NewCampground } from './pages/NewCampground';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/create-account' element={<CreateAccount/>}/>
        <Route path='/campground' element={<CampgroundDetails/>}/>
        <Route path='/comment' element={<Comment/>}/>
        <Route path='/new-campground' element={<NewCampground/>}/>
      </Routes>
    </Router>
  );
}

export default App;
