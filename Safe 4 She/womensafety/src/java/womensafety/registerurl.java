

package womensafety;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.util.Random;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.json.JSONException;
import org.json.JSONObject;

@WebServlet(name = "registerurl", urlPatterns = {"/registerurl"})
public class registerurl extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet registerurl</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet registerurl at " + request.getContextPath() + "</h1>");
            out.println("</body>");
            out.println("</html>");
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
String email="";
String phone="";
String name="";
String place="";
String psw="";
        StringBuffer jb = new StringBuffer();
    String line = null;
    try {
        BufferedReader reader = request.getReader();
        while ((line = reader.readLine()) != null) {
            jb.append(line);
        }
    } catch (Exception e) { /*report an error*/ }

    try {
        System.out.println(jb+" <--");
        JSONObject jsonObject = new JSONObject(jb+"");// HTTP.toJSONObject(jb.toString());
        
        System.out.println("--"+jsonObject.getString("email")+"");
        email=jsonObject.getString("email")+"";
        phone=jsonObject.getString("phone")+"";
        place=jsonObject.getString("place")+"";
        name=jsonObject.getString("name")+"";
        psw=jsonObject.getString("psw")+"";
             
             //   ; // will return price value.
    } catch (JSONException e) {
        e.printStackTrace();
        
        //throw new IOException("Error parsing JSON request string");
    }  
    try{
    Connection con=null;
	PreparedStatement pst=null;
     Dbconnection dbc=new Dbconnection();
      con=dbc.con;
    String statment="insert into reg_table (Name,Phno,Place,Email,Psw) values('"+name+"','"+phone+"','"+place+"','"+email+"','"+psw+"') ";
			System.out.println(statment);
			pst=con.prepareStatement(statment);
			pst.executeUpdate();
			pst.close();
    
    }catch(Exception e){
    e.printStackTrace();
    }
    
    
    
    
    
        response.getWriter().print("success");
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
