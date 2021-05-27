(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{116:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),b=r,d=p["".concat(i,".").concat(b)]||p[b]||m[b]||a;return n?o.a.createElement(d,c(c({ref:t},u),{},{components:n})):o.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(116)),i={id:"about",title:"Introduction to Deta Micros",sidebar_label:"Introduction"},c={unversionedId:"micros/about",id:"micros/about",isDocsHomePage:!1,title:"Introduction to Deta Micros",description:"Summary",source:"@site/docs/micros/about.md",slug:"/micros/about",permalink:"/docs/micros/about",editUrl:"https://github.com/g3thq/docs/tree/master/docs/micros/about.md",version:"current",sidebar_label:"Introduction"},s=[{value:"Summary",id:"summary",children:[]},{value:"Technical Specifications",id:"technical-specifications",children:[]},{value:"Important Notes",id:"important-notes",children:[]}],u={rightToc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"summary"},"Summary"),Object(a.b)("p",null,"Deta Micros(",Object(a.b)("em",{parentName:"p"},"ervers"),") are a lightweight but scalable cloud runtime tied to an HTTP endpoint. They are meant to get your apps up and running ",Object(a.b)("em",{parentName:"p"},"blazingly fast"),". Focus on writing your code and Deta will take care of everything else. "),Object(a.b)("h3",{id:"technical-specifications"},"Technical Specifications"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Micros support either Python 3.7 or Node.js 12.x code for now."),Object(a.b)("li",{parentName:"ul"},"Every Micro you use gets its own sandboxed Linux VM."),Object(a.b)("li",{parentName:"ul"},"Each Micro has a key and secret keys set in the environment, these are specific to your Micro and not the Deta system. Make sure to not share them to keep your own data safe."),Object(a.b)("li",{parentName:"ul"},"An execution times out after 10s. Contact us for an increase (up to 15 minutes/execution)."),Object(a.b)("li",{parentName:"ul"},"128 MB of RAM for ",Object(a.b)("em",{parentName:"li"},"each")," execution. Contact us for increase (up to 3 GB/execution)."),Object(a.b)("li",{parentName:"ul"},"Read-only file system. ",Object(a.b)("strong",{parentName:"li"},"Only ",Object(a.b)("inlineCode",{parentName:"strong"},"/tmp")," can be written to"),". It has a 512 MB storage limit."),Object(a.b)("li",{parentName:"ul"},"Invocations have an execution processes/threads limit of 1024."),Object(a.b)("li",{parentName:"ul"},"HTTP Payload size limit is 5.5 MB.")),Object(a.b)("h3",{id:"important-notes"},"Important Notes"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Micros automatically respond to your incoming requests and go to sleep when there's nothing to do. You do not have to manage their lifecycle manually."),Object(a.b)("li",{parentName:"ul"},"You (and only you) have access to the VM, which means there's no SSH access."),Object(a.b)("li",{parentName:"ul"},"You are supposed to see the VM filesystem, it's not a security vulnerability."),Object(a.b)("li",{parentName:"ul"},"Deta Micros do not support connecting to MongoDB at the moment. We recommend using Deta Base instead."),Object(a.b)("li",{parentName:"ul"},"We don't believe that Micros will work well with RDMBS like PostgreSQL and MySQL unless you use a pool manager."),Object(a.b)("li",{parentName:"ul"},"Micros only support read-only SQLite, which you could deploy with your code."),Object(a.b)("li",{parentName:"ul"},"The total upload size of your source code and assets is limited to 250 MB."),Object(a.b)("li",{parentName:"ul"},"Dependencies (pip, npm, etc) also can't exceed a combined size of 250mb.")))}l.isMDXComponent=!0}}]);