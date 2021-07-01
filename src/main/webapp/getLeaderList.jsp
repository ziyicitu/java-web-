<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.io.*,java.util.*,java.sql.*"%>

<%@ include file="connectSql.jsp" %>
<%sql = "select count(id) from leaderlist";
ResultSet rs = stmt.executeQuery(sql);
rs.next();
int leaderListNumber = rs.getInt("count(id)");

sql = "select * from leaderList order by score DESC limit 10";
rs = stmt.executeQuery(sql);
%>

<%
response.setContentType("application/javascript");
int ret=0;

String name;
int score;

String result = "{";

for(int i=0;i<leaderListNumber;i++){
	rs.next();
	name = new String(rs.getString("name"));
	score = rs.getInt("score");
	result+="\""+i+"\""+":"+"{\"name\":\""+name+"\",\"score\":"+score+"}";
	if(i!=leaderListNumber-1){
		result+=",";
	}
}
result+="}";

response.getWriter().print(result);
%>