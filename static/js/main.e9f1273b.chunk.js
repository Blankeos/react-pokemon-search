(this["webpackJsonpreact-pokemon-search"]=this["webpackJsonpreact-pokemon-search"]||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c.n(s),r=c(17),l=c.n(r),a=(c(23),c(11)),o=c(9),i=(c(24),c(7)),d=c(2),j=c(1);var u=function(){var e=Object(d.f)().slug,t=Object(s.useState)(),c=Object(o.a)(t,2),r=c[0],l=c[1];return Object(s.useEffect)((function(){fetch("https://pokeapi.co/api/v2/pokemon/".concat(e)).then((function(e){return e.json()})).then((function(e){l(e)}))}),[e]),Object(j.jsxs)(n.a.Fragment,{children:[Object(j.jsxs)("div",{className:"w-8/12 md:w-5/12 m-auto mt-4 shadow-lg flex justify-center flex-col items-center rounded-lg overflow-hidden bg-gradient-to-br from-yellow-400 to-orange-500",children:[Object(j.jsx)("div",{className:"bg-gradient-to-r from-yellow-400 to-pink-400 w-full flex justify-center p-4",children:Object(j.jsx)("h3",{className:"text-md md:text-xl text-white uppercase font-bold",children:r?r.name:"Loading..."})}),r&&Object(j.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 display flex justify-center items-center",children:[Object(j.jsx)("img",{className:"select-none",src:r.sprites.front_default,alt:""}),Object(j.jsx)("img",{className:"select-none",src:r.sprites.back_default,alt:""})]})]}),Object(j.jsx)("div",{className:"flex justify-center",children:Object(j.jsx)(i.b,{className:"bg-gradient-to-r from-yellow-400 to-pink-400 px-10 py-4 rounded-full text-white mt-5 shadow-md transform transition hover:scale-105 focus:ring-2 focus:ring-pink-500",to:"/",children:"Catch 'em"})})]})};var m=function(e){var t=e.prop,c=e.resetFilters;return Object(j.jsx)("div",{className:"w-full",children:Object(j.jsx)("div",{className:"mt-10 mx-12 grid grid-cols-2 md:grid-cols-3 lg:mx-52 gap-4",children:t&&t.map((function(e){return Object(j.jsx)(i.b,{onClick:c,to:"/about/".concat(e.idx),children:Object(j.jsxs)("div",{className:"w-full text-2xl text-yellow-500 rounded-xl border border-yellow-400 transition shadow-sm hover:shadow-lg flex flex-col items-center overflow-hidden",children:[Object(j.jsx)("div",{className:"w-full md:h-36 lg:h-40 flex justify-center items-center bg-gradient-to-br from-yellow-400 to-orange-500 hover:from-yellow-300",children:Object(j.jsx)("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(e.idx,".png")})}),Object(j.jsx)("div",{className:"bg-white w-full flex justify-center items-center py-5",children:Object(j.jsx)("p",{className:"text-shadow text-base md:text-lg text-gray-500",children:e.name.charAt(0).toUpperCase()+e.name.slice(1)})})]})},e.idx)}))})})},f=c.p+"static/media/pikachu.20e5d35b.svg";var x=function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1],r=Object(s.useState)(""),l=Object(o.a)(r,2),x=l[0],b=l[1],h=Object(s.useState)([]),p=Object(o.a)(h,2),g=p[0],O=p[1];Object(s.useEffect)((function(){fetch("https://pokeapi.co/api/v2/pokemon?limit=600offset=0&").then((function(e){return e.json()})).then((function(e){var t=e.results.map((function(e,t){return Object(a.a)(Object(a.a)({},e),{},{idx:t+1})}));n(Object(a.a)(Object(a.a)({},e),{},{results:t}))}))}),[]),Object(s.useMemo)((function(){0!==x.length?O((function(){return c.results.filter((function(e){return e.name.includes(x)}))})):O(c.results)}),[c.results,x]);var w=function(){b(""),O(c.results)};return Object(j.jsxs)(i.a,{children:[Object(j.jsx)("div",{className:"p-14",children:Object(j.jsx)("div",{className:"flex flex-col items-center",children:Object(j.jsxs)(i.b,{onClick:w,className:"flex flex-col gap-2 transform transition hover:scale-105",to:"/",children:[Object(j.jsx)("img",{className:"h-14",src:f}),Object(j.jsxs)("header",{className:"text-4xl font-bold text-yellow-500 text-center",children:["Pok\xe9mon Picker",Object(j.jsx)("p",{className:"text-sm font-normal text-yellow-400",children:"Made by Carlo Taleon"})]})]})})}),Object(j.jsxs)(d.c,{children:[Object(j.jsx)(d.a,{path:"/about/:slug",children:Object(j.jsx)(u,{})}),Object(j.jsxs)(d.a,{exact:!0,path:"/",children:[Object(j.jsx)("div",{className:"w-full flex justify-center",children:Object(j.jsx)("input",{type:"text",onChange:function(e){return b(e.target.value)},placeholder:"  Enter Pokemon here",className:"mt-10 p-2 w-10/12 md:w-6/12 bg-white ring-1 ring-yellow-300 rounded-lg placeholder-gray-400 text-gray-900 appearance-none shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500"})}),c&&Object(j.jsx)(m,{prop:g,resetFilters:w})]})]})]})},b=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,32)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,l=t.getTTFB;c(e),s(e),n(e),r(e),l(e)}))};l.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root")),b()}},[[31,1,2]]]);
//# sourceMappingURL=main.e9f1273b.chunk.js.map