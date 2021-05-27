(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{110:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(r),m=n,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return r?o.a.createElement(b,c(c({ref:t},u),{},{components:r})):o.a.createElement(b,c({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var u=2;u<a;u++)s[u]=r[u];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},75:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),a=(r(0),r(110)),s={id:"faqs",title:"Frequently Asked Questions",sidebar_label:"FAQs"},c={unversionedId:"faqs",id:"faqs",isDocsHomePage:!1,title:"Frequently Asked Questions",description:"Can I use my own custom domain or subdomain?",source:"@site/docs/faqs.md",slug:"/faqs",permalink:"/docs/docs/faqs",editUrl:"https://github.com/g3thq/docs/tree/master/docs/faqs.md",version:"current",sidebar_label:"FAQs",sidebar:"someSidebar",previous:{title:"Home",permalink:"/docs/docs/home"},next:{title:"About Deta Base",permalink:"/docs/docs/base/about"}},i=[{value:"Can I use my own custom domain or subdomain?",id:"can-i-use-my-own-custom-domain-or-subdomain",children:[]},{value:"What are all the different &#39;keys&#39; for?",id:"what-are-all-the-different-keys-for",children:[]}],u={rightToc:i};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"can-i-use-my-own-custom-domain-or-subdomain"},"Can I use my own custom domain or subdomain?"),Object(a.b)("p",null,"Custom subdomains are already in alpha. If you need one for your project, please let us know."),Object(a.b)("h3",{id:"what-are-all-the-different-keys-for"},"What are all the different 'keys' for?"),Object(a.b)("p",null,"Deta offers 3 types of secrets / keys / tokens:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Project Keys"),": This type of key interacts with both your data and your resources inside a project (currently allowing reads and writes for the project's Bases). A project key will be created for you when you create a project, and you can manage all of a project's keys from the ",Object(a.b)("em",{parentName:"p"},"'Settings'")," option in any project's sidebar. If this key is leaked, the data stored in any of the connected project's Bases can be compromised. ")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"API Keys"),": This is an optional key to protect your Micro HTTP endpoint or to implement client-based rules. Creating API Keys from the Deta CLI is described ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/docs/cli/commands#deta-auth-create-api-key"}),"here"),". Read more about API Keys ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Application_programming_interface_key"}),"here"),". If this key is leaked, your micro endpoint can be used by unwanted clients.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Access Tokens"),": This token lets other programs manage (create, modify & delete) your Micros, Projects and Bases on your behalf. It's mainly used to let you have programmatic access to our API. Use cases: CI/CD, Gitpod, GitHub Actions. Information on Deta Access Tokens can be found ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/docs/cli/auth#deta-access-tokens"}),"here"),". If this key is leaked, your whole Deta account is compromised."))),Object(a.b)("p",null,"These types of keys are not unique to Deta; all other cloud providers use some variant of them."))}l.isMDXComponent=!0}}]);