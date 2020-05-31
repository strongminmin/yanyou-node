-- MySQL dump 10.13  Distrib 5.7.23, for Linux (x86_64)
--
-- Host: localhost    Database: yanyou
-- ------------------------------------------------------
-- Server version	5.7.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admins`
--

DROP TABLE IF EXISTS `admins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admins` (
  `user_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) DEFAULT NULL,
  `user_password` varchar(255) DEFAULT NULL,
  `user_image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admins`
--

LOCK TABLES `admins` WRITE;
/*!40000 ALTER TABLE `admins` DISABLE KEYS */;
INSERT INTO `admins` VALUES (1,'admin','123456','http://kimvoice.oss-cn-beijing.aliyuncs.com/voice/user/2020-03-08%2013%3A41%3A21.065889.jpg');
/*!40000 ALTER TABLE `admins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `advisory`
--

DROP TABLE IF EXISTS `advisory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `advisory` (
  `advisory_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `advisory_tag` varchar(255) DEFAULT NULL,
  `advisory_title` varchar(255) DEFAULT NULL,
  `advisory_banner` varchar(255) DEFAULT NULL,
  `advisory_content` text,
  `advisory_access` int(20) DEFAULT '0',
  `advisory_source` varchar(255) DEFAULT NULL,
  `advisory_reward` int(20) DEFAULT '0',
  `create_time` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`advisory_id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `advisory`
--

LOCK TABLES `advisory` WRITE;
/*!40000 ALTER TABLE `advisory` DISABLE KEYS */;
INSERT INTO `advisory` VALUES (18,'考研经验','考研过来人告诉你：考研到底是一种怎样的体验','http://kimvoice.oss-cn-beijing.aliyuncs.com/yanyou/advisory/1585749017832.jpg','<p>摘要：作为考研过来人，我想说，考研的过程真的不怎么样。这样说倒不是因为学习有多累，而是心有多孤独，生活有多枯燥。考研，注定是一场孤独的旅行，这绝对不是说说的，是真的！</p>\n<p>本人二战上岸，经历两次备考，对考研可谓是有深刻的体会。无论过程多艰难，最终都会感谢自己的坚持。</p>\n<p>1.绝对不会二战？</p>\n<p>考研时，大家说过做多的一句话或许也是绝对不会二战吧？反正这是我说过最多的一句话，绝对不会二战！结果就是，我又选择了二战。</p>\n<p>备考的过程真的很痛苦，好像所有的消极情绪都在备考期间出现。为学习进度慢而焦虑，为做题错误率高而失落，为图书馆别人出声而生气&hellip;&hellip;有时候自己都怀疑，到底是有多想不开才考研。</p>\n<p>冷静下来仔细想想，不就是为心里的那份执着和对研究生的渴望吗？自己明明目标明确，为什么要被自己的情绪打倒呢？当然，这仅限于头脑清醒的时候，情绪上来，还是不太好控制的。</p>\n<p>一战失败，还是心有不甘，选择二战，曾经那句话，也不再作数。同学问过我，而站再失败会三战吗？其实我自己也不清楚，毕竟考研期间，头脑也不是很清楚。还好，二战成功上岸。</p>\n<p>2.总是自我否定</p>\n<p>我本人是不太自信的，本科院校一般，成绩一般，在这场竞争中，自己实在是没有什么优势。</p>\n<p>基础较差，复习起来进度较慢，我会怀疑自己不适合考研。</p>\n<p>刷题错误率太高，我会觉得自己就是不行，跟别人差距太大。</p>\n<p>后期冲刺，更是紧张焦虑到不行，还没进考场，就觉得自己输了。</p>\n<p>&hellip;&hellip;</p>\n<p>这种自我否定是很可怕的，会一点点的攻破自己的心理防线，不过，也不用太害怕，关键是对自己要有信心，多跟家人朋友交流倾诉，寻求安慰。</p>\n<p>我考了两次，不也是熬过来了，还成功上岸，真庆幸自己当时没有放弃。</p>\n<p>3.无缘游戏、看剧</p>\n<p>考研不单单是累，还有就会枯燥。想想躺床上打游戏、看剧的日子一去不复返，接踵而来的是睁眼学习，闭眼睡觉，想想都难受。可为了上岸，这一切都是值得的。</p>\n<p>还记得一战的时候，好像不管什么时间回宿舍，都能看见不考研的舍友坐在桌前，吃着零食，看这剧。虽然心里告诉自己，大家选择的路不一样，但还是会有一丝丝的羡慕。</p>\n<p>谁会不想舒心的待着呢？谁会愿意每天就只学习呢？不过也没办法，多告诉自己，难受的不仅仅是自己，竞争对手也是如此，一定要坚持。</p>\n<p>考研就是这样的难受，一定要有心理准备，你的好日子要暂时离开一年。</p>\n<p>但那又怎样呢？明确目标，告诉自己，多坚持，成功就会在不远处。熬过了最难受的日子，才是考研中的佼佼者。</p>',7,'本站原创',0,'1585749017832'),(19,'考研指南','最新34所复试线公布消息汇总','http://kimvoice.oss-cn-beijing.aliyuncs.com/yanyou/advisory/1585749466184.jpg','<p><br />34所复试线划定要求</p>\n<p>国家线3月出来几乎是不可能了，就连肖秀荣教授都发微博表示，只要34所自划线学校的复试线不出来，国家线是不会出来的。</p>\n<p>这便让考研er的目光从国家线转移到了34所自划线身上。</p>\n<p>今天小派就给大家捋一捋，34所自划线复试线公布大致需要的几个条件。</p>\n<p>1.确定扩招名额。这个不难理解，34所是按照成绩排名来划定分数线，比如某专业要录取10个人，按照1:1.2的比例进行复试，那么第12名的成绩便是这个专业的分数线。在扩招名额确定之前，也就不知道录取的具体人数，自然分数线出不来。</p>\n<p>2.成绩复核工作结束。</p>\n<p>3.相关人员正常上班。</p>\n<p>-02-</p>\n<p>34所复试线公布消息</p>\n<p>四川大学</p>\n<p>分数线需要国家正式下达2020年招生计划后才能测算，因此无法预估分数线发布的具体时间。</p>\n<p>中南大学</p>\n<p>中南大学在值班安排中我们可以看到，截至清明节之前教职工都未正式上班，因此中南大学的复试线几乎不可能在清明节之前公布。</p>\n<p>东南大学南京大学</p>\n<p>据某微博大V称，其向南京大学和东南大学研招办相关人员求证并得到了回复：两所学校的考研复试分数线最早在本月底公布。</p>\n<p>重庆大学</p>\n<p>根据最新可靠消息，重庆大学2020复试线资格线于4月中旬前发布。</p>\n<p>-03-</p>\n<p>远程复试形式</p>\n<p>自从上周研招网透露出有一丝丝（话不能说太满，小派怕打脸）想要远程复试的迹象之后，就有小小派来问我：</p>\n<p>如果远程复试，考试怎么办？</p>\n<p>艺术生怎么办？</p>\n<p>小派研究了一下各个学校的预案以及当年非典时期的工作安排之后，发现有可能通过如下形式进行复试：</p>\n<p>1.如果取消笔试考试，那么可能会采用提交论文的形式进行考试。</p>\n<p>2.如果不取消笔试考试，那么有可能会采用在线开卷考试的形式进行考试。（进入系统答题或者是邮寄试卷，这两者都有可能）</p>\n<p>3.笔试考试延期至开学之后，重要性降低，成绩仅作为奖学金判定的参考。</p>\n<p>另外还有小小派来问我：小派艺术生怎么办？</p>\n<p>诶;;这个;;这道题对小派来说有一点超纲了;;毕竟不要说小派不是艺术生，小派连唱歌都是必开原唱的五音不全选手啊！！！</p>\n<p>但是，小派是那么容易放弃的人吗？（是的，你是（捂脸））</p>\n<p>我们虽然没办法找到直接答案，但是我们可以从同类事件中找到答案~</p>\n<p>下面是我国一些高校对于今年参加艺考学生的工作安排，给大家做了如下汇总，希望可以给大家一点帮助~</p>\n<p>哈尔滨音乐学院</p>\n<p>采用校考由面试调整为远程视频提交作品、在线考试等形式，将避免全国近万人次往返哈市的人员流动。</p>\n<p>中央戏剧学院</p>\n<p>部分专业可考虑取消专业考试，按照高考文化课成绩（即考生成绩与所在省一本线的比值）由高到低录取。部分专业可考虑调整考试方式，初试统一改为远程考核。</p>\n<p>山东艺术学院</p>\n<p>学校研究后决定，部分专业取消校考，直接使用省统考成绩作为专业成绩，综合考生高考文化成绩择优录取。积极采取网络视频考试方式，面试类专业初试拟采用系统上传视频方式组织考试，通过初筛减少现场复试人数，最大限度避免考生流动和聚集。</p>\n<p>上海音乐学院</p>\n<p>音乐表演类考试非现场考核难度大，但并不是没有解决方案。学校认为对于音乐表演专业采用远程网络面试+线上提交视频资料的办法是目前较为可行的路径。在此基础上待疫情平稳后安排最终校考。</p>\n<p>北京电影学院</p>\n<p>部分专业取消专业校考，直接按照高考成绩择优录取；部分专业提交视频作品；部分专业延时校考。（根据不同的专业有不同的安排）</p>\n<p>清华美院</p>\n<p>学生平时的成绩、作品及表现，以及考生参加各省所组织的统一测试成绩，能在一定程度上体现学生的专业素质水平。考虑将学生的平时习作、美术类省统考成绩等作为初选条件，学生通过初选后，再在高考后组织校考。</p>\n<p>-04-</p>\n<p>复试英语</p>\n<p>疫情之下，网络复试概率飙升</p>\n<p>笔试权重一旦降低</p>\n<p>增加的就是复试英语口语面试</p>',8,'教育日报',0,'1585749466184'),(20,'考研指南','研招网“亲自支招”：考研复试，要注意哪些问题？','http://kimvoice.oss-cn-beijing.aliyuncs.com/yanyou/advisory/1585750004985.jpg','<p>第一，了解复试有什么形式，复试包括什么，例如笔试，面试，英语口语，实验操作等等；<br />第二，了解复试的内容，笔试考什么，什么科目？是否有参考书？是否有专业英语翻译？面试是否涉及专业问题？面试是否需要英语自我介绍、对话等；<br />第三，好好的准备自我介绍，把你的优点，科研成果，竞赛获奖，本科期间的奖项（有点分量的）都给写进去，如果没有简历的话老师一般会从你的自我介绍问你问题，所以好好准备，别给自己挖坑；<br />第四，认真准备复试的每一个环节，笔试考了就不要去想，以免影响面试，如果前一个不太理想，好好准备下一个环节，争取把差距拉回来；<br />第五，充分利用小木虫，考研帮，QQ群，贴吧的资源，搜索是否有往年的复试经验贴，能找到同个专业的师兄师姐那是最好的；<br />第六，等复试结果出来再回家/学校！！！</p>',4,'中国教育在线综合整理',0,'1585750004985'),(21,'考研指南','34所成绩公布时间&复试时间预测','http://kimvoice.oss-cn-beijing.aliyuncs.com/yanyou/advisory/1585750332346.jpg','<p>-01-</p>\n<p>往年</p>\n<p>去年34所复试分数线公布时间集中在3月2日至3月7日，同时复试时间集中在3月10日至3月20日。</p>\n<p>即34所在复试录取线公布后大约10天左右就会开始复试工作。</p>\n<p>去年调剂系统开通时间为3月20日至4月30日，非34所院校的复试时间大致分布在调剂系统开通3天之后至4月1日。</p>\n<p>即非34所院校的复试工作一般于调剂系统开通3天之后进行。</p>\n<p>之所以这样，是因为各大学校抢夺优质生源的结果。</p>\n<p>大多第一志愿为34所的考生都非常优秀，倘若复试被刷，不愿意二战的同学就会在网上申请调剂，这也是为什么34所院校复试时间普遍早于其他高校的原因。</p>\n<p>-02-</p>\n<p>今年</p>\n<p>近日，中科大官媒在文章《必看！中国科大2020年研究生招生工作安排调整常见问题解答》中表示，2020年硕士复试分数线将于3月中旬公布（去年是3月5日）：</p>\n<p>这在一定程度上可以推测出，今年34所成绩公布时间普遍比去年推后10天。</p>\n<p>在昨天的文章中小派讲了，今年调剂系统开放时间大致为3月底（链接）。</p>\n<p>如此看来，倘若今年采用视频面试的方式，那么报考34所院校的小小派，大概率会在本月月底就会开始远程复试。</p>\n<p>报考非34所院校的小小派们，今年虽然扩招了，但是你们的竞争压力并没有减少。</p>\n<p>尤其是擦线过去年录取线以及确定要调剂的小小派，今年虽然扩招了，但是你们的竞争压力并没有减少。</p>\n<p>尤其是擦线过去年录取线以及确定要调剂的小小派，预调剂暂停不代表调剂就暂停了，只是调剂信息依然存在但更加隐蔽！</p>\n<p>国家线一出调剂系统也就要开了，临时选择院校根本来不及！</p>\n<p>985211高分考生选择调剂众多，没背景没人脉成绩擦线，成功上岸真的很难！</p>\n<p>调剂要做的事情太多还要准备复试内容，没有专业人士指导非常容易绕弯路！</p>\n<p>小派在这里给大家推荐一个专业做调剂的团队调剂保姆班，另外小派还给大家争取到了8个特惠名额。</p>\n<p>为了避免影响阅读体验，详情公布在【考研派之家】公众号今天文章的次条，有需要的小小派可以去看~</p>\n<p>-03-</p>\n<p>成绩复核</p>\n<p>首先小派想给大家科普一下，成绩复核并不是重新改卷（否则宁夏大学事件也不会闹得怎么;;emmmmmm;;对吧？），它只是单纯地看看成绩加总上有没有问题~</p>\n<p>多年以来，成绩复核只有朝上加，没有朝下降的。</p>\n<p>因此倘若有小小派对自己的成绩有疑问，完全可以申请复核成绩。</p>\n<p>历史的经验告诉我们，这不仅有用，而且用处非常大！</p>',3,'研招网',0,'1585750332346'),(22,'考研经验','最新34所复试线公布消息汇总','http://kimvoice.oss-cn-beijing.aliyuncs.com/yanyou/advisory/1585750560496.jpg','<p>摘要：作为考研过来人，我想说，考研的过程真的不怎么样。这样说倒不是因为学习有多累，而是心有多孤独，生活有多枯燥。考研，注定是一场孤独的旅行，这绝对不是说说的，是真的！</p>\n<p>本人二战上岸，经历两次备考，对考研可谓是有深刻的体会。无论过程多艰难，最终都会感谢自己的坚持。</p>\n<p>1.绝对不会二战？</p>\n<p>考研时，大家说过做多的一句话或许也是绝对不会二战吧？反正这是我说过最多的一句话，绝对不会二战！结果就是，我又选择了二战。</p>\n<p>备考的过程真的很痛苦，好像所有的消极情绪都在备考期间出现。为学习进度慢而焦虑，为做题错误率高而失落，为图书馆别人出声而生气&hellip;&hellip;有时候自己都怀疑，到底是有多想不开才考研。</p>\n<p>冷静下来仔细想想，不就是为心里的那份执着和对研究生的渴望吗？自己明明目标明确，为什么要被自己的情绪打倒呢？当然，这仅限于头脑清醒的时候，情绪上来，还是不太好控制的。</p>\n<p>一战失败，还是心有不甘，选择二战，曾经那句话，也不再作数。同学问过我，而站再失败会三战吗？其实我自己也不清楚，毕竟考研期间，头脑也不是很清楚。还好，二战成功上岸。</p>\n<p>2.总是自我否定</p>\n<p>我本人是不太自信的，本科院校一般，成绩一般，在这场竞争中，自己实在是没有什么优势。</p>\n<p>基础较差，复习起来进度较慢，我会怀疑自己不适合考研。</p>\n<p>刷题错误率太高，我会觉得自己就是不行，跟别人差距太大。</p>\n<p>后期冲刺，更是紧张焦虑到不行，还没进考场，就觉得自己输了。</p>\n<p>&hellip;&hellip;</p>\n<p>这种自我否定是很可怕的，会一点点的攻破自己的心理防线，不过，也不用太害怕，关键是对自己要有信心，多跟家人朋友交流倾诉，寻求安慰。</p>\n<p>我考了两次，不也是熬过来了，还成功上岸，真庆幸自己当时没有放弃。</p>\n<p>3.无缘游戏、看剧</p>\n<p>考研不单单是累，还有就会枯燥。想想躺床上打游戏、看剧的日子一去不复返，接踵而来的是睁眼学习，闭眼睡觉，想想都难受。可为了上岸，这一切都是值得的。</p>\n<p>还记得一战的时候，好像不管什么时间回宿舍，都能看见不考研的舍友坐在桌前，吃着零食，看这剧。虽然心里告诉自己，大家选择的路不一样，但还是会有一丝丝的羡慕。</p>\n<p>谁会不想舒心的待着呢？谁会愿意每天就只学习呢？不过也没办法，多告诉自己，难受的不仅仅是自己，竞争对手也是如此，一定要坚持。</p>\n<p>考研就是这样的难受，一定要有心理准备，你的好日子要暂时离开一年。</p>\n<p>但那又怎样呢？明确目标，告诉自己，多坚持，成功就会在不远处。熬过了最难受的日子，才是考研中的佼佼者。</p>',8,'本站自创',1,'1585750560496'),(26,'考研经验','复试经验','http://kimvoice.oss-cn-beijing.aliyuncs.com/yanyou/advisory/1585750878679.jpg','<p>第一，了解复试有什么形式，复试包括什么，例如笔试，面试，英语口语，实验操作等等；<br />第二，了解复试的内容，笔试考什么，什么科目？是否有参考书？是否有专业英语翻译？面试是否涉及专业问题？面试是否需要英语自我介绍、对话等；<br />第三，好好的准备自我介绍，把你的优点，科研成果，竞赛获奖，本科期间的奖项（有点分量的）都给写进去，如果没有简历的话老师一般会从你的自我介绍问你问题，所以好好准备，别给自己挖坑；<br />第四，认真准备复试的每一个环节，笔试考了就不要去想，以免影响面试，如果前一个不太理想，好好准备下一个环节，争取把差距拉回来；<br />第五，充分利用小木虫，考研帮，QQ群，贴吧的资源，搜索是否有往年的复试经验贴，能找到同个专业的师兄师姐那是最好的；<br />第六，等复试结果出来再回家/学校！！！</p>',26,'研日报',4,'1585750878678');
/*!40000 ALTER TABLE `advisory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `banner`
--

DROP TABLE IF EXISTS `banner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `banner` (
  `banner_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `banner_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`banner_id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `banner`
--

LOCK TABLES `banner` WRITE;
/*!40000 ALTER TABLE `banner` DISABLE KEYS */;
INSERT INTO `banner` VALUES (19,'http://kimvoice.oss-cn-beijing.aliyuncs.com/yanyou/banner/1585748261873.jpg'),(20,'http://kimvoice.oss-cn-beijing.aliyuncs.com/yanyou/banner/1585748307049.jpg'),(23,'http://kimvoice.oss-cn-beijing.aliyuncs.com/yanyou/banner/1585748376444.jpg'),(24,'http://kimvoice.oss-cn-beijing.aliyuncs.com/yanyou/banner/1585748416895.jpg');
/*!40000 ALTER TABLE `banner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `checks`
--

DROP TABLE IF EXISTS `checks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `checks` (
  `check_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `create_time` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`check_id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `checks`
--

LOCK TABLES `checks` WRITE;
/*!40000 ALTER TABLE `checks` DISABLE KEYS */;
INSERT INTO `checks` VALUES (25,9,'1585992018121'),(26,9,'1586183037545'),(27,1,'1587800574570'),(28,1,'1588220121446'),(29,9,'1588945785325'),(30,9,'1589020656836');
/*!40000 ALTER TABLE `checks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `college`
--

DROP TABLE IF EXISTS `college`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `college` (
  `college_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `college_name` varchar(255) DEFAULT NULL,
  `college_local` varchar(255) DEFAULT NULL,
  `college_graduate` text,
  `college_intor` text,
  `college_banner` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`college_id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `college`
--

LOCK TABLES `college` WRITE;
/*!40000 ALTER TABLE `college` DISABLE KEYS */;
INSERT INTO `college` VALUES (17,'北京大学','北京','{\"graduateUrl\":[[\"http://localhost:8080/#/college/edit/:id\"]],\"transferUrl\":[[\"http://localhost:8080/#/college/edit/:id\"]],\"reportRatio\":[[\"2019\",\"3:1\"],[\"2018\",\"2:1\"]],\"sourceLine\":[[\"2019\",\"320\"],[\"2018\",\"322\"]],\"seniors\":[[\"王学长\",\"1191340528\"],[\"周学长\",\"1191340528\",\"\"]],\"tutors\":[[\"王老师\",\"15036889002\"],[\"周老师\",\"15036889002\"]],\"experience\":[[\"怎么考验？\",\"用手考\"],[\"怎么上学？\",\"用脚上\"]],\"resources\":[[\"数据结构\",\"https://pan.baidu.com/s/1ZCgczOmSF3h-P1gksQ7NDA 提取码:25f1\"]]}','欢迎报考北京大学！','http://kimvoice.oss-cn-beijing.aliyuncs.com/yanyou/advisory/1585989275397.jpg'),(21,'郑州大学','河南','{\"graduateUrl\":[[\"http://yanyou.cckim.cn/#/college/edit/:id\"]],\"transferUrl\":[[\"http://yanyou.cckim.cn/#/college/edit/:id\"]],\"reportRatio\":[[\"2019\",\"3:1\"]],\"sourceLine\":[[\"2019\",\"255\"]],\"seniors\":[[\"王学长\",\"15036889002\"]],\"tutors\":[[\"王老师\",\"15036889002\"]],\"experience\":[[\"怎么考研？\",\"用手考\"]],\"resources\":[[\"数据结构\",\"https://pan.baidu.com/s/1ZCgczOmSF3h-P1gksQ7NDA 提取码:25f1\"]]}','欢迎报考郑州大学！','http://kimvoice.oss-cn-beijing.aliyuncs.com/yanyou/advisory/1585989229467.jpg'),(22,'南开大学','天津','{\"graduateUrl\":[[\"http://graduate.nankai.edu.cn/\"]],\"transferUrl\":[[\"http://www.kytiaoji.com/tjqe.html\"]],\"reportRatio\":[[\"2019\",\"10:1\"]],\"sourceLine\":[[\"2019\",\"350\"]],\"seniors\":[[\"王学姐\",\"1234556\"]],\"tutors\":[[\"李老师\",\"1238989999\"]],\"experience\":[[\"你好，英语怎么学\",\"好好背单词\"],[\"怎么背单词不忘记\",\"用脑子背\"]],\"resources\":[[\"数据结构\",\"https://pan.baidu.com/s/1ZCgczOmSF3h-P1gksQ7NDA 提取码:25f1\"]]}','欢迎报考','http://kimvoice.oss-cn-beijing.aliyuncs.com/yanyou/college/1584621799769.jpg'),(23,'天津大学','天津','{\"graduateUrl\":[[\"http://gs.tju.edu.cn/\"]],\"transferUrl\":[[\"http://yz.kaoyan.com/tju/tiaoji/\"]],\"reportRatio\":[[\"2015\",\"6:1\"],[\"2016\",\"7:1\"],[\"2017\",\"8:1\"],[\"2018\",\"9:1\"],[\"2019\",\"10:1\"]],\"sourceLine\":[[\"2015\",\"299\"],[\"2016\",\"300\"],[\"2017\",\"320\"],[\"2018\",\"330\"],[\"2019\",\"350\"]],\"seniors\":[[\"王学长\",\"15036723891\"],[\"李学姐\",\"1739003821\"],[\"陈学长\",\"18239008393\"]],\"tutors\":[[\"陈老师\",\"17390038210\"],[\"晓老师\",\"12829332291\"]],\"experience\":[[\"天津大学食堂怎么样？\",\"还可以，美味！\"]],\"resources\":[[\"数据结构\",\"https://pan.baidu.com/s/1ZCgczOmSF3hP1gksQ7DA 25f1\"]]}','欢迎报考天津大学！','http://kimvoice.oss-cn-beijing.aliyuncs.com/yanyou/college/1585988568540.jpg'),(24,'开封大学','河南','{\"graduateUrl\":[[\"http://fen.piaohangzhou.cn/school/498/subsidize/\"]],\"transferUrl\":[[\"http://fen.piaohangzhou.cn/school/498/subsidize/\"]],\"reportRatio\":[[\"2018\",\"10:1\"],[\"2019\",\"10:3\"]],\"sourceLine\":[[\"2018\",\"300\"],[\"2019\",\"330\"]],\"seniors\":[[\"陈学姐\",\"12233232\"],[\"郭学长\",\"34235449\"]],\"tutors\":[[\"李老师\",\"11234578292\"],[\"祁老师\",\"12328839499\"]],\"experience\":[[\"英语怎么学？\",\"多背单词，学语法\"],[\"数学怎么考高分？\",\"多做题\"]],\"resources\":[[\"数据结构\",\"https://pan.baidu.com/s/1ZCgczOmSF3h-P1gksQ7NDA 提取码:25f1\"]]}','欢迎报考开封大学！','http://kimvoice.oss-cn-beijing.aliyuncs.com/yanyou/college/1585989747132.jpg');
/*!40000 ALTER TABLE `college` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comment` (
  `comment_id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '评论唯一id',
  `user_id` int(11) DEFAULT NULL COMMENT '用户id',
  `talk_id` int(11) DEFAULT NULL COMMENT '说说id',
  `comment_content` varchar(255) DEFAULT NULL COMMENT '评论内容',
  `create_time` varchar(255) DEFAULT NULL COMMENT '评论时间',
  PRIMARY KEY (`comment_id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (40,9,24,'☀️☀️☀️','1585991689663');
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `history`
--

DROP TABLE IF EXISTS `history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `history` (
  `history_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `history_content` varchar(255) DEFAULT NULL,
  `create_time` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`history_id`)
) ENGINE=InnoDB AUTO_INCREMENT=136 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `history`
--

LOCK TABLES `history` WRITE;
/*!40000 ALTER TABLE `history` DISABLE KEYS */;
INSERT INTO `history` VALUES (14,NULL,'浏览了资料','1585992030500'),(15,NULL,'浏览了资料','1585993156058'),(16,NULL,'浏览了资料','1585993722904'),(19,NULL,'浏览了资料','1585997299593'),(21,1,'浏览了热点：《复试经验》的内容','1586183718144'),(22,1,'浏览了热点：《考研过来人告诉你：考研到底是一种怎样的体验》的内容','1586183794296'),(23,1,'浏览了热点：《最新34所复试线公布消息汇总》的内容','1586183798815'),(24,1,'浏览了热点：《最新34所复试线公布消息汇总》的内容','1586183811964'),(26,1,'浏览了热点：《复试经验》的内容','1586183824398'),(28,1,'浏览了热点：《复试经验》的内容','1586183830574'),(29,1,'浏览了资料','1586183838888'),(30,1,'浏览了校研会：《清华大学考研宣讲会》的内容','1586183910900'),(31,1,'浏览了校研会：《xxxx会议》的内容','1586183911875'),(32,1,'浏览了校研会：《考研复试指导公开课》的内容','1586183913553'),(33,1,'浏览了校研会：《南京大学考研宣讲会》的内容','1586183914806'),(34,1,'浏览了校研会：《XXXX会议》的内容','1586183916018'),(35,1,'浏览了校研会：《xxxx会议》的内容','1586183917267'),(38,1,'浏览了热点：《复试经验》的内容','1586184069444'),(40,1,'添加了1月计划','1586184360667'),(41,NULL,'浏览了热点：《最新34所复试线公布消息汇总》的内容','1586185400336'),(46,NULL,'浏览了资料','1586187511550'),(48,1,'浏览了热点：《复试经验》的内容','1586188497320'),(52,NULL,'浏览了资料','1587048851295'),(53,1,'进行了打卡','1587800574575'),(54,1,'浏览了热点：《复试经验》的内容','1587800584761'),(55,1,'浏览了热点：《最新34所复试线公布消息汇总》的内容','1587800588704'),(56,1,'浏览了热点：《复试经验》的内容','1587800664994'),(57,1,'浏览了资料','1587800673665'),(58,1,'浏览了校研会：《清华大学考研宣讲会》的内容','1587800694455'),(59,1,'浏览了校研会：《考研复试指导公开课》的内容','1587800696187'),(60,1,'浏览了校研会：《南京大学考研宣讲会》的内容','1587800698017'),(61,1,'浏览了校研会：《考研复试指导公开课》的内容','1587800699618'),(62,1,'进行了打卡','1588220121449'),(63,1,'浏览了资料','1588220179449'),(64,1,'浏览了资料','1588220180827'),(65,1,'浏览了校研会：《清华大学考研宣讲会》的内容','1588220184845'),(66,1,'浏览了校研会：《考研复试指导公开课》的内容','1588220186223'),(67,1,'浏览了热点：《复试经验》的内容','1588220190258'),(74,NULL,'浏览了资料','1588664052512'),(75,1,'浏览了资料','1588664096197'),(76,1,'浏览了热点：《复试经验》的内容','1588820291973'),(77,1,'浏览了资料','1588820299944'),(78,1,'添加了1月计划','1588820333618'),(79,1,'添加了1月计划','1588820342502'),(80,1,'添加了1月计划','1588820356124'),(81,1,'添加了1月计划','1588820365851'),(89,NULL,'浏览了资料','1588929159659'),(90,NULL,'浏览了资料','1588929171129'),(96,NULL,'浏览了资料','1588945195748'),(105,NULL,'浏览了热点：《复试经验》的内容','1588946216034'),(108,NULL,'浏览了资料','1588947561084'),(109,NULL,'浏览了资料','1588947565191'),(110,NULL,'浏览了资料','1588947575284'),(111,NULL,'浏览了资料','1588947592655'),(122,NULL,'浏览了热点：《考研考研》的内容','1588983473186'),(123,NULL,'浏览了校研会：《清华大学宣讲会》的内容','1588983666590'),(124,NULL,'浏览了资料','1588983724315'),(125,NULL,'浏览了资料','1588983741276'),(132,9,'修改了基本信息','1589020815894'),(133,NULL,'浏览了热点：《考研》的内容','1589020964970'),(134,NULL,'浏览了校研会：《xxxx会议》的内容','1589021012934'),(135,NULL,'浏览了资料','1589021062499');
/*!40000 ALTER TABLE `history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `likes`
--

DROP TABLE IF EXISTS `likes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `likes` (
  `like_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `target_id` int(11) DEFAULT NULL,
  `like_type` int(11) DEFAULT NULL COMMENT '0是对说说点赞，1是对评论点赞',
  PRIMARY KEY (`like_id`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likes`
--

LOCK TABLES `likes` WRITE;
/*!40000 ALTER TABLE `likes` DISABLE KEYS */;
INSERT INTO `likes` VALUES (50,9,24,0),(51,9,40,1),(52,1,26,0),(53,1,25,0),(54,9,26,0),(55,9,41,1);
/*!40000 ALTER TABLE `likes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `message`
--

DROP TABLE IF EXISTS `message`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `message` (
  `message_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `message_content` varchar(255) DEFAULT NULL,
  `message_type` varchar(255) DEFAULT NULL,
  `create_time` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`message_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `message`
--

LOCK TABLES `message` WRITE;
/*!40000 ALTER TABLE `message` DISABLE KEYS */;
/*!40000 ALTER TABLE `message` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plan`
--

DROP TABLE IF EXISTS `plan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `plan` (
  `plan_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `plan_month` int(11) DEFAULT NULL,
  `plan_content` varchar(255) DEFAULT NULL,
  `create_time` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`plan_id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plan`
--

LOCK TABLES `plan` WRITE;
/*!40000 ALTER TABLE `plan` DISABLE KEYS */;
INSERT INTO `plan` VALUES (21,9,3,'论文初稿完成✅','1585992000822'),(22,9,4,'修改论文','1585992012706'),(24,9,1,'第一月计划：\n学习\n学习\n学习','1586184051845'),(25,9,1,'补充：巴拉巴拉巴拉','1586184079038'),(27,1,1,'学习数学','1588820333615'),(28,1,1,'学习英语','1588820342499'),(29,1,1,'学习政治','1588820356121'),(30,1,1,'学习专业课','1588820365847'),(31,9,1,'哈哈哈哈','1588945810230'),(32,9,2,'哈哈哈','1588983110058'),(33,9,3,'哈哈哈','1589020674442');
/*!40000 ALTER TABLE `plan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `resource`
--

DROP TABLE IF EXISTS `resource`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `resource` (
  `resource_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `resource_type` varchar(255) DEFAULT NULL,
  `resource_title` varchar(255) DEFAULT NULL,
  `resource_url` varchar(255) DEFAULT NULL,
  `resource_ident` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`resource_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `resource`
--

LOCK TABLES `resource` WRITE;
/*!40000 ALTER TABLE `resource` DISABLE KEYS */;
INSERT INTO `resource` VALUES (1,'英语','英语单词大背诵','https://pan.baidu.com/s/1ewnv0Z6amtTfbhO1iDORjw','100k'),(2,'计算机','数据结构','https://pan.baidu.com/s/1ewnv0Z6amtTfbhO1iDORjw','100k'),(3,'计算机','操作系统','https://pan.baidu.com/s/1ewnv0Z6amtTfbhO1iDORjw','100k'),(4,'数学','张宇基础课','https://pan.baidu.com/s/1ewnv0Z6amtTfbhO1iDORjw','100k'),(5,'数学','汤家凤基础讲解','https://pan.baidu.com/s/1ewnv0Z6amtTfbhO1iDORjw','100k'),(7,'政治','腿姐基础课程','https://pan.baidu.com/s/1ewnv0Z6amtTfbhO1iDORjw','100k'),(8,'政治','徐涛基础课','https://pan.baidu.com/s/1ewnv0Z6amtTfbhO1iDORjw','100k'),(9,'政治','石磊基础课','https://pan.baidu.com/s/1ewnv0Z6amtTfbhO1iDORjw','100k'),(13,'计算机','数据结构','https://pan.baidu.com/s/1ewnv0Z6amtTfbhO1iDORjw','2101'),(15,'英语','刘晓燕语法课','https://pan.baidu.com/s/14ioMBGHmY4v1QPrt3YZDog','39x5');
/*!40000 ALTER TABLE `resource` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `schoolmeet`
--

DROP TABLE IF EXISTS `schoolmeet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `schoolmeet` (
  `meet_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `meet_title` varchar(255) DEFAULT NULL,
  `meet_content` text,
  `meet_access` int(11) DEFAULT '0',
  `create_time` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`meet_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schoolmeet`
--

LOCK TABLES `schoolmeet` WRITE;
/*!40000 ALTER TABLE `schoolmeet` DISABLE KEYS */;
INSERT INTO `schoolmeet` VALUES (10,'XXXX会议','<p>时间：XXXXX</p>\n<p>地点：XXXXX</p>\n<p>内容：XXXXXXXXXXXX</p>',3,'1584290378598'),(11,'南京大学考研宣讲会','<p>时间：2020-03-04</p>\n<p>地点：4221</p>\n<p>内容：哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>',6,'1584290384922'),(12,'考研复试指导公开课','<p>时间：2020-01-04</p>\n<p>地点：L402</p>\n<p>内容：啦啦啦啦啦啦啦啦啦啦啦啦啦</p>',9,'1584290390997'),(14,'清华大学考研宣讲会','<p>时间：2020年1月1日</p>\n<p>地点：s411</p>\n<p>&nbsp;</p>',13,'1584620971823'),(16,'清华大学宣讲会','<p>地点：哈哈哈</p>\n<p>内容：急急急</p>',0,'1589021008186');
/*!40000 ALTER TABLE `schoolmeet` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `talk`
--

DROP TABLE IF EXISTS `talk`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `talk` (
  `talk_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `talk_content` text,
  `create_time` varchar(255) DEFAULT NULL,
  `talk_status` int(11) DEFAULT '0' COMMENT '0是可用，1是禁用',
  PRIMARY KEY (`talk_id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `talk`
--

LOCK TABLES `talk` WRITE;
/*!40000 ALTER TABLE `talk` DISABLE KEYS */;
INSERT INTO `talk` VALUES (24,9,'{\"content\":\"今天天气好晴朗\",\"images\":[\"http://kimvoice.oss-cn-beijing.aliyuncs.com/yanyou/talk/2020-04-04%2017%3A13%3A57.475739.jpg\"]}','1585991641082',0),(25,9,'{\"content\":\"春天该很好，你若尚在场。❤️\",\"images\":[\"http://kimvoice.oss-cn-beijing.aliyuncs.com/yanyou/talk/2020-04-04%2017%3A17%3A57.026096.jpg\"]}','1585991878987',0),(26,9,'{\"content\":\"☀️☀️☀️☀️\",\"images\":[\"http://kimvoice.oss-cn-beijing.aliyuncs.com/yanyou/talk/2020-04-04%2017%3A18%3A28.757542.jpg\"]}','1585991910385',0);
/*!40000 ALTER TABLE `talk` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `user_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) DEFAULT NULL,
  `user_email` varchar(255) DEFAULT NULL,
  `user_password` varchar(255) DEFAULT NULL,
  `user_image` varchar(255) DEFAULT 'http://kimvoice.oss-cn-beijing.aliyuncs.com/voice/user/2020-03-08%2013%3A41%3A21.065889.jpg',
  `user_description` varchar(255) DEFAULT '这个人学习太忙了，什么也没写。',
  `volunteer_school` varchar(255) DEFAULT '暂无',
  `volunteer_profession` varchar(255) DEFAULT '暂无',
  `user_sex` varchar(255) DEFAULT '男',
  `user_birthday` varchar(255) DEFAULT '1990-01-01',
  `user_status` int(11) DEFAULT '0' COMMENT '0是可用，1是禁用',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (9,'le_min1','2572737189@qq.com','123Happy.','http://kimvoice.oss-cn-beijing.aliyuncs.com/yanyou/user/2020-04-04%2017%3A11%3A23.577028.jpg','这个人学习太忙了，什么也没写。','清华大学','计算机科学与技术','男','1998-03-06',0);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-05-31 22:32:13
