package de.adorsys.namerobotbackend.request;

import javax.validation.constraints.NotBlank;

public class ResetRequest {
    @NotBlank
   private String email;


    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
}
