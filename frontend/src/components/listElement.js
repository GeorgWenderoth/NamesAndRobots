import React, {useState} from "react";
import {Col, Row, Card, Button, Modal, Image} from "react-bootstrap";


export function ListElement(props){

   /*const getPicktures = () => {
       var a = axios({
           method: "GET",
           url: "https://robohash.org/" + props.names,

       })

   }*/

    return(

            <Card >
                <Card.Img  src={"https://robohash.org/" + props.names}/>
                <Card.Body>
                    <Card.Title>

                    </Card.Title>

                    <Card.Text>{props.names}</Card.Text>
                </Card.Body>
            </Card>


    )
}