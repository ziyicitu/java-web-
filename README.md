 # 此项目为javaweb系统开发课程考核
 
 ## 项目名称：white not alone
 ### 类型:小游戏
 ## 搭建环境
 jsp+mysql+js+html

  ## 玩法说明
    点击中间白色的小方块开始游戏，让你的鼠标始终保持着和小方块在一起  
    移动到右侧可以现实排行榜，左边有玩法说明和提交个人分数
 
 ## 主要目录文件说明
    /src/main/webapp
    1. game.jsp  页面入口
    2. main.js 前端全部逻辑处理
    3. getLeaderList.jsp 获取排行榜
    4. uploadScore.jsp 上传分数
    5.connectSql.jsp 数据库连接抽象

 ## 游戏渲染引擎
 main.js   drawWhile();  
 界面初始化——>循环{  
    事件更新;  
    绘制更新;  
 }  
### 事件更新包括:
1. 游戏状态
2. 小方块事件
3. 右边栏事件
4. 左边栏事件
### 绘制更新包括：
1. 游戏主要页面显示
2. 小方块绘制现实
3. 菜单界面显示

## 后端数据处理
前端发送请求->请求处理->查询数据库javaweb到表leaderlist->处理表数据->返回->显示  
### mysql表
| leaderlist | CREATE TABLE `leaderlist` (  
  `id` int NOT NULL AUTO_INCREMENT,  
  `name` varchar(40) NOT NULL,  
  `score` int DEFAULT NULL,  
  PRIMARY KEY (`id`)  
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci |