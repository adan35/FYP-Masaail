import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Auth from './screens/auth/Auth';
import Admin  from './screens/admin/Admin';
import Investor from './screens/investor/Investor';
import Reviewer from "./screens/reviewer/Reviewer";


function App() {
  return (
    <>
    <Router>
      app works  <br/>
      <Switch>
        <Route path="/auth">
          <Auth />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/investor">
          <Investor />
        </Route>
        <Route path="/reviewer">
          <Reviewer />
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
