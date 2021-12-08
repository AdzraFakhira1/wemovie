(this["webpackJsonpwe-movie"]=this["webpackJsonpwe-movie"]||[]).push([[0],{21:function(e,t,c){},22:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(16),o=c.n(n),r=(c(21),c(22),c(5)),i=c(2),l=c(3),d=c(0);function j(){var e=Object(a.useState)(),t=Object(l.a)(e,2),c=t[0],s=t[1],n=Object(i.f)();return Object(d.jsx)("nav",{className:"container mx-auto px-4 xl:px-0",children:Object(d.jsxs)("div",{className:"flex items-center py-5",children:[Object(d.jsx)("div",{children:Object(d.jsxs)(r.b,{to:"/wemovie",className:"flex gap-2 items-center",children:[Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-10 w-10",viewBox:"0 0 20 20",fill:"currentColor",children:Object(d.jsx)("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z",clipRule:"evenodd"})}),Object(d.jsx)("h1",{className:"font-bold text-2xl",children:"WeMovie"})]})}),Object(d.jsx)("div",{className:"w-full",children:Object(d.jsx)("form",{onSubmit:function(e){e.preventDefault(),n("/wemovie/search?q=".concat(c))},className:"flex justify-end",children:Object(d.jsx)("input",{className:"focus:ring-color1 focus:border-color1 text-black py-2 px-4 sm:text-sm focus:outline-none border-gray-300 rounded-xl block w-6/12",type:"search",value:c,onChange:function(e){s(e.target.value)},placeholder:"Search Movie..."})})})]})})}var b=c(6),h=c(7),x=c.n(h);c(12),c(13);function m(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1];Object(a.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=cb46587d476c8b7706211f0575e7f97a&language=en-US&page=1").then((function(e){if(e.ok)return e.json();throw e})).then((function(e){s(e.results)}))}),[]);var n=c.slice(0,5);return Object(d.jsx)("div",{children:Object(d.jsx)(x.a,Object(b.a)(Object(b.a)({},{arrows:!1,dots:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0}),{},{children:n.length>0&&n.map((function(e){return Object(d.jsxs)("div",{className:"relative",children:[Object(d.jsx)("div",{className:"absolute left-0 bottom-0",children:Object(d.jsx)("div",{className:"pl-5 pb-5 flex flex-col w-8/12",children:Object(d.jsxs)("div",{className:"bg-color4 bg-opacity-40 rounded p-3",children:[Object(d.jsx)("h6",{className:"font-bold text-3xl",children:e.title}),Object(d.jsx)("p",{className:"leading-relaxed mt-2",children:e.overview}),Object(d.jsxs)(r.b,{to:"/wemovie/detail/".concat(e.id),className:"mt-5 inline-flex gap-3 px-5 py-2 border border-transparent text-base font-medium rounded-md bg-color1 hover:bg-color1 hover:bg-opacity-80",children:[Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"})}),"See Detail"]})]})})}),Object(d.jsx)("img",{src:"https://image.tmdb.org/t/p/original/"+e.backdrop_path,alt:e.title,className:"w-full"})]},e.id)}))}))})}function u(e){var t=e.movie,c=new Date(t.release_date);return t.poster_path&&Object(d.jsxs)("div",{className:"rounded overflow-auto mx-2",children:[Object(d.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/"+t.poster_path,alt:t.title}),Object(d.jsxs)("div",{className:"py-2 px-3",children:[Object(d.jsxs)("div",{className:"flex items-center justify-between text-sm text-color5 mb-1",children:[Object(d.jsx)("p",{children:c.getFullYear()}),Object(d.jsxs)("div",{className:"flex gap-1 items-center",children:[Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 text-yellow-400",viewBox:"0 0 20 20",fill:"currentColor",children:Object(d.jsx)("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})}),Object(d.jsx)("span",{children:t.vote_average})]})]}),Object(d.jsx)(r.b,{to:"/wemovie/detail/".concat(t.id),children:Object(d.jsx)("h5",{className:"font-medium hover:text-color1 transition-colors",children:t.title})})]})]})}function f(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1];Object(a.useEffect)((function(){fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=cb46587d476c8b7706211f0575e7f97a").then((function(e){if(e.ok)return e.json();throw e})).then((function(e){s(e.results)}))}),[]);return Object(d.jsxs)("div",{className:"my-10",children:[Object(d.jsx)("h4",{className:"font-bold text-2xl mb-8 text-color5",children:"Trending This Week"}),Object(d.jsx)(x.a,Object(b.a)(Object(b.a)({},{className:"center",centerMode:!0,infinite:!0,centerPadding:"60px",slidesToShow:5,speed:500}),{},{children:c.map((function(e){return Object(d.jsx)(u,{movie:e},e.id)}))}))]})}function p(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)([]),o=Object(l.a)(n,2),r=o[0],i=o[1];return Object(a.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/latest?api_key=cb46587d476c8b7706211f0575e7f97a&language=en-US").then((function(e){if(e.ok)return e.json();throw e})).then((function(e){s(e)}))}),[]),Object(a.useEffect)((function(){c&&fetch("https://api.themoviedb.org/3/movie/"+c.id+"/videos?api_key=cb46587d476c8b7706211f0575e7f97a&language=en-US").then((function(e){if(e.ok)return e.json();throw e})).then((function(e){i(e.results)}))}),[c]),Object(d.jsxs)("div",{className:"container mx-auto px-4 xl:px-0 myt-10",children:[Object(d.jsx)("h4",{className:"font-bold text-2xl mb-5 text-color5",children:"Latest Movie"}),c&&Object(d.jsx)("div",{className:"bg-color2 bg-opacity-40 rounded border border-opacity-10",children:Object(d.jsxs)("div",{className:"flex gap-5",children:[r.key&&Object(d.jsx)("div",{children:Object(d.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/".concat(r.key,"?controls=0"),title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),Object(d.jsxs)("div",{className:"px-5 py-3",children:[Object(d.jsx)("h5",{className:"font-bold text-2xl",children:c.title}),Object(d.jsx)("p",{className:"leading-relaxed mt-2 text-color5 text-opacity-80",children:c.overview})]})]})})]})}function O(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1];Object(a.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/popular?api_key=cb46587d476c8b7706211f0575e7f97a&language=en-US&page=1&regino=ID").then((function(e){if(e.ok)return e.json();throw e})).then((function(e){s(e.results)}))}),[]);return Object(d.jsxs)("div",{className:"my-10",children:[Object(d.jsx)("h4",{className:"font-bold text-2xl mb-8 text-color5",children:"Popular in Indonesia"}),Object(d.jsx)(x.a,Object(b.a)(Object(b.a)({},{dots:!1,infinite:!1,speed:500,draggable:!0,slidesToShow:7,slidesToScroll:3}),{},{children:c.map((function(e){return Object(d.jsx)(u,{movie:e},e.id)}))}))]})}function v(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1];return Object(a.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=cb46587d476c8b7706211f0575e7f97a&language=en-US&page=1").then((function(e){if(e.ok)return e.json();throw e})).then((function(e){s(e.results)}))}),[]),Object(d.jsxs)("div",{className:"container mx-auto px-4 xl:px-0 my-10",children:[Object(d.jsx)("h4",{className:"font-bold text-2xl mb-8 text-color5",children:"Top Rated Movies"}),Object(d.jsx)("div",{className:"grid grid-cols-5 gap-5",children:c.map((function(e){return Object(d.jsx)(u,{movie:e},e.id)}))})]})}function g(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(m,{}),Object(d.jsxs)("section",{className:"container mx-auto px-4 xl:px-0",children:[Object(d.jsx)(f,{}),Object(d.jsx)(p,{}),Object(d.jsx)(O,{}),Object(d.jsx)(v,{})]})]})}function w(){var e=Object(i.e)().search,t=new URLSearchParams(e).get("q"),c=Object(a.useState)([]),s=Object(l.a)(c,2),n=s[0],o=s[1];return Object(a.useEffect)((function(){fetch("https://api.themoviedb.org/3/search/movie?api_key=cb46587d476c8b7706211f0575e7f97a&language=en-US&page=1&include_adult=false&query="+t).then((function(e){if(e.ok)return e.json();throw e})).then((function(e){o(e.results)}))}),[]),Object(d.jsxs)("div",{className:"container mx-auto px-4 xl:px-0 my-10",children:[Object(d.jsxs)("h4",{className:"font-bold text-2xl mb-8 text-color5",children:["Search Result: ",t]}),Object(d.jsx)("div",{className:"grid grid-cols-5 gap-5",children:n.map((function(e){return Object(d.jsx)(u,{movie:e},e.id)}))})]})}function N(){var e=Object(i.g)().id,t=Object(a.useState)([]),c=Object(l.a)(t,2),s=c[0],n=c[1],o=Object(a.useState)([]),j=Object(l.a)(o,2),b=j[0],h=j[1],x=new Date(s.release_date);Object(a.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=cb46587d476c8b7706211f0575e7f97a&language=en-US")).then((function(e){if(e.ok)return e.json();throw e})).then((function(e){n(e)})),fetch("https://api.themoviedb.org/3/movie/".concat(e,"/videos?api_key=cb46587d476c8b7706211f0575e7f97a&language=en-US")).then((function(e){if(e.ok)return e.json();throw e})).then((function(e){h(e.results)}))}),[]);var m={backgroundImage:"url(".concat("https://image.tmdb.org/t/p/original/"+s.backdrop_path,")"),backgroundColor:"rgb(0,0,0,0.7)",backgroundSize:"cover",backgroundOrigin:"border-box",backgroundBlendMode:"multiply"};return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"container mx-auto mt-10",children:Object(d.jsxs)(r.b,{to:"/wemovie",className:"inline-flex items-center gap-2 hover:text-color1 transition-colors",children:[Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:Object(d.jsx)("path",{fillRule:"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",clipRule:"evenodd"})}),"Back to Home"]})}),s&&Object(d.jsx)("div",{className:"py-10",style:m,children:Object(d.jsxs)("div",{className:"container mx-auto",children:[Object(d.jsxs)("div",{className:"flex gap-10 justify-center mt-10",children:[Object(d.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/"+s.poster_path,alt:s.title}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("h5",{className:"font-bold text-3xl",children:[s.title," (",x.getFullYear(),")"]}),Object(d.jsx)("p",{className:"text-gray-300 leading-relaxed",children:s.tagline}),Object(d.jsx)("div",{className:"flex gap-3 mt-3",children:s.genres&&s.genres.map((function(e){return Object(d.jsx)("span",{className:"border border-color4 bg-color2 bg-opacity-20 hover:bg-opacity-50 transition-all rounded-full py-1 px-5",children:e.name},e.id)}))}),Object(d.jsxs)("div",{className:"mt-5",children:[Object(d.jsx)("h6",{className:"text-color5 font-bold",children:"Overview"}),Object(d.jsx)("p",{className:"leading-relaxed text-gray-300",children:s.overview})]})]})]}),Object(d.jsxs)("div",{className:"mt-10",children:[Object(d.jsx)("h6",{className:"font-bold text-xl mb-8",children:"Trailer"}),Object(d.jsx)("div",{className:"grid grid-cols-4 gap-5",children:b&&b.map((function(e){return Object(d.jsx)("iframe",{src:"https://www.youtube.com/embed/".concat(e.key,"?controls=0"),title:e.name,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0},e.id)}))})]})]})})]})}function y(){return Object(d.jsx)("footer",{className:"text-center py-3",children:Object(d.jsxs)("p",{children:["\xa9 2021 ",Object(d.jsx)(r.b,{to:"/wemovie",className:"font-medium hover:text-color1 transition-colors",children:"WeMovie"})," - ",Object(d.jsx)("a",{className:"hover:text-color1 transition-colors",href:"https://instagram.com/adzrafkhra",children:"Adzra Fakhira"})]})})}var k=function(){return Object(d.jsxs)(r.a,{children:[Object(d.jsx)(j,{}),Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{path:"/wemovie",index:!0,element:Object(d.jsx)(g,{})}),Object(d.jsx)(i.a,{path:"/wemovie/search",element:Object(d.jsx)(w,{})}),Object(d.jsx)(i.a,{path:"/wemovie/detail/:id",element:Object(d.jsx)(N,{})})]}),Object(d.jsx)(y,{})]})};o.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(k,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.a2464b0c.chunk.js.map