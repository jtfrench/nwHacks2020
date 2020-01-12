/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/


var defaultWidth =
  window.screen.width > 768
    ? (window.screen.width * 1) / 3
    : window.screen.width;

var style = {
  Wrapper: {},
  Containers: {
    DefaultStyle: {
      position: "fixed",
      width: defaultWidth,
      padding: "10px 10px 10px 20px",
      zIndex: 9998,
      WebkitBoxSizing: "",
      MozBoxSizing: "",
      boxSizing: "",
      height: "auto",
      display: "inline-block",
      border: "0",
      fontSize: "14px",
      WebkitFontSmoothing: "antialiased",
      fontFamily: '"Roboto","Helvetica Neue",Arial,sans-serif',
      fontWeight: "400",
      color: "#FFFFFF"
    },

    tl: {
      top: "0px",
      bottom: "auto",
      left: "0px",
      right: "auto"
    },

    tr: {
      top: "0px",
      bottom: "auto",
      left: "auto",
      right: "0px"
    },

    tc: {
      top: "0px",
      bottom: "auto",
      margin: "0 auto",
      left: "50%",
      marginLeft: -(defaultWidth / 2)
    },

    bl: {
      top: "auto",
      bottom: "0px",
      left: "0px",
      right: "auto"
    },

    br: {
      top: "auto",
      bottom: "0px",
      left: "auto",
      right: "0px"
    },

    bc: {
      top: "auto",
      bottom: "0px",
      margin: "0 auto",
      left: "50%",
      marginLeft: -(defaultWidth / 2)
    }
  },

  NotificationItem: {
    DefaultStyle: {
      position: "relative",
      width: "100%",
      cursor: "pointer",
      borderRadius: "4px",
      fontSize: "14px",
      margin: "10px 0 0",
      padding: "10px",
      display: "block",
      WebkitBoxSizing: "border-box",
      MozBoxSizing: "border-box",
      boxSizing: "border-box",
      opacity: 0,
      transition: "all 0.5s ease-in-out",
      WebkitTransform: "translate3d(0, 0, 0)",
      transform: "translate3d(0, 0, 0)",
      willChange: "transform, opacity",

      isHidden: {
        opacity: 0
      },

      isVisible: {
        opacity: 1
      }
    },

    success: {
      borderTop: 0,
      backgroundColor: "#a1e82c",
      WebkitBoxShadow: 0,
      MozBoxShadow: 0,
      boxShadow: 0
    },

    error: {
      borderTop: 0,
      backgroundColor: "#fc727a",
      WebkitBoxShadow: 0,
      MozBoxShadow: 0,
      boxShadow: 0
    },

    warning: {
      borderTop: 0,
      backgroundColor: "#ffbc67",
      WebkitBoxShadow: 0,
      MozBoxShadow: 0,
      boxShadow: 0
    },

    info: {
      borderTop: 0,
      backgroundColor: "#63d8f1",
      WebkitBoxShadow: 0,
      MozBoxShadow: 0,
      boxShadow: 0
    }
  },

  Title: {
    DefaultStyle: {
      fontSize: "30px",
      margin: "0",
      padding: 0,
      fontWeight: "bold",
      color: "#FFFFFF",
      display: "block",
      left: "15px",
      position: "absolute",
      top: "50%",
      marginTop: "-15px"
    }
  },

  MessageWrapper: {
    DefaultStyle: {
      marginLeft: "55px",
      marginRight: "30px",
      padding: "0 12px 0 0",
      color: "#FFFFFF",
      maxWidthwidth: "89%"
    }
  },

  Dismiss: {
    DefaultStyle: {
      fontFamily: "inherit",
      fontSize: "21px",
      color: "#000",
      float: "right",
      position: "absolute",
      right: "10px",
      top: "50%",
      marginTop: "-13px",
      backgroundColor: "#FFFFFF",
      display: "block",
      borderRadius: "50%",
      opacity: ".4",
      lineHeight: "11px",
      width: "25px",
      height: "25px",
      outline: "0 !important",
      textAlign: "center",
      padding: "6px 3px 3px 3px",
      fontWeight: "300",
      marginLeft: "65px"
    },

    success: {
      // color: '#f0f5ea',
      // backgroundColor: '#a1e82c'
    },

    error: {
      // color: '#f4e9e9',
      // backgroundColor: '#fc727a'
    },

    warning: {
      // color: '#f9f6f0',
      // backgroundColor: '#ffbc67'
    },

    info: {
      // color: '#e8f0f4',
      // backgroundColor: '#63d8f1'
    }
  },

  Action: {
    DefaultStyle: {
      background: "#ffffff",
      borderRadius: "2px",
      padding: "6px 20px",
      fontWeight: "bold",
      margin: "10px 0 0 0",
      border: 0
    },

    success: {
      backgroundColor: "#a1e82c",
      color: "#ffffff"
    },

    error: {
      backgroundColor: "#fc727a",
      color: "#ffffff"
    },

    warning: {
      backgroundColor: "#ffbc67",
      color: "#ffffff"
    },

    info: {
      backgroundColor: "#63d8f1",
      color: "#ffffff"
    }
  },

  ActionWrapper: {
    DefaultStyle: {
      margin: 0,
      padding: 0
    }
  }
};

