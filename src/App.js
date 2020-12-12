import React from 'react';
import './css/App.css';
import MainView from './Components/MainView.js';
import LandingPage from './Components/LandingPage';
import Catagory from './Components/CreateRoom/Catagory';
import CustomRoom from './Components/CreateRoom/CustomRoom';
import RoomFinal from './Components/CreateRoom/RoomFinal';
import qs from 'qs';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  useParams
} from "react-router-dom";

function App() { 
  return (
    //need to set up router
    <RecoilRoot>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/catagory" component={Catagory} />
          <Route path="/custom" component={CustomRoom} />
          <Route path="/roomfinal" component={RoomFinal} /> 
        </Switch>
      </Router>
    </RecoilRoot>

  );
}

export default App;
