import React from 'react';
import './css/App.css';
import LandingPage from './Components/LandingPage';
import Catagory from './Components/CreateRoom/Catagory';
import CustomRoom from './Components/CreateRoom/CustomRoom';
import RoomFinal from './Components/CreateRoom/RoomFinal';
import {
  RecoilRoot
} from 'recoil';
import {
  BrowserRouter as Router,
  Switch,
  Route
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
