(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{102:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(3),o=(r(0),r(118)),i=r(122),a=r(123);const c={id:"visor",title:"Visor",sidebar_label:"Visor"},s={unversionedId:"micros/visor",id:"micros/visor",isDocsHomePage:!1,title:"Visor",description:"Learn about using Visor",source:"@site/docs/micros/visor.md",slug:"/micros/visor",permalink:"/docs/micros/visor",editUrl:"https://github.com/g3thq/docs/tree/master/docs/micros/visor.md",version:"current",sidebar_label:"Visor"},l=[{value:"Opening Visor",id:"opening-visor",children:[]},{value:"Navigating the Visor",id:"navigating-the-visor",children:[]},{value:"Video overview",id:"video-overview",children:[]}],u={rightToc:l};function b({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h4",{id:"learn-about-using-visor"},"Learn about using Visor"),Object(o.b)("p",null,"The Deta Visor offers a user interface for you to see a live view of all the events processed by your Micro. You can use it to monitor and debug your requests, test your endpoints by sending requests, and more."),Object(o.b)("h3",{id:"opening-visor"},"Opening Visor"),Object(o.b)(i.a,{defaultValue:"browser",values:[{label:"Browser",value:"browser"},{label:"Terminal",value:"terminal"}],mdxType:"Tabs"},Object(o.b)(a.a,{value:"browser",mdxType:"TabItem"},Object(o.b)("p",null,"Start by logging into your console at ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://deta.sh"}),"deta.sh"),". You should be redirected to the following screen:"),Object(o.b)("img",{src:"/img/visor/visor_1.png",alt:"visor_1",width:"800"}),Object(o.b)("p",null,"Once that's done, choose a micro to view by clicking on its name (under the ",Object(o.b)("em",{parentName:"p"},'"Micros"')," tab)."),Object(o.b)("img",{src:"/img/visor/visor_2.png",alt:"visor_2",width:"800"}),Object(o.b)("p",null,"Now click on ",Object(o.b)("em",{parentName:"p"},'"Visor"')),Object(o.b)("img",{src:"/img/visor/visor_3.png",alt:"visor_3",width:"800"})),Object(o.b)(a.a,{value:"terminal",mdxType:"TabItem"},Object(o.b)("p",null,"Start your terminal in the root directory of your deployed Deta project."),Object(o.b)("p",null,"Run ",Object(o.b)("inlineCode",{parentName:"p"},"deta visor open"),"."))),Object(o.b)("h3",{id:"navigating-the-visor"},"Navigating the Visor"),Object(o.b)("p",null,"The Visor page has the link to your Micro in the top right, a button named ",Object(o.b)("em",{parentName:"p"},'"HTTP Client"')," in the bottom left, and a list of all the events handled by your Micro!"),Object(o.b)("img",{src:"/img/visor/visor_4.png",alt:"visor_4",width:"800"}),Object(o.b)("h4",{id:"the-event-list"},"The Event List"),Object(o.b)("p",null,"The Visor logs every single event made to your Micro, each event has the ",Object(o.b)("strong",{parentName:"p"},"HTTP Status Code"),", the ",Object(o.b)("strong",{parentName:"p"},"HTTP Method"),", and the ",Object(o.b)("strong",{parentName:"p"},"time")," logged above it. Under this information are three tabs, letting you view the response, request, and logs of the event. "),Object(o.b)("p",null,"Response:"),Object(o.b)("img",{src:"/img/visor/visor_5.png",alt:"visor",width:"800"}),Object(o.b)("p",null,"The Request sent to the Micro:"),Object(o.b)("img",{src:"/img/visor/visor_6.png",alt:"request",width:"800"}),Object(o.b)("p",null,"And logs (normally displaying errors if they were to occur):"),Object(o.b)("img",{src:"/img/visor/visor_7.png",alt:"logs",width:"800"}),Object(o.b)("p",null,"On the top right of every event are two icons:"),Object(o.b)("img",{src:"/img/visor/visor_8.png",alt:"icons",width:"800"}),Object(o.b)("p",null,"The ",Object(o.b)("em",{parentName:"p"},'"pen"')," icon lets you edit the request before re-sending it to your micro and the ",Object(o.b)("em",{parentName:"p"},'"redo"')," icon lets you send the same request again."),Object(o.b)("h4",{id:"the-http-client"},"The HTTP Client"),Object(o.b)("p",null,"Visor also has a built in ",Object(o.b)("em",{parentName:"p"},'"HTTP Client"')," to make requests to your Micro. You can use this by clicking on the ",Object(o.b)("em",{parentName:"p"},'"HTTP Client"')," button. "),Object(o.b)("img",{src:"/img/visor/visor_9.png",alt:"HTTP Client",width:"600"}),Object(o.b)("p",null,"Simply specify the request method, path, headers and body and hit the ",Object(o.b)("em",{parentName:"p"},'"Send"')," button to send it off!"),Object(o.b)("img",{src:"/img/visor/visor_10.png",alt:"HTTP Client Modal",width:"600"}),Object(o.b)("p",null,"The content-type can be changed from JSON to Text, using the selection box on the bottom left of this window."),Object(o.b)("img",{src:"/img/visor/visor_11.png",alt:"HTTP Client JSON to Text",width:"600"}),Object(o.b)("h3",{id:"video-overview"},"Video overview"),Object(o.b)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/kAwV7-bEtb0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}b.isMDXComponent=!0},118:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(r),d=n,m=b["".concat(a,".").concat(d)]||b[d]||p[d]||i;return r?o.a.createElement(m,c(c({ref:t},l),{},{components:r})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},119:function(e,t,r){"use strict";function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}},120:function(e,t,r){"use strict";var n=r(0),o=r(121);t.a=function(){var e=Object(n.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},121:function(e,t,r){"use strict";var n=r(0),o=Object(n.createContext)(void 0);t.a=o},122:function(e,t,r){"use strict";var n=r(0),o=r.n(n),i=r(120),a=r(119),c=r(53),s=r.n(c),l=37,u=39;t.a=function(e){var t=e.lazy,r=e.block,c=e.children,b=e.defaultValue,p=e.values,d=e.groupId,m=e.className,v=Object(i.a)(),f=v.tabGroupChoices,h=v.setTabGroupChoices,g=Object(n.useState)(b),O=g[0],y=g[1];if(null!=d){var j=f[d];null!=j&&j!==O&&p.some((function(e){return e.value===j}))&&y(j)}var w=function(e){y(e),null!=d&&h(d,e)},T=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(a.a)("tabs",{"tabs--block":r},m)},p.map((function(e){var t=e.value,r=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(a.a)("tabs__item",s.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:function(e){!function(e,t,r){switch(r.keyCode){case u:!function(e,t){var r=e.indexOf(t)+1;e[r]?e[r].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var r=e.indexOf(t)-1;e[r]?e[r].focus():e[e.length-1].focus()}(e,t)}}(T,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},r)}))),t?Object(n.cloneElement)(c.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},c.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},123:function(e,t,r){"use strict";var n=r(3),o=r(0),i=r.n(o);t.a=function(e){var t=e.children,r=e.hidden,o=e.className;return i.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:r,className:o}),t)}}}]);