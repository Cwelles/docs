(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{116:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,g=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return n?a.a.createElement(g,i(i({ref:t},s),{},{components:n})):a.a.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},64:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(3),a=(n(0),n(116));const o={id:"cheatsheet",title:"Common Usage",sidebar_label:"Cheatsheet"},c={unversionedId:"usage/cheatsheet",id:"usage/cheatsheet",isDocsHomePage:!1,title:"Common Usage",description:"While we work on formal documentation here is a cheetsheet of common useage:",source:"@site/docs/usage/cheatsheet.md",slug:"/usage/cheatsheet",permalink:"/docs/usage/cheatsheet",editUrl:"https://github.com/g3thq/docs/tree/master/docs/usage/cheatsheet.md",version:"current",sidebar_label:"Cheatsheet",sidebar:"someSidebar",previous:{title:"Data Sources",permalink:"/docs/vuln/sources"}},i=[{value:"General Scanning",id:"general-scanning",children:[]},{value:"Custom Policy",id:"custom-policy",children:[]},{value:"Custom templating and Reporting",id:"custom-templating-and-reporting",children:[]}],l={rightToc:i};function s({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"While we work on formal documentation here is a cheetsheet of common useage:"),Object(a.b)("h3",{id:"general-scanning"},"General Scanning"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"ghost alpine:latest\nghost --ignore-unfixed wordpress:latest\n")),Object(a.b)("h3",{id:"custom-policy"},"Custom Policy"),Object(a.b)("p",null,"Ghost supports custom policy driven by OPA. You can specify a local rego file or OPA endpoint. Scanner binary\nwill issue exit code 2 for failed policies."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"ghost --rego-file ghost.rego alpine:latest\nghost image --opa-server https://35.232.5.68:8443 alpine:latest \n")),Object(a.b)("h3",{id:"custom-templating-and-reporting"},"Custom templating and Reporting"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"ghost --format template --template @ghost.tpl -o report.html alpine:latest\n")))}s.isMDXComponent=!0}}]);