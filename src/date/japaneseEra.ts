/*
 * (c) Kouichi Machida <k-machida@aideo.co.jp>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* tslint:disable:object-literal-sort-keys */
const japaneseEra = [
    {
        name: "大化",
        start: "645-07-17",
        end: "650-03-22",
    },
    {
        name: "白雉",
        start: "650-03-22",
        end: "654-11-24",
    },
    {
        name: "白雉",
        start: "654-11-24",
        end: "686-08-14",
    },
    {
        name: "朱鳥",
        start: "686-08-14",
        end: "686-10-01",
    },
    {
        name: "朱鳥",
        start: "686-10-01",
        end: "701-05-03",
    },
    {
        name: "大宝",
        start: "701-05-03",
        end: "704-06-16",
    },
    {
        name: "慶雲",
        start: "704-06-16",
        end: "708-02-07",
    },
    {
        name: "和銅",
        start: "708-02-07",
        end: "715-10-03",
    },
    {
        name: "霊亀",
        start: "715-10-03",
        end: "717-12-24",
    },
    {
        name: "養老",
        start: "717-12-24",
        end: "724-03-03",
    },
    {
        name: "神亀",
        start: "724-03-03",
        end: "729-09-02",
    },
    {
        name: "天平",
        start: "729-09-02",
        end: "749-05-04",
    },
    {
        name: "天平感宝",
        start: "749-05-04",
        end: "749-08-19",
    },
    {
        name: "天平勝宝",
        start: "749-08-19",
        end: "757-09-06",
    },
    {
        name: "天平宝字",
        start: "757-09-06",
        end: "765-02-01",
    },
    {
        name: "天平神護",
        start: "765-02-01",
        end: "767-09-13",
    },
    {
        name: "神護景雲",
        start: "767-09-13",
        end: "770-10-23",
    },
    {
        name: "宝亀",
        start: "770-10-23",
        end: "781-01-30",
    },
    {
        name: "天応",
        start: "781-01-30",
        end: "782-09-30",
    },
    {
        name: "延暦",
        start: "782-09-30",
        end: "806-06-08",
    },
    {
        name: "大同",
        start: "806-06-08",
        end: "810-10-20",
    },
    {
        name: "弘仁",
        start: "810-10-20",
        end: "824-02-08",
    },
    {
        name: "天長",
        start: "824-02-08",
        end: "834-02-14",
    },
    {
        name: "承和",
        start: "834-02-14",
        end: "848-07-16",
    },
    {
        name: "嘉祥",
        start: "848-07-16",
        end: "851-06-01",
    },
    {
        name: "仁寿",
        start: "851-06-01",
        end: "854-12-23",
    },
    {
        name: "斉衡",
        start: "854-12-23",
        end: "857-03-20",
    },
    {
        name: "天安",
        start: "857-03-20",
        end: "859-05-20",
    },
    {
        name: "貞観",
        start: "859-05-20",
        end: "877-06-01",
    },
    {
        name: "元慶",
        start: "877-06-01",
        end: "885-03-11",
    },
    {
        name: "仁和",
        start: "885-03-11",
        end: "889-05-30",
    },
    {
        name: "寛平",
        start: "889-05-30",
        end: "898-05-20",
    },
    {
        name: "昌泰",
        start: "898-05-20",
        end: "901-08-31",
    },
    {
        name: "延喜",
        start: "901-08-31",
        end: "923-05-29",
    },
    {
        name: "延長",
        start: "923-05-29",
        end: "931-05-16",
    },
    {
        name: "承平",
        start: "931-05-16",
        end: "938-06-22",
    },
    {
        name: "天慶",
        start: "938-06-22",
        end: "947-05-15",
    },
    {
        name: "天暦",
        start: "947-05-15",
        end: "957-11-21",
    },
    {
        name: "天徳",
        start: "957-11-21",
        end: "961-03-05",
    },
    {
        name: "応和",
        start: "961-03-05",
        end: "964-08-19",
    },
    {
        name: "康保",
        start: "964-08-19",
        end: "968-09-08",
    },
    {
        name: "安和",
        start: "968-09-08",
        end: "970-05-03",
    },
    {
        name: "天禄",
        start: "970-05-03",
        end: "974-01-16",
    },
    {
        name: "天延",
        start: "974-01-16",
        end: "976-08-11",
    },
    {
        name: "貞元",
        start: "976-08-11",
        end: "978-12-31",
    },
    {
        name: "天元",
        start: "978-12-31",
        end: "983-05-29",
    },
    {
        name: "永観",
        start: "983-05-29",
        end: "985-05-19",
    },
    {
        name: "寛和",
        start: "985-05-19",
        end: "987-05-05",
    },
    {
        name: "永延",
        start: "987-05-05",
        end: "989-09-10",
    },
    {
        name: "永祚",
        start: "989-09-10",
        end: "990-11-26",
    },
    {
        name: "正暦",
        start: "990-11-26",
        end: "995-03-25",
    },
    {
        name: "長徳",
        start: "995-03-25",
        end: "999-02-01",
    },
    {
        name: "長保",
        start: "999-02-01",
        end: "1004-08-08",
    },
    {
        name: "寛弘",
        start: "1004-08-08",
        end: "1013-02-08",
    },
    {
        name: "長和",
        start: "1013-02-08",
        end: "1017-05-21",
    },
    {
        name: "寛仁",
        start: "1017-05-21",
        end: "1021-03-17",
    },
    {
        name: "治安",
        start: "1021-03-17",
        end: "1024-08-19",
    },
    {
        name: "万寿",
        start: "1024-08-19",
        end: "1028-08-18",
    },
    {
        name: "長元",
        start: "1028-08-18",
        end: "1037-05-09",
    },
    {
        name: "長暦",
        start: "1037-05-09",
        end: "1040-12-16",
    },
    {
        name: "長久",
        start: "1040-12-16",
        end: "1044-12-16",
    },
    {
        name: "寛徳",
        start: "1044-12-16",
        end: "1046-05-22",
    },
    {
        name: "永承",
        start: "1046-05-22",
        end: "1053-02-02",
    },
    {
        name: "天喜",
        start: "1053-02-02",
        end: "1058-09-19",
    },
    {
        name: "康平",
        start: "1058-09-19",
        end: "1065-09-04",
    },
    {
        name: "治暦",
        start: "1065-09-04",
        end: "1069-05-06",
    },
    {
        name: "延久",
        start: "1069-05-06",
        end: "1074-09-16",
    },
    {
        name: "承保",
        start: "1074-09-16",
        end: "1077-12-05",
    },
    {
        name: "承暦",
        start: "1077-12-05",
        end: "1081-03-22",
    },
    {
        name: "永保",
        start: "1081-03-22",
        end: "1084-03-15",
    },
    {
        name: "応徳",
        start: "1084-03-15",
        end: "1087-05-11",
    },
    {
        name: "寛治",
        start: "1087-05-11",
        end: "1095-01-23",
    },
    {
        name: "嘉保",
        start: "1095-01-23",
        end: "1097-01-03",
    },
    {
        name: "永長",
        start: "1097-01-03",
        end: "1097-12-27",
    },
    {
        name: "承徳",
        start: "1097-12-27",
        end: "1099-09-15",
    },
    {
        name: "康和",
        start: "1099-09-15",
        end: "1104-03-08",
    },
    {
        name: "長治",
        start: "1104-03-08",
        end: "1106-05-13",
    },
    {
        name: "嘉承",
        start: "1106-05-13",
        end: "1108-09-09",
    },
    {
        name: "天仁",
        start: "1108-09-09",
        end: "1110-07-31",
    },
    {
        name: "天永",
        start: "1110-07-31",
        end: "1113-08-25",
    },
    {
        name: "永久",
        start: "1113-08-25",
        end: "1118-04-25",
    },
    {
        name: "元永",
        start: "1118-04-25",
        end: "1120-05-09",
    },
    {
        name: "保安",
        start: "1120-05-09",
        end: "1124-05-18",
    },
    {
        name: "天治",
        start: "1124-05-18",
        end: "1126-02-15",
    },
    {
        name: "大治",
        start: "1126-02-15",
        end: "1131-02-28",
    },
    {
        name: "天承",
        start: "1131-02-28",
        end: "1132-09-21",
    },
    {
        name: "長承",
        start: "1132-09-21",
        end: "1135-06-10",
    },
    {
        name: "保延",
        start: "1135-06-10",
        end: "1141-08-13",
    },
    {
        name: "永治",
        start: "1141-08-13",
        end: "1142-05-25",
    },
    {
        name: "康治",
        start: "1142-05-25",
        end: "1144-03-28",
    },
    {
        name: "天養",
        start: "1144-03-28",
        end: "1145-08-12",
    },
    {
        name: "久安",
        start: "1145-08-12",
        end: "1151-02-14",
    },
    {
        name: "仁平",
        start: "1151-02-14",
        end: "1154-12-04",
    },
    {
        name: "久寿",
        start: "1154-12-04",
        end: "1156-05-18",
    },
    {
        name: "保元",
        start: "1156-05-18",
        end: "1159-05-09",
    },
    {
        name: "平治",
        start: "1159-05-09",
        end: "1160-02-18",
    },
    {
        name: "永暦",
        start: "1160-02-18",
        end: "1161-09-24",
    },
    {
        name: "応保",
        start: "1161-09-24",
        end: "1163-05-04",
    },
    {
        name: "長寛",
        start: "1163-05-04",
        end: "1165-07-14",
    },
    {
        name: "永万",
        start: "1165-07-14",
        end: "1166-09-23",
    },
    {
        name: "仁安",
        start: "1166-09-23",
        end: "1169-05-06",
    },
    {
        name: "嘉応",
        start: "1169-05-06",
        end: "1171-05-27",
    },
    {
        name: "承安",
        start: "1171-05-27",
        end: "1175-08-16",
    },
    {
        name: "安元",
        start: "1175-08-16",
        end: "1177-08-29",
    },
    {
        name: "治承",
        start: "1177-08-29",
        end: "1181-08-25",
    },
    {
        name: "養和",
        start: "1181-08-25",
        end: "1182-06-29",
    },
    {
        name: "寿永",
        start: "1182-06-29",
        end: "1184-05-27",
    },
    {
        name: "元暦",
        start: "1184-05-27",
        end: "1185-09-09",
    },
    {
        name: "文治",
        start: "1185-09-09",
        end: "1190-05-16",
    },
    {
        name: "建久",
        start: "1190-05-16",
        end: "1199-05-23",
    },
    {
        name: "正治",
        start: "1199-05-23",
        end: "1201-03-19",
    },
    {
        name: "建仁",
        start: "1201-03-19",
        end: "1204-03-23",
    },
    {
        name: "元久",
        start: "1204-03-23",
        end: "1206-06-05",
    },
    {
        name: "建永",
        start: "1206-06-05",
        end: "1207-11-16",
    },
    {
        name: "承元",
        start: "1207-11-16",
        end: "1211-04-23",
    },
    {
        name: "建暦",
        start: "1211-04-23",
        end: "1214-01-18",
    },
    {
        name: "建保",
        start: "1214-01-18",
        end: "1219-05-27",
    },
    {
        name: "承久",
        start: "1219-05-27",
        end: "1222-05-25",
    },
    {
        name: "貞応",
        start: "1222-05-25",
        end: "1224-12-31",
    },
    {
        name: "元仁",
        start: "1224-12-31",
        end: "1225-05-28",
    },
    {
        name: "嘉禄",
        start: "1225-05-28",
        end: "1228-01-18",
    },
    {
        name: "安貞",
        start: "1228-01-18",
        end: "1229-03-31",
    },
    {
        name: "寛喜",
        start: "1229-03-31",
        end: "1232-04-23",
    },
    {
        name: "貞永",
        start: "1232-04-23",
        end: "1233-05-25",
    },
    {
        name: "天福",
        start: "1233-05-25",
        end: "1234-11-27",
    },
    {
        name: "文暦",
        start: "1234-11-27",
        end: "1235-11-01",
    },
    {
        name: "嘉禎",
        start: "1235-11-01",
        end: "1238-12-30",
    },
    {
        name: "暦仁",
        start: "1238-12-30",
        end: "1239-03-13",
    },
    {
        name: "延応",
        start: "1239-03-13",
        end: "1240-08-05",
    },
    {
        name: "仁治",
        start: "1240-08-05",
        end: "1243-03-18",
    },
    {
        name: "寛元",
        start: "1243-03-18",
        end: "1247-04-05",
    },
    {
        name: "宝治",
        start: "1247-04-05",
        end: "1249-05-02",
    },
    {
        name: "建長",
        start: "1249-05-02",
        end: "1256-10-24",
    },
    {
        name: "康元",
        start: "1256-10-24",
        end: "1257-03-31",
    },
    {
        name: "正嘉",
        start: "1257-03-31",
        end: "1259-04-20",
    },
    {
        name: "正元",
        start: "1259-04-20",
        end: "1260-05-24",
    },
    {
        name: "文応",
        start: "1260-05-24",
        end: "1261-03-22",
    },
    {
        name: "弘長",
        start: "1261-03-22",
        end: "1264-03-27",
    },
    {
        name: "文永",
        start: "1264-03-27",
        end: "1275-05-22",
    },
    {
        name: "建治",
        start: "1275-05-22",
        end: "1278-03-23",
    },
    {
        name: "弘安",
        start: "1278-03-23",
        end: "1288-05-29",
    },
    {
        name: "正応",
        start: "1288-05-29",
        end: "1293-09-06",
    },
    {
        name: "永仁",
        start: "1293-09-06",
        end: "1299-05-25",
    },
    {
        name: "正安",
        start: "1299-05-25",
        end: "1302-12-10",
    },
    {
        name: "乾元",
        start: "1302-12-10",
        end: "1303-09-16",
    },
    {
        name: "嘉元",
        start: "1303-09-16",
        end: "1307-01-18",
    },
    {
        name: "徳治",
        start: "1307-01-18",
        end: "1308-11-22",
    },
    {
        name: "延慶",
        start: "1308-11-22",
        end: "1311-05-17",
    },
    {
        name: "応長",
        start: "1311-05-17",
        end: "1312-04-27",
    },
    {
        name: "正和",
        start: "1312-04-27",
        end: "1317-03-16",
    },
    {
        name: "文保",
        start: "1317-03-16",
        end: "1319-05-18",
    },
    {
        name: "元応",
        start: "1319-05-18",
        end: "1321-03-22",
    },
    {
        name: "元亨",
        start: "1321-03-22",
        end: "1324-12-25",
    },
    {
        name: "正中",
        start: "1324-12-25",
        end: "1326-05-28",
    },
    {
        name: "嘉暦",
        start: "1326-05-28",
        end: "1329-09-22",
    },
    {
        name: "元徳",
        start: "1329-09-22",
        end: "1331-09-11",
    },
    {
        name: "元弘",
        start: "1331-09-11",
        end: "1334-03-05",
    },
    {
        name: "正慶",
        start: "1332-05-23",
        end: "1333-07-07",
    },
    {
        name: "建武",
        start: "1334-03-05",
        end: "1336-04-11",
    },
    {
        name: "延元",
        start: "1336-04-11",
        end: "1340-05-25",
    },
    {
        name: "興国",
        start: "1340-05-25",
        end: "1347-01-20",
    },
    {
        name: "正平",
        start: "1347-01-20",
        end: "1370-08-16",
    },
    {
        name: "建徳",
        start: "1370-08-16",
        end: "1372-05-00",
    },
    {
        name: "文中",
        start: "1372-05-00",
        end: "1375-06-26",
    },
    {
        name: "天授",
        start: "1375-06-26",
        end: "1381-03-06",
    },
    {
        name: "弘和",
        start: "1381-03-06",
        end: "1384-05-18",
    },
    {
        name: "元中",
        start: "1384-05-18",
        end: "1392-11-19",
    },
    {
        name: "暦応",
        start: "1338-10-11",
        end: "1342-06-01",
    },
    {
        name: "康永",
        start: "1342-06-01",
        end: "1345-11-15",
    },
    {
        name: "貞和",
        start: "1345-11-15",
        end: "1350-04-04",
    },
    {
        name: "観応",
        start: "1350-04-04",
        end: "1352-11-04",
    },
    {
        name: "文和",
        start: "1352-11-04",
        end: "1356-04-29",
    },
    {
        name: "延文",
        start: "1356-04-29",
        end: "1361-05-04",
    },
    {
        name: "康安",
        start: "1361-05-04",
        end: "1362-10-11",
    },
    {
        name: "貞治",
        start: "1362-10-11",
        end: "1368-03-07",
    },
    {
        name: "応安",
        start: "1368-03-07",
        end: "1375-03-29",
    },
    {
        name: "永和",
        start: "1375-03-29",
        end: "1379-04-09",
    },
    {
        name: "康暦",
        start: "1379-04-09",
        end: "1381-03-20",
    },
    {
        name: "永徳",
        start: "1381-03-20",
        end: "1384-03-19",
    },
    {
        name: "至徳",
        start: "1384-03-19",
        end: "1387-10-05",
    },
    {
        name: "嘉慶",
        start: "1387-10-05",
        end: "1389-03-07",
    },
    {
        name: "康応",
        start: "1389-03-07",
        end: "1390-04-12",
    },
    {
        name: "明徳",
        start: "1390-04-12",
        end: "1394-08-02",
    },
    {
        name: "応永",
        start: "1394-08-02",
        end: "1428-06-10",
    },
    {
        name: "正長",
        start: "1428-06-10",
        end: "1429-10-03",
    },
    {
        name: "永享",
        start: "1429-10-03",
        end: "1441-03-10",
    },
    {
        name: "嘉吉",
        start: "1441-03-10",
        end: "1444-02-23",
    },
    {
        name: "文安",
        start: "1444-02-23",
        end: "1449-08-16",
    },
    {
        name: "宝徳",
        start: "1449-08-16",
        end: "1452-08-10",
    },
    {
        name: "享徳",
        start: "1452-08-10",
        end: "1455-09-06",
    },
    {
        name: "康正",
        start: "1455-09-06",
        end: "1457-10-16",
    },
    {
        name: "長禄",
        start: "1457-10-16",
        end: "1461-02-01",
    },
    {
        name: "寛正",
        start: "1461-02-01",
        end: "1466-03-14",
    },
    {
        name: "文正",
        start: "1466-03-14",
        end: "1467-04-09",
    },
    {
        name: "応仁",
        start: "1467-04-09",
        end: "1469-06-08",
    },
    {
        name: "文明",
        start: "1469-06-08",
        end: "1487-08-09",
    },
    {
        name: "長享",
        start: "1487-08-09",
        end: "1489-09-16",
    },
    {
        name: "延徳",
        start: "1489-09-16",
        end: "1492-08-12",
    },
    {
        name: "明応",
        start: "1492-08-12",
        end: "1501-03-18",
    },
    {
        name: "文亀",
        start: "1501-03-18",
        end: "1504-03-16",
    },
    {
        name: "永正",
        start: "1504-03-16",
        end: "1521-09-23",
    },
    {
        name: "大永",
        start: "1521-09-23",
        end: "1528-09-03",
    },
    {
        name: "享禄",
        start: "1528-09-03",
        end: "1532-08-29",
    },
    {
        name: "天文",
        start: "1532-08-29",
        end: "1555-11-07",
    },
    {
        name: "弘治",
        start: "1555-11-07",
        end: "1558-03-18",
    },
    {
        name: "永禄",
        start: "1558-03-18",
        end: "1570-05-27",
    },
    {
        name: "元亀",
        start: "1570-05-27",
        end: "1573-08-25",
    },
    {
        name: "天正",
        start: "1573-08-25",
        end: "1593-01-10",
    },
    {
        name: "文禄",
        start: "1593-01-10",
        end: "1596-12-16",
    },
    {
        name: "慶長",
        start: "1596-12-16",
        end: "1615-09-05",
    },
    {
        name: "元和",
        start: "1615-09-05",
        end: "1624-04-17",
    },
    {
        name: "寛永",
        start: "1624-04-17",
        end: "1645-01-13",
    },
    {
        name: "正保",
        start: "1645-01-13",
        end: "1648-04-07",
    },
    {
        name: "慶安",
        start: "1648-04-07",
        end: "1652-10-20",
    },
    {
        name: "承応",
        start: "1652-10-20",
        end: "1655-05-18",
    },
    {
        name: "明暦",
        start: "1655-05-18",
        end: "1658-08-21",
    },
    {
        name: "万治",
        start: "1658-08-21",
        end: "1661-05-23",
    },
    {
        name: "寛文",
        start: "1661-05-23",
        end: "1673-10-30",
    },
    {
        name: "延宝",
        start: "1673-10-30",
        end: "1681-11-09",
    },
    {
        name: "天和",
        start: "1681-11-09",
        end: "1684-04-05",
    },
    {
        name: "貞享",
        start: "1684-04-05",
        end: "1688-10-23",
    },
    {
        name: "元禄",
        start: "1688-10-23",
        end: "1704-04-16",
    },
    {
        name: "宝永",
        start: "1704-04-16",
        end: "1711-06-11",
    },
    {
        name: "正徳",
        start: "1711-06-11",
        end: "1716-08-09",
    },
    {
        name: "享保",
        start: "1716-08-09",
        end: "1736-06-07",
    },
    {
        name: "元文",
        start: "1736-06-07",
        end: "1741-04-12",
    },
    {
        name: "寛保",
        start: "1741-04-12",
        end: "1744-04-03",
    },
    {
        name: "延享",
        start: "1744-04-03",
        end: "1748-08-05",
    },
    {
        name: "寛延",
        start: "1748-08-05",
        end: "1751-12-14",
    },
    {
        name: "宝暦",
        start: "1751-12-14",
        end: "1764-06-30",
    },
    {
        name: "明和",
        start: "1764-06-30",
        end: "1772-12-10",
    },
    {
        name: "安永",
        start: "1772-12-10",
        end: "1781-04-25",
    },
    {
        name: "天明",
        start: "1781-04-25",
        end: "1789-02-19",
    },
    {
        name: "寛政",
        start: "1789-02-19",
        end: "1801-03-19",
    },
    {
        name: "享和",
        start: "1801-03-19",
        end: "1804-03-22",
    },
    {
        name: "文化",
        start: "1804-03-22",
        end: "1818-05-26",
    },
    {
        name: "文政",
        start: "1818-05-26",
        end: "1831-01-23",
    },
    {
        name: "天保",
        start: "1831-01-23",
        end: "1845-01-09",
    },
    {
        name: "弘化",
        start: "1845-01-09",
        end: "1848-04-01",
    },
    {
        name: "嘉永",
        start: "1848-04-01",
        end: "1855-01-15",
    },
    {
        name: "安政",
        start: "1855-01-15",
        end: "1860-04-08",
    },
    {
        name: "万延",
        start: "1860-04-08",
        end: "1861-03-29",
    },
    {
        name: "文久",
        start: "1861-03-29",
        end: "1864-03-27",
    },
    {
        name: "元治",
        start: "1864-03-27",
        end: "1865-05-01",
    },
    {
        name: "慶応",
        start: "1865-05-01",
        end: "1868-10-23",
    },
    {
        name: "明治",
        start: "1868-01-25",
        end: "1912-07-29",
    },
    {
        name: "大正",
        start: "1912-07-30",
        end: "1926-12-24",
    },
    {
        name: "昭和",
        start: "1926-12-25",
        end: "1989-01-07",
    },
    {
        name: "平成",
        start: "1989-01-08",
        end: "2019-04-30",
    },
    {
        name: "令和",
        start: "2019-05-01",
        end: "",
    },
];

export default japaneseEra;
