import React from "react";
import {Navigation} from "./Navigation";
import {ContainerListe} from "./components/containerListe";

import axios from "axios";

export class Startseite extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            names: [],

        }
    }

    componentDidMount() {
        this.back();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    back(){

       axios({
            method: "GET",
            url:
                "http://localhost:8080/names",


    }).then(response => {
            console.log("Data:", response);
            this.setState({names: response.data})
        })
    }

   /* getPicktures(){
        axios({
            method: "GET",
            url:"https://robohash.org/" + ,

        })
    } */

    render() {
        return(
            <div>


                <ContainerListe itemList={this.state.names} names={this.state.names}/>
            </div>
        )
    }
}