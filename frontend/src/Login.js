import React from "react";
import axios from "axios";
import history from "./Router/history";
import {Form, Button} from "react-bootstrap";
import Nav from "react-bootstrap";
import {Link} from "react-router-dom";


export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mail: "",
            username: "",
            passwort: "",
            message: ""
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit " + this.state.mail + this.state.passwort);

        axios({
            method: "post",
            url: "http://127.0.0.1:8080/api/auth/signin",
            data: {
                username: this.state.username,
                password: this.state.passwort
            }
        }).then(response => {
            if (response) {
                document.cookie = response.data.accessToken;
                localStorage.setItem("token", response.data.accessToken);
                localStorage.setItem("name", this.state.username);
                history.push({
                    pathname: "/",
                    search: `parameter=${response.data.accessToken}`,
                    state: {value: "this.state.value"}
                });
                window.location.reload(false);

                console.log("Response: " + response.data.accessToken);
                console.log("Then Worked");

            }
        });
    }

    handleNewAccount = () => {
        axios({
            method: "post",
            url: "http:///localhost:8080/api/auth/signup",
            data: {
                id: 5,
                username: this.state.username,
                email: this.state.mail,
                password: this.state.passwort,
                role: ["mod", "user"]
            }
        }).then(response => {
            this.setState({message: response.data.message});
            console.log(response.data);
        })
    }

    handleUsernameChange = (event) =>{
        this.setState({username: event.target.value});
    }



    handleChange = (event) => {
        this.setState({mail: event.target.value}); //Wird Probleme geben
    }

    handlePasswordChange = (event) => {
        this.setState({passwort: event.target.value});
    }

    render() {
        console.log("Mail und P: " + this.state.mail + this.state.passwort);
        return (
            <div >
                <h1>Login</h1>

                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicUserName">
                        <Form.Label>User name</Form.Label>
                        <Form.Control type="username" placeholder="username" value={this.state.username}
                                      onChange={(e) => this.setState({username: e.target.value})}/>
                        <Form.Text className="text-muted">
                            Your username my be public.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={this.state.passwort}
                                      onChange={(e)=> this.setState({passwort: e.target.value})} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit" >
                        Submit
                    </Button>

                </Form>
                <Link to={"/register"}><p>Noch keinen Account?</p></Link>
                <div >

                    <label >
                        username
                    </label>
                    <input type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
                    <label >
                        Passwort
                    </label>
                    <input type="password" value={this.state.passwort}
                           onChange={this.handlePasswordChange}/>
                    <label >
                        E-mail
                    </label>
                    <input type="text" value={this.state.mail}
                           onChange={this.handleChange}/>
                    <input type="text" value={this.state.message}/>
                </div>

                <button onClick={this.handleSubmit}>
                    Login
                </button>
                <button onClick={this.handleNewAccount} >
                    Neuen Account erstellen
                </button>

            </div>
        )
    }
}