<%@ page import="java.io.*,java.util.*,java.sql.*"%>

<%
String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";  
String DB_URL = "jdbc:mysql://localhost:3306/javaweb?useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=UTC";
String USER = "root";
String PASS = "zhuruiling";
Connection conn = null;
Statement stmt = null;
Class.forName(JDBC_DRIVER);
conn = DriverManager.getConnection(DB_URL,USER,PASS);
stmt = conn.createStatement();
String sql;
%>
