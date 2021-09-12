

package womensafety;


import java.util.*;
import javax.mail.*;
import javax.mail.internet.*;
import javax.activation.*;

public class RunEmail {

   public static void main(String [] args) {    
     Sendemail se=new Sendemail();
     se.send("silpasilu88@gmail.com", "nothing", "abcddd");
   }
}