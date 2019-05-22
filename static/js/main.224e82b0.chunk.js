(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(e,n,t){e.exports=t.p+"static/media/logo.ba328b7d.png"},function(e,n,t){e.exports=t(12)},,,,,,,,function(e,n,t){},function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(1),l=t.n(a),i=(t(11),"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}),c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},u=function(){return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,n){var t=[],o=!0,r=!1,a=void 0;try{for(var l,i=e[Symbol.iterator]();!(o=(l=i.next()).done)&&(t.push(l.value),!n||t.length!==n);o=!0);}catch(c){r=!0,a=c}finally{try{!o&&i.return&&i.return()}finally{if(r)throw a}}return t}(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=function(){var e=function(){if("object"===("undefined"===typeof navigator?"undefined":i(navigator)))return navigator.connection||navigator.mozConnection||navigator.webkitConnection}();return e?{data:{networkInformationSupported:!0,downlink:e.downlink,downlinkMax:e.downlinkMax,effectiveType:e.effectiveType,type:e.type,rtt:e.rtt,saveData:e.saveData},connectionObject:e}:{data:{networkInformationSupported:!1}}},m=function(){var e=Object(o.useState)(),n=u(e,2),t=n[0],r=n[1];return Object(o.useEffect)(function(){var e=s(),n=function(e){return function(){e(function(e){return c({},e,{online:!0,since:(new Date).getTime()})})}}(r),t=function(e){return function(){e(function(e){return c({},e,{online:!1,since:(new Date).getTime()})})}}(r),o=function(e){return function(){e(function(e){return c({},e,s())})}}(r);return window.addEventListener("online",n),window.addEventListener("offline",t),e.connectionObject&&e.data.networkInformationSupported&&e.connectionObject.addEventListener("change",o),r(function(e){return c({},e,{online:navigator.onLine,since:(new Date).getTime()},s())}),function(){window.removeEventListener("online",n),window.removeEventListener("offline",t),e.connectionObject&&e.data.networkInformationSupported&&e.connectionObject.removeEventListener("change",o)}},[]),t},f=t(2),p=t.n(f),d=function(){var e=m();return r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:p.a,style:{height:96,marginBottom:12},alt:""}),r.a.createElement("img",{src:"https://img.shields.io/npm/v/use-connection.svg",alt:""}),r.a.createElement("h1",null,"use-connection"),r.a.createElement("p",null,"A custom React hook that lets you know ",r.a.createElement("mark",null,"if the client is online")," as well as ",r.a.createElement("mark",null,"network information such as downlink and type")," if it is supported by the browser."),r.a.createElement("p",null,"Start with:"),r.a.createElement("p",null,r.a.createElement("code",null,"npm install --save use-connection")),r.a.createElement("p",null,"And in your component just use the hook as:"),r.a.createElement("p",null,r.a.createElement("code",null,"const data = useConnection();")),r.a.createElement("p",null,"Raw output for your session: "),r.a.createElement("pre",null,JSON.stringify(e,null,2)),r.a.createElement("p",null,"Open up your Browser Tool\u2019s Network tab and play around with Throttling to see these values change!"),r.a.createElement("h2",null,"Docs"),r.a.createElement("p",null,"What you see above depends highly on your browser. Most browsers will support the basic ",r.a.createElement("mark",null,"online/offline")," event listener. Additional network information is taken from ",r.a.createElement("mark",null,"navigator.connection")," which is still not supported on all browsers."),r.a.createElement("h3",null,"Response Properties"),r.a.createElement("p",null,"The response will always contain three properties:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("code",null,"online")," \u2013 boolean, RT info on online status."),r.a.createElement("li",null,r.a.createElement("code",null,"since")," \u2013 timestamp of when the online status was last toggled."),r.a.createElement("li",null,r.a.createElement("code",null,"networkInformationSupported")," \u2013 boolean, true if ",r.a.createElement("mark",null,"NetworkInformation")," is available.")),r.a.createElement("h3",null,"NetworkInformation Properties"),r.a.createElement("p",null,"If ",r.a.createElement("mark",null,"networkInformationSupported")," is ",r.a.createElement("code",null,"true"),", then you can expect to see:"),r.a.createElement("ul",null,r.a.createElement("li",null,"downlink"),r.a.createElement("li",null,"downlinkMax"),r.a.createElement("li",null,"effectiveType"),r.a.createElement("li",null,"type"),r.a.createElement("li",null,"rtt"),r.a.createElement("li",null,"saveData")),r.a.createElement("p",null,"Consult the MDN documentation ",r.a.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation#Properties",target:"_blank",rel:"noopener noreferrer"},"for NetworkInformation")," to see what each means."))};l.a.render(r.a.createElement(d,null),document.getElementById("root"))}],[[3,1,2]]]);
//# sourceMappingURL=main.224e82b0.chunk.js.map