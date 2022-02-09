package de.adorsys.namerobotbackend.services;

import de.adorsys.namerobotbackend.domain.RobotElement;
import de.adorsys.namerobotbackend.repository.RobotRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

@org.springframework.stereotype.Service
public class RobotService {

    @Autowired
    private RobotRepository repository;

    public RobotService(){

    }

    public List<RobotElement> getElementeList(){
        return repository.findAll();
    }

    public RobotElement erstelleElement( RobotElement element){
        return repository.save(element);
    }

    public void loescheAlleElemente(){
        repository.deleteAll();
    }

    public RobotElement findElementById(long id){
        return repository.findById(id);
    }

    public RobotElement updateRobotElement(long id, int bewertung, String name, String beschreibung){
        RobotElement robotElement = this.findElementById(id);
        robotElement.setName(name);
        robotElement.setBeschreibung(beschreibung);
        robotElement.setBewertungsWert(bewertung);
        return repository.save(robotElement);
    }


}
