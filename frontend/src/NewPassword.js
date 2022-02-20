import React from "react";
import {Form} from "react-bootstrap";

export class NewPassword extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <>
                <p>New Password</p>

                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={this.state.mail}
                                      onChange={(e)=> this.setState({mail: e.target.value})}/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                </Form>



            </>
        )
    }
}