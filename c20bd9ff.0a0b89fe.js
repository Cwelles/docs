(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var i=n(3),a=(n(0),n(118));const r={id:"static-files-guide",title:"Deploy Static Files (Including static React, Vue, Svelte apps)",sidebar_label:"Static Files"},o={unversionedId:"tutorials/static-files-guide",id:"tutorials/static-files-guide",isDocsHomePage:!1,title:"Deploy Static Files (Including static React, Vue, Svelte apps)",description:"You can deploy static React, Vue, Svelte, or just Vanilla JavaScript apps on Deta very easily by wraping it around a simple python snippet.",source:"@site/docs/tutorials/static_files.md",slug:"/tutorials/static-files-guide",permalink:"/docs/tutorials/static-files-guide",editUrl:"https://github.com/g3thq/docs/tree/master/docs/tutorials/static_files.md",version:"current",sidebar_label:"Static Files"},c=[{value:"Setup",id:"setup",children:[]},{value:"Updating code",id:"updating-code",children:[]},{value:"Updating dependencies",id:"updating-dependencies",children:[]},{value:"Deploying Local Changes",id:"deploying-local-changes",children:[]},{value:"Visiting our endpoint",id:"visiting-our-endpoint",children:[]}],l={rightToc:c};function p({components:e,...t}){return Object(a.b)("wrapper",Object(i.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"You can deploy static React, Vue, Svelte, or just Vanilla JavaScript apps on Deta very easily by wraping it around a simple python snippet."),Object(a.b)("p",null,"The guide assumes you have a ",Object(a.b)("inlineCode",{parentName:"p"},"build")," folder with your static app and have the ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/cli/install"}),"Deta CLI")," installed."),Object(a.b)("h3",{id:"setup"},"Setup"),Object(a.b)("p",null,"Create a directory ",Object(a.b)("inlineCode",{parentName:"p"},"static-app")," and change the current directory to it."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-shell"}),"$ mkdir static-app && static-app\n")),Object(a.b)("p",null,"Copy your ",Object(a.b)("inlineCode",{parentName:"p"},"build")," folder into the ",Object(a.b)("inlineCode",{parentName:"p"},"static-app")," directory."),Object(a.b)("h3",{id:"updating-code"},"Updating code"),Object(a.b)("p",null,"Create a ",Object(a.b)("inlineCode",{parentName:"p"},"main.py")," file with the following snippet:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python"}),'import os\nfrom starlette.applications import Starlette\nfrom starlette.routing import Mount\nfrom starlette.staticfiles import StaticFiles\nfrom starlette.types import Receive, Scope, Send\nclass CustomStatic(StaticFiles):\n  async def __call__(self, scope: Scope, receive: Receive, send: Send) -> None:\n      """\n      The ASGI entry point.\n      """\n      assert scope["type"] == "http"\n      if not self.config_checked:\n          await self.check_config()\n          self.config_checked = True\n      path = self.get_path(scope)\n      response = await self.get_response(path, scope)\n      await response(scope, receive, send)\nroutes = [\n  Mount(\'/\', app=CustomStatic(directory=\'build\', html=True), name="static"),\n]\napp = Starlette(routes=routes)\n')),Object(a.b)("p",null,"We are mounting the build folder, and serving the files using ",Object(a.b)("inlineCode",{parentName:"p"},"Starlette"),"."),Object(a.b)("h3",{id:"updating-dependencies"},"Updating dependencies"),Object(a.b)("p",null,"Now create a ",Object(a.b)("inlineCode",{parentName:"p"},"requirements.txt")," with the following lines:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"starlette\naiofiles\n")),Object(a.b)("p",null,"Here is a look at the folder structure at the end:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"static-app/\n    \u251c\u2500\u2500 main.py\n    \u251c\u2500\u2500 requirements.txt \n    \u2514\u2500\u2500 build/...\n")),Object(a.b)("h3",{id:"deploying-local-changes"},"Deploying Local Changes"),Object(a.b)("p",null,"Deploy your application with ",Object(a.b)("inlineCode",{parentName:"p"},"deta new")),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),'$ deta new\nSuccessfully created a new micro\n{\n        "name": "static-app",\n        "runtime": "python3.7",\n        "endpoint": "https://{micro_subdomain}.deta.dev",\n        "visor": "enabled",\n        "http_auth": "enabled"\n}\nAdding dependencies...\n  Downloading aiofiles-0.6.0-py3-none-any.whl (11 kB)\nCollecting starlette\n  Downloading starlette-0.14.2-py3-none-any.whl (60 kB)\nInstalling collected packages: starlette, aiofiles\nSuccessfully installed aiofiles-0.6.0 starlette-0.14.2\n')),Object(a.b)("h3",{id:"visiting-our-endpoint"},"Visiting our endpoint"),Object(a.b)("p",null,"We now have a static web application running on Deta using a simple python snippet."),Object(a.b)("p",null,"If you visit the ",Object(a.b)("inlineCode",{parentName:"p"},"endpoint")," shown in the output (your endpoint will be different from this one) in your browser, you should see your application. "))}p.isMDXComponent=!0},118:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),b=i,f=u["".concat(o,".").concat(b)]||u[b]||d[b]||r;return n?a.a.createElement(f,c(c({ref:t},p),{},{components:n})):a.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var p=2;p<r;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);