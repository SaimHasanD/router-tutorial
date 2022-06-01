import './App.css';
import Home from './component/Home/Home'
import Friends from './component/Friends/Friends'
import About from './component/About/About'
import NotFound from './component/NotFound/NotFound'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header/Header';
import FriendDetails from './component/FriendDetails/FriendDetails';
import Welcome from './component/Welcome/Welcome';
import GetOut from './component/GetOut/GetOut';

function App() {

  return (
    <div className="App">
      <Router>

        <Header></Header>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="home" element={<Home />}>
{/*---------------------------------IF FIXED TO PARENTS ROUND THAN USE INDEX-------------------------------------*/}
            {/* <Route index element={<Welcome/>}></Route> */}
            <Route path="welcome" element={<Welcome/>}></Route>
            <Route path="getout" element={<GetOut/>}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
          <Route path="friends" element={<Friends />}></Route>
          <Route path="friend/:friendId" element={<FriendDetails />}></Route>
          <Route path="About" element={<About />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>

      </Router>

    </div>

  );

}

export default App;

