package de.adorsys.namerobotbackend.request;

import de.adorsys.namerobotbackend.mail.AuthCode;

import javax.validation.constraints.NotBlank;

public class AuthCodeRequest {
    @NotBlank
    private String authcode;

    @NotBlank
    private String mail;

    public AuthCode getAuth(){
        return new AuthCode(this.authcode, this.mail);
    }

    public String getAuthcode() {
        return authcode;
    }

    public void setAuthcode(String authcode) {
        this.authcode = authcode;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }
}
