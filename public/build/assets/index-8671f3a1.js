import{j as e,d as m,r as n}from"./app-3ae78c27.js";import{A as u}from"./index-1bb03f08.js";import{F as x}from"./Footer-074b46ab.js";import{P as o}from"./PrimaryLink-3fd9f2de.js";import{h as c}from"./index.esm-acc8c32e.js";import{t as f}from"./transition-82cd760d.js";import{F as h}from"./FullLogo-dddfe68f.js";function d({href:s,className:r="",children:t,...i}){return e.jsx(m,{href:s,...i,className:"flex items-center px-5 py-3 font-medium text-gray-600 transition duration-150 ease-in-out hover:text-primary-900 "+r,children:t})}function j(){const[s,r]=n.useState(!1),t=n.useRef(null),i=n.useRef(null);return n.useEffect(()=>{const a=({target:l})=>{!i.current||!t.current||!s||i.current.contains(l)||t.current.contains(l)||r(!1)};return document.addEventListener("click",a),()=>document.removeEventListener("click",a)}),n.useEffect(()=>{const a=({keyCode:l})=>{!s||l!==27||r(!1)};return document.addEventListener("keydown",a),()=>document.removeEventListener("keydown",a)}),e.jsxs("div",{className:"flex md:hidden",children:[e.jsxs("button",{ref:t,className:`hamburger ${s&&"active"}`,"aria-controls":"mobile-nav","aria-expanded":s,onClick:()=>r(!s),children:[e.jsx("span",{className:"sr-only",children:"Menu"}),e.jsxs("svg",{className:"h-6 w-6 fill-current text-gray-900",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("rect",{y:"4",width:"24",height:"2"}),e.jsx("rect",{y:"11",width:"24",height:"2"}),e.jsx("rect",{y:"18",width:"24",height:"2"})]})]}),e.jsx("div",{ref:i,children:e.jsx(f,{show:s,as:"nav",id:"mobile-nav",className:"absolute left-0 top-full z-20 h-screen w-full overflow-auto bg-gray-50 pb-16 backdrop-blur-sm",enter:"transition ease-out duration-200 transform",enterFrom:"opacity-0 -translate-y-2",enterTo:"opacity-100 translate-y-0",leave:"transition ease-out duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsxs("ul",{className:"px-5 py-2",children:[e.jsx("li",{children:e.jsx(d,{href:route("login"),className:"justify-center",onClick:()=>r(!1),children:"Login"})}),e.jsx("li",{children:e.jsxs(o,{href:route("register.method"),className:"flex justify-center normal-case",onClick:()=>r(!1),children:[e.jsx("span",{children:"Register "}),e.jsx(c,{})]})})]})})})]})}function p(){return e.jsx("nav",{className:"hidden md:flex md:grow",children:e.jsxs("ul",{className:"flex grow flex-wrap items-center justify-end",children:[e.jsx("li",{children:e.jsx(d,{href:route("login"),children:"Login"})}),e.jsx("li",{children:e.jsxs(o,{className:"ml-5 flex normal-case",href:route("register.method"),children:[e.jsx("span",{children:"Register "}),e.jsx(c,{})]})})]})})}function v(){const[s,r]=n.useState(!0),t=()=>{window.scrollY>10?r(!1):r(!0)};return n.useEffect(()=>(t(),window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)),[s]),e.jsxs(e.Fragment,{children:[e.jsx("header",{style:{zIndex:100},className:`fixed w-full backdrop-blur-sm transition duration-300 ease-in-out md:bg-opacity-80 ${s?"":"bg-gray-50 shadow-lg"}`,children:e.jsx("div",{className:"mx-auto max-w-6xl px-5 sm:px-6",children:e.jsxs("div",{className:"flex h-16 items-center justify-between md:h-20",children:[e.jsx(h,{}),e.jsx(p,{}),e.jsx(j,{})]})})}),e.jsx("div",{className:"pb-16 md:pb-20"})]})}function E({children:s}){return e.jsx(u,{children:e.jsxs("div",{className:"selection:bg-red-500 selection:text-white",children:[e.jsx(v,{}),e.jsx("main",{children:s}),e.jsx(x,{})]})})}export{E as G};
