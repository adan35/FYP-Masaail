import React from "react";
import { Switch, Route } from "react-router-dom";

import { Auth, Admin, Investor, Reviewer } from "./screens";


function App() {
  return (
    <div>
      app works < br />
      <Switch>
        <Route exact path="/auth">
          <Auth />
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
        <Route exact path="/investor">
          <Investor />
        </Route>
        <Route exact path="/reviewer">
          <Reviewer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
