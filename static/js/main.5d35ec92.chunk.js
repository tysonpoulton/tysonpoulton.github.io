(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{377:function(e,t,n){var c={"./fireside-chat.png":378,"./image-gallery.png":379,"./portfolio-site.png":380,"./spotify-clone.png":381,"./task-tracker.png":382};function s(e){var t=a(e);return n(t)}function a(e){if(!n.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}s.keys=function(){return Object.keys(c)},s.resolve=a,e.exports=s,s.id=377},378:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/fireside-chat.5a860acd.png"},379:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/image-gallery.3d1c2ac2.png"},380:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/portfolio-site.80f899ae.png"},381:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/spotify-clone.58c1b042.png"},382:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/task-tracker.4c057017.png"},383:function(e,t,n){"use strict";n.r(t);var c,s=n(3),a=n(21),i=n.n(a),o=(n(88),n(89),n(17)),r=n(28),l=n(2),d=function(){var e=Object(s.useState)("white"),t=Object(o.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)("transparent"),i=Object(o.a)(a,2),d=i[0],j=i[1],u=Object(s.useState)("none"),b=Object(o.a)(u,2),m=b[0],p=b[1],f=function(){window.scrollY>895?c("black"):c("white"),window.scrollY>895?j("white"):j("transparent"),window.scrollY>895?p("0 3px 6px rgba(0, 0, 0, 0.16)"):p("none")};return Object(s.useEffect)((function(){window.addEventListener("scroll",f)}),[]),Object(l.jsx)("nav",{className:"fixed w-full pt-5 pb-5 pr-10 z-10",style:{background:d,boxShadow:m},children:Object(l.jsxs)("ul",{className:"flex flex-row float-right text-2xl text-center font-semibold gap-5",style:{color:n},children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(r.Link,{activeClass:"active",to:"home",spy:!0,smooth:!0,offset:-70,duration:300,children:"Home"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(r.Link,{activeClass:"active",to:"about",spy:!0,smooth:!0,offset:-70,duration:300,children:"About"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(r.Link,{activeClass:"active",to:"projects",spy:!0,smooth:!0,offset:-70,duration:300,children:"Projects"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(r.Link,{activeClass:"active",to:"contact",spy:!0,smooth:!0,offset:-70,duration:300,children:"Contact"})})]})})},j=n(77),u=n.n(j),b=function(){return Object(l.jsx)(u.a,{id:"tsparticles",init:function(e){console.log(e)},loaded:function(e){console.log(e)},options:{fullScreen:{enable:!0,zIndex:-999},background:{color:{value:"#070707"}},fpsLimit:30,interactivity:{events:{onClick:{enable:!1,mode:"repulse"},onHover:{enable:!0,mode:"grab"},resize:!0},modes:{repulse:{distance:400,duration:.2},grab:{distance:120,link_linked:{opacity:1}}}},particles:{color:{value:"#A1761B"},links:{color:"#FFF",distance:150,enable:!0,opacity:.5,width:.5},collisions:{enable:!1},move:{direction:"none",enable:!0,outMode:"out",random:!1,speed:1,straight:!1},number:{density:{enable:!0,value_area:800},value:80},opacity:{value:.7},shape:{type:"circle"},size:{random:!1,value:2}},detectRetina:!1}})},m=n(19),p=n(52),f=n(25),h=[{icon:p.b,dest:"https://www.linkedin.com/in/tyson-poulton/"},{icon:p.a,dest:"https://github.com/tysonpoulton"},{icon:f.b,dest:"mailto:ty.poulton@gmail.com"},{icon:f.c,dest:"PDF"}],x={"Front End":[{name:"Javascript",src:"https://img.icons8.com/color/96/000000/javascript.png",link:"https://www.javascript.com/"},{name:"React",src:"https://img.icons8.com/color/96/000000/react-native.png",link:"https://reactjs.org/"},{name:"Angular",src:"https://img.icons8.com/color/96/000000/angularjs.png",link:"https://angular.io/"},{name:"SASS",src:"https://img.icons8.com/color/96/000000/sass.png",link:"https://sass-lang.com/"},{name:"HTML5",src:"https://img.icons8.com/color/96/000000/html-5.png",link:"https://developer.mozilla.org/en-US/docs/Web/HTML"},{name:"CSS",src:"https://img.icons8.com/color/96/000000/css3.png",link:"https://developer.mozilla.org/en-US/docs/Web/CSS"}],"Back End":[{name:"Node",src:"https://img.icons8.com/color/96/000000/nodejs.png",link:"https://nodejs.org/en/"},{name:"Firebase",src:"https://img.icons8.com/color/96/000000/firebase.png",link:"https://firebase.google.com/"},{name:"Express",src:"https://cdn.iconscout.com/icon/free/png-96/express-9-1175170.png",link:"https://expressjs.com/"}]},g=[{name:"Fireside Chat",code:"https://github.com/tysonpoulton/fireside-chat",live:"https://tysonpoulton.github.io/fireside-chat/",src:"fireside-chat.png",langs:["React","Firebase"]},{name:"Portfolio Site (You're already on it!)",code:"https://github.com/tysonpoulton/",src:"portfolio-site.png",langs:["React","SASS","TailwindCSS"]},{name:"Image Gallery",code:"https://github.com/tysonpoulton/image-gallery",live:"https://tysonpoulton.github.io/image-gallery/",src:"image-gallery.png",langs:["React, TailwindCSS"]},{name:"Task Tracker",code:"https://github.com/tysonpoulton/task-tracker",src:"task-tracker.png",langs:["React","Node","CSS"]},{name:"Lyrify",code:"https://github.com/tysonpoulton/lyrify",src:"spotify-clone.png",langs:["React","Node","Express","Bootstrap"]}],O=n(26),v=function(e){var t=e.icon,n=e.dest;return Object(l.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",children:Object(l.jsx)(O.a,{icon:t})})},y=function(){return Object(l.jsx)("span",{className:"flex flex-row mx-auto text-white fa-2x gap-4",children:h.map((function(e,t){return Object(s.createElement)(v,Object(m.a)(Object(m.a)({},e),{},{key:t}))}))})},w=function(){return Object(l.jsxs)("div",{className:"container flex h-screen justify-center items-center flex-col mx-auto text-white text-center",children:[Object(l.jsx)("h1",{className:"text-5xl pb-2 border-b-2",children:"Tyson Poulton"}),Object(l.jsx)("h2",{className:"text-3xl italic",children:"Software Developer"}),Object(l.jsx)(y,{})]})},k=function(){return Object(l.jsxs)("section",{id:"home",children:[Object(l.jsx)(d,{}),Object(l.jsx)(b,{}),Object(l.jsx)(w,{})]})},N=n(83),S=n(78),E=Object(s.createContext)(),C=function(e){var t=e.children,n=Object(s.useState)("Front End"),c=Object(o.a)(n,2),a=c[0],i=c[1];return Object(l.jsx)(E.Provider,{value:[a,i],children:t})},F=n(16),I=n(386),L=n(79),T=function(e){return Object(l.jsxs)("li",{className:"text-center font-semibold text-xl",children:[Object(l.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",children:Object(l.jsx)("img",{alt:e.name,src:e.src})}),Object(l.jsx)("p",{children:e.name})]})},_=L.a.div(c||(c=Object(S.a)(["\n  transition: 0.5s;\n  opacity: ",";\n  display: ",";\n"])),(function(e){return"entered"===e.state?1:0}),(function(e){return"exited"===e.state?"none":"block"})),R=function(e){var t=e.children,n=Object(N.a)(e,["children"]);return Object(l.jsx)(F.d,Object(m.a)(Object(m.a)({},n),{},{children:function(e){return Object(l.jsx)(_,{state:e,children:t})}}))},z=function(e){var t=e.categoryTransition,n=Object(s.useContext)(E),c=Object(o.a)(n,1)[0],a=Object(s.useState)(x[c]),i=Object(o.a)(a,2),r=i[0],d=i[1];return Object(s.useEffect)((function(){d(x[c])}),[c]),Object(l.jsx)(I.a,{children:Object(l.jsx)(R,{timeout:100,unmountOnExit:!0,mountOnEnter:!0,children:Object(l.jsx)("ul",{className:"flex flex-row justify-center justify-evenly",children:r.map((function(e,t){return Object(l.jsx)(T,Object(m.a)({},e),t)}))})},t?"Front End":"Back End")})},B=function(){var e=Object(s.useContext)(E),t=Object(o.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(!1),i=Object(o.a)(a,2),r=i[0],d=i[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"flex flex-row justify-center mt-20 text-4xl gap-20 mb-20 font-semibold","data-aos":"fade-up","data-aos-offset":"0","data-aos-duration":"1000","data-aos-mirror":"true",children:["Front End","Back End"].map((function(e){return Object(l.jsx)("h2",{className:"cursor-pointer ".concat(n===e?"underline":""),onClick:function(){c(e),d(!r)},children:e},e)}))}),Object(l.jsx)("div",{"data-aos":"fade-up","data-aos-duration":"1000","data-aos-delay":"300","data-aos-offset":"0","data-aos-mirror":"true",children:Object(l.jsx)(z,{categoryTransition:r})})]})},A=function(){return Object(l.jsx)("section",{id:"about",className:"w-screen flex justify-center about-container bg-white",children:Object(l.jsxs)("div",{className:"about-content",children:[Object(l.jsx)("p",{className:"text-xl text-left pt-20 mx-5",children:"Hello! My name is Tyson and I enjoy creating things on the internet. I became interested in web development during quarantine when I started running out of ways to entertain myself. I've always loved problem solving and as it turns out, coming up with new and unique solutions when creating websites was just what I was looking for."}),Object(l.jsx)("p",{className:"text-xl text-left pt-6 mx-5",children:"Since beginning my journey in web development, I have learned and used many front end and back end technologies, but I'm most comfortable with Javascript. In my free time I enjoy spending time with friends and family, listening to music, and playing video games."}),Object(l.jsx)("div",{className:"pt-10 border-black border-b-2","data-aos":"width-expand","data-aos-duration":"1000"}),Object(l.jsx)(B,{})]})})},H=function(e){return Object(l.jsx)("div",{"data-aos":"flip-right","data-aos-duration":"500",children:Object(l.jsxs)("article",{className:"w-full flex flex-col items-start bg-white project-card",children:[Object(l.jsx)("span",{className:"w-full",children:Object(l.jsx)("img",{className:"img-container",src:e.src?n(377)("./".concat(e.src)).default:"",alt:e.name})}),Object(l.jsxs)("span",{className:"title-link",children:[Object(l.jsx)("span",{className:"text-lg font-bold pl-1",children:e.name}),Object(l.jsx)("span",{className:"project-links",children:Object(l.jsxs)("span",{className:"project-links",children:[Object(l.jsx)("a",{className:"pr-2 no-underline link",href:e.code,target:"_blank",rel:"noreferrer",children:Object(l.jsx)(O.a,{icon:f.a})}),e.live&&Object(l.jsx)("a",{className:"link",href:e.live,target:"_blank",rel:"noreferrer",children:Object(l.jsx)(O.a,{icon:f.d})})]})})]}),Object(l.jsx)("span",{className:"font-weight-300 italic",children:e.langs.map((function(e,t,n){return t===n.length-1?e:"".concat(e,", ")}))})]})})},M=function(){return Object(l.jsx)("section",{id:"projects",className:"project-container pt-20 w-screen bg-white",children:Object(l.jsx)("div",{className:"flex justify-center flex-wrap",children:g.map((function(e,t){return Object(l.jsx)(H,Object(m.a)({},e),t)}))})})},P=function(){return Object(l.jsxs)("div",{id:"contact",className:"container flex h-80 justify-center items-center flex-col mx-auto text-white text-center",children:[Object(l.jsx)("h1",{className:"text-4xl pb-2",children:"Let's get in touch!"}),Object(l.jsx)(y,{})]})},D=function(){return Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(k,{}),Object(l.jsx)(C,{children:Object(l.jsx)(A,{})}),Object(l.jsx)(M,{}),Object(l.jsx)(P,{})]})};i.a.render(Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(D,{})}),document.getElementById("root"))},88:function(e,t,n){},89:function(e,t,n){}},[[383,1,2]]]);
//# sourceMappingURL=main.5d35ec92.chunk.js.map