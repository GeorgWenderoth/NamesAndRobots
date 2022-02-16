import React from "react";
import {Container} from "react-bootstrap";
import {ListElement} from "./listElement";
import axios from "axios";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";


//import "../Styles.css";

export function ContainerListe(props){



    return(
            <Container fluid>
                <Row xs={1} md={4}  >
                    {props.itemList.map((item) =>(
                            <Col>
                                <ListElement names={item}/*item={item} id={item.itId}
                                                               updatePunkt={props.updatePunkt}
                                                               updateDoneOrNot={props.updateDoneOrNot}*//>
                            </Col>
                        )

                    ) }
                </Row>

            </Container>


    )

}