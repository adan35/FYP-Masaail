import React from "react";
import { Switch, Route } from "react-router-dom";

import { Auth, Admin, Investor, Reviewer } from "./screens";


function App() {
  return (
    <div>
      app works < br />
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/admin" component={Admin} />
        <Route path="/investor" component={Investor} />
        <Route path="/reviewer" component={Reviewer} />
      </Switch>
    </div>
  );
}

export default App;
