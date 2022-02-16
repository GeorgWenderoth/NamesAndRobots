package de.adorsys.namerobotbackend;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.file.Path;
import java.nio.file.Paths;


@org.springframework.web.bind.annotation.RestController
//@RequestMapping("/rest")
public class RestController {


    @CrossOrigin
    @GetMapping("/names")
    public void get(String uri) throws Exception {
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(uri))
                .build();

        HttpResponse<Path> response =
                client.send(request, HttpResponse.BodyHandlers.ofFile(Paths.get("body.txt")));

        System.out.println("Response in file:" + response.body());

    }


}
