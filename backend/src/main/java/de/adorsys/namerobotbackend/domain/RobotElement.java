package de.adorsys.namerobotbackend.domain;

import javax.persistence.*;

@Entity
@Table(name = "robot")
public class RobotElement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // id generieren
    private Long id;

    private int bewertungsWert; //instanzVariable
    private String name;
    private String beschreibung;


    public RobotElement(int bewertungsWert, String name, String beschreibung) {
        this.bewertungsWert = bewertungsWert;
        this.name = name;
        this.beschreibung = beschreibung;
    }

    public RobotElement() {
    }

    public int getBewertungsWert() {
        return bewertungsWert;
    }

    public void setBewertungsWert(int bewertungsWert) {
        this.bewertungsWert = bewertungsWert;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBeschreibung() {
        return beschreibung;
    }

    public void setBeschreibung(String beschreibung) {
        this.beschreibung = beschreibung;
    }

    public Long getId(){
        return id;
    }
}
