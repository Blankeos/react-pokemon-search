(this["webpackJsonpreact-pokemon-search"]=this["webpackJsonpreact-pokemon-search"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),r=n(17),a=n.n(r),l=(n(23),n(11)),o=n(8),i=(n(24),n(10)),j=n(2),u=n.p+"static/media/pikachu.20e5d35b.svg",d=n(1);var f=function(){var e=Object(j.f)().slug,t=Object(c.useState)(),n=Object(o.a)(t,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){fetch("https://pokeapi.co/api/v2/pokemon/".concat(e)).then((function(e){return e.json()})).then((function(e){a(e)}))}),[e]),Object(d.jsxs)(s.a.Fragment,{children:[Object(d.jsxs)("div",{className:"w-8/12 md:w-5/12 m-auto mt-4 shadow-lg flex justify-center flex-col items-center rounded-lg overflow-hidden bg-gradient-to-br from-yellow-400 to-orange-500",children:[Object(d.jsx)("div",{className:"bg-gradient-to-r from-yellow-400 to-pink-400 w-full flex justify-center p-4",children:Object(d.jsx)("h3",{className:"text-md md:text-xl text-white uppercase font-bold",children:r?r.name:"Loading..."})}),r&&Object(d.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 display flex justify-center items-center",children:[Object(d.jsx)("img",{className:"select-none",src:r.sprites.front_default,alt:""}),Object(d.jsx)("img",{className:"select-none",src:r.sprites.back_default,alt:""})]})]}),Object(d.jsx)("div",{className:"flex justify-center",children:Object(d.jsx)(i.b,{className:"bg-gradient-to-r from-yellow-400 to-pink-400 px-10 py-4 rounded-full text-white mt-5 shadow-md transform transition hover:scale-105 focus:ring-2 focus:ring-pink-500",to:"/",children:"Catch 'em"})})]})},b=s.a.lazy((function(){return n.e(3).then(n.bind(null,32))}));var m=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(""),a=Object(o.a)(r,2),m=a[0],h=a[1],x=Object(c.useState)([]),p=Object(o.a)(x,2),g=p[0],O=p[1];Object(c.useEffect)((function(){fetch("https://pokeapi.co/api/v2/pokemon?limit=898&offset=0").then((function(e){return e.json()})).then((function(e){var t=e.results.map((function(e,t){return Object(l.a)(Object(l.a)({},e),{},{idx:t+1})}));s(Object(l.a)(Object(l.a)({},e),{},{results:t}))}))}),[]),Object(c.useMemo)((function(){0!==m.length?O((function(){return n.results.filter((function(e){return e.name.includes(m.toLowerCase())}))})):O(n.results)}),[n.results,m]);var v=function(){h(""),O(n.results)};return Object(d.jsxs)(i.a,{children:[Object(d.jsx)("div",{className:"p-14",children:Object(d.jsx)("div",{className:"flex flex-col items-center",children:Object(d.jsxs)(i.b,{onClick:v,className:"flex flex-col gap-2 transform transition hover:scale-105",to:"/",children:[Object(d.jsx)("img",{className:"h-14",src:u}),Object(d.jsxs)("header",{className:"text-4xl font-bold text-yellow-500 text-center",children:["Pok\xe9mon Picker",Object(d.jsx)("p",{className:"text-sm font-normal text-yellow-400",children:"Made by Carlo Taleon"})]})]})})}),Object(d.jsxs)(j.c,{children:[Object(d.jsx)(j.a,{path:"/about/:slug",children:Object(d.jsx)(f,{})}),Object(d.jsxs)(j.a,{exact:!0,path:"/",children:[Object(d.jsx)("div",{className:"w-full flex justify-center",children:Object(d.jsx)("input",{type:"text",onChange:function(e){return h(e.target.value)},placeholder:"  Enter Pokemon here",className:"mt-10 p-2 w-10/12 md:w-6/12 bg-white ring-1 ring-yellow-300 rounded-lg placeholder-gray-400 text-gray-900 appearance-none shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500"})}),Object(d.jsx)(c.Suspense,{fallback:Object(d.jsx)("div",{className:"text-center mt-12 font-bold text-lg text-gray-500",children:"Rendering Pokemon..."}),children:n&&Object(d.jsx)(b,{prop:g,resetFilters:v,text:m})})]})]})]})},h=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,33)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))};a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),h()}},[[31,1,2]]]);
//# sourceMappingURL=main.3d0eb962.chunk.js.map