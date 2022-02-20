package de.adorsys.namerobotbackend.mail;

import lombok.EqualsAndHashCode;

import java.util.ArrayList;
import java.util.List;
@EqualsAndHashCode
public class AuthCode {
    static public List<AuthCode> authList = new ArrayList<>();
    String authCode;
    String mail;

    public AuthCode(String authCode, String mail) {
        this.authCode = authCode;
        this.mail = mail;
    }

    public static List<AuthCode> getAuthList() {
        return authList;
    }

    public static void setAuthList(List<AuthCode> authList) {
        AuthCode.authList = authList;
    }

    public String getAuthCode() {
        return authCode;
    }

    public AuthCode getAuth(){
        return new AuthCode(this.authCode, this.mail);
    }

    public void setAuthCode(String authCode) {
        this.authCode = authCode;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }
}
