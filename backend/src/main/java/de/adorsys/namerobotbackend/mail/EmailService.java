package de.adorsys.namerobotbackend.mail;

import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.Multipart;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;
import java.io.File;
import java.net.URI;
import java.util.Properties;
import java.util.Random;

public class EmailService {

    private String username;
    private String password;

    private final Properties prop;

    public EmailService(String host, int port, String username, String password) {
        prop = new Properties();
        prop.put("mail.smtp.auth", true);
        prop.put("mail.smtp.starttls.enable", "true");
        prop.put("mail.smtp.host", host);
        prop.put("mail.smtp.port", port);
       // prop.put("mail.smtp.ssl.trust", host);

        this.username = username;
        this.password = password;
    }

    public EmailService(String host, int port) {
        prop = new Properties();
        prop.put("mail.smtp.host", host);
        prop.put("mail.smtp.port", port);
    }

    public static void main(String... args) {
        try {
            new EmailService("smtp.gmail.com", 587, "namesandrobots@gmail.com", "9eg37/Bn")
                    .sendMail("");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static String generateRandomAuthCode(int len) {
        String chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijk"
                +"lmnopqrstuvwxyz!@#$%&";
        Random rnd = new Random();
        StringBuilder sb = new StringBuilder(len);
        for (int i = 0; i < len; i++)
            sb.append(chars.charAt(rnd.nextInt(chars.length())));
        return sb.toString();
    }

    public void sendMail(String mailadress) throws Exception {

        Session session = Session.getInstance(prop, new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(username, password);
            }
        });


        Message message = new MimeMessage(session);
        message.setFrom(new InternetAddress("namesandrobots@gmail.com"));
        message.setRecipients(Message.RecipientType.TO, InternetAddress.parse("georg@wenderoth.de"));
        message.setSubject("Passwort zurücksetzten");
        String authCode = generateRandomAuthCode(8);
        AuthCode.getAuthList().add(new AuthCode(authCode, mailadress));
        String msg = "Ihr Authorisirungs code: " + authCode;

        MimeBodyPart mimeBodyPart = new MimeBodyPart();
        mimeBodyPart.setContent(msg, "text/html; charset=utf-8");

        MimeBodyPart attachmentBodyPart = new MimeBodyPart();

       // attachmentBodyPart.attachFile(getFile());

        Multipart multipart = new MimeMultipart();
        multipart.addBodyPart(mimeBodyPart);
       // multipart.addBodyPart(attachmentBodyPart);

        message.setContent(multipart);

        Transport.send(message);
    }

    private File getFile() throws Exception {
        URI uri = this.getClass()
                .getClassLoader()
                .getResource("attachment.txt")
                .toURI();
        return new File(uri);
    }

}
