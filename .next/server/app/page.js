(()=>{var e={};e.id=974,e.ids=[974],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},9428:e=>{"use strict";e.exports=require("buffer")},9021:e=>{"use strict";e.exports=require("fs")},3873:e=>{"use strict";e.exports=require("path")},9551:e=>{"use strict";e.exports=require("url")},7465:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>i.a,__next_app__:()=>c,pages:()=>u,routeModule:()=>m,tree:()=>d});var s=t(260),n=t(8203),a=t(5155),i=t.n(a),o=t(7292),l={};for(let e in o)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);t.d(r,l);let d=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,7294)),"/home/tahira/Documents/JFreaks/udemy/app/page.jsx"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,2987))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,7933)),"/home/tahira/Documents/JFreaks/udemy/app/layout.jsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,9937,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,2987))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["/home/tahira/Documents/JFreaks/udemy/app/page.jsx"],c={require:t,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:n.RouteKind.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},9051:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,3219,23)),Promise.resolve().then(t.t.bind(t,4863,23)),Promise.resolve().then(t.t.bind(t,5155,23)),Promise.resolve().then(t.t.bind(t,9350,23)),Promise.resolve().then(t.t.bind(t,6313,23)),Promise.resolve().then(t.t.bind(t,8530,23)),Promise.resolve().then(t.t.bind(t,8921,23))},5843:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,6959,23)),Promise.resolve().then(t.t.bind(t,3875,23)),Promise.resolve().then(t.t.bind(t,8903,23)),Promise.resolve().then(t.t.bind(t,4178,23)),Promise.resolve().then(t.t.bind(t,6013,23)),Promise.resolve().then(t.t.bind(t,7190,23)),Promise.resolve().then(t.t.bind(t,1365,23))},4975:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,5197,23))},1927:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,7801,23))},7635:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,5197,23))},4587:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,7801,23))},7933:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>d,metadata:()=>l});var s=t(2740),n=t(308);let a=function(){return(0,s.jsx)("nav",{children:(0,s.jsxs)("ul",{className:"flex gap-2",children:[(0,s.jsx)("li",{children:(0,s.jsx)(n.default,{href:"/",className:"font-bold font-orbitron text-orange-900 hover:underline",children:"Indie Gamer"})}),(0,s.jsx)("li",{className:"ml-auto",children:(0,s.jsx)(n.default,{href:"/reviews",className:"text-orange-900 hover:underline",children:"Reviews"})}),(0,s.jsx)("li",{children:(0,s.jsx)(n.default,{href:"/about",className:"text-orange-900 hover:underline",children:"About"})})]})})};var i=t(137),o=t.n(i);t(2704);let l={title:{default:"Indie Gamer",template:"%s | Indie Gamer"}};function d({children:e}){return(0,s.jsx)("html",{lang:"en",className:o().variable,children:(0,s.jsxs)("body",{className:"px-4 py-2 flex flex-col min-h-screen bg-orange-50",children:[(0,s.jsx)("header",{children:(0,s.jsx)(a,{})}),(0,s.jsx)("main",{className:"grow py-3",children:e}),(0,s.jsxs)("footer",{className:"text-center text-slate-500 text-xs border-t py-3",children:["Game Data and Image Couresty of"," ",(0,s.jsx)("a",{href:"https://rawg.io/",target:"_blank",className:"text-orange-900 hover:underline",children:"RAWG"})]})]})})}},7294:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>o});var s=t(2740),n=t(6592),a=t(308),i=t(8778);async function o(){let e=await (0,i.Vs)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.A,{children:"Indie Gamer"}),(0,s.jsx)("p",{className:"pb-3",children:"Only the best indie games, reviewed for you."}),(0,s.jsx)("div",{className:"border w-80 bg-white shadow hover:shadow-xl sm:w-full",children:(0,s.jsxs)(a.default,{href:`/reviews/${e.slug}`,className:"flex flex-col sm:flex-row",children:[(0,s.jsx)("img",{src:e.image,alt:"",width:"320",height:"180",className:"rounded-t sm:rounded-l sm:rounded-r-none"}),(0,s.jsx)("h2",{className:"font-bold font-orbitron py-1 text-center sm:px-2",children:e.title})]})})]})}},6592:(e,r,t)=>{"use strict";t.d(r,{A:()=>n});var s=t(2740);let n=function({children:e}){return(0,s.jsx)("h1",{className:"font-bold font-orbitron text-2xl pb-3",children:e})}},8778:(e,r,t)=>{"use strict";t.d(r,{Vs:()=>o,F1:()=>l,Gs:()=>d,Hl:()=>u});let s=require("node:fs/promises");var n=t(9064),a=t.n(n),i=t(3290);async function o(){return(await d())[0]}async function l(e){let r=await (0,s.readFile)(`./content/reviews/${e}.md`,"utf8"),{content:t,data:{title:n,date:o,image:l}}=a()(r);return{slug:e,title:n,date:o,image:l,body:(0,i.xI)(t)}}async function d(){let e=await u(),r=[];for(let t of e){let e=await l(t);r.push(e)}return r.sort((e,r)=>r.date.localeCompare(e.date)),r}async function u(){return(await (0,s.readdir)("./content/reviews")).filter(e=>e.endsWith(".md")).map(e=>e.slice(0,-3))}},2987:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>n});var s=t(8077);let n=async e=>[{type:"image/png",sizes:"32x32",url:(0,s.fillMetadataSegment)(".",await e.params,"icon.png")+"?7f9d420ac4c15a91"}]},2704:()=>{}};var r=require("../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[989,315,77,563],()=>t(7465));module.exports=s})();