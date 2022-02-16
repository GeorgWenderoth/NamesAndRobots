import React from "react";
import {Button, Form} from "react-bootstrap";
import axios from "axios";

export class ResetPassword extends React.Component {
    constructor(pros) {
        super(props);

    }

    handlePasswordReset= (e) => {
        e.preventDefault();
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
                <Button variant="primary" type="submit" >
                    Submit
                </Button>
                <Form/>
        )
    }
}