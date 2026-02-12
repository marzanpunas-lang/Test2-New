"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["public_app_features_admin_UpgradePage_tsx"],{

/***/ "./public/app/features/admin/CrawlerStartButton.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrawlerStartButton": () => (/* binding */ CrawlerStartButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







const CrawlerStartButton = () => {
  var _JSON$stringify;

  const styles = getStyles((0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useTheme2)());
  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [body, setBody] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    mode: 'thumbs',
    theme: _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.config.theme2.isLight ? 'light' : 'dark'
  });

  const onDismiss = () => setOpen(false);

  const doStart = () => {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().post('/api/admin/crawler/start', body).then(v => {
      console.log('GOT', v);
      onDismiss();
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Modal, {
      title: 'Start crawler',
      isOpen: open,
      onDismiss: onDismiss,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: styles.wrap,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.CodeEditor, {
          height: 200,
          value: (_JSON$stringify = JSON.stringify(body, null, 2)) !== null && _JSON$stringify !== void 0 ? _JSON$stringify : '',
          showLineNumbers: false,
          readOnly: false,
          language: "json",
          showMiniMap: false,
          onBlur: text => {
            setBody(JSON.parse(text)); // force JSON?
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Modal.ButtonRow, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
          onClick: doStart,
          children: "Start"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
          variant: "secondary",
          onClick: onDismiss,
          children: "Cancel"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
      onClick: () => setOpen(true),
      variant: "primary",
      children: "Start"
    })]
  });
};

const getStyles = theme => {
  return {
    wrap: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      border: 2px solid #111;
    `
  };
};

/***/ }),

/***/ "./public/app/features/admin/CrawlerStatus.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrawlerStatus": () => (/* binding */ CrawlerStatus)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _CrawlerStartButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/admin/CrawlerStartButton.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _br, _CrawlerStartButton, _CrawlerStartButton2;









const CrawlerStatus = () => {
  const styles = getStyles((0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useTheme2)());
  const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const subscription = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.getGrafanaLiveSrv)().getStream({
      scope: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.LiveChannelScope.Grafana,
      namespace: 'broadcast',
      path: 'crawler'
    }).subscribe({
      next: evt => {
        if ((0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.isLiveChannelMessageEvent)(evt)) {
          setStatus(evt.message);
        } else if ((0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.isLiveChannelStatusEvent)(evt)) {
          setStatus(evt.message);
        }
      }
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  if (!status) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: styles.wrap,
      children: ["No status (never run)", _br || (_br = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br", {})), _CrawlerStartButton || (_CrawlerStartButton = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_CrawlerStartButton__WEBPACK_IMPORTED_MODULE_5__.CrawlerStartButton, {}))]
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: styles.wrap,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("pre", {
      children: JSON.stringify(status, null, 2)
    }), status.state !== 'running' && (_CrawlerStartButton2 || (_CrawlerStartButton2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_CrawlerStartButton__WEBPACK_IMPORTED_MODULE_5__.CrawlerStartButton, {}))), status.state !== 'stopped' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
      variant: "secondary",
      onClick: () => {
        (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.getBackendSrv)().post('/api/admin/crawler/stop');
      },
      children: "Stop"
    })]
  });
};

const getStyles = theme => {
  return {
    wrap: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      border: 4px solid red;
    `,
    running: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      border: 4px solid green;
    `
  };
};

/***/ }),

/***/ "./public/app/features/admin/LicenseChrome.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Circle": () => (/* binding */ Circle),
/* harmony export */   "LicenseChrome": () => (/* binding */ LicenseChrome)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






const title = {
  fontWeight: 500,
  fontSize: '26px',
  lineHeight: '123%'
};
const getStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.stylesFactory)(theme => {
  const backgroundUrl = theme.isDark ? 'public/img/licensing/header_dark.svg' : 'public/img/licensing/header_light.svg';
  const footerBg = theme.isDark ? theme.palette.dark9 : theme.palette.gray6;
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
      padding: 36px 79px;
      background: ${theme.colors.panelBg};
    `,
    footer: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
      text-align: center;
      padding: 16px;
      background: ${footerBg};
    `,
    header: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
      height: 137px;
      padding: 40px 0 0 79px;
      position: relative;
      background: url('${backgroundUrl}') right;
    `
  };
});
function LicenseChrome({
  header,
  editionNotice,
  subheader,
  children
}) {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
  const styles = getStyles(theme);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: styles.header,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
        style: title,
        children: header
      }), subheader && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
        children: subheader
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Circle, {
        size: "128px",
        style: {
          boxShadow: '0px 0px 24px rgba(24, 58, 110, 0.45)',
          background: '#0A1C36',
          position: 'absolute',
          top: '19px',
          left: '71%'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
          src: "public/img/grafana_icon.svg",
          alt: "Grafana",
          width: "80px",
          style: {
            position: 'absolute',
            left: '23px',
            top: '20px'
          }
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: styles.container,
      children: children
    }), editionNotice && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: styles.footer,
      children: editionNotice
    })]
  });
}
const Circle = ({
  size,
  style,
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    style: Object.assign({
      width: size,
      height: size,
      position: 'absolute',
      bottom: 0,
      right: 0,
      borderRadius: '50%'
    }, style),
    children: children
  });
};

/***/ }),

/***/ "./public/app/features/admin/ServerStats.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServerStats": () => (/* binding */ ServerStats)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _state_apis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/admin/state/apis.tsx");
/* harmony import */ var _core_services_context_srv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var _plugins_admin_components_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/plugins/admin/components/Loader.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _CrawlerStatus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/admin/CrawlerStatus.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Loader, _LinkButton, _LinkButton2, _LinkButton3, _LinkButton4, _CrawlerStatus;













