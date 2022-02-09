package de.adorsys.namerobotbackend.rest;


import de.adorsys.namerobotbackend.domain.RobotElement;
import de.adorsys.namerobotbackend.services.RobotService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/test/user")
@PreAuthorize("hasAnyRole('ADMIN', 'MODERATOR', 'USER')")
public class RobotController {

    public RobotService robotService;

    public RobotController(RobotService robotService){
        this.robotService = robotService;
    }

    @CrossOrigin
    @GetMapping("")
    public Boolean userAccess(){
        return true;
    }

    @CrossOrigin
    @GetMapping("/elements")
    public ResponseEntity<List<RobotElement>> getRobotElements(){
        return new ResponseEntity<>(robotService.getElementeList(), HttpStatus.OK);
    }

    @CrossOrigin
    @PostMapping("/element")
    public ResponseEntity<RobotElement> erstelleRobotElement(@RequestBody RobotElement element){
        final RobotElement newElement = robotService.erstelleElement(element);
        return new ResponseEntity<>(newElement, HttpStatus.CREATED);
    }

    @CrossOrigin
    @PutMapping("/update")
    public ResponseEntity<RobotElement> update(@RequestBody RobotElement element){
        return new ResponseEntity<>(robotService.updateRobotElement(element.getId(), element.getBewertungsWert(), element.getName(), element.getBeschreibung()),HttpStatus.OK);
    }

}