//
// //
// // // For tables
// //
//
const thArray = ["Day", "Hours of Sleep", "REM Sleep", "Sleep Time", "Wake up Time", "Location"];
const tdArray = [['1', '2', '0', '10:26', '5:26', 'Friend'], ['2', '4', '1', '9:20', '8:20', 'Home'], ['3', '8', '2', '11:59', '5:59', 'Friend'], ['4', '3', '1', '11:36', '8:36', 'Home'], ['5', '8', '2', '8:56', '8:56', 'Partner'], ['6', '8', '2', '11:22', '5:22', 'Home'], ['7', '6', '1', '8:42', '7:42', 'Home'], ['8', '6', '1', '10:59', '6:59', 'Home'], ['9', '0', '0', '10:31', '5:31', 'Home'], ['10', '5', '1', '8:14', '5:14', 'Partner'], ['11', '5', '1', '10:32', '6:32', 'Home'], ['12', '8', '2', '10:10', '7:10', 'Home'], ['13', '3', '1', '9:54', '6:54', 'Friend'], ['14', '9', '2', '9:29', '6:29', 'Home'], ['15', '1', '0', '10:38', '8:38', 'Partner'], ['16', '3', '1', '8:21', '5:21', 'Home'], ['17', '0', '0', '11:25', '5:25', 'Friend'], ['18', '2', '0', '9:12', '5:12', 'Home'], ['19', '2', '0', '11:34', '7:34', 'Friend'], ['20', '6', '1', '11:42', '7:42', 'Partner'], ['21', '5', '1', '8:51', '5:51', 'Home'], ['22', '6', '1', '11:49', '7:49', 'Home'], ['23', '7', '1', '8:57', '6:57', 'Home'], ['24', '3', '1', '10:22', '6:22', 'Home'], ['25', '6', '1', '10:52', '8:52', 'Friend'], ['26', '3', '1', '8:39', '8:39', 'Home'], ['27', '1', '0', '9:57', '7:57', 'Partner'], ['28', '3', '1', '11:16', '7:16', 'Home'], ['29', '4', '1', '9:12', '5:12', 'Home'], ['30', '2', '0', '11:10', '8:10', 'Partner'], ['31', '4', '1', '8:13', '7:13', 'Partner'], ['32', '3', '1', '11:35', '6:35', 'Home'], ['33', '5', '1', '9:42', '8:42', 'Friend'], ['34', '0', '0', '11:42', '7:42', 'Home'], ['35', '8', '2', '9:17', '6:17', 'Friend'], ['36', '8', '2', '10:20', '5:20', 'Home'], ['37', '4', '1', '11:15', '7:15', 'Home'], ['38', '3', '1', '10:58', '5:58', 'Home'], ['39', '0', '0', '9:40', '6:40', 'Friend'], ['40', '3', '1', '11:25', '8:25', 'Home'], ['41', '3', '1', '8:21', '6:21', 'Partner'], ['42', '2', '0', '11:36', '6:36', 'Home'], ['43', '0', '0', '9:40', '8:40', 'Home'], ['44', '9', '2', '11:57', '8:57', 'Friend'], ['45', '7', '1', '9:50', '5:50', 'Home'], ['46', '8', '2', '11:26', '6:26', 'Home'], ['47', '0', '0', '11:54', '6:54', 'Partner'], ['48', '8', '2', '9:29', '5:29', 'Friend'], ['49', '7', '1', '9:55', '5:55', 'Home'], ['50', '8', '2', '11:45', '7:45', 'Partner'], ['51', '1', '0', '11:19', '5:19', 'Home'], ['52', '0', '0', '10:57', '7:57', 'Friend'], ['53', '4', '1', '10:13', '8:13', 'Partner'], ['54', '4', '1', '9:37', '7:37', 'Home'], ['55', '0', '0', '8:26', '5:26', 'Home'], ['56', '8', '2', '8:18', '7:18', 'Home'], ['57', '4', '1', '11:52', '6:52', 'Home'], ['58', '8', '2', '10:50', '7:50', 'Home'], ['59', '5', '1', '8:30', '6:30', 'Home'], ['60', '1', '0', '11:41', '6:41', 'Home'], ['61', '4', '1', '11:14', '5:14', 'Friend'], ['62', '8', '2', '11:38', '7:38', 'Home'], ['63', '7', '1', '10:29', '6:29', 'Home'], ['64', '2', '0', '11:17', '7:17', 'Home'], ['65', '3', '1', '11:57', '8:57', 'Home'], ['66', '9', '2', '10:37', '5:37', 'Partner'], ['67', '1', '0', '10:49', '8:49', 'Home'], ['68', '3', '1', '10:47', '8:47', 'Home'], ['69', '2', '0', '9:44', '7:44', 'Home'], ['70', '3', '1', '10:31', '5:31', 'Home'], ['71', '1', '0', '11:42', '7:42', 'Friend'], ['72', '0', '0', '9:32', '6:32', 'Friend'], ['73', '9', '2', '8:31', '8:31', 'Home'], ['74', '0', '0', '8:40', '7:40', 'Home'], ['75', '8', '2', '11:20', '6:20', 'Home'], ['76', '7', '1', '11:14', '8:14', 'Friend'], ['77', '7', '1', '11:29', '5:29', 'Home'], ['78', '0', '0', '10:55', '7:55', 'Home'], ['79', '0', '0', '10:59', '8:59', 'Partner'], ['80', '3', '1', '8:47', '5:47', 'Home'], ['81', '1', '0', '10:54', '5:54', 'Home'], ['82', '7', '1', '8:51', '6:51', 'Friend'], ['83', '2', '0', '11:19', '5:19', 'Friend'], ['84', '2', '0', '8:43', '5:43', 'Home'], ['85', '1', '0', '8:41', '5:41', 'Home'], ['86', '6', '1', '11:10', '5:10', 'Home'], ['87', '9', '2', '11:25', '5:25', 'Friend'], ['88', '9', '2', '11:40', '8:40', 'Partner'], ['89', '8', '2', '10:38', '7:38', 'Partner'], ['90', '9', '2', '10:26', '8:26', 'Home'], ['91', '8', '2', '9:24', '6:24', 'Home'], ['92', '1', '0', '8:47', '5:47', 'Home'], ['93', '8', '2', '9:40', '6:40', 'Home'], ['94', '7', '1', '10:15', '8:15', 'Home'], ['95', '3', '1', '8:36', '5:36', 'Home'], ['96', '2', '0', '9:36', '6:36', 'Friend'], ['97', '2', '0', '10:14', '7:14', 'Friend'], ['98', '0', '0', '10:32', '7:32', 'Home'], ['99', '7', '1', '8:18', '7:18', 'Home'], ['100', '1', '0', '8:50', '6:50', 'Home'], ['101', '0', '0', '9:49', '7:49', 'Home'], ['102', '2', '0', '11:26', '6:26', 'Home'], ['103', '6', '1', '8:20', '7:20', 'Home'], ['104', '7', '1', '8:30', '7:30', 'Partner'], ['105', '8', '2', '8:11', '7:11', 'Home'], ['106', '2', '0', '11:21', '8:21', 'Home'], ['107', '2', '0', '9:58', '5:58', 'Home'], ['108', '9', '2', '9:17', '6:17', 'Partner'], ['109', '9', '2', '11:53', '6:53', 'Friend'], ['110', '1', '0', '10:20', '6:20', 'Friend'], ['111', '4', '1', '8:11', '5:11', 'Home'], ['112', '4', '1', '8:18', '6:18', 'Home'], ['113', '6', '1', '11:10', '6:10', 'Partner'], ['114', '6', '1', '10:22', '5:22', 'Home'], ['115', '7', '1', '10:39', '5:39', 'Partner'], ['116', '0', '0', '8:20', '6:20', 'Home'], ['117', '1', '0', '10:41', '8:41', 'Partner'], ['118', '6', '1', '8:54', '6:54', 'Friend'], ['119', '9', '2', '11:23', '8:23', 'Home'], ['120', '7', '1', '11:16', '7:16', 'Home'], ['121', '7', '1', '8:20', '8:20', 'Home'], ['122', '7', '1', '8:45', '7:45', 'Partner'], ['123', '9', '2', '8:19', '6:19', 'Home'], ['124', '2', '0', '11:34', '7:34', 'Home'], ['125', '1', '0', '9:54', '5:54', 'Home'], ['126', '8', '2', '11:17', '7:17', 'Home'], ['127', '1', '0', '11:15', '8:15', 'Partner'], ['128', '4', '1', '11:12', '6:12', 'Home'], ['129', '3', '1', '11:38', '8:38', 'Home'], ['130', '2', '0', '9:30', '6:30', 'Home'], ['131', '3', '1', '10:48', '5:48', 'Home'], ['132', '9', '2', '8:22', '6:22', 'Home'], ['133', '2', '0', '11:18', '5:18', 'Home'], ['134', '8', '2', '9:39', '6:39', 'Partner'], ['135', '0', '0', '10:46', '6:46', 'Home'], ['136', '7', '1', '9:58', '5:58', 'Home'], ['137', '9', '2', '11:27', '5:27', 'Partner'], ['138', '8', '2', '8:15', '6:15', 'Partner'], ['139', '2', '0', '8:13', '6:13', 'Friend'], ['140', '9', '2', '8:17', '5:17', 'Friend'], ['141', '8', '2', '10:11', '8:11', 'Partner'], ['142', '7', '1', '8:28', '5:28', 'Home'], ['143', '2', '0', '10:23', '6:23', 'Partner'], ['144', '4', '1', '9:34', '8:34', 'Friend'], ['145', '9', '2', '10:13', '8:13', 'Home'], ['146', '0', '0', '9:28', '8:28', 'Partner'], ['147', '6', '1', '8:46', '7:46', 'Home'], ['148', '7', '1', '11:53', '8:53', 'Home'], ['149', '4', '1', '9:48', '5:48', 'Home'], ['150', '5', '1', '11:26', '5:26', 'Home'], ['151', '5', '1', '11:58', '8:58', 'Home'], ['152', '8', '2', '9:14', '8:14', 'Friend'], ['153', '2', '0', '9:22', '7:22', 'Friend'], ['154', '8', '2', '8:51', '8:51', 'Home'], ['155', '5', '1', '10:12', '8:12', 'Home'], ['156', '2', '0', '8:34', '5:34', 'Home'], ['157', '4', '1', '9:21', '7:21', 'Home'], ['158', '2', '0', '10:37', '6:37', 'Home'], ['159', '8', '2', '9:48', '8:48', 'Partner'], ['160', '5', '1', '8:48', '5:48', 'Home'], ['161', '2', '0', '8:16', '5:16', 'Home'], ['162', '6', '1', '10:34', '5:34', 'Home'], ['163', '2', '0', '9:27', '8:27', 'Home'], ['164', '3', '1', '9:26', '5:26', 'Home'], ['165', '3', '1', '8:17', '6:17', 'Friend'], ['166', '3', '1', '9:21', '6:21', 'Friend'], ['167', '4', '1', '11:52', '8:52', 'Partner'], ['168', '6', '1', '11:32', '8:32', 'Home'], ['169', '2', '0', '11:57', '8:57', 'Partner'], ['170', '9', '2', '9:35', '6:35', 'Partner'], ['171', '7', '1', '10:21', '5:21', 'Home'], ['172', '0', '0', '8:44', '5:44', 'Home'], ['173', '0', '0', '10:37', '6:37', 'Home'], ['174', '0', '0', '10:56', '8:56', 'Home'], ['175', '6', '1', '10:15', '8:15', 'Home'], ['176', '7', '1', '10:38', '5:38', 'Friend'], ['177', '3', '1', '9:33', '6:33', 'Home'], ['178', '9', '2', '8:25', '6:25', 'Home'], ['179', '7', '1', '10:20', '5:20', 'Home'], ['180', '1', '0', '9:24', '6:24', 'Home'], ['181', '1', '0', '9:43', '5:43', 'Partner'], ['182', '8', '2', '11:21', '5:21', 'Home'], ['183', '2', '0', '11:33', '5:33', 'Home'], ['184', '3', '1', '8:32', '8:32', 'Home'], ['185', '5', '1', '9:55', '5:55', 'Home'], ['186', '1', '0', '8:39', '8:39', 'Friend'], ['187', '9', '2', '10:14', '5:14', 'Partner'], ['188', '8', '2', '10:35', '7:35', 'Home'], ['189', '1', '0', '10:44', '7:44', 'Home'], ['190', '5', '1', '10:54', '8:54', 'Home'], ['191', '7', '1', '10:38', '5:38', 'Home'], ['192', '4', '1', '11:52', '5:52', 'Friend'], ['193', '0', '0', '11:30', '5:30', 'Friend'], ['194', '9', '2', '9:34', '8:34', 'Partner'], ['195', '9', '2', '8:46', '6:46', 'Friend'], ['196', '5', '1', '11:39', '8:39', 'Home'], ['197', '1', '0', '10:37', '6:37', 'Home'], ['198', '7', '1', '8:36', '7:36', 'Home'], ['199', '1', '0', '9:39', '7:39', 'Home'], ['200', '7', '1', '10:40', '5:40', 'Home'], ['201', '3', '1', '10:39', '5:39', 'Partner'], ['202', '8', '2', '8:14', '6:14', 'Home'], ['203', '1', '0', '8:36', '6:36', 'Friend'], ['204', '8', '2', '11:12', '6:12', 'Friend'], ['205', '5', '1', '10:59', '5:59', 'Home'], ['206', '4', '1', '10:25', '6:25', 'Friend'], ['207', '6', '1', '9:37', '6:37', 'Friend'], ['208', '7', '1', '11:45', '7:45', 'Friend'], ['209', '3', '1', '10:23', '7:23', 'Friend'], ['210', '2', '0', '8:27', '5:27', 'Home'], ['211', '9', '2', '11:58', '5:58', 'Home'], ['212', '1', '0', '8:16', '8:16', 'Friend'], ['213', '3', '1', '9:27', '5:27', 'Partner'], ['214', '1', '0', '9:15', '7:15', 'Home'], ['215', '7', '1', '8:25', '6:25', 'Partner'], ['216', '1', '0', '9:49', '6:49', 'Partner'], ['217', '2', '0', '10:18', '6:18', 'Home'], ['218', '0', '0', '10:42', '8:42', 'Partner'], ['219', '2', '0', '9:33', '7:33', 'Partner'], ['220', '2', '0', '10:24', '6:24', 'Friend'], ['221', '4', '1', '11:56', '7:56', 'Friend'], ['222', '6', '1', '8:50', '8:50', 'Friend'], ['223', '9', '2', '10:22', '8:22', 'Home'], ['224', '2', '0', '9:11', '8:11', 'Home'], ['225', '5', '1', '8:35', '6:35', 'Home'], ['226', '6', '1', '8:20', '7:20', 'Home'], ['227', '7', '1', '8:17', '7:17', 'Home'], ['228', '2', '0', '11:41', '6:41', 'Friend'], ['229', '2', '0', '9:37', '6:37', 'Friend'], ['230', '2', '0', '11:58', '8:58', 'Home'], ['231', '4', '1', '9:24', '5:24', 'Friend'], ['232', '7', '1', '8:21', '7:21', 'Home'], ['233', '5', '1', '8:36', '7:36', 'Home'], ['234', '9', '2', '8:38', '6:38', 'Home'], ['235', '8', '2', '11:38', '5:38', 'Home'], ['236', '9', '2', '10:59', '8:59', 'Friend'], ['237', '2', '0', '9:42', '6:42', 'Home'], ['238', '3', '1', '10:18', '7:18', 'Home'], ['239', '3', '1', '11:26', '7:26', 'Friend'], ['240', '6', '1', '10:21', '7:21', 'Home'], ['241', '0', '0', '11:19', '5:19', 'Home'], ['242', '8', '2', '8:50', '8:50', 'Partner'], ['243', '7', '1', '10:37', '8:37', 'Home'], ['244', '9', '2', '9:23', '7:23', 'Home'], ['245', '7', '1', '9:50', '8:50', 'Partner'], ['246', '3', '1', '11:50', '8:50', 'Home'], ['247', '4', '1', '8:35', '7:35', 'Home'], ['248', '8', '2', '10:10', '8:10', 'Home'], ['249', '7', '1', '10:27', '6:27', 'Friend'], ['250', '3', '1', '11:11', '8:11', 'Home'], ['251', '0', '0', '10:21', '6:21', 'Friend'], ['252', '0', '0', '9:22', '6:22', 'Friend'], ['253', '5', '1', '10:59', '8:59', 'Home'], ['254', '9', '2', '10:10', '6:10', 'Partner'], ['255', '7', '1', '11:37', '6:37', 'Home'], ['256', '7', '1', '10:45', '7:45', 'Home'], ['257', '0', '0', '9:26', '7:26', 'Friend'], ['258', '6', '1', '9:57', '5:57', 'Home'], ['259', '4', '1', '10:17', '6:17', 'Home'], ['260', '6', '1', '9:36', '8:36', 'Home'], ['261', '7', '1', '8:19', '7:19', 'Friend'], ['262', '1', '0', '10:32', '7:32', 'Friend'], ['263', '2', '0', '10:12', '6:12', 'Home'], ['264', '6', '1', '10:40', '7:40', 'Home'], ['265', '3', '1', '8:50', '6:50', 'Home'], ['266', '2', '0', '11:49', '6:49', 'Home'], ['267', '9', '2', '10:17', '7:17', 'Partner'], ['268', '6', '1', '10:49', '5:49', 'Home'], ['269', '0', '0', '10:17', '8:17', 'Partner'], ['270', '4', '1', '11:48', '6:48', 'Home'], ['271', '4', '1', '8:32', '7:32', 'Home'], ['272', '7', '1', '9:34', '8:34', 'Home'], ['273', '9', '2', '10:45', '6:45', 'Home'], ['274', '7', '1', '9:18', '6:18', 'Home'], ['275', '0', '0', '10:41', '7:41', 'Friend'], ['276', '8', '2', '10:41', '6:41', 'Partner'], ['277', '1', '0', '11:38', '7:38', 'Home'], ['278', '5', '1', '11:59', '6:59', 'Home'], ['279', '3', '1', '10:28', '5:28', 'Partner'], ['280', '2', '0', '10:49', '7:49', 'Friend'], ['281', '4', '1', '11:20', '5:20', 'Home'], ['282', '4', '1', '8:49', '6:49', 'Partner'], ['283', '3', '1', '10:18', '8:18', 'Home'], ['284', '1', '0', '9:37', '5:37', 'Home'], ['285', '4', '1', '9:52', '8:52', 'Home'], ['286', '9', '2', '8:12', '7:12', 'Home'], ['287', '1', '0', '8:25', '6:25', 'Friend'], ['288', '0', '0', '11:35', '6:35', 'Home'], ['289', '6', '1', '9:31', '7:31', 'Home'], ['290', '4', '1', '10:48', '8:48', 'Home'], ['291', '6', '1', '9:37', '6:37', 'Friend'], ['292', '9', '2', '11:29', '8:29', 'Home'], ['293', '6', '1', '11:15', '7:15', 'Home'], ['294', '1', '0', '9:16', '8:16', 'Home'], ['295', '1', '0', '10:48', '5:48', 'Home'], ['296', '2', '0', '8:29', '5:29', 'Partner'], ['297', '8', '2', '11:50', '8:50', 'Partner'], ['298', '7', '1', '11:33', '8:33', 'Friend'], ['299', '7', '1', '8:58', '7:58', 'Home'], ['300', '6', '1', '10:43', '5:43', 'Home'], ['301', '9', '2', '10:57', '7:57', 'Home'], ['302', '6', '1', '9:28', '5:28', 'Home'], ['303', '5', '1', '8:14', '5:14', 'Home'], ['304', '4', '1', '10:45', '5:45', 'Home'], ['305', '6', '1', '8:49', '6:49', 'Home'], ['306', '8', '2', '8:34', '5:34', 'Home'], ['307', '6', '1', '11:21', '6:21', 'Partner'], ['308', '6', '1', '8:56', '7:56', 'Home'], ['309', '2', '0', '9:43', '7:43', 'Partner'], ['310', '1', '0', '10:39', '7:39', 'Home'], ['311', '4', '1', '9:14', '6:14', 'Friend'], ['312', '9', '2', '8:29', '8:29', 'Home'], ['313', '9', '2', '9:37', '6:37', 'Home'], ['314', '4', '1', '11:22', '6:22', 'Home'], ['315', '2', '0', '8:12', '6:12', 'Friend'], ['316', '2', '0', '9:39', '6:39', 'Home'], ['317', '8', '2', '11:37', '8:37', 'Home'], ['318', '7', '1', '8:24', '6:24', 'Friend'], ['319', '4', '1', '11:13', '6:13', 'Home'], ['320', '1', '0', '11:16', '7:16', 'Home'], ['321', '7', '1', '10:55', '6:55', 'Partner'], ['322', '8', '2', '9:55', '5:55', 'Friend'], ['323', '5', '1', '8:43', '6:43', 'Home'], ['324', '4', '1', '9:47', '6:47', 'Home'], ['325', '4', '1', '11:47', '5:47', 'Home'], ['326', '6', '1', '10:32', '7:32', 'Home'], ['327', '2', '0', '8:25', '6:25', 'Friend'], ['328', '9', '2', '11:30', '6:30', 'Home'], ['329', '8', '2', '9:24', '8:24', 'Friend'], ['330', '2', '0', '11:57', '7:57', 'Friend'], ['331', '6', '1', '8:21', '5:21', 'Home'], ['332', '9', '2', '8:40', '5:40', 'Partner'], ['333', '6', '1', '9:29', '5:29', 'Home'], ['334', '1', '0', '9:24', '8:24', 'Home'], ['335', '2', '0', '8:31', '6:31', 'Home'], ['336', '9', '2', '8:31', '5:31', 'Friend'], ['337', '3', '1', '11:28', '6:28', 'Partner'], ['338', '0', '0', '8:51', '6:51', 'Home'], ['339', '8', '2', '8:37', '6:37', 'Partner'], ['340', '2', '0', '8:12', '8:12', 'Home'], ['341', '5', '1', '8:41', '8:41', 'Home'], ['342', '9', '2', '8:19', '7:19', 'Home'], ['343', '1', '0', '10:54', '8:54', 'Home'], ['344', '1', '0', '8:50', '8:50', 'Partner'], ['345', '1', '0', '9:31', '6:31', 'Home'], ['346', '5', '1', '11:45', '6:45', 'Home'], ['347', '0', '0', '9:26', '6:26', 'Home'], ['348', '2', '0', '11:21', '5:21', 'Home'], ['349', '6', '1', '9:49', '8:49', 'Home'], ['350', '9', '2', '8:55', '7:55', 'Home'], ['351', '0', '0', '9:57', '6:57', 'Partner'], ['352', '3', '1', '11:55', '6:55', 'Friend'], ['353', '7', '1', '11:14', '5:14', 'Partner'], ['354', '3', '1', '11:27', '7:27', 'Friend'], ['355', '5', '1', '11:10', '5:10', 'Home'], ['356', '2', '0', '9:17', '8:17', 'Partner'], ['357', '5', '1', '10:43', '8:43', 'Home'], ['358', '0', '0', '10:45', '8:45', 'Home'], ['359', '3', '1', '8:18', '8:18', 'Partner'], ['360', '5', '1', '8:59', '8:59', 'Home'], ['361', '6', '1', '8:38', '5:38', 'Home'], ['362', '1', '0', '11:46', '7:46', 'Home'], ['363', '2', '0', '8:45', '5:45', 'Friend'], ['364', '7', '1', '11:45', '6:45', 'Home'], ['365', 0, 0, 0, 0, 0]]

