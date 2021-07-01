<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.io.*,java.util.*,java.sql.*"%>

<%@ include file="connectSql.jsp" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<%sql = "select * from user";
ResultSet rs = stmt.executeQuery(sql); %>
<%=rs.next() %>
<%=rs.getInt("id") %>
</body>
</html>