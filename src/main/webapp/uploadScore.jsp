<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.io.*,java.util.*,java.sql.*"%>

<%@ include file="connectSql.jsp" %>
<%
	String name = request.getParameter("name");
	int score = Integer.parseInt(request.getParameter("score"));
	sql = "insert into leaderlist (name,score) value (\""+name+"\","+score+");";
	int rs = stmt.executeUpdate(sql);
	response.getWriter().print("success");
%>