//
// //
// // // For icons
// //
//
const iconsArray = [
  "pe-7s-album",
  "pe-7s-arc",
  "pe-7s-back-2",
  "pe-7s-bandaid",
  "pe-7s-car",
  "pe-7s-diamond",
  "pe-7s-door-lock",
  "pe-7s-eyedropper",
  "pe-7s-female",
  "pe-7s-gym",
  "pe-7s-hammer",
  "pe-7s-headphones",
  "pe-7s-helm",
  "pe-7s-hourglass",
  "pe-7s-leaf",
  "pe-7s-magic-wand",
  "pe-7s-male",
  "pe-7s-map-2",
  "pe-7s-next-2",
  "pe-7s-paint-bucket",
  "pe-7s-pendrive",
  "pe-7s-photo",
  "pe-7s-piggy",
  "pe-7s-plugin",
  "pe-7s-refresh-2",
  "pe-7s-rocket",
  "pe-7s-settings",
  "pe-7s-shield",
  "pe-7s-smile",
  "pe-7s-usb",
  "pe-7s-vector",
  "pe-7s-wine",
  "pe-7s-cloud-upload",
  "pe-7s-cash",
  "pe-7s-close",
  "pe-7s-bluetooth",
  "pe-7s-cloud-download",
  "pe-7s-way",
  "pe-7s-close-circle",
  "pe-7s-id",
  "pe-7s-angle-up",
  "pe-7s-wristwatch",
  "pe-7s-angle-up-circle",
  "pe-7s-world",
  "pe-7s-angle-right",
  "pe-7s-volume",
  "pe-7s-angle-right-circle",
  "pe-7s-users",
  "pe-7s-angle-left",
  "pe-7s-user-female",
  "pe-7s-angle-left-circle",
  "pe-7s-up-arrow",
  "pe-7s-angle-down",
  "pe-7s-switch",
  "pe-7s-angle-down-circle",
  "pe-7s-scissors",
  "pe-7s-wallet",
  "pe-7s-safe",
  "pe-7s-volume2",
  "pe-7s-volume1",
  "pe-7s-voicemail",
  "pe-7s-video",
  "pe-7s-user",
  "pe-7s-upload",
  "pe-7s-unlock",
  "pe-7s-umbrella",
  "pe-7s-trash",
  "pe-7s-tools",
  "pe-7s-timer",
  "pe-7s-ticket",
  "pe-7s-target",
  "pe-7s-sun",
  "pe-7s-study",
  "pe-7s-stopwatch",
  "pe-7s-star",
  "pe-7s-speaker",
  "pe-7s-signal",
  "pe-7s-shuffle",
  "pe-7s-shopbag",
  "pe-7s-share",
  "pe-7s-server",
  "pe-7s-search",
  "pe-7s-film",
  "pe-7s-science",
  "pe-7s-disk",
  "pe-7s-ribbon",
  "pe-7s-repeat",
  "pe-7s-refresh",
  "pe-7s-add-user",
  "pe-7s-refresh-cloud",
  "pe-7s-paperclip",
  "pe-7s-radio",
  "pe-7s-note2",
  "pe-7s-print",
  "pe-7s-network",
  "pe-7s-prev",
  "pe-7s-mute",
  "pe-7s-power",
  "pe-7s-medal",
  "pe-7s-portfolio",
  "pe-7s-like2",
  "pe-7s-plus",
  "pe-7s-left-arrow",
  "pe-7s-play",
  "pe-7s-key",
  "pe-7s-plane",
  "pe-7s-joy",
  "pe-7s-photo-gallery",
  "pe-7s-pin",
  "pe-7s-phone",
  "pe-7s-plug",
  "pe-7s-pen",
  "pe-7s-right-arrow",
  "pe-7s-paper-plane",
  "pe-7s-delete-user",
  "pe-7s-paint",
  "pe-7s-bottom-arrow",
  "pe-7s-notebook",
  "pe-7s-note",
  "pe-7s-next",
  "pe-7s-news-paper",
  "pe-7s-musiclist",
  "pe-7s-music",
  "pe-7s-mouse",
  "pe-7s-more",
  "pe-7s-moon",
  "pe-7s-monitor",
  "pe-7s-micro",
  "pe-7s-menu",
  "pe-7s-map",
  "pe-7s-map-marker",
  "pe-7s-mail",
  "pe-7s-mail-open",
  "pe-7s-mail-open-file",
  "pe-7s-magnet",
  "pe-7s-loop",
  "pe-7s-look",
  "pe-7s-lock",
  "pe-7s-lintern",
  "pe-7s-link",
  "pe-7s-like",
  "pe-7s-light",
  "pe-7s-less",
  "pe-7s-keypad",
  "pe-7s-junk",
  "pe-7s-info",
  "pe-7s-home",
  "pe-7s-help2",
  "pe-7s-help1",
  "pe-7s-graph3",
  "pe-7s-graph2",
  "pe-7s-graph1",
  "pe-7s-graph",
  "pe-7s-global",
  "pe-7s-gleam",
  "pe-7s-glasses",
  "pe-7s-gift",
  "pe-7s-folder",
  "pe-7s-flag",
  "pe-7s-filter",
  "pe-7s-file",
  "pe-7s-expand1",
  "pe-7s-exapnd2",
  "pe-7s-edit",
  "pe-7s-drop",
  "pe-7s-drawer",
  "pe-7s-download",
  "pe-7s-display2",
  "pe-7s-display1",
  "pe-7s-diskette",
  "pe-7s-date",
  "pe-7s-cup",
  "pe-7s-culture",
  "pe-7s-crop",
  "pe-7s-credit",
  "pe-7s-copy-file",
  "pe-7s-config",
  "pe-7s-compass",
  "pe-7s-comment",
  "pe-7s-coffee",
  "pe-7s-cloud",
  "pe-7s-clock",
  "pe-7s-check",
  "pe-7s-chat",
  "pe-7s-cart",
  "pe-7s-camera",
  "pe-7s-call",
  "pe-7s-calculator",
  "pe-7s-browser",
  "pe-7s-box2",
  "pe-7s-box1",
  "pe-7s-bookmarks",
  "pe-7s-bicycle",
  "pe-7s-bell",
  "pe-7s-battery",
  "pe-7s-ball",
  "pe-7s-back",
  "pe-7s-attention",
  "pe-7s-anchor",
  "pe-7s-albums",
  "pe-7s-alarm",
  "pe-7s-airplay"
];