const ServerStats = () => {
  const [stats, setStats] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const hasAccessToDataSources = _core_services_context_srv__WEBPACK_IMPORTED_MODULE_5__.contextSrv.hasAccess(app_types__WEBPACK_IMPORTED_MODULE_3__.AccessControlAction.DataSourcesRead, _core_services_context_srv__WEBPACK_IMPORTED_MODULE_5__.contextSrv.isGrafanaAdmin);
  const hasAccessToAdminUsers = _core_services_context_srv__WEBPACK_IMPORTED_MODULE_5__.contextSrv.hasAccess(app_types__WEBPACK_IMPORTED_MODULE_3__.AccessControlAction.UsersRead, _core_services_context_srv__WEBPACK_IMPORTED_MODULE_5__.contextSrv.isGrafanaAdmin);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (_core_services_context_srv__WEBPACK_IMPORTED_MODULE_5__.contextSrv.hasAccess(app_types__WEBPACK_IMPORTED_MODULE_3__.AccessControlAction.ActionServerStatsRead, _core_services_context_srv__WEBPACK_IMPORTED_MODULE_5__.contextSrv.isGrafanaAdmin)) {
      setIsLoading(true);
      (0,_state_apis__WEBPACK_IMPORTED_MODULE_4__.getServerStats)().then(stats => {
        setStats(stats);
        setIsLoading(false);
      });
    }
  }, []);

  if (!_core_services_context_srv__WEBPACK_IMPORTED_MODULE_5__.contextSrv.hasAccess(app_types__WEBPACK_IMPORTED_MODULE_3__.AccessControlAction.ActionServerStatsRead, _core_services_context_srv__WEBPACK_IMPORTED_MODULE_5__.contextSrv.isGrafanaAdmin)) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h2", {
      className: styles.title,
      children: "Instance statistics"
    }), isLoading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: styles.loader,
      children: _Loader || (_Loader = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_plugins_admin_components_Loader__WEBPACK_IMPORTED_MODULE_6__.Loader, {
        text: 'Loading instance stats...'
      }))
    }) : stats ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: styles.row,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(StatCard, {
        content: [{
          name: 'Dashboards (starred)',
          value: `${stats.dashboards} (${stats.stars})`
        }, {
          name: 'Tags',
          value: stats.tags
        }, {
          name: 'Playlists',
          value: stats.playlists
        }, {
          name: 'Snapshots',
          value: stats.snapshots
        }],
        footer: _LinkButton || (_LinkButton = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LinkButton, {
          href: '/dashboards',
          variant: 'secondary',
          children: "Manage dashboards"
        }))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: styles.doubleRow,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(StatCard, {
          content: [{
            name: 'Data sources',
            value: stats.datasources
          }],
          footer: hasAccessToDataSources && (_LinkButton2 || (_LinkButton2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LinkButton, {
            href: '/datasources',
            variant: 'secondary',
            children: "Manage data sources"
          })))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(StatCard, {
          content: [{
            name: 'Alerts',
            value: stats.alerts
          }],
          footer: _LinkButton3 || (_LinkButton3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LinkButton, {
            href: '/alerting/list',
            variant: 'secondary',
            children: "Alerts"
          }))
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(StatCard, {
        content: [{
          name: 'Organisations',
          value: stats.orgs
        }, {
          name: 'Users total',
          value: stats.users
        }, {
          name: 'Active users in last 30 days',
          value: stats.activeUsers
        }, {
          name: 'Active sessions',
          value: stats.activeSessions
        }],
        footer: hasAccessToAdminUsers && (_LinkButton4 || (_LinkButton4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LinkButton, {
          href: '/admin/users',
          variant: 'secondary',
          children: "Manage users"
        })))
      })]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
      className: styles.notFound,
      children: "No stats found."
    }), _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.config.featureToggles.dashboardPreviews && _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.config.featureToggles.dashboardPreviewsAdmin && (_CrawlerStatus || (_CrawlerStatus = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_CrawlerStatus__WEBPACK_IMPORTED_MODULE_8__.CrawlerStatus, {})))]
  });
};

const getStyles = theme => {
  return {
    title: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      margin-bottom: ${theme.spacing(4)};
    `,
    row: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      display: flex;
      justify-content: space-between;
      width: 100%;

      & > div:not(:last-of-type) {
        margin-right: ${theme.spacing(2)};
      }

      & > div {
        width: 33.3%;
      }
    `,
    doubleRow: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      display: flex;
      flex-direction: column;

      & > div:first-of-type {
        margin-bottom: ${theme.spacing(2)};
      }
    `,
    loader: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      height: 290px;
    `,
    notFound: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      font-size: ${theme.typography.h6.fontSize};
      text-align: center;
      height: 290px;
    `
  };
};

const StatCard = ({
  content,
  footer
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getCardStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.CardContainer, {
    className: styles.container,
    disableHover: true,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: styles.inner,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
        className: styles.content,
        children: content.map(item => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
            className: styles.row,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
              children: item.name
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
              children: item.value
            })]
          }, item.name);
        })
      }), footer && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
        children: footer
      })]
    })
  });
};

const getCardStyles = theme => {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      padding: ${theme.spacing(2)};
    `,
    inner: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      display: flex;
      flex-direction: column;
      width: 100%;
    `,
    content: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      flex: 1 0 auto;
    `,
    row: _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-bottom: ${theme.spacing(2)};
      align-items: center;
    `
  };
};

/***/ }),

/***/ "./public/app/features/admin/UpgradePage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpgradeInfo": () => (/* binding */ UpgradeInfo),
/* harmony export */   "UpgradePage": () => (/* binding */ UpgradePage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _core_selectors_navModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _LicenseChrome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/admin/LicenseChrome.tsx");
/* harmony import */ var _ServerStats__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/admin/ServerStats.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Page$Contents;












function UpgradePage({
  navModel
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"], {
    navModel: navModel,
    children: _Page$Contents || (_Page$Contents = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"].Contents, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ServerStats__WEBPACK_IMPORTED_MODULE_7__.ServerStats, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(UpgradeInfo, {})]
    }))
  });
}
const titleStyles = {
  fontWeight: 500,
  fontSize: '26px',
  lineHeight: '123%'
};
const UpgradeInfo = ({
  editionNotice
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_LicenseChrome__WEBPACK_IMPORTED_MODULE_6__.LicenseChrome, {
      header: "AKMind Solutions",
      editionNotice: editionNotice
    })
  });
};

const getStyles = theme => {
  return {
    column: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
      display: grid;
      grid-template-columns: 100%;
      column-gap: 20px;
      row-gap: 40px;

      @media (min-width: 1050px) {
        grid-template-columns: 50% 50%;
      }
    `,
    title: _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
      margin: ${theme.spacing(4)} 0;
    `
  };
};

const List = ({
  children,
  nested
}) => {
  const listStyle = _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
    display: flex;
    flex-direction: column;
    padding-top: 8px;

    > div {
      margin-bottom: ${nested ? 0 : 8}px;
    }
  `;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
    className: listStyle,
    children: children
  });
};

