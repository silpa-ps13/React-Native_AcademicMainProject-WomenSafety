

package womensafety;


import java.util.ArrayList;
import java.util.List;
import java.util.Properties;  
import javax.mail.*;  
import javax.mail.internet.*;  
  
public class Sendemail {  
 public List send(String to, String sub, String cont) {  
  
  String host="smtp.gmail.com";  
  
  final String user="silpadhaneesh24@gmail.com";//change accordingly  
  final String password="24102013silpadhaneesh";//change accordingly 
 // String to="abhijithshaji0001@gmail.com";//change accordingly  
  
   //Get the session object  
   Properties props = new Properties();  
   props.put("mail.smtp.host",host);
   props.put("mail.smtp.port",587);
   props.put("mail.smtp.auth", "true");  
   props.put("mail.smtp.starttls.enable", "true"); 
     
Session session = Session.getInstance(props,
  new javax.mail.Authenticator() {
    protected PasswordAuthentication getPasswordAuthentication() {
        return new PasswordAuthentication(user, password);
    }
  });

//session = Session.getInstance(props, this);
  
   //Compose the message  
    try {  
     MimeMessage message = new MimeMessage(session);  
     message.setFrom(new InternetAddress(user));  
     message.addRecipient(Message.RecipientType.TO,new InternetAddress(to));  
   //  message.setSubject("Subject1");  
     message.setSubject(sub,"UTF-8");
     message.setContent(cont,"text/html; charset=utf-8");   
       
    //send the message  
     Transport.send(message);  
     System.out.println(message);
  
     System.out.println("message sent successfully...");  
     List ls=new ArrayList();
     ls.add("success");
     
     return ls;
   
     } catch (MessagingException e) {e.printStackTrace();}
	return null;  
 }  
}  