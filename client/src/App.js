import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Auth, Admin, Investor, Reviewer } from "./screens";
import Chat from "./screens/chat/Chat";


function App() {
  return (
    <div>
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/admin" component={Admin} />
        <Route path="/investor" component={Investor} />
        <Route path="/reviewer" component={Reviewer} />
        <Route path="/chat" component={Chat} />
        <Route path="/">
          <Redirect to="/auth/home" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
