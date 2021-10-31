import React from "react"
import { Switch, Route } from 'react-router-dom';
import FrontPage from "./Pages/FrontPage";
import Navbar from "./Navbar/Navbar"
import Login from "./Pages/Login";

function App() {
  return (
    <div className="App">
      
        <div>
            <Navbar/>
        </div>
      
        <div>

        
          <Switch>
            <Route path ='/' exact component={FrontPage}/>
            <Route path ='/home' exact component={FrontPage}/>
            <Route path ='/stslogin' exact component={Login}/>

          </Switch>

               
         

        
      </div>
    </div>
  );
}

export default App;
