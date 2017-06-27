import React, {PropTypes, Component} from "react";
import Button from "./../_components/buttons/Button";
import Input from "./../_components/inputs/Input";
import Paper from "./../_components/papers/Paper";


class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: null,
            password: null
        };
    }

    onLoginBtnClicked() {
        console.log(`Perform login with: username=[${this.state.userName}] & password=[${this.state.password}]`);
    }

    render() {
        return <Paper className="login-page">
            <Input link={{context: this, name: "userName"}}
                   className="login-page__input"
                   placeholder="Username"
            />
            <Input link={{context: this, name: "password"}}
                   type="password"
                   className="login-page__input"
                   placeholder="Password"
            />

            <Button onClick={::this.onLoginBtnClicked} className="login-page__login-btn">
                Login
            </Button>
        </Paper>
    }
}

export default LoginPage;
