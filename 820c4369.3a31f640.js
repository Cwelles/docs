(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{118:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),l=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=l.a.createContext({}),p=function(e){var t=l.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return l.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},u=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,m=d["".concat(o,".").concat(u)]||d[u]||b[u]||r;return n?l.a.createElement(m,i(i({ref:t},s),{},{components:n})):l.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<r;s++)o[s]=n[s];return l.a.createElement.apply(null,o)}return l.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},119:function(e,t,n){"use strict";function a(e){var t,n,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(l&&(l+=" "),l+=n);else for(t in e)e[t]&&(l&&(l+=" "),l+=t);return l}t.a=function(){for(var e,t,n=0,l="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(l&&(l+=" "),l+=t);return l}},120:function(e,t,n){"use strict";var a=n(0),l=n(121);t.a=function(){var e=Object(a.useContext)(l.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},121:function(e,t,n){"use strict";var a=n(0),l=Object(a.createContext)(void 0);t.a=l},122:function(e,t,n){"use strict";var a=n(0),l=n.n(a),r=n(120),o=n(119),i=n(53),c=n.n(i),s=37,p=39;t.a=function(e){var t=e.lazy,n=e.block,i=e.children,d=e.defaultValue,b=e.values,u=e.groupId,m=e.className,h=Object(r.a)(),g=h.tabGroupChoices,f=h.setTabGroupChoices,j=Object(a.useState)(d),O=j[0],y=j[1];if(null!=u){var v=g[u];null!=v&&v!==O&&b.some((function(e){return e.value===v}))&&y(v)}var w=function(e){y(e),null!=u&&f(u,e)},N=[];return l.a.createElement("div",null,l.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},m)},b.map((function(e){var t=e.value,n=e.label;return l.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(a.cloneElement)(i.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):l.a.createElement("div",{className:"margin-vert--md"},i.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},123:function(e,t,n){"use strict";var a=n(3),l=n(0),r=n.n(l);t.a=function(e){var t=e.children,n=e.hidden,l=e.className;return r.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:l}),t)}},94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(3),l=(n(0),n(118)),r=n(122),o=n(123);const i={id:"getting_started",title:"Getting Started",sidebar_label:"Getting Started"},c={unversionedId:"micros/getting_started",id:"micros/getting_started",isDocsHomePage:!1,title:"Getting Started",description:"Configuring & Installing the Deta CLI",source:"@site/docs/micros/getting_started.md",slug:"/micros/getting_started",permalink:"/docs/micros/getting_started",editUrl:"https://github.com/g3thq/docs/tree/master/docs/micros/getting_started.md",version:"current",sidebar_label:"Getting Started"},s=[{value:"Configuring &amp; Installing the Deta CLI",id:"configuring--installing-the-deta-cli",children:[]},{value:"Logging in to Deta via the CLI",id:"logging-in-to-deta-via-the-cli",children:[]},{value:"Creating Your First Micro",id:"creating-your-first-micro",children:[]},{value:"Updating your Micro: Dependencies and Code",id:"updating-your-micro-dependencies-and-code",children:[]},{value:"Opening Your Micro To the Public",id:"opening-your-micro-to-the-public",children:[]}],p={rightToc:s};function d({components:e,...t}){return Object(l.b)("wrapper",Object(a.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(l.b)("h3",{id:"configuring--installing-the-deta-cli"},"Configuring & Installing the Deta CLI"),Object(l.b)(r.a,{defaultValue:"mac",values:[{label:"Mac",value:"mac"},{label:"Linux",value:"linux"},{label:"Windows",value:"win"}],mdxType:"Tabs"},Object(l.b)(o.a,{value:"mac",mdxType:"TabItem"},Object(l.b)("p",null,"To install the Deta CLI, open a Terminal and enter:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"curl -fsSL https://get.deta.dev/cli.sh | sh\n"))),Object(l.b)(o.a,{value:"linux",mdxType:"TabItem"},Object(l.b)("p",null,"To install the Deta CLI, open a Terminal and enter:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"curl -fsSL https://get.deta.dev/cli.sh | sh\n"))),Object(l.b)(o.a,{value:"win",mdxType:"TabItem"},Object(l.b)("p",null,"To install the Deta CLI, open PowerShell and enter:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"iwr https://get.deta.dev/cli.ps1 -useb | iex\n")))),Object(l.b)("p",null,"This will download the binary which contains the CLI code. It will try to export the ",Object(l.b)("inlineCode",{parentName:"p"},"deta")," command to your path. If it does not succeed, follow the directions output by the install script to export ",Object(l.b)("inlineCode",{parentName:"p"},"deta")," to your path."),Object(l.b)("h3",{id:"logging-in-to-deta-via-the-cli"},"Logging in to Deta via the CLI"),Object(l.b)("p",null,"Once you have successfully installed the Deta CLI, you need to login to Deta."),Object(l.b)("p",null,"From a Terminal, type ",Object(l.b)("inlineCode",{parentName:"p"},"deta login"),"."),Object(l.b)("p",null,"This command will open your browser and authenticate your CLI through Deta's web application."),Object(l.b)("p",null,"Upon a successful login, you are ready to start building ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/micros/about"}),"Micros"),"."),Object(l.b)("h3",{id:"creating-your-first-micro"},"Creating Your First Micro"),Object(l.b)("p",null,"To create a micro, navigate in your Terminal to a parent directory for your first micro and type:"),Object(l.b)(r.a,{groupId:"preferred-language",defaultValue:"py",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"py"}],mdxType:"Tabs"},Object(l.b)(o.a,{value:"js",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"deta new --node first_micro\n")),Object(l.b)("p",null,"This will create a new Node.js Micro in the 'cloud' as well as a local copy inside a directory called ",Object(l.b)("inlineCode",{parentName:"p"},"first_micro")," which will contain an ",Object(l.b)("inlineCode",{parentName:"p"},"index.js")," file."),Object(l.b)("p",null,"The CLI should respond:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "name": "first_micro",\n    "runtime": "nodejs12.x",\n    "endpoint": "https://<path>.deta.dev",\n    "visor": "enabled",\n    "http_auth": "enabled"\n}\n'))),Object(l.b)(o.a,{value:"py",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"deta new --python first_micro\n")),Object(l.b)("p",null,"This will create a new Python Micro in the 'cloud' as well as a local copy inside a directory called ",Object(l.b)("inlineCode",{parentName:"p"},"first_micro")," which will contain a ",Object(l.b)("inlineCode",{parentName:"p"},"main.py")," file."),Object(l.b)("p",null,"The CLI should respond:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "name": "first_micro",\n    "runtime": "python3.7",\n    "endpoint": "https://<path>.deta.dev",\n    "visor": "enabled",\n    "http_auth": "enabled"\n}\n')))),Object(l.b)("p",null,"Save this endpoint URL somewhere, as we will be visiting it shortly."),Object(l.b)("h3",{id:"updating-your-micro-dependencies-and-code"},"Updating your Micro: Dependencies and Code"),Object(l.b)(r.a,{groupId:"preferred-language",defaultValue:"py",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"py"}],mdxType:"Tabs"},Object(l.b)(o.a,{value:"js",mdxType:"TabItem"},Object(l.b)("h4",{id:"setup-and-dependencies"},"Setup and Dependencies"),Object(l.b)("p",null,"Enter the directory ",Object(l.b)("inlineCode",{parentName:"p"},"first_micro"),", and then run the shell command:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"npm init -y\n")),Object(l.b)("p",null,"This will initialize a Node.js project in your current directory with npm's wizard."),Object(l.b)("p",null,"What is important is that the ",Object(l.b)("strong",{parentName:"p"},"main")," file is ",Object(l.b)("inlineCode",{parentName:"p"},"index.js"),"."),Object(l.b)("p",null,"After following the npm wizard, let's add a dependency by running:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"npm install express\n")),Object(l.b)("h4",{id:"updating-code-locally"},"Updating Code Locally"),Object(l.b)("p",null,"Let's also edit and save the ",Object(l.b)("inlineCode",{parentName:"p"},"index.js")," file locally so that your Micro responds to ",Object(l.b)("inlineCode",{parentName:"p"},"HTTP GET")," requests with ",Object(l.b)("em",{parentName:"p"},"Hello World"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const express = require('express');\n\nconst app = express(); \n\napp.get('/', async (req, res) => {\n  res.send('Hello World')\n});\n\nmodule.exports = app;\n")),Object(l.b)("h4",{id:"deploying-local-changes"},"Deploying Local Changes"),Object(l.b)("p",null,"After you have updated your dependencies (documented in a ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," file) and / or your code locally, use a ",Object(l.b)("inlineCode",{parentName:"p"},"deta deploy")," command to update your Micro."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"deta deploy\n")),Object(l.b)("p",null,"The Deta CLI will notify you if your code has updated as well as if the dependcies were installed"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"Deploying...\nSuccessfully deployed changes\nUpdating dependencies...\n\n+ express@4.17.1\nadded 50 packages from 37 contributors and audited 50 packages in 1.967s\nfound 0 vulnerabilities\n"))),Object(l.b)(o.a,{value:"py",mdxType:"TabItem"},Object(l.b)("h4",{id:"setup-and-dependencies-1"},"Setup and Dependencies"),Object(l.b)("p",null,"Enter the directory ",Object(l.b)("inlineCode",{parentName:"p"},"first_micro"),", and then create a file, ",Object(l.b)("inlineCode",{parentName:"p"},"requirements.txt"),",  which tells Deta which dependencies to install."),Object(l.b)("p",null,"Let's add ",Object(l.b)("em",{parentName:"p"},"flask")," to ",Object(l.b)("inlineCode",{parentName:"p"},"requirements.txt")," and save this file locally."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"flask\n")),Object(l.b)("h4",{id:"updating-code-locally-1"},"Updating Code Locally"),Object(l.b)("p",null,"Let's also edit the ",Object(l.b)("inlineCode",{parentName:"p"},"main.py")," file so that your Micro responds to ",Object(l.b)("inlineCode",{parentName:"p"},"HTTP GET")," requests with ",Object(l.b)("em",{parentName:"p"},"Hello World"),". "),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),'from flask import Flask\n\napp = Flask(__name__)\n\n@app.route(\'/\', methods=["GET"])\ndef hello_world():\n    return "Hello World"\n')),Object(l.b)("h4",{id:"deploying-local-changes-1"},"Deploying Local Changes"),Object(l.b)("p",null,"After you have updated your ",Object(l.b)("inlineCode",{parentName:"p"},"requirements.txt")," and / or your code locally, use a ",Object(l.b)("inlineCode",{parentName:"p"},"deta deploy")," command to update your Micro."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"deta deploy\n")),Object(l.b)("p",null,"The Deta CLI will notify you if your code has updated as well as if the dependcies were installed"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"Deploying...\nSuccessfully deployed changes\nUpdating dependencies...\nCollecting flask\n  Downloading https://files.pythonhosted.org/packages/f2/28/2a03252dfb9ebf377f40fba6a7841b47083260bf8bd8e737b0c6952df83f/Flask-1.1.2-py2.py3-none-any.whl (94kB)\nCollecting Werkzeug>=0.15 (from flask)\n  Downloading https://files.pythonhosted.org/packages/cc/94/5f7079a0e00bd6863ef8f1da638721e9da21e5bacee597595b318f71d62e/Werkzeug-1.0.1-py2.py3-none-any.whl (298kB)\nCollecting itsdangerous>=0.24 (from flask)\n  Downloading https://files.pythonhosted.org/packages/76/ae/44b03b253d6fade317f32c24d100b3b35c2239807046a4c953c7b89fa49e/itsdangerous-1.1.0-py2.py3-none-any.whl\nCollecting Jinja2>=2.10.1 (from flask)\n  Downloading https://files.pythonhosted.org/packages/30/9e/f663a2aa66a09d838042ae1a2c5659828bb9b41ea3a6efa20a20fd92b121/Jinja2-2.11.2-py2.py3-none-any.whl (125kB)\nCollecting click>=5.1 (from flask)\n  Downloading https://files.pythonhosted.org/packages/d2/3d/fa76db83bf75c4f8d338c2fd15c8d33fdd7ad23a9b5e57eb6c5de26b430e/click-7.1.2-py2.py3-none-any.whl (82kB)\nCollecting MarkupSafe>=0.23 (from Jinja2>=2.10.1->flask)\n  Downloading https://files.pythonhosted.org/packages/98/7b/ff284bd8c80654e471b769062a9b43cc5d03e7a615048d96f4619df8d420/MarkupSafe-1.1.1-cp37-cp37m-manylinux1_x86_64.whl\nInstalling collected packages: Werkzeug, itsdangerous, MarkupSafe, Jinja2, click, flask\n")))),Object(l.b)("h4",{id:"visiting-our-endpoint"},"Visiting our Endpoint"),Object(l.b)("p",null,"Let's visit the endpoint ( from the endpoint URL we saved earlier).  "),Object(l.b)("p",null,"(If you didn't save it, simply type ",Object(l.b)("inlineCode",{parentName:"p"},"deta details")," into the CLI, which will give you the endpoint alongside other information about your Micro)."),Object(l.b)("p",null,"Open up your endpoint in a browser. You might be prompted to log in to your deta account on visiting your endpoint for the first time."),Object(l.b)("p",null,"You should see ",Object(l.b)("strong",{parentName:"p"},"Hello, World")),Object(l.b)("p",null,"If you're not accessing the endpoint from a browser (like from curl) or if you have disabled cookies in your browser, the response will be:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "errors":["Unauthorized"]\n}\n')),Object(l.b)("p",null,"This is because ",Object(l.b)("em",{parentName:"p"},"Deta Auth")," is protecting the endpoint from unauthorized access. "),Object(l.b)("h3",{id:"opening-your-micro-to-the-public"},"Opening Your Micro To the Public"),Object(l.b)("p",null,"Let's use one last command to open up the endpoint to the public:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"deta auth disable\n")),Object(l.b)("p",null,"The CLI should respond:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"Successfully disabled http auth\n")),Object(l.b)("p",null,"Congratulations, you have just deployed and published your first Micro!"))}d.isMDXComponent=!0}}]);