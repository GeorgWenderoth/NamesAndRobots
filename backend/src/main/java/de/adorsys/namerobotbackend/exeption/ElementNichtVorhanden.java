package de.adorsys.namerobotbackend.exeption;

public class ElementNichtVorhanden extends RuntimeException {

    public ElementNichtVorhanden(String message){
        super(message);
    }
}
