!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports["react-tree-bar-chart"]=t(require("react")):e["react-tree-bar-chart"]=t(e.react)}(this,function(e){return function(e){function __webpack_require__(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,__webpack_require__),n.l=!0,n.exports}var t={};return __webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.i=function(e){return e},__webpack_require__.d=function(e,t,r){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},__webpack_require__.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=10)}([function(e,t){e.exports=require("react")},function(e,t,r){"use strict";function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function isObject(e){return"object"===(void 0===e?"undefined":n(e))}function isDefined(e){return void 0!==e&&null!==e}function isFunction(e){return"function"==typeof e}function Optional(e){return{or:function(t){return isDefined(e)?e:isFunction(t)?t():t},isPresent:function(){return isDefined(e)},get:function(){return e}}}function getMin(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return Math.min.apply(Math,_toConsumableArray(e.map(function(e){return e.value})))}function getMax(e){return Math.max.apply(Math,_toConsumableArray(e.map(function(e){return e.value})))}function getUnitsCount(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a;return Math.ceil(e/t)+1}function percent(e,t){return 100*t/e}function calcXAxisMaxValue(e,t){var r=Math.ceil(t/e);return Math.floor(r*e)}function shadeBlend(e,t,r){var n=e<0?-1*e:e,a=Math.round,o=parseInt;if(t.length>7){var i=t.split(","),s=(r||(e<0?"rgb(0,0,0)":"rgb(255,255,255)")).split(","),c=o(i[0].slice(4)),u=o(i[1]),l=o(i[2]);return"rgb("+(a((o(s[0].slice(4))-c)*n)+c)+","+(a((o(s[1])-u)*n)+u)+","+(a((o(s[2])-l)*n)+l)+")"}var i=o(t.slice(1),16),s=o((r||(e<0?"#000000":"#FFFFFF")).slice(1),16),p=i>>16,f=i>>8&255,_=255&i;return"#"+(16777216+65536*(a(((s>>16)-p)*n)+p)+256*(a(((s>>8&255)-f)*n)+f)+(a(((255&s)-_)*n)+_)).toString(16).slice(1)}function classes(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).filter(function(t){return e[t]}).join(" ")}Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.isObject=isObject,t.isDefined=isDefined,t.isFunction=isFunction,t.Optional=Optional,t.getMin=getMin,t.getMax=getMax,t.getUnitsCount=getUnitsCount,t.percent=percent,t.calcXAxisMaxValue=calcXAxisMaxValue,t.shadeBlend=shadeBlend,t.classes=classes;var a=t.UNIT_WIDTH=60;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(a,"UNIT_WIDTH","c:/projekty/react-tree-bar-chart/app/tree-bar-chart/utils/utils.js"),__REACT_HOT_LOADER__.register(isObject,"isObject","c:/projekty/react-tree-bar-chart/app/tree-bar-chart/utils/utils.js"),__REACT_HOT_LOADER__.register(isDefined,"isDefined","c:/projekty/react-tree-bar-chart/app/tree-bar-chart/utils/utils.js"),__REACT_HOT_LOADER__.register(isFunction,"isFunction","c:/projekty/react-tree-bar-chart/app/tree-bar-chart/utils/utils.js"),__REACT_HOT_LOADER__.register(Optional,"Optional","c:/projekty/react-tree-bar-chart/app/tree-bar-chart/utils/utils.js"),__REACT_HOT_LOADER__.register(getMin,"getMin","c:/projekty/react-tree-bar-chart/app/tree-bar-chart/utils/utils.js"),__REACT_HOT_LOADER__.register(getMax,"getMax","c:/projekty/react-tree-bar-chart/app/tree-bar-chart/utils/utils.js"),__REACT_HOT_LOADER__.register(getUnitsCount,"getUnitsCount","c:/projekty/react-tree-bar-chart/app/tree-bar-chart/utils/utils.js"),__REACT_HOT_LOADER__.register(percent,"percent","c:/projekty/react-tree-bar-chart/app/tree-bar-chart/utils/utils.js"),__REACT_HOT_LOADER__.register(calcXAxisMaxValue,"calcXAxisMaxValue","c:/projekty/react-tree-bar-chart/app/tree-bar-chart/utils/utils.js"),__REACT_HOT_LOADER__.register(shadeBlend,"shadeBlend","c:/projekty/react-tree-bar-chart/app/tree-bar-chart/utils/utils.js"),__REACT_HOT_LOADER__.register(classes,"classes","c:/projekty/react-tree-bar-chart/app/tree-bar-chart/utils/utils.js"))}()},function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}();r(9);var o=r(0),i=r(8),s=_interopRequireDefault(i),c=r(5),u=_interopRequireDefault(c),l=r(6),p=_interopRequireDefault(l),f=r(4),_=_interopRequireDefault(f),h=r(7),b=_interopRequireDefault(h),d=r(1),y=function(e){function TreeBarChart(e){_classCallCheck(this,TreeBarChart);var t=_possibleConstructorReturn(this,(TreeBarChart.__proto__||Object.getPrototypeOf(TreeBarChart)).call(this,e));return t.state={data:[].concat(_toConsumableArray(e.data)),hasData:!1,hideNoContent:!1,xAxis:{min:(0,d.getMin)(e.data),max:(0,d.getMax)(e.data)},style:{},unitsCount:0,parentData:void 0},t.updateData=t.updateData.bind(t),t.setParent=t.setParent.bind(t),t}return _inherits(TreeBarChart,e),a(TreeBarChart,[{key:"componentDidMount",value:function(){this.setComponentSize(),this.checkDataAvailability()}},{key:"componentWillReceiveProps",value:function(e){e.data!==this.props.data&&this.updateData(e.data,this.state.parent)}},{key:"onResize",value:function(){this.setComponentSize()}},{key:"updateData",value:function(e,t){var r=this;this.setState({data:[].concat(_toConsumableArray(e)),xAxis:{min:(0,d.getMin)(e),max:(0,d.getMax)(e)},parent:t},function(){r.setComponentSize(),r.checkDataAvailability()})}},{key:"setComponentSize",value:function(){var e=this.props,t=e.width,r=e.height,a=e.unitWidth,o=e.barHeight,i=e.barMargin,s=this.state.data.length*(o+i);this.elementRect=this.element.getBoundingClientRect(),t=Number((0,d.Optional)(t).or(this.elementRect.width)),r=Number((0,d.Optional)(r).or(this.elementRect.height)),this.setState({unitsCount:(0,d.getUnitsCount)(t,Number(a)),style:n({},this.state.styles,{width:t,minHeight:r<s?s:r})})}},{key:"checkDataAvailability",value:function(){var e=this,t=this.state.data.length>0;this.setState({hideNoContent:t}),this.state.hasData!==t&&setTimeout(function(){return e.setState({hasData:t})},500)}},{key:"setParent",value:function(e){this.setState({parent:e})}},{key:"render",value:function(){var e,t=this,r=this.state,a=r.hasData,o=r.xAxis,i=r.unitsCount,c=r.style,l=r.data,p=r.parent,f=r.hideNoContent,h=this.props,y=h.barHeight,v=h.barColor,m=h.barMargin,O=h.isLoading,C=this.props,R=C.onItemClick,g=C.onItemExpand,E=C.onItemCollapse,j=n({},this.props.style,c),k=(e={},_defineProperty(e,this.props.className||"",!0),_defineProperty(e,"tbc-has-data",a),_defineProperty(e,"tbc-hide-no-content",f),_defineProperty(e,"tbc-has-parent",(0,d.isDefined)(p)),_defineProperty(e,"tbc-has-on-item-click",TreeBarChart.defaultProps.onItemClick!==R),_defineProperty(e,"tbc-is-loading",O),e);return React.createElement("div",{className:"tree-bar-chart "+(0,d.classes)(k),style:j,ref:function(e){return t.element=e}},React.createElement(s.default,n({width:j.width,unitsCount:i},o)),React.createElement(_.default,{data:l,max:o.max,unitsCount:i,barHeight:y,barColor:v,barMargin:m,setData:this.updateData,onItemClick:R,onItemExpand:g,setParent:this.setParent}),React.createElement(b.default,{parent:p,setData:this.updateData,setParent:this.setParent,onItemCollapse:E}),React.createElement(u.default,null),React.createElement("div",{className:"tbc-loader"}))}}]),TreeBarChart}(o.Component);y.defaultProps={data:[],className:"",unitWidth:d.UNIT_WIDTH,barHeight:20,barMargin:10,barColor:"#663399",isLoading:!1,onItemClick:function(){},onItemExpand:function(){},onItemCollapse:function(){}};var v=(0,p.default)(y);t.default=v;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(y,"TreeBarChart","c:/projekty/react-tree-bar-chart/app/tree-bar-chart/TreeBarChart.js"),__REACT_HOT_LOADER__.register(v,"default","c:/projekty/react-tree-bar-chart/app/tree-bar-chart/TreeBarChart.js"))}()},function(e,t,r){"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),a=r(0),o=r(1),i=function(e){function Bar(e){_classCallCheck(this,Bar);var t=_possibleConstructorReturn(this,(Bar.__proto__||Object.getPrototypeOf(Bar)).call(this,e));return t.state={value:0,hover:!1},t}return _inherits(Bar,e),n(Bar,[{key:"componentDidMount",value:function(){this.setValueDelayed(this.props.value)}},{key:"componentWillUnmount",value:function(){this.element.style.width=0,this.setState({value:0})}},{key:"componentWillReceiveProps",value:function(e){e.value!==this.props.value&&this.setValueDelayed(e.value)}},{key:"setValueDelayed",value:function(e){var t=this;setTimeout(function(){return t.setState({value:e})},300)}},{key:"onMouseEnter",value:function(){this.setState({hover:!0})}},{key:"onMouseLeave",value:function(){this.setState({hover:!1})}},{key:"onExpandClick",value:function(){var e=this.props,t=e.setData,r=e.data,n=e.value,a=e.label,i=e.items,s=e.onItemClick,c=e.onItemExpand,u=e.setParent,l={value:n,label:a,data:r};if((0,o.isDefined)(i))t(i,l),c(i,l);else{var p=s(this.props);(0,o.isDefined)(p)&&u(p)}}},{key:"render",value:function(){var e=this,t=this.props,r=t.label,n=t.max,a=t.barHeight,i=t.barColor,s=t.barMargin,c=t.items,u=t.hasChildren,l=void 0!==u&&u,p=this.state,f=p.value,_=p.hover,h={marginTop:s,marginBottom:s},b={width:(0,o.percent)(n,f)+"%",opacity:0===f?0:1,height:a,background:_?(0,o.shadeBlend)(-.2,i):i},d={height:a},y=(0,o.isDefined)(c)||l,v={"tbc-is-hover":_,"tbc-has-items":y};return React.createElement("div",{className:"tbc-bar "+(0,o.classes)(v),style:h},React.createElement("div",{className:"tbc-b-label",style:d,title:r},React.createElement("span",{onClick:function(){return e.onExpandClick()}},r),y?React.createElement("div",{className:"tbc-expand-button",onClick:function(){return e.onExpandClick()}}):null),React.createElement("div",{className:"tbc-b-wrapper"},React.createElement("div",{className:"tbc-b-value",onClick:function(){return e.onExpandClick()},onMouseEnter:function(){return e.onMouseEnter()},onMouseLeave:function(){return e.onMouseLeave()},"data-value":f,style:b,ref:function(t){return e.element=t}})))}}]),Bar}(a.Component);t.default=i;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(i,"Bar","c:/projekty/react-tree-bar-chart/app/tree-bar-chart/components/Bar.js")}()},function(e,t,r){"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),o=r(0),i=r(3),s=function(e){return e&&e.__esModule?e:{default:e}}(i),c=r(1),u=function(e){function DataContainer(){return _classCallCheck(this,DataContainer),_possibleConstructorReturn(this,(DataContainer.__proto__||Object.getPrototypeOf(DataContainer)).apply(this,arguments))}return _inherits(DataContainer,e),a(DataContainer,[{key:"render",value:function(){var e=this,t=this.props,r=t.data,a=t.max,o=t.unitsCount,i=(0,c.calcXAxisMaxValue)(o,a);return React.createElement("div",{className:"tbc-data-container"},r.map(function(t,r){return React.createElement(s.default,n({key:r},e.props,{max:i},t))}))}}]),DataContainer}(o.Component);t.default=u;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(u,"DataContainer","c:/projekty/react-tree-bar-chart/app/tree-bar-chart/components/DataContainer.js")}()},function(e,t,r){"use strict";function NoData(e){var t=e.message,r=void 0===t?"No data available.":t;return React.createElement("div",{className:"tbc-no-data"},r)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=NoData;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(NoData,"NoData","c:/projekty/react-tree-bar-chart/app/tree-bar-chart/components/NoData.js")}()},function(e,t,r){"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function OnResize(e){return function(t){function OnResizeComponent(e){_classCallCheck(this,OnResizeComponent);var t=_possibleConstructorReturn(this,(OnResizeComponent.__proto__||Object.getPrototypeOf(OnResizeComponent)).call(this,e));return t.onResize=t.onResize.bind(t),t}return _inherits(OnResizeComponent,t),a(OnResizeComponent,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.onResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onResize)}},{key:"onResize",value:function(){this.wrappedInstance.onResize()}},{key:"render",value:function(){var t=this;return(0,o.createElement)(e,n({},this.props,{ref:function(e){return t.wrappedInstance=e}}))}}]),OnResizeComponent}(o.Component)}Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}();t.default=OnResize;var o=r(0);!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(OnResize,"OnResize","c:/projekty/react-tree-bar-chart/app/tree-bar-chart/components/OnResize.js")}()},function(e,t,r){"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),a=r(0),o=r(1),i=function(e){function Parent(){return _classCallCheck(this,Parent),_possibleConstructorReturn(this,(Parent.__proto__||Object.getPrototypeOf(Parent)).apply(this,arguments))}return _inherits(Parent,e),n(Parent,[{key:"onClick",value:function(){var e=this.props,t=e.parent,r=e.setData,n=e.setParent,a=e.onItemCollapse;(0,o.isDefined)(t.data)&&r(t.data,void 0),n(a(t))}},{key:"render",value:function(){var e=this,t=this.props.parent;return React.createElement("div",{className:"tbc-parent"},(0,o.isDefined)(t)?React.createElement("span",{onClick:function(){return e.onClick()}},React.createElement("div",{className:"tbc-p-collapse-button"}),React.createElement("span",{className:"tbc-p-label"},t.label)):null)}}]),Parent}(a.Component);t.default=i;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(i,"Parent","c:/projekty/react-tree-bar-chart/app/tree-bar-chart/components/Parent.js")}()},function(e,t,r){"use strict";function Xaxis(e){var t=e.className,r=void 0===t?"":t,n=e.max,a=e.unitsCount;return React.createElement("div",{className:"tbc-xaxis "+r},loopOverUnits(a,n,function(e,t){return React.createElement("div",{key:e+"-"+t},React.createElement("span",null,e))}))}function loopOverUnits(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments[1],r=arguments[2],n=[],a=0,o=Math.ceil(t/e);a<=e;a+=1){var i=Math.floor(o*a);n.push(r(i,a))}return n}Object.defineProperty(t,"__esModule",{value:!0}),t.default=Xaxis;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(Xaxis,"Xaxis","c:/projekty/react-tree-bar-chart/app/tree-bar-chart/components/XAxis.js"),__REACT_HOT_LOADER__.register(loopOverUnits,"loopOverUnits","c:/projekty/react-tree-bar-chart/app/tree-bar-chart/components/XAxis.js"))}()},function(e,t){},function(e,t,r){e.exports=r(2)}])});