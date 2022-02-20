package de.adorsys.namerobotbackend.rest;

import org.apache.tomcat.util.json.JSONParser;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.file.Path;
import java.nio.file.Paths;


@RestController
//@RequestMapping("/rest")
public class RestSchnittstelleController {


    @CrossOrigin
    @GetMapping("/names")
    public String get() throws Exception {
        String uri = "http://names.drycodes.com/20";
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(uri))
                .build();

        HttpResponse<String> response =
                client.send(request, HttpResponse.BodyHandlers.ofString());

        System.out.println("Response in string:" + response.body());
        //var json = new JSONParser(response.body());
            return response.body();
    }

}
