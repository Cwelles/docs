(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{116:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=r.a.createContext({}),p=function(e){var n=r.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},b=function(e){var n=p(e.components);return r.a.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=p(t),d=a,m=b["".concat(l,".").concat(d)]||b[d]||s[d]||o;return t?r.a.createElement(m,i(i({ref:n},u),{},{components:t})):r.a.createElement(m,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},117:function(e,n,t){"use strict";function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}n.a=function(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}},118:function(e,n,t){"use strict";var a=t(0),r=t(119);n.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},119:function(e,n,t){"use strict";var a=t(0),r=Object(a.createContext)(void 0);n.a=r},120:function(e,n,t){"use strict";var a=t(0),r=t.n(a),o=t(118),l=t(117),i=t(53),c=t.n(i),u=37,p=39;n.a=function(e){var n=e.lazy,t=e.block,i=e.children,b=e.defaultValue,s=e.values,d=e.groupId,m=e.className,j=Object(o.a)(),h=j.tabGroupChoices,f=j.setTabGroupChoices,O=Object(a.useState)(b),g=O[0],v=O[1];if(null!=d){var y=h[d];null!=y&&y!==g&&s.some((function(e){return e.value===y}))&&v(y)}var N=function(e){v(e),null!=d&&f(d,e)},T=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":t},m)},s.map((function(e){var n=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===n,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":g===n}),key:n,ref:function(e){return T.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case p:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case u:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(T,e.target,e)},onFocus:function(){return N(n)},onClick:function(){N(n)}},t)}))),n?Object(a.cloneElement)(i.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},i.map((function(e,n){return Object(a.cloneElement)(e,{key:n,hidden:e.props.value!==g})}))))}},121:function(e,n,t){"use strict";var a=t(3),r=t(0),o=t.n(r);n.a=function(e){var n=e.children,t=e.hidden,r=e.className;return o.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:t,className:r}),n)}},96:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return u})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return s}));var a=t(3),r=t(7),o=(t(0),t(116)),l=t(120),i=t(121),c={id:"run",title:"Run",sidebar_lable:"Run"},u={unversionedId:"micros/run",id:"micros/run",isDocsHomePage:!1,title:"Run",description:"Run from the CLI",source:"@site/docs/micros/run.md",slug:"/micros/run",permalink:"/docs/micros/run",editUrl:"https://github.com/g3thq/docs/tree/master/docs/micros/run.md",version:"current"},p=[{value:"Run from the CLI",id:"run-from-the-cli",children:[]},{value:"Events",id:"events",children:[]},{value:"Input",id:"input",children:[]},{value:"Actions",id:"actions",children:[]},{value:"Run and HTTP",id:"run-and-http",children:[]},{value:"Run and Cron",id:"run-and-cron",children:[]}],b={rightToc:p};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"run-from-the-cli"},"Run from the CLI"),Object(o.b)("p",null,"A Deta Micro can be run directly from the ",Object(o.b)("inlineCode",{parentName:"p"},"deta cli")," using the command ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../cli/commands#deta-run"}),"deta run")," with an input."),Object(o.b)("p",null,"In order to run a micro from the cli directly, the micro's code needs to define functions that will be run from the cli with the help of our library ",Object(o.b)("inlineCode",{parentName:"p"},"deta"),"."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"deta")," library is pre-installed on a micro and can just be imported directly."),Object(o.b)(l.a,{groupId:"preferred-language",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"python"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { app } = require('deta');\n\n// define a function to run from the cli\n// the function must take an event as an argument\napp.lib.run(event => \"Welcome to Deta!\");\n\nmodule.exports = app;\n"))),Object(o.b)(i.a,{value:"python",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'from deta import app\n\n# define a function to run from the cli\n# the function must take an event as an argument\n@app.lib.run()\ndef welcome(event):\n    return "Welcome to Deta!"\n')))),Object(o.b)("p",null,"With this code deployed on a micro, you can simply run "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"$ deta run\n")),Object(o.b)("p",null,"And see the following output:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'Response:\n    "Welcome to Deta!"\n')),Object(o.b)("h3",{id:"events"},"Events"),Object(o.b)("p",null,"A function that is triggered from the cli must take an ",Object(o.b)("inlineCode",{parentName:"p"},"event")," as the only argument."),Object(o.b)("p",null,"You can provide an input from the cli to the function which will be passed on as an ",Object(o.b)("inlineCode",{parentName:"p"},"event"),". It has four attributes:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"event.json"),": ",Object(o.b)("inlineCode",{parentName:"li"},"object")," provides the JSON payload"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"event.body"),": ",Object(o.b)("inlineCode",{parentName:"li"},"string")," provides the raw JSON payload "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"event.type"),": ",Object(o.b)("inlineCode",{parentName:"li"},"string")," type of an event, ",Object(o.b)("inlineCode",{parentName:"li"},"run")," when running from the cli"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"event.action"),": ",Object(o.b)("inlineCode",{parentName:"li"},"string")," the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#Actions"}),"action")," provided from the cli, defaults to an empty string   ")),Object(o.b)(l.a,{groupId:"preferred-language",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"python"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { app } = require('deta');\n\napp.lib.run(event => {\n    return {\n        // access input to your function with event.json\n        message: `hello ${event.json.name}!`\n    };\n});\n\nmodule.exports = app;\n"))),Object(o.b)(i.a,{value:"python",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'from deta import app\n\n@app.lib.run()\ndef welcome(event):\n    return {\n        # access input to your function with event.json\n        "message": f"hello {event.json.get(\'name\')}!"\n    }\n')))),Object(o.b)("p",null,"With this code deployed on a micro, you can run"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"$ deta run -- --name deta\n")),Object(o.b)("p",null,"And should see the following output."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'Response:\n    {\n        "message": "hello deta!"\n    }\n')),Object(o.b)("h3",{id:"input"},"Input"),Object(o.b)("p",null,"The input to your function on a micro can be provided through the ",Object(o.b)("inlineCode",{parentName:"p"},"deta cli")," and accessed in the code from the ",Object(o.b)("inlineCode",{parentName:"p"},"event")," object. The input is a JSON object created from the arguments provided to the cli. "),Object(o.b)("p",null,"An ",Object(o.b)("em",{parentName:"p"},"important")," consideration is that the values in key-value pairs in the input are always either ",Object(o.b)("em",{parentName:"p"},"strings"),", ",Object(o.b)("em",{parentName:"p"},"list of strings")," or ",Object(o.b)("em",{parentName:"p"},"booleans"),". "),Object(o.b)("p",null,"Boolean flags are provided with a single dash, string arguments with double dash and if multiple values are provided for the same key, a list of strings will be provided. "),Object(o.b)("p",null,"For instance:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"$ deta run -- --name jimmy --age 33 --emails jimmy@deta.sh --emails jim@deta.sh -active\n")),Object(o.b)("p",null,"will provide the micro with the following input:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "name": "jimmy",\n    "age": "33", // notice \'33\' here is a string not an int\n    "emails": ["jimmy@deta.sh", "jim@deta.sh"],\n    "active": true\n}\n')),Object(o.b)("p",null,"You need to explicitly convert the string values to other types in your code if needed."),Object(o.b)("h3",{id:"actions"},"Actions"),Object(o.b)("p",null,"Actions help you run different functions based on an ",Object(o.b)("inlineCode",{parentName:"p"},"action")," that you define for the function."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"action")," defaults to an empty string if not provided."),Object(o.b)(l.a,{groupId:"preferred-language",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"python"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { app } = require('deta');\n\napp.lib.run(event => {\n    return {\n        message: `hello ${event.json.name}!`\n    };\n    // action 'hello'\n}, \"hello\");\n\napp.lib.run(event => {\n    return {\n        message: `good morning ${event.json.name}!`\n    };\n    // action 'greet'\n}, \"greet\");\n\nmodule.exports = app;\n"))),Object(o.b)(i.a,{value:"python",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'from deta import app\n\n# action \'hello\'\n# the action does not need to have the same name as the function\n@app.lib.run(action="hello")\ndef welcome(event):\n    return {\n        "message": f"hello {event.json.get(\'name\')}!"\n    }\n\n# action \'greet\'\n@app.lib.run(action="greet")\ndef greet(event):\n    return {\n        "message": f"good morning {event.json.get(\'name\')}!"\n    }\n')))),Object(o.b)("p",null,"With this code deployed on a deta micro, if you run"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"$ deta run hello -- --name deta\n")),Object(o.b)("p",null,"where you tell the cli to run action ",Object(o.b)("inlineCode",{parentName:"p"},"hello")," with ",Object(o.b)("inlineCode",{parentName:"p"},'"name": "deta"')," as input. You should see the following output:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'Response:\n    {\n        "message": "hello deta!" \n    }\n')),Object(o.b)("p",null,"And if you do ",Object(o.b)("inlineCode",{parentName:"p"},"deta run")," with action ",Object(o.b)("inlineCode",{parentName:"p"},"greet")," "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"$ deta run greet -- --name deta\n")),Object(o.b)("p",null,"you should see the following output:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'Response:\n    {\n        "message": "good morning deta!" \n    }\n')),Object(o.b)("h3",{id:"run-and-http"},"Run and HTTP"),Object(o.b)("p",null,"You can combine both run and HTTP triggers in the same deta micro. For this you need to instantiate your app using the ",Object(o.b)("inlineCode",{parentName:"p"},"deta")," library that is pre-installed on a micro.   "),Object(o.b)(l.a,{groupId:"preferred-language",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"python"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { App } = require('deta');\nconst express = require('express');\n\nconst app = App(express());\n\n// triggered with an HTTP request\napp.get('/', async(req, res) => {\n    res.send('Hello deta, i am running with HTTP');\n});\n\n// triggered from the cli\napp.lib.run(event => {\n    return 'Hello deta, i am running from the cli';\n});\n\nmodule.exports = app;\n\n"))),Object(o.b)(i.a,{value:"python",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'from deta import App\nfrom fastapi import FastAPI\n\napp = App(FastAPI())\n\n# triggered with an HTTP request\n@app.get("/")\ndef http():\n    return "Hello deta, i am running with HTTP"\n\n# triggered from the cli\n@app.lib.run()\ndef run(event):\n    return "Hello deta, i am running from the cli"\n')))),Object(o.b)("h3",{id:"run-and-cron"},"Run and Cron"),Object(o.b)("p",null,"You can use both run and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./cron"}),"cron")," triggers in the same deta micro. You can also stack run and cron triggers for the same function."),Object(o.b)(l.a,{groupId:"preferred-language",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"python"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { app } = require('deta');\n\nconst sayHello = event => 'hello deta';\nconst printTime = event => `it is ${(new Date).toTimeString()}`;\n\napp.lib.run(sayHello);\n\n// stacking run and cron\napp.lib.run(printTime, 'time'); // action 'time'\napp.lib.cron(printTime);\n\nmodule.exports = app;\n"))),Object(o.b)(i.a,{value:"python",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"from deta import app\nfrom datetime import datetime\n\n# only run\n@app.lib.run()\ndef say_hello(event):\n    return \"hello deta\"\n\n# stacking run and cron\n@app.lib.run(action='time') # action 'time'\n@app.lib.cron():\ndef print_time(event):\n    return f\"it is {datetime.now()}\" \n")))))}s.isMDXComponent=!0}}]);