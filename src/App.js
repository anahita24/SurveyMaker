import Logo from './logo.png';
import './App.css';
import TakeSurvey from "./components/takesurvey";
import CreateSurvey from './components/createsurvey.js';
import Menu from './components/menu.js';
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react';
function App() {
const [squestions,setQuestions]=useState([]);

  return (<>
  <div className="col-sm-4">
    </div>
    <BrowserRouter>
    <Link to="/">
    <img alt="logo" src={Logo}/>
    </Link>
  
    <Switch>
    <Route path="/" component={Menu} exact/>
    <Route path="/createsurvey"  exact>
      <CreateSurvey squestions={squestions} setSquestion={setQuestions}></CreateSurvey>
    </Route>
      <Route path="/takesurvey"  exact>
        <TakeSurvey queston={squestions}></TakeSurvey>
        </Route>
      
    </Switch>
    </BrowserRouter>
    
    </>);
}

export default App;
