import React from "react";
import {Button, Form} from "react-bootstrap";
import axios from "axios";

export class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mail: "",
            username: "",
            passwort: "",
            message: ""
        }
    }

    handleNewAccount = (e) => {
        e.preventDefault()
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


    render() {
        console.log("Mail und P: " + this.state.mail + this.state.passwort);
        return(
            <Form onSubmit={this.handleNewAccount}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={this.state.mail}
                                  onChange={(e)=> this.setState({mail: e.target.value})} />
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
        )
    }
}