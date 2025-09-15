+++
title = "狼骑士 2017-2020"
date = "2017-03-01"
tags = [
    "markdown",
    "css",
    "html",
]
categories = [
    "themes",
    "syntax",
]
series = ["Themes Guide"]
aliases = ["migrate-from-jekyl"]
toc = true
+++

![Team](/images/seed_hunter/team_wolfknight.png)


## 游戏项目：猎源

![SeedHunter](/images/seed_hunter/seedhunter.gif)<br>
猎源这个游戏可以说是我个人做过项目中成长的一次关键点

是一款2d横版Roguelite动作游戏

### 系统
设计并实现了一套完整的游戏，包括游戏状态管理、资源管理、简单的UI管理、地图结构生成、音乐音效管理、存档系统等，各系统间使用**EventKit**(事件总线)来进行交互

### 角色相关

- **自定义角色控制器**：
    角色平台移动控制基于[primer31/CharacterController2D](https://github.com/prime31/CharacterController2D)，在此基础上扩展出墙跳、攀爬、冲刺等各种移动能力的角色控制器
    现在看来比起使用Unity2d刚体作为基础来看，优点是可以获取更多额外的环境感知信息

- **角色状态**：<br>
    主角状态使用Playmaker状态机来管理状态
    ![CharacterFSM](/images/seed_hunter/seedhunter_character_fsm.png)<br>

- **角色属性**：<br>
    实现了一个Stat管理，便于接入后面Buff需求
    ![CharacterStat](/images/seed_hunter/seedhunter_rpgstat.png)<br>
    

### 敌人相关

游戏中有很多种类的的怪
![SeedHunter](/images/seed_hunter/seedhunter_enemy.png)<br>
与策划大哥为怪设计了各种AI行为，最后根据大家的反馈来细节调整

使用状态机+行为树+输入组件的结构来实现<br>
项目前中期时，使用NodeCanvas行为树插件和Playmaker状态机来实现AI逻辑
![MonserBT](/images/seed_hunter/seedhunter_monster_bt.png)<br>

项目后期业余时间探索了GOAP、ActionList用于实现游戏AI的框架
发现GOAP用于制作招式非规律性的怪还是很方便的

于是有了下面的库：[UnityGoapAI](https://github.com/lihaochen910/UnityGoapAIDemo)
![](/images/seed_hunter/seedhunter_enemy_goap.png)<br>



### 平台SDK接入

接入Steamworks.Net
实现了成就系统、云存档同步<br>
配置Steam后台成就、上传并发布制品版游戏

借助Heroku平台，实现了一个简单的后端服务器用于一些数据统计
