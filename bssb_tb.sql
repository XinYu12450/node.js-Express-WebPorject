/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50549
 Source Host           : localhost:3306
 Source Schema         : bssb_tb

 Target Server Type    : MySQL
 Target Server Version : 50549
 File Encoding         : 65001

 Date: 28/07/2022 23:24:00
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for cart_tb
-- ----------------------------
DROP TABLE IF EXISTS `cart_tb`;
CREATE TABLE `cart_tb`  (
  `id` int(16) NOT NULL AUTO_INCREMENT,
  `user_id` int(16) NULL DEFAULT NULL,
  `comm_id` int(16) NULL DEFAULT NULL,
  `count` int(8) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of cart_tb
-- ----------------------------
INSERT INTO `cart_tb` VALUES (5, 2, 3, 1);
INSERT INTO `cart_tb` VALUES (8, 6, 8, 1);

-- ----------------------------
-- Table structure for cmpl_tb
-- ----------------------------
DROP TABLE IF EXISTS `cmpl_tb`;
CREATE TABLE `cmpl_tb`  (
  `id` int(16) NOT NULL AUTO_INCREMENT,
  `user_id` int(16) NULL DEFAULT NULL,
  `comm_id` int(16) NULL DEFAULT NULL,
  `plco` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `plti` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of cmpl_tb
-- ----------------------------
INSERT INTO `cmpl_tb` VALUES (1, 1, 1, 'AirPods Pro 和苹果手机都可以无线充。音质和白噪音本人没有追求，但真的很方便^_^', '2021-12-19 17:48:27');
INSERT INTO `cmpl_tb` VALUES (2, 2, 1, 'AirPods Pro 和苹果手机都可以无线充。音质和白噪音本人没有追求，但真的很方便^_^', '2021-12-19 17:49:55');

-- ----------------------------
-- Table structure for cmty_tb
-- ----------------------------
DROP TABLE IF EXISTS `cmty_tb`;
CREATE TABLE `cmty_tb`  (
  `id` int(16) NOT NULL AUTO_INCREMENT,
  `name` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of cmty_tb
-- ----------------------------
INSERT INTO `cmty_tb` VALUES (1, '手机');
INSERT INTO `cmty_tb` VALUES (2, '家电');
INSERT INTO `cmty_tb` VALUES (3, '智能');
INSERT INTO `cmty_tb` VALUES (4, '外设');
INSERT INTO `cmty_tb` VALUES (5, '笔记本');
INSERT INTO `cmty_tb` VALUES (6, '组件');

-- ----------------------------
-- Table structure for comm_tb
-- ----------------------------
DROP TABLE IF EXISTS `comm_tb`;
CREATE TABLE `comm_tb`  (
  `id` int(16) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `incd` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `price` decimal(10, 2) NULL DEFAULT NULL,
  `fakeprice` decimal(10, 2) NULL DEFAULT NULL,
  `address` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '北京 北京市 海淀区',
  `type` int(16) NULL DEFAULT NULL,
  `pri` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT 'head.jpg;1.jpg;2.jpg;3.jpg',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 21 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of comm_tb
-- ----------------------------
INSERT INTO `comm_tb` VALUES (1, '智能门铃3 黑色', '180°超大视野，远程查看，超长续航，超清分辨率，全天候监测', 349.99, 599.00, '北京 北京市 海淀区', 3, 'head.jpg;1.jpg;2.jpg;3.jpg');
INSERT INTO `comm_tb` VALUES (2, '【AI智控】智米智能石墨烯 电暖器取暖器 ', '石墨烯高效导热/APP智能操控/可折叠晾衣杆/智能恒温 双效导热 智能恒温 白色', 699.00, 1000.00, '北京 北京市 海淀区', 3, 'head.jpg;1.jpg;2.jpg;3.jpg');
INSERT INTO `comm_tb` VALUES (3, '无线静音鼠标 黑色', '无线静音，多档DPI可调节，手感舒适', 29.90, 49.00, '北京 北京市 海淀区', 4, 'head.jpg;1.jpg;2.jpg;3.jpg');
INSERT INTO `comm_tb` VALUES (4, 'ART系列机械键盘 三模68键', 'RGB炫彩，紧凑68键，支持热插拔，G黄Pro自润轴', 469.00, 499.00, '北京 北京市 海淀区', 4, 'head.jpg;1.jpg;2.jpg;3.jpg');
INSERT INTO `comm_tb` VALUES (5, 'Redmi G 游戏笔记本 暗影黑', '【全能高手|游戏本】高性能显示卡， 高色域大屏，全尺寸背光  i5-10200H/16G/512G/60Hz/GTX 1650', 5299.00, 5688.00, '北京 北京市 海淀区', 5, 'head.png;1.jpg;2.jpg');
INSERT INTO `comm_tb` VALUES (6, '华硕(ASUS)飞行堡垒9 ', 'intel11代CPU，RTX30光追显卡，144Hz电竞屏  太空灰/i5-11400H/16G/512GSSD/RTX3050/144Hz', 6399.00, 6499.00, '北京 北京市 海淀区', 5, 'head.png;1.jpg;2.jpg;3.jpg');
INSERT INTO `comm_tb` VALUES (7, '华硕 DUAL-RTX3060-O12G-V2', '华硕 DUAL-RTX3060-O12G-V2', 4399.00, 4899.00, '北京 北京市 海淀区', 6, 'head.png;1.jpg;2.jpg;3.jpg');
INSERT INTO `comm_tb` VALUES (8, '芝奇台式机内存条DDR4 幻光戟系列', '超高性能 劲爽电竞 16G(8G*2) DDR4 3200', 629.00, 899.00, '北京 北京市 海淀区', 6, 'head.png;1.jpg;2.jpg;3.jpg');
INSERT INTO `comm_tb` VALUES (9, '米家空净MAX 标准版滤芯', '高品质滤网除菌率高达99.9% 保护家人健康', 399.00, 588.00, '北京 北京市 海淀区', 2, 'head.png;1.jpg;2.jpg;3.jpg');
INSERT INTO `comm_tb` VALUES (10, 'OMNI扫拖洗一体机器人 ', '全能基站丨科沃斯X1 全能版 选择适合您的智能生活', 5999.00, 7888.00, '北京 北京市 海淀区', 2, 'head.png;1.jpg;2.jpg;3.jpg');
INSERT INTO `comm_tb` VALUES (11, '攀升13.3\"轻薄便携笔记本电脑 SmartBook D1', '十代i3，NVMe固态硬盘，持久续航，指纹解锁，接口丰富', 2699.00, 3099.00, '北京 北京市 海淀区', 5, 'head.png;1.jpg;2.jpg;3.jpg');
INSERT INTO `comm_tb` VALUES (12, '华硕(ASUS)a豆14 14英寸轻薄笔记本电脑', '第11代intel酷睿处理器，金属多彩机身，低蓝光护眼全面屏', 3599.00, 3699.00, '北京 北京市 海淀区', 5, 'head.png;1.jpg;2.jpg;3.jpg');
INSERT INTO `comm_tb` VALUES (13, '华硕ROG幻14 2021款14英寸轻薄本', '棱镜光效，100%DCI-P3广色域，电源键指纹解锁二合一', 9999.00, 11999.00, '北京 北京市 海淀区', 5, 'head.png;1.jpg;2.jpg;3.jpg');
INSERT INTO `comm_tb` VALUES (14, '华硕(ASUS)灵耀X逍遥 墨玉黑', '360度旋转触控屏幕设计，铝合金高强度机身，支持十指触控', 8999.00, 9666.00, '北京 北京市 海淀区', 5, 'head.png;1.jpg;2.jpg;3.jpg');
INSERT INTO `comm_tb` VALUES (15, '10400F+华硕TUF-GAMING-B560M-PLUS', '4.3GHz睿频，6核12线程，带散热模块，功率65W', 1649.00, 1999.00, '北京 北京市 海淀区', 6, 'head.png;1.jpg;2.jpg;3.jpg');
INSERT INTO `comm_tb` VALUES (16, 'Xiaomi MIX 4 陶瓷黑', 'Xiaomi MIX 4 陶瓷黑', 4469.00, 5200.00, '北京 北京市 海淀区', 1, 'head.png;1.jpg;2.jpg;3.jpg');
INSERT INTO `comm_tb` VALUES (17, 'MIX FOLD 小米折叠屏手机 黑色', '5020mAh；双原色屏；360度光感；10倍触控超分辨率；', 7999.00, 9999.00, '北京 北京市 海淀区', 1, 'head.png;1.png;2.png;3.png');
INSERT INTO `comm_tb` VALUES (18, '小米MIX Alpha', '创新环绕屏，极具未来感的智能交互体验 / 1亿像素超高清相机', 19999.00, 28888.00, '北京 北京市 海淀区', 1, 'head.png;1.jpg;2.jpg;3.jpg');
INSERT INTO `comm_tb` VALUES (19, 'Apple iMac 24英寸 4.5K屏 一体机', '搭载强劲M1芯片，超乎想象的纤薄设计，多色可选', 11299.00, 11499.00, '北京 北京市 海淀区', 5, 'head.png;1.jpg;2.jpg;3.jpg');
INSERT INTO `comm_tb` VALUES (20, '小米电视 EA65 2022款', '97.5%屏占比 4K超高清画质 | 语音搜片 智能识图', 2699.00, 3099.00, '北京 北京市 海淀区', 2, 'head.png;1.jpg;2.jpg;3.jpg');

-- ----------------------------
-- Table structure for logs_tb
-- ----------------------------
DROP TABLE IF EXISTS `logs_tb`;
CREATE TABLE `logs_tb`  (
  `id` int(16) NOT NULL AUTO_INCREMENT,
  `comm_id` int(16) NULL DEFAULT NULL,
  `user_id` int(16) NULL DEFAULT NULL,
  `startaddress` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `endaddress` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `starttime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `endtime` datetime NULL DEFAULT NULL,
  `has_find` int(1) NULL DEFAULT 0,
  `is_close` int(1) NULL DEFAULT 0,
  `count` int(8) NULL DEFAULT 1,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 44 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of logs_tb
-- ----------------------------
INSERT INTO `logs_tb` VALUES (1, 1, 1, '北京 北京市 海淀区', '广东省广州市白云区江高镇学苑路一号广东白云学院', '2021-12-20 15:38:59', '2021-12-20 16:06:19', 1, 0, 1);
INSERT INTO `logs_tb` VALUES (2, 6, 1, '北京 北京市 海淀区', '广东省广州市白云区江高镇学苑路一号广东白云学院', '2021-12-20 18:09:15', NULL, 0, 0, 1);
INSERT INTO `logs_tb` VALUES (3, 7, 1, '北京 北京市 海淀区', '广东省广州市白云区江高镇学苑路一号广东白云学院', '2021-12-20 18:18:47', '2021-12-20 18:20:21', 1, 0, 1);
INSERT INTO `logs_tb` VALUES (4, 3, 1, '北京 北京市 海淀区', '广东省广州市白云区江高镇学苑路一号广东白云学院', '2021-12-21 11:39:38', NULL, 0, 0, 1);
INSERT INTO `logs_tb` VALUES (5, 7, 1, '北京 北京市 海淀区', '广东省广州市白云区江高镇学苑路一号广东白云学院', '2021-12-22 09:41:26', '2021-12-21 13:02:01', 1, 0, 1);
INSERT INTO `logs_tb` VALUES (6, 9, 1, '北京 北京市 海淀区', '广东省广州市白云区江高镇学苑路一号广东白云学院', '2022-01-02 09:15:29', '2021-12-21 13:02:04', 1, 0, 1);
INSERT INTO `logs_tb` VALUES (7, 9, 1, '北京 北京市 海淀区', '广东省广州市白云区江高镇学苑路一号广东白云学院', '2022-06-06 16:02:40', '2022-01-02 09:14:52', 1, 0, 1);
INSERT INTO `logs_tb` VALUES (8, 9, 1, '北京 北京市 海淀区', '广东省广州市白云区江高镇学苑路一号广东白云学院', '2021-12-22 09:22:21', '2021-12-21 21:39:39', 1, 0, 1);
INSERT INTO `logs_tb` VALUES (9, 3, 2, '北京 北京市 海淀区', '广东省广州市白云区江高镇学苑路一号广东白云学院', '2021-12-21 18:39:29', NULL, 0, 0, 1);
INSERT INTO `logs_tb` VALUES (10, 18, 1, '北京 北京市 海淀区', '广东省广州市白云区江高镇学苑路一号广东白云学院', '2022-06-06 16:12:26', '2022-01-02 09:14:48', 1, 0, 1);
INSERT INTO `logs_tb` VALUES (11, 14, 6, '北京 北京市 海淀区', '123', '2021-12-22 10:29:41', NULL, 0, 0, 1);
INSERT INTO `logs_tb` VALUES (22, 16, 1, '北京 北京市 海淀区', '广东省广州市白云区江高镇学苑路一号广东白云学院', '2022-06-06 16:14:10', '2022-01-02 09:14:45', 1, 0, 1);
INSERT INTO `logs_tb` VALUES (23, 18, 6, '北京 北京市 海淀区', '123', '2021-12-28 10:54:10', NULL, 0, 0, 1);
INSERT INTO `logs_tb` VALUES (24, 7, 1, '北京 北京市 海淀区', '广东省广州市白云区江高镇学苑路一号广东白云学院', '2022-06-06 16:13:33', '2022-01-02 09:14:41', 1, 0, 1);
INSERT INTO `logs_tb` VALUES (25, 17, 1, '北京 北京市 海淀区', '广东省广州市白云区江高镇学苑路一号广东白云学院', '2022-06-22 10:58:42', '2022-01-02 09:15:06', 1, 0, 1);
INSERT INTO `logs_tb` VALUES (26, 16, 1, '北京 北京市 海淀区', '广东省广州市白云区江高镇学苑路一号广东白云学院', '2022-01-03 14:10:41', NULL, 0, 0, 1);
INSERT INTO `logs_tb` VALUES (27, 7, 1, '北京 北京市 海淀区', '广东省广州市白云区江高镇学苑路一号广东白云学院', '2022-01-03 14:12:16', NULL, 0, 0, 1);
INSERT INTO `logs_tb` VALUES (28, 2, 1, '北京 北京市 海淀区', '广东省广州市白云区江高镇学苑路一号广东白云学院', '2022-01-03 14:12:16', NULL, 0, 0, 1);
INSERT INTO `logs_tb` VALUES (29, 8, 1, '北京 北京市 海淀区', '广东省广州市白云区江高镇学苑路一号广东白云学院', '2022-01-03 15:26:52', NULL, 0, 0, 1);
INSERT INTO `logs_tb` VALUES (30, 1, 1, '北京 北京市 海淀区', '广东省广州市白云区江高镇学苑路一号广东白云学院', '2022-06-05 20:32:24', NULL, 0, 0, 1);
INSERT INTO `logs_tb` VALUES (31, 3, 1, '北京 北京市 海淀区', '广东省广州市白云区江高镇学苑路一号广东白云学院', '2022-06-05 20:32:55', NULL, 0, 0, 1);
INSERT INTO `logs_tb` VALUES (32, 7, 1, '北京 北京市 海淀区', '广东省广州市白云区江高镇学苑路一号广东白云学院', '2022-06-05 20:32:55', NULL, 0, 0, 1);
INSERT INTO `logs_tb` VALUES (33, 3, 1, '北京 北京市 海淀区', '广东省广州市白云区江高镇学苑路一号广东白云学院', '2022-06-05 20:48:31', NULL, 0, 0, 1);
INSERT INTO `logs_tb` VALUES (34, 2, 1, '北京 北京市 海淀区', '广东省广州市白云区江高镇学苑路一号广东白云学院', '2022-06-05 21:23:57', NULL, 0, 0, 1);
INSERT INTO `logs_tb` VALUES (35, 2, 44, '北京 北京市 海淀区', '123456', '2022-06-07 15:05:59', NULL, 0, 0, 1);
INSERT INTO `logs_tb` VALUES (36, 2, 45, '北京 北京市 海淀区', '123456', '2022-06-22 10:33:46', NULL, 0, 0, 1);
INSERT INTO `logs_tb` VALUES (37, 4, 45, '北京 北京市 海淀区', '123456', '2022-06-22 10:33:46', NULL, 0, 0, 1);
INSERT INTO `logs_tb` VALUES (38, 1, 46, '北京 北京市 海淀区', '123456', '2022-06-22 10:57:33', NULL, 0, 0, 1);
INSERT INTO `logs_tb` VALUES (39, 1, 46, '北京 北京市 海淀区', '123456', '2022-06-22 10:57:33', NULL, 0, 0, 1);
INSERT INTO `logs_tb` VALUES (40, 3, 1, '北京 北京市 海淀区', '广东省广州市白云区江高镇学苑路一号广东白云学院', '2022-07-09 19:32:35', NULL, 0, 0, 1);
INSERT INTO `logs_tb` VALUES (41, 2, 1, '北京 北京市 海淀区', '广东省广州市白云区江高镇学苑路一号广东白云学院', '2022-07-09 20:00:15', NULL, 0, 0, 1);
INSERT INTO `logs_tb` VALUES (42, 12, 1, '北京 北京市 海淀区', '广东省广州市白云区江高镇学苑路一号广东白云学院', '2022-07-09 20:00:15', NULL, 0, 0, 1);
INSERT INTO `logs_tb` VALUES (43, 11, 1, '北京 北京市 海淀区', '广东省广州市白云区江高镇学苑路一号广东白云学院', '2022-07-23 07:58:42', NULL, 0, 0, 1);

-- ----------------------------
-- Table structure for urad_tb
-- ----------------------------
DROP TABLE IF EXISTS `urad_tb`;
CREATE TABLE `urad_tb`  (
  `id` int(16) NOT NULL AUTO_INCREMENT,
  `user_id` int(16) NULL DEFAULT NULL,
  `comm_id` int(16) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of urad_tb
-- ----------------------------
INSERT INTO `urad_tb` VALUES (1, 1, 1);
INSERT INTO `urad_tb` VALUES (2, 1, 3);
INSERT INTO `urad_tb` VALUES (3, 1, 5);

-- ----------------------------
-- Table structure for urif_tb
-- ----------------------------
DROP TABLE IF EXISTS `urif_tb`;
CREATE TABLE `urif_tb`  (
  `id` int(16) NOT NULL AUTO_INCREMENT,
  `user_id` int(16) NULL DEFAULT NULL,
  `relname` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `itname` varchar(88) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `telphone` varchar(24) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `zipcode` int(8) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 17 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of urif_tb
-- ----------------------------
INSERT INTO `urif_tb` VALUES (1, 1, '张三1234', '张大', '广东省广州市白云区江高镇学苑路一号广东白云学院', '15992222999', 510000);
INSERT INTO `urif_tb` VALUES (2, 2, '李四', '李狗剩', '广东省广州市白云区江高镇学苑路一号广东白云学院', '1599321999', 510000);
INSERT INTO `urif_tb` VALUES (4, 4, '王五', '隔壁家老王', '广东省广州市白云区江高镇学苑路一号广东白云学院', '15992223925', 510000);
INSERT INTO `urif_tb` VALUES (6, 6, '呵呵', '呵呵', '123', '15992223925', 123456);
INSERT INTO `urif_tb` VALUES (7, 8, '策s', '测试', '广东省广州市白云区江高镇学苑路一号', '123456789', 123456);
INSERT INTO `urif_tb` VALUES (14, 44, '策士', '测先生', '1212', '123456', 123456);
INSERT INTO `urif_tb` VALUES (15, 45, '张三', '张拉皮', '123456', '123456', 123456);
INSERT INTO `urif_tb` VALUES (16, 46, 'zhangsan6', 'zhangsan6', '123456', '123456', 123456);

-- ----------------------------
-- Table structure for user_tb
-- ----------------------------
DROP TABLE IF EXISTS `user_tb`;
CREATE TABLE `user_tb`  (
  `id` int(16) NOT NULL AUTO_INCREMENT,
  `username` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `userpwd` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `uray` int(1) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 47 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of user_tb
-- ----------------------------
INSERT INTO `user_tb` VALUES (1, 'zhangsan', '123456', 1);
INSERT INTO `user_tb` VALUES (2, 'lisi', '123456', 1);
INSERT INTO `user_tb` VALUES (3, 'admin', '123456', 2);
INSERT INTO `user_tb` VALUES (4, 'wangwu', '123456', 1);
INSERT INTO `user_tb` VALUES (5, 'zhaoliu', '123456', 1);
INSERT INTO `user_tb` VALUES (6, 'hehe', '1212', 1);
INSERT INTO `user_tb` VALUES (8, 'ceshi', '1212', 1);
INSERT INTO `user_tb` VALUES (9, 'ceshi2', '1212', 1);
INSERT INTO `user_tb` VALUES (29, 'test123', '123456', 1);
INSERT INTO `user_tb` VALUES (30, 'ceshi', '123456', 1);
INSERT INTO `user_tb` VALUES (44, 'ceshi5', '123456', 1);
INSERT INTO `user_tb` VALUES (45, 'zhangsan3', '123456', 1);
INSERT INTO `user_tb` VALUES (46, 'zhangsan6', '123456', 1);

-- ----------------------------
-- View structure for view_propl
-- ----------------------------
DROP VIEW IF EXISTS `view_propl`;
CREATE ALGORITHM = UNDEFINED SQL SECURITY DEFINER VIEW `view_propl` AS select a.id,a.comm_id,itname,plco,plti from cmpl_tb a left join urif_tb b on a.user_id=b.user_id ;

-- ----------------------------
-- View structure for view_urcart
-- ----------------------------
DROP VIEW IF EXISTS `view_urcart`;
CREATE ALGORITHM = UNDEFINED SQL SECURITY DEFINER VIEW `view_urcart` AS select a.id,a.user_id,b.id as comm_id,b.name,b.price,b.fakeprice,b.pri from cart_tb a LEFT JOIN comm_tb b on a.comm_id=b.id ;

-- ----------------------------
-- View structure for view_urlogs
-- ----------------------------
DROP VIEW IF EXISTS `view_urlogs`;
CREATE ALGORITHM = UNDEFINED SQL SECURITY DEFINER VIEW `view_urlogs` AS SELECT a.id,user_id,b.id as comm_id,b.name,b.price,b.pri,a.starttime,endtime,has_find,is_close,count from logs_tb a LEFT JOIN comm_tb b on a.comm_id=b.id where is_close<>1 ;

SET FOREIGN_KEY_CHECKS = 1;
