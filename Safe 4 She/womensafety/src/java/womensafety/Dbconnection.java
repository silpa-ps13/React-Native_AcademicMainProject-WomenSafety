
package womensafety;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Dbconnection {
    public Connection con=null;
public Dbconnection() throws ClassNotFoundException, SQLException{  
Class.forName("com.mysql.jdbc.Driver"); 
con=DriverManager.getConnection("jdbc:mysql://localhost:3306/womensafety","root","");
}}