const Item = ({
  children,
  title,
  image
}) => {
  const imageUrl = image ? image : 'public/img/licensing/checkmark.svg';
  const itemStyle = _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
    display: flex;

    > img {
      display: block;
      height: 22px;
      flex-grow: 0;
      padding-right: 12px;
    }
  `;
  const titleStyle = _emotion_css__WEBPACK_IMPORTED_MODULE_2__.css`
    font-weight: 500;
    line-height: 1.7;
  `;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: itemStyle,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
      src: imageUrl,
      alt: ""
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: titleStyle,
        children: title
      }), children]
    })]
  });
};

const mapStateToProps = state => ({
  navModel: (0,_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_5__.getNavModel)(state.navIndex, 'upgrading')
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(UpgradePage));

/***/ }),

/***/ "./public/app/features/admin/state/apis.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerStats": () => (/* binding */ getServerStats)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");

const getServerStats = async () => {
  return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get('api/admin/stats').catch(err => {
    console.error(err);
    return null;
  });
};

/***/ }),

/***/ "./public/app/features/plugins/admin/components/Loader.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Loader": () => (/* binding */ Loader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/plugins/admin/components/Page.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const Loader = ({
  text = 'Loading...'
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Page__WEBPACK_IMPORTED_MODULE_2__.Page, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "page-loader-wrapper",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LoadingPlaceholder, {
        text: text
      })
    })
  });
};

/***/ }),

/***/ "./public/app/features/plugins/admin/components/Page.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Page": () => (/* binding */ Page)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const Page = ({
  children
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: "page-container",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: styles,
      children: children
    })
  });
};

const getStyles = theme => _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
    margin-bottom: ${theme.spacing(3)};
  `;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljX2FwcF9mZWF0dXJlc19hZG1pbl9VcGdyYWRlUGFnZV90c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7Ozs7QUFFTyxNQUFNUyxrQkFBa0IsR0FBRyxNQUFNO0FBQUE7O0FBQ3RDLFFBQU1DLE1BQU0sR0FBR0MsU0FBUyxDQUFDTCxzREFBUyxFQUFWLENBQXhCO0FBQ0EsUUFBTSxDQUFDTSxJQUFELEVBQU9DLE9BQVAsSUFBa0JaLCtDQUFRLENBQUMsS0FBRCxDQUFoQztBQUNBLFFBQU0sQ0FBQ2EsSUFBRCxFQUFPQyxPQUFQLElBQWtCZCwrQ0FBUSxDQUFDO0FBQy9CZSxJQUFBQSxJQUFJLEVBQUUsUUFEeUI7QUFFL0JDLElBQUFBLEtBQUssRUFBRVQsbUVBQUEsR0FBd0IsT0FBeEIsR0FBa0M7QUFGVixHQUFELENBQWhDOztBQUlBLFFBQU1ZLFNBQVMsR0FBRyxNQUFNUCxPQUFPLENBQUMsS0FBRCxDQUEvQjs7QUFDQSxRQUFNUSxPQUFPLEdBQUcsTUFBTTtBQUNwQmQsSUFBQUEsK0RBQWEsR0FDVmUsSUFESCxDQUNRLDBCQURSLEVBQ29DUixJQURwQyxFQUVHUyxJQUZILENBRVNDLENBQUQsSUFBTztBQUNYQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaLEVBQW1CRixDQUFuQjtBQUNBSixNQUFBQSxTQUFTO0FBQ1YsS0FMSDtBQU1ELEdBUEQ7O0FBU0Esc0JBQ0U7QUFBQSw0QkFDRSx3REFBQyw4Q0FBRDtBQUFPLFdBQUssRUFBRSxlQUFkO0FBQStCLFlBQU0sRUFBRVIsSUFBdkM7QUFBNkMsZUFBUyxFQUFFUSxTQUF4RDtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBRVYsTUFBTSxDQUFDaUIsSUFBdkI7QUFBQSwrQkFDRSx1REFBQyxtREFBRDtBQUNFLGdCQUFNLEVBQUUsR0FEVjtBQUVFLGVBQUsscUJBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlZixJQUFmLEVBQXFCLElBQXJCLEVB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Ozs7Ozs7Ozs7Ozs7QUN0QlA7QUFDQTtBQUNBOztBQU1PLE1BQU05RCxNQUFNLEdBQUcsQ0FBQztBQUFFL0QsRUFBQUEsSUFBSSxHQUFHO0FBQVQsQ0FBRCxLQUFvQztBQUN4RCxzQkFDRSx1REFBQyx1Q0FBRDtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLHFCQUFmO0FBQUEsNkJBQ0UsdURBQUMsMkRBQUQ7QUFBb0IsWUFBSSxFQUFFQTtBQUExQjtBQURGO0FBREYsSUFERjtBQU9ELENBUk07Ozs7Ozs7Ozs7Ozs7OztBQ1JQO0FBQ0E7QUFDQTs7QUFHTyxNQUFNMEcsSUFBYyxHQUFHLENBQUM7QUFBRS9ELEVBQUFBO0FBQUYsQ0FBRCxLQUFrQjtBQUM5QyxRQUFNL0QsTUFBTSxHQUFHK0UsdURBQVUsQ0FBQzlFLFNBQUQsQ0FBekI7QUFDQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFFRCxNQUFoQjtBQUFBLGdCQUF5QitEO0FBQXpCO0FBREYsSUFERjtBQUtELENBUE07O0FBU1AsTUFBTTlELFNBQVMsR0FBSU0sS0FBRCxJQUNoQmYsNkNBQUk7QUFDTixxQkFBcUJlLEtBQUssQ0FBQzZHLE9BQU4sQ0FBYyxDQUFkLENBQWlCO0FBQ3RDLEdBSEEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hZG1pbi9DcmF3bGVyU3RhcnRCdXR0b24udHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FkbWluL0NyYXdsZXJTdGF0dXMudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FkbWluL0xpY2Vuc2VDaHJvbWUudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FkbWluL1NlcnZlclN0YXRzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hZG1pbi9VcGdyYWRlUGFnZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWRtaW4vc3RhdGUvYXBpcy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGx1Z2lucy9hZG1pbi9jb21wb25lbnRzL0xvYWRlci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGx1Z2lucy9hZG1pbi9jb21wb25lbnRzL1BhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBCdXR0b24sIENvZGVFZGl0b3IsIE1vZGFsLCB1c2VUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBnZXRCYWNrZW5kU3J2LCBjb25maWcgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcblxuZXhwb3J0IGNvbnN0IENyYXdsZXJTdGFydEJ1dHRvbiA9ICgpID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gZ2V0U3R5bGVzKHVzZVRoZW1lMigpKTtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbYm9keSwgc2V0Qm9keV0gPSB1c2VTdGF0ZSh7XG4gICAgbW9kZTogJ3RodW1icycsXG4gICAgdGhlbWU6IGNvbmZpZy50aGVtZTIuaXNMaWdodCA/ICdsaWdodCcgOiAnZGFyaycsXG4gIH0pO1xuICBjb25zdCBvbkRpc21pc3MgPSAoKSA9PiBzZXRPcGVuKGZhbHNlKTtcbiAgY29uc3QgZG9TdGFydCA9ICgpID0+IHtcbiAgICBnZXRCYWNrZW5kU3J2KClcbiAgICAgIC5wb3N0KCcvYXBpL2FkbWluL2NyYXdsZXIvc3RhcnQnLCBib2R5KVxuICAgICAgLnRoZW4oKHYpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0dPVCcsIHYpO1xuICAgICAgICBvbkRpc21pc3MoKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxNb2RhbCB0aXRsZT17J1N0YXJ0IGNyYXdsZXInfSBpc09wZW49e29wZW59IG9uRGlzbWlzcz17b25EaXNtaXNzfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwfT5cbiAgICAgICAgICA8Q29kZUVkaXRvclxuICAgICAgICAgICAgaGVpZ2h0PXsyMDB9XG4gICAgICAgICAgICB2YWx1ZT17SlNPTi5zdHJpbmdpZnkoYm9keSwgbnVsbCwgMikgPz8gJyd9XG4gICAgICAgICAgICBzaG93TGluZU51bWJlcnM9e2ZhbHNlfVxuICAgICAgICAgICAgcmVhZE9ubHk9e2ZhbHNlfVxuICAgICAgICAgICAgbGFuZ3VhZ2U9XCJqc29uXCJcbiAgICAgICAgICAgIHNob3dNaW5pTWFwPXtmYWxzZX1cbiAgICAgICAgICAgIG9uQmx1cj17KHRleHQ6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICBzZXRCb2R5KEpTT04ucGFyc2UodGV4dCkpOyAvLyBmb3JjZSBKU09OP1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPE1vZGFsLkJ1dHRvblJvdz5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2RvU3RhcnR9PlN0YXJ0PC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgb25DbGljaz17b25EaXNtaXNzfT5cbiAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L01vZGFsLkJ1dHRvblJvdz5cbiAgICAgIDwvTW9kYWw+XG5cbiAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gc2V0T3Blbih0cnVlKX0gdmFyaWFudD1cInByaW1hcnlcIj5cbiAgICAgICAgU3RhcnRcbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiB7XG4gIHJldHVybiB7XG4gICAgd3JhcDogY3NzYFxuICAgICAgYm9yZGVyOiAycHggc29saWQgIzExMTtcbiAgICBgLFxuICB9O1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IEJ1dHRvbiwgdXNlVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiwgaXNMaXZlQ2hhbm5lbE1lc3NhZ2VFdmVudCwgaXNMaXZlQ2hhbm5lbFN0YXR1c0V2ZW50LCBMaXZlQ2hhbm5lbFNjb3BlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBnZXRCYWNrZW5kU3J2LCBnZXRHcmFmYW5hTGl2ZVNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgQ3Jhd2xlclN0YXJ0QnV0dG9uIH0gZnJvbSAnLi9DcmF3bGVyU3RhcnRCdXR0b24nO1xuXG5pbnRlcmZhY2UgQ3Jhd2xlclN0YXR1c01lc3NhZ2Uge1xuICBzdGF0ZTogc3RyaW5nO1xuICBzdGFydGVkOiBzdHJpbmc7XG4gIGZpbmlzaGVkOiBzdHJpbmc7XG4gIGNvbXBsZXRlOiBudW1iZXI7XG4gIHF1ZXVlOiBudW1iZXI7XG4gIGxhc3Q6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IENyYXdsZXJTdGF0dXMgPSAoKSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IGdldFN0eWxlcyh1c2VUaGVtZTIoKSk7XG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZTxDcmF3bGVyU3RhdHVzTWVzc2FnZT4oKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IGdldEdyYWZhbmFMaXZlU3J2KClcbiAgICAgIC5nZXRTdHJlYW08Q3Jhd2xlclN0YXR1c01lc3NhZ2U+KHtcbiAgICAgICAgc2NvcGU6IExpdmVDaGFubmVsU2NvcGUuR3JhZmFuYSxcbiAgICAgICAgbmFtZXNwYWNlOiAnYnJvYWRjYXN0JyxcbiAgICAgICAgcGF0aDogJ2NyYXdsZXInLFxuICAgICAgfSlcbiAgICAgIC5zdWJzY3JpYmUoe1xuICAgICAgICBuZXh0OiAoZXZ0KSA9PiB7XG4gICAgICAgICAgaWYgKGlzTGl2ZUNoYW5uZWxNZXNzYWdlRXZlbnQoZXZ0KSkge1xuICAgICAgICAgICAgc2V0U3RhdHVzKGV2dC5tZXNzYWdlKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzTGl2ZUNoYW5uZWxTdGF0dXNFdmVudChldnQpKSB7XG4gICAgICAgICAgICBzZXRTdGF0dXMoZXZ0Lm1lc3NhZ2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgaWYgKCFzdGF0dXMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwfT5cbiAgICAgICAgTm8gc3RhdHVzIChuZXZlciBydW4pXG4gICAgICAgIDxiciAvPlxuICAgICAgICA8Q3Jhd2xlclN0YXJ0QnV0dG9uIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXB9PlxuICAgICAgPHByZT57SlNPTi5zdHJpbmdpZnkoc3RhdHVzLCBudWxsLCAyKX08L3ByZT5cbiAgICAgIHtzdGF0dXMuc3RhdGUgIT09ICdydW5uaW5nJyAmJiA8Q3Jhd2xlclN0YXJ0QnV0dG9uIC8+fVxuICAgICAge3N0YXR1cy5zdGF0ZSAhPT0gJ3N0b3BwZWQnICYmIChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGdldEJhY2tlbmRTcnYoKS5wb3N0KCcvYXBpL2FkbWluL2NyYXdsZXIvc3RvcCcpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBTdG9wXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4ge1xuICByZXR1cm4ge1xuICAgIHdyYXA6IGNzc2BcbiAgICAgIGJvcmRlcjogNHB4IHNvbGlkIHJlZDtcbiAgICBgLFxuICAgIHJ1bm5pbmc6IGNzc2BcbiAgICAgIGJvcmRlcjogNHB4IHNvbGlkIGdyZWVuO1xuICAgIGAsXG4gIH07XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHN0eWxlc0ZhY3RvcnksIHVzZVRoZW1lIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IEdyYWZhbmFUaGVtZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5jb25zdCB0aXRsZSA9IHsgZm9udFdlaWdodDogNTAwLCBmb250U2l6ZTogJzI2cHgnLCBsaW5lSGVpZ2h0OiAnMTIzJScgfTtcblxuY29uc3QgZ2V0U3R5bGVzID0gc3R5bGVzRmFjdG9yeSgodGhlbWU6IEdyYWZhbmFUaGVtZSkgPT4ge1xuICBjb25zdCBiYWNrZ3JvdW5kVXJsID0gdGhlbWUuaXNEYXJrID8gJ3B1YmxpYy9pbWcvbGljZW5zaW5nL2hlYWRlcl9kYXJrLnN2ZycgOiAncHVibGljL2ltZy9saWNlbnNpbmcvaGVhZGVyX2xpZ2h0LnN2Zyc7XG4gIGNvbnN0IGZvb3RlckJnID0gdGhlbWUuaXNEYXJrID8gdGhlbWUucGFsZXR0ZS5kYXJrOSA6IHRoZW1lLnBhbGV0dGUuZ3JheTY7XG5cbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXI6IGNzc2BcbiAgICAgIHBhZGRpbmc6IDM2cHggNzlweDtcbiAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLnBhbmVsQmd9O1xuICAgIGAsXG4gICAgZm9vdGVyOiBjc3NgXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgYmFja2dyb3VuZDogJHtmb290ZXJCZ307XG4gICAgYCxcbiAgICBoZWFkZXI6IGNzc2BcbiAgICAgIGhlaWdodDogMTM3cHg7XG4gICAgICBwYWRkaW5nOiA0MHB4IDAgMCA3OXB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgYmFja2dyb3VuZDogdXJsKCcke2JhY2tncm91bmRVcmx9JykgcmlnaHQ7XG4gICAgYCxcbiAgfTtcbn0pO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBoZWFkZXI6IHN0cmluZztcbiAgc3ViaGVhZGVyPzogc3RyaW5nO1xuICBlZGl0aW9uTm90aWNlPzogc3RyaW5nO1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIExpY2Vuc2VDaHJvbWUoeyBoZWFkZXIsIGVkaXRpb25Ob3RpY2UsIHN1YmhlYWRlciwgY2hpbGRyZW4gfTogUHJvcHMpIHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCBzdHlsZXMgPSBnZXRTdHlsZXModGhlbWUpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgPGgyIHN0eWxlPXt0aXRsZX0+e2hlYWRlcn08L2gyPlxuICAgICAgICB7c3ViaGVhZGVyICYmIDxoMz57c3ViaGVhZGVyfTwvaDM+fVxuXG4gICAgICAgIDxDaXJjbGVcbiAgICAgICAgICBzaXplPVwiMTI4cHhcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBib3hTaGFkb3c6ICcwcHggMHB4IDI0cHggcmdiYSgyNCwgNTgsIDExMCwgMC40NSknLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogJyMwQTFDMzYnLFxuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICB0b3A6ICcxOXB4JyxcbiAgICAgICAgICAgIGxlZnQ6ICc3MSUnLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9XCJwdWJsaWMvaW1nL2dyYWZhbmFfaWNvbi5zdmdcIlxuICAgICAgICAgICAgYWx0PVwiR3JhZmFuYVwiXG4gICAgICAgICAgICB3aWR0aD1cIjgwcHhcIlxuICAgICAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIGxlZnQ6ICcyM3B4JywgdG9wOiAnMjBweCcgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0NpcmNsZT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+e2NoaWxkcmVufTwvZGl2PlxuXG4gICAgICB7ZWRpdGlvbk5vdGljZSAmJiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+e2VkaXRpb25Ob3RpY2V9PC9kaXY+fVxuICAgIDwvPlxuICApO1xufVxuXG5pbnRlcmZhY2UgQ2lyY2xlUHJvcHMge1xuICBzaXplOiBzdHJpbmc7XG4gIHN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllcztcbn1cblxuZXhwb3J0IGNvbnN0IENpcmNsZTogUmVhY3QuRkM8Q2lyY2xlUHJvcHM+ID0gKHsgc2l6ZSwgc3R5bGUsIGNoaWxkcmVuIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17e1xuICAgICAgICB3aWR0aDogc2l6ZSxcbiAgICAgICAgaGVpZ2h0OiBzaXplLFxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgICAgLi4uc3R5bGUsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBDYXJkQ29udGFpbmVyLCBMaW5rQnV0dG9uLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQWNjZXNzQ29udHJvbEFjdGlvbiB9IGZyb20gJ2FwcC90eXBlcyc7XG5pbXBvcnQgeyBnZXRTZXJ2ZXJTdGF0cywgU2VydmVyU3RhdCB9IGZyb20gJy4vc3RhdGUvYXBpcyc7XG5pbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnLi4vLi4vY29yZS9zZXJ2aWNlcy9jb250ZXh0X3Nydic7XG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tICcuLi9wbHVnaW5zL2FkbWluL2NvbXBvbmVudHMvTG9hZGVyJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgQ3Jhd2xlclN0YXR1cyB9IGZyb20gJy4vQ3Jhd2xlclN0YXR1cyc7XG5cbmV4cG9ydCBjb25zdCBTZXJ2ZXJTdGF0cyA9ICgpID0+IHtcbiAgY29uc3QgW3N0YXRzLCBzZXRTdGF0c10gPSB1c2VTdGF0ZTxTZXJ2ZXJTdGF0IHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcblxuICBjb25zdCBoYXNBY2Nlc3NUb0RhdGFTb3VyY2VzID0gY29udGV4dFNydi5oYXNBY2Nlc3MoQWNjZXNzQ29udHJvbEFjdGlvbi5EYXRhU291cmNlc1JlYWQsIGNvbnRleHRTcnYuaXNHcmFmYW5hQWRtaW4pO1xuICBjb25zdCBoYXNBY2Nlc3NUb0FkbWluVXNlcnMgPSBjb250ZXh0U3J2Lmhhc0FjY2VzcyhBY2Nlc3NDb250cm9sQWN0aW9uLlVzZXJzUmVhZCwgY29udGV4dFNydi5pc0dyYWZhbmFBZG1pbik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY29udGV4dFNydi5oYXNBY2Nlc3MoQWNjZXNzQ29udHJvbEFjdGlvbi5BY3Rpb25TZXJ2ZXJTdGF0c1JlYWQsIGNvbnRleHRTcnYuaXNHcmFmYW5hQWRtaW4pKSB7XG4gICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgICBnZXRTZXJ2ZXJTdGF0cygpLnRoZW4oKHN0YXRzKSA9PiB7XG4gICAgICAgIHNldFN0YXRzKHN0YXRzKTtcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGlmICghY29udGV4dFNydi5oYXNBY2Nlc3MoQWNjZXNzQ29udHJvbEFjdGlvbi5BY3Rpb25TZXJ2ZXJTdGF0c1JlYWQsIGNvbnRleHRTcnYuaXNHcmFmYW5hQWRtaW4pKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9Pkluc3RhbmNlIHN0YXRpc3RpY3M8L2gyPlxuICAgICAge2lzTG9hZGluZyA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2FkZXJ9PlxuICAgICAgICAgIDxMb2FkZXIgdGV4dD17J0xvYWRpbmcgaW5zdGFuY2Ugc3RhdHMuLi4nfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiBzdGF0cyA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yb3d9PlxuICAgICAgICAgIDxTdGF0Q2FyZFxuICAgICAgICAgICAgY29udGVudD17W1xuICAgICAgICAgICAgICB7IG5hbWU6ICdEYXNoYm9hcmRzIChzdGFycmVkKScsIHZhbHVlOiBgJHtzdGF0cy5kYXNoYm9hcmRzfSAoJHtzdGF0cy5zdGFyc30pYCB9LFxuICAgICAgICAgICAgICB7IG5hbWU6ICdUYWdzJywgdmFsdWU6IHN0YXRzLnRhZ3MgfSxcbiAgICAgICAgICAgICAgeyBuYW1lOiAnUGxheWxpc3RzJywgdmFsdWU6IHN0YXRzLnBsYXlsaXN0cyB9LFxuICAgICAgICAgICAgICB7IG5hbWU6ICdTbmFwc2hvdHMnLCB2YWx1ZTogc3RhdHMuc25hcHNob3RzIH0sXG4gICAgICAgICAgICBdfVxuICAgICAgICAgICAgZm9vdGVyPXtcbiAgICAgICAgICAgICAgPExpbmtCdXR0b24gaHJlZj17Jy9kYXNoYm9hcmRzJ30gdmFyaWFudD17J3NlY29uZGFyeSd9PlxuICAgICAgICAgICAgICAgIE1hbmFnZSBkYXNoYm9hcmRzXG4gICAgICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kb3VibGVSb3d9PlxuICAgICAgICAgICAgPFN0YXRDYXJkXG4gICAgICAgICAgICAgIGNvbnRlbnQ9e1t7IG5hbWU6ICdEYXRhIHNvdXJjZXMnLCB2YWx1ZTogc3RhdHMuZGF0YXNvdXJjZXMgfV19XG4gICAgICAgICAgICAgIGZvb3Rlcj17XG4gICAgICAgICAgICAgICAgaGFzQWNjZXNzVG9EYXRhU291cmNlcyAmJiAoXG4gICAgICAgICAgICAgICAgICA8TGlua0J1dHRvbiBocmVmPXsnL2RhdGFzb3VyY2VzJ30gdmFyaWFudD17J3NlY29uZGFyeSd9PlxuICAgICAgICAgICAgICAgICAgICBNYW5hZ2UgZGF0YSBzb3VyY2VzXG4gICAgICAgICAgICAgICAgICA8L0xpbmtCdXR0b24+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFN0YXRDYXJkXG4gICAgICAgICAgICAgIGNvbnRlbnQ9e1t7IG5hbWU6ICdBbGVydHMnLCB2YWx1ZTogc3RhdHMuYWxlcnRzIH1dfVxuICAgICAgICAgICAgICBmb290ZXI9e1xuICAgICAgICAgICAgICAgIDxMaW5rQnV0dG9uIGhyZWY9eycvYWxlcnRpbmcvbGlzdCd9IHZhcmlhbnQ9eydzZWNvbmRhcnknfT5cbiAgICAgICAgICAgICAgICAgIEFsZXJ0c1xuICAgICAgICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8U3RhdENhcmRcbiAgICAgICAgICAgIGNvbnRlbnQ9e1tcbiAgICAgICAgICAgICAgeyBuYW1lOiAnT3JnYW5pc2F0aW9ucycsIHZhbHVlOiBzdGF0cy5vcmdzIH0sXG4gICAgICAgICAgICAgIHsgbmFtZTogJ1VzZXJzIHRvdGFsJywgdmFsdWU6IHN0YXRzLnVzZXJzIH0sXG4gICAgICAgICAgICAgIHsgbmFtZTogJ0FjdGl2ZSB1c2VycyBpbiBsYXN0IDMwIGRheXMnLCB2YWx1ZTogc3RhdHMuYWN0aXZlVXNlcnMgfSxcbiAgICAgICAgICAgICAgeyBuYW1lOiAnQWN0aXZlIHNlc3Npb25zJywgdmFsdWU6IHN0YXRzLmFjdGl2ZVNlc3Npb25zIH0sXG4gICAgICAgICAgICBdfVxuICAgICAgICAgICAgZm9vdGVyPXtcbiAgICAgICAgICAgICAgaGFzQWNjZXNzVG9BZG1pblVzZXJzICYmIChcbiAgICAgICAgICAgICAgICA8TGlua0J1dHRvbiBocmVmPXsnL2FkbWluL3VzZXJzJ30gdmFyaWFudD17J3NlY29uZGFyeSd9PlxuICAgICAgICAgICAgICAgICAgTWFuYWdlIHVzZXJzXG4gICAgICAgICAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5ub3RGb3VuZH0+Tm8gc3RhdHMgZm91bmQuPC9wPlxuICAgICAgKX1cblxuICAgICAge2NvbmZpZy5mZWF0dXJlVG9nZ2xlcy5kYXNoYm9hcmRQcmV2aWV3cyAmJiBjb25maWcuZmVhdHVyZVRvZ2dsZXMuZGFzaGJvYXJkUHJldmlld3NBZG1pbiAmJiA8Q3Jhd2xlclN0YXR1cyAvPn1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBjc3NgXG4gICAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNpbmcoNCl9O1xuICAgIGAsXG4gICAgcm93OiBjc3NgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICYgPiBkaXY6bm90KDpsYXN0LW9mLXR5cGUpIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAke3RoZW1lLnNwYWNpbmcoMil9O1xuICAgICAgfVxuXG4gICAgICAmID4gZGl2IHtcbiAgICAgICAgd2lkdGg6IDMzLjMlO1xuICAgICAgfVxuICAgIGAsXG4gICAgZG91YmxlUm93OiBjc3NgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgJiA+IGRpdjpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgICAgIH1cbiAgICBgLFxuXG4gICAgbG9hZGVyOiBjc3NgXG4gICAgICBoZWlnaHQ6IDI5MHB4O1xuICAgIGAsXG5cbiAgICBub3RGb3VuZDogY3NzYFxuICAgICAgZm9udC1zaXplOiAke3RoZW1lLnR5cG9ncmFwaHkuaDYuZm9udFNpemV9O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgaGVpZ2h0OiAyOTBweDtcbiAgICBgLFxuICB9O1xufTtcblxudHlwZSBTdGF0Q2FyZFByb3BzID0ge1xuICBjb250ZW50OiBBcnJheTxSZWNvcmQ8c3RyaW5nLCBudW1iZXIgfCBzdHJpbmc+PjtcbiAgZm9vdGVyPzogSlNYLkVsZW1lbnQgfCBib29sZWFuO1xufTtcblxuY29uc3QgU3RhdENhcmQgPSAoeyBjb250ZW50LCBmb290ZXIgfTogU3RhdENhcmRQcm9wcykgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldENhcmRTdHlsZXMpO1xuICByZXR1cm4gKFxuICAgIDxDYXJkQ29udGFpbmVyIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0gZGlzYWJsZUhvdmVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbm5lcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XG4gICAgICAgICAge2NvbnRlbnQubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17aXRlbS5uYW1lfSBjbGFzc05hbWU9e3N0eWxlcy5yb3d9PlxuICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtLnZhbHVlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2Zvb3RlciAmJiA8ZGl2Pntmb290ZXJ9PC9kaXY+fVxuICAgICAgPC9kaXY+XG4gICAgPC9DYXJkQ29udGFpbmVyPlxuICApO1xufTtcblxuY29uc3QgZ2V0Q2FyZFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4ge1xuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcjogY3NzYFxuICAgICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgICBgLFxuICAgIGlubmVyOiBjc3NgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIGAsXG4gICAgY29udGVudDogY3NzYFxuICAgICAgZmxleDogMSAwIGF1dG87XG4gICAgYCxcbiAgICByb3c6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZygyKX07XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGAsXG4gIH07XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgTGlua0J1dHRvbiwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIsIE5hdk1vZGVsIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgUGFnZSBmcm9tICcuLi8uLi9jb3JlL2NvbXBvbmVudHMvUGFnZS9QYWdlJztcbmltcG9ydCB7IGdldE5hdk1vZGVsIH0gZnJvbSAnLi4vLi4vY29yZS9zZWxlY3RvcnMvbmF2TW9kZWwnO1xuaW1wb3J0IHsgTGljZW5zZUNocm9tZSB9IGZyb20gJy4vTGljZW5zZUNocm9tZSc7XG5pbXBvcnQgeyBTdG9yZVN0YXRlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgU2VydmVyU3RhdHMgfSBmcm9tICcuL1NlcnZlclN0YXRzJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgbmF2TW9kZWw6IE5hdk1vZGVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gVXBncmFkZVBhZ2UoeyBuYXZNb2RlbCB9OiBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICA8UGFnZS5Db250ZW50cz5cbiAgICAgICAgPFNlcnZlclN0YXRzIC8+XG4gICAgICAgIDxVcGdyYWRlSW5mbyAvPlxuICAgICAgPC9QYWdlLkNvbnRlbnRzPlxuICAgIDwvUGFnZT5cbiAgKTtcbn1cblxuY29uc3QgdGl0bGVTdHlsZXMgPSB7IGZvbnRXZWlnaHQ6IDUwMCwgZm9udFNpemU6ICcyNnB4JywgbGluZUhlaWdodDogJzEyMyUnIH07XG5cbmludGVyZmFjZSBVcGdyYWRlSW5mb1Byb3BzIHtcbiAgZWRpdGlvbk5vdGljZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IFVwZ3JhZGVJbmZvOiBSZWFjdC5GQzxVcGdyYWRlSW5mb1Byb3BzPiA9ICh7IGVkaXRpb25Ob3RpY2UgfSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPExpY2Vuc2VDaHJvbWUgaGVhZGVyPVwiQUtNaW5kIFNvbHV0aW9uc1wiIGVkaXRpb25Ob3RpY2U9e2VkaXRpb25Ob3RpY2V9IC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjb2x1bW46IGNzc2BcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XG4gICAgICBjb2x1bW4tZ2FwOiAyMHB4O1xuICAgICAgcm93LWdhcDogNDBweDtcblxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEwNTBweCkge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XG4gICAgICB9XG4gICAgYCxcbiAgICB0aXRsZTogY3NzYFxuICAgICAgbWFyZ2luOiAke3RoZW1lLnNwYWNpbmcoNCl9IDA7XG4gICAgYCxcbiAgfTtcbn07XG5cblxuXG5pbnRlcmZhY2UgTGlzdFByb3BzIHtcbiAgbmVzdGVkPzogYm9vbGVhbjtcbn1cblxuY29uc3QgTGlzdDogUmVhY3QuRkM8TGlzdFByb3BzPiA9ICh7IGNoaWxkcmVuLCBuZXN0ZWQgfSkgPT4ge1xuICBjb25zdCBsaXN0U3R5bGUgPSBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmctdG9wOiA4cHg7XG5cbiAgICA+IGRpdiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAke25lc3RlZCA/IDAgOiA4fXB4O1xuICAgIH1cbiAgYDtcblxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2xpc3RTdHlsZX0+e2NoaWxkcmVufTwvZGl2Pjtcbn07XG5cbmludGVyZmFjZSBJdGVtUHJvcHMge1xuICB0aXRsZTogc3RyaW5nO1xuICBpbWFnZT86IHN0cmluZztcbn1cblxuY29uc3QgSXRlbTogUmVhY3QuRkM8SXRlbVByb3BzPiA9ICh7IGNoaWxkcmVuLCB0aXRsZSwgaW1hZ2UgfSkgPT4ge1xuICBjb25zdCBpbWFnZVVybCA9IGltYWdlID8gaW1hZ2UgOiAncHVibGljL2ltZy9saWNlbnNpbmcvY2hlY2ttYXJrLnN2Zyc7XG4gIGNvbnN0IGl0ZW1TdHlsZSA9IGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgPiBpbWcge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBoZWlnaHQ6IDIycHg7XG4gICAgICBmbGV4LWdyb3c6IDA7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xuICAgIH1cbiAgYDtcbiAgY29uc3QgdGl0bGVTdHlsZSA9IGNzc2BcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjc7XG4gIGA7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17aXRlbVN0eWxlfT5cbiAgICAgIDxpbWcgc3JjPXtpbWFnZVVybH0gYWx0PVwiXCIgLz5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aXRsZVN0eWxlfT57dGl0bGV9PC9kaXY+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBTdG9yZVN0YXRlKSA9PiAoe1xuICBuYXZNb2RlbDogZ2V0TmF2TW9kZWwoc3RhdGUubmF2SW5kZXgsICd1cGdyYWRpbmcnKSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoVXBncmFkZVBhZ2UpO1xuIiwiaW1wb3J0IHsgZ2V0QmFja2VuZFNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlcnZlclN0YXQge1xuICBhY3RpdmVBZG1pbnM6IG51bWJlcjtcbiAgYWN0aXZlRWRpdG9yczogbnVtYmVyO1xuICBhY3RpdmVTZXNzaW9uczogbnVtYmVyO1xuICBhY3RpdmVVc2VyczogbnVtYmVyO1xuICBhY3RpdmVWaWV3ZXJzOiBudW1iZXI7XG4gIGFkbWluczogbnVtYmVyO1xuICBhbGVydHM6IG51bWJlcjtcbiAgZGFzaGJvYXJkczogbnVtYmVyO1xuICBkYXRhc291cmNlczogbnVtYmVyO1xuICBlZGl0b3JzOiBudW1iZXI7XG4gIG9yZ3M6IG51bWJlcjtcbiAgcGxheWxpc3RzOiBudW1iZXI7XG4gIHNuYXBzaG90czogbnVtYmVyO1xuICBzdGFyczogbnVtYmVyO1xuICB0YWdzOiBudW1iZXI7XG4gIHVzZXJzOiBudW1iZXI7XG4gIHZpZXdlcnM6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclN0YXRzID0gYXN5bmMgKCk6IFByb21pc2U8U2VydmVyU3RhdCB8IG51bGw+ID0+IHtcbiAgcmV0dXJuIGdldEJhY2tlbmRTcnYoKVxuICAgIC5nZXQoJ2FwaS9hZG1pbi9zdGF0cycpXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0pO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMb2FkaW5nUGxhY2Vob2xkZXIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi9QYWdlJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIHRleHQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBMb2FkZXIgPSAoeyB0ZXh0ID0gJ0xvYWRpbmcuLi4nIH06IFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFBhZ2U+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtbG9hZGVyLXdyYXBwZXJcIj5cbiAgICAgICAgPExvYWRpbmdQbGFjZWhvbGRlciB0ZXh0PXt0ZXh0fSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9QYWdlPlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuZXhwb3J0IGNvbnN0IFBhZ2U6IFJlYWN0LkZDID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc30+e2NoaWxkcmVufTwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PlxuICBjc3NgXG4gICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nKDMpfTtcbiAgYDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiY3NzIiwiQnV0dG9uIiwiQ29kZUVkaXRvciIsIk1vZGFsIiwidXNlVGhlbWUyIiwiZ2V0QmFja2VuZFNydiIsImNvbmZpZyIsIkNyYXdsZXJTdGFydEJ1dHRvbiIsInN0eWxlcyIsImdldFN0eWxlcyIsIm9wZW4iLCJzZXRPcGVuIiwiYm9keSIsInNldEJvZHkiLCJtb2RlIiwidGhlbWUiLCJ0aGVtZTIiLCJpc0xpZ2h0Iiwib25EaXNtaXNzIiwiZG9TdGFydCIsInBvc3QiLCJ0aGVuIiwidiIsImNvbnNvbGUiLCJsb2ciLCJ3cmFwIiwiSlNPTiIsInN0cmluZ2lmeSIsInRleHQiLCJwYXJzZSIsInVzZUVmZmVjdCIsImlzTGl2ZUNoYW5uZWxNZXNzYWdlRXZlbnQiLCJpc0xpdmVDaGFubmVsU3RhdHVzRXZlbnQiLCJMaXZlQ2hhbm5lbFNjb3BlIiwiZ2V0R3JhZmFuYUxpdmVTcnYiLCJDcmF3bGVyU3RhdHVzIiwic3RhdHVzIiwic2V0U3RhdHVzIiwic3Vic2NyaXB0aW9uIiwiZ2V0U3RyZWFtIiwic2NvcGUiLCJHcmFmYW5hIiwibmFtZXNwYWNlIiwicGF0aCIsInN1YnNjcmliZSIsIm5leHQiLCJldnQiLCJtZXNzYWdlIiwidW5zdWJzY3JpYmUiLCJzdGF0ZSIsInJ1bm5pbmciLCJzdHlsZXNGYWN0b3J5IiwidXNlVGhlbWUiLCJ0aXRsZSIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJiYWNrZ3JvdW5kVXJsIiwiaXNEYXJrIiwiZm9vdGVyQmciLCJwYWxldHRlIiwiZGFyazkiLCJncmF5NiIsImNvbnRhaW5lciIsImNvbG9ycyIsInBhbmVsQmciLCJmb290ZXIiLCJoZWFkZXIiLCJMaWNlbnNlQ2hyb21lIiwiZWRpdGlvbk5vdGljZSIsInN1YmhlYWRlciIsImNoaWxkcmVuIiwiYm94U2hhZG93IiwiYmFja2dyb3VuZCIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsIkNpcmNsZSIsInNpemUiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiYm90dG9tIiwicmlnaHQiLCJib3JkZXJSYWRpdXMiLCJDYXJkQ29udGFpbmVyIiwiTGlua0J1dHRvbiIsInVzZVN0eWxlczIiLCJBY2Nlc3NDb250cm9sQWN0aW9uIiwiZ2V0U2VydmVyU3RhdHMiLCJjb250ZXh0U3J2IiwiTG9hZGVyIiwiU2VydmVyU3RhdHMiLCJzdGF0cyIsInNldFN0YXRzIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiaGFzQWNjZXNzVG9EYXRhU291cmNlcyIsImhhc0FjY2VzcyIsIkRhdGFTb3VyY2VzUmVhZCIsImlzR3JhZmFuYUFkbWluIiwiaGFzQWNjZXNzVG9BZG1pblVzZXJzIiwiVXNlcnNSZWFkIiwiQWN0aW9uU2VydmVyU3RhdHNSZWFkIiwibG9hZGVyIiwicm93IiwibmFtZSIsInZhbHVlIiwiZGFzaGJvYXJkcyIsInN0YXJzIiwidGFncyIsInBsYXlsaXN0cyIsInNuYXBzaG90cyIsImRvdWJsZVJvdyIsImRhdGFzb3VyY2VzIiwiYWxlcnRzIiwib3JncyIsInVzZXJzIiwiYWN0aXZlVXNlcnMiLCJhY3RpdmVTZXNzaW9ucyIsIm5vdEZvdW5kIiwiZmVhdHVyZVRvZ2dsZXMiLCJkYXNoYm9hcmRQcmV2aWV3cyIsImRhc2hib2FyZFByZXZpZXdzQWRtaW4iLCJzcGFjaW5nIiwidHlwb2dyYXBoeSIsImg2IiwiU3RhdENhcmQiLCJjb250ZW50IiwiZ2V0Q2FyZFN0eWxlcyIsImlubmVyIiwibWFwIiwiaXRlbSIsImNvbm5lY3QiLCJQYWdlIiwiZ2V0TmF2TW9kZWwiLCJVcGdyYWRlUGFnZSIsIm5hdk1vZGVsIiwidGl0bGVTdHlsZXMiLCJVcGdyYWRlSW5mbyIsImNvbHVtbiIsIkxpc3QiLCJuZXN0ZWQiLCJsaXN0U3R5bGUiLCJJdGVtIiwiaW1hZ2UiLCJpbWFnZVVybCIsIml0ZW1TdHlsZSIsInRpdGxlU3R5bGUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJuYXZJbmRleCIsImdldCIsImNhdGNoIiwiZXJyIiwiZXJyb3IiLCJMb2FkaW5nUGxhY2Vob2xkZXIiXSwic291cmNlUm9vdCI6IiJ9