//
// //
// // // // For dashboard's charts
// //
//
// Data for Pie Chart
var dataPie = {
  labels: [
    "S",
    "M",
    "T",
    "W",
    "T",
    "F",
    "S",
  ],
  strokeColor: "rgba(0,0,0,0.8)",
  series: [
    [6, 6, 6, 3, 9, 8, 5, 6,]
  ]
};
var legendPie = {
  names: ["Hours Slept"], 
  types: ["info"],
  fillColor: "rgba(0,0,0,0.5)",

};

// Data for Line Chart
var dataSales = {
  labels: [
    "9:00PM",
    "10:00PM",
    "11:00PM",
    "12:00AM",
    "1:00AM",
    "2:00AM",
    "3:00AM",
    "4:00AM", 
    "5:00AM", 
    "6:00AM"
  ],
  series: [
    [9, 6, 2, 4, 2, 2, 2, 3, 2, 5, 8]
  ]
};
var optionsSales = {
  low: 0,
  high: 10,
  showArea: false,
  height: "280px",
  displayTitle: true,
  axisY: {
    showGrid: true,
    displayTitle: true,
      text: 'pls'
    }
  },
  axisX: {
    showGrid: false,
    displayTitle: true,
    title: "god work",
  },
  lineSmooth: true,
  displayTitle: true,
  showLine: true,
  showPoint: true,
  fullWidth: true,
  chartPadding: {
    right: 50
  }



var responsiveSales = [
  [
    "screen and (max-width: 640px)",
    {
      axisX: {
        labelInterpolationFnc: function(value) {
          return value[0];
        }
      }
    }
  ]
];
var legendSales = {
  names: ["Motion"],
  types: ["info"]
};

// Data for Bar Chart
var dataBar = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mai",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  series: [
    [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
    [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]
  ]
};
var optionsBar = {
  seriesBarDistance: 10,
  axisX: {
    showGrid: false
  },
  height: "245px"
};
var responsiveBar = [
  [
    "screen and (max-width: 640px)",
    {
      seriesBarDistance: 5,
      axisX: {
        labelInterpolationFnc: function(value) {
          return value[0];
        }
      }
    }
  ]
];
var legendBar = {
  names: ["Tesla Model S", "BMW 5 Series"],
  types: ["info", "danger"]
};

module.exports = {
  style, // For notifications (App container and Notifications view)
  thArray,
  tdArray, // For tables (TableList view)
  iconsArray, // For icons (Icons view)
  dataPie,
  legendPie,
  dataSales,
  optionsSales,
  responsiveSales,
  legendSales,
  dataBar,
  optionsBar,
  responsiveBar,
  legendBar // For charts (Dashboard view)
};
