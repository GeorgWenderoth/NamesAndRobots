import React from "react";
import {Button, Form} from "react-bootstrap";
import axios from "axios";

export class ResetPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mail: "",
            authcode: "",
            newPassword: ""

        }
    }


    handlePasswordReset= (e) => {
        e.preventDefault();
        console.log("passwordRest");
        axios({
            method: "post",
            url: "http:///localhost:8080/api/auth/resetpassword",
            data: {

                email: this.state.mail,

            }
        }).then(response => {
            this.setState({message: response.data.message});
            console.log(response.data);
        })
    }


    authorisateCode=(e)=>{
        e.preventDefault();
        axios({
            method: "post",
            url: "http:///localhost:8080/api/auth/resetpassword",
            data: {

                email: this.state.mail,

            }
        }).then(response => {
            this.setState({message: response.data.message});
            console.log(response.data);
        })
    }



    render() {
        return(
            <Form onSubmit={this.handlePasswordReset}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={this.state.mail}
                                  onChange={(e)=> this.setState({mail: e.target.value})} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Authorisation Code" value={this.state.authcode}
                                  onChange={(e)=> this.setState({passwort: e.target.value})} />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={this.state.passwort}
                                  onChange={(e)=> this.setState({passwort: e.target.value})} />
                </Form.Group>

                <Button variant="primary" type="submit" >
                    Submit
                </Button>

                </Form>
        )
    }

}