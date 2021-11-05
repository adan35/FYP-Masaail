import { Forgot, Home, Login, OTP, SignUp } from "./components";
import { Switch, Route } from "react-router-dom";
import "./auth.css";

const Auth = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/auth" component={Login} />
                <Route exact path="/auth/home" component={Home} />
                <Route exact path="/auth/forgot" component={Forgot} />
                <Route exact path="/auth/otp" component={OTP} />
                <Route exact path="/auth/signup" component={SignUp} />
            </Switch>
        </div>
    );
}

export default Auth;