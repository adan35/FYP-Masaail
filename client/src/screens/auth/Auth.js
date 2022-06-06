import { Forgot, Home, Signin, OTP, SignUp } from "./components";
import { Switch, Route } from "react-router-dom";
import "./auth.css";
import Reset from "./components/Reset";

const Auth = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/auth" component={Signin} />
                <Route exact path="/auth/home" component={Home} />
                <Route exact path="/auth/forgot" component={Forgot} />
                <Route exact path="/auth/reset" component={Reset} />
                <Route exact path="/auth/otp" component={OTP} />
                <Route exact path="/auth/signup" component={SignUp} />
                <Route exact path="/auth/signin" component={Signin} />
            </Switch>
        </div>
    );
}

export default Auth;