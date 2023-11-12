import{j as e,q as u,d as c,r as h}from"./app-c279daac.js";import{D as n}from"./Dropdown-d30a794a.js";function p({children:r}){return e.jsx("div",{className:"bg-dots-darker relative dark:bg-dots-lighter min-h-screen bg-gray-100 bg-center dark:bg-gray-900",children:r})}function f({className:r,businessLogo:t=!1}){var a,o,m,x;let i=null;const s=(x=(m=(o=(a=u())==null?void 0:a.props)==null?void 0:o.auth)==null?void 0:m.business)==null?void 0:x.logo;return t&&s?i=s.startsWith("http")?s:"/businesses-logo/"+s:i="/assets/logo/laptop-pos-logo.svg",e.jsx("img",{className:r,src:i,alt:"Application Logo"})}function g({active:r=!1,className:t="",children:i,...s}){return e.jsx(c,{...s,className:"inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none "+(r?"border-primary-600 text-gray-900 focus:border-primary-800 ":"border-transparent text-gray-500 hover:border-primary-100 hover:text-gray-700 focus:border-primary-500 focus:text-gray-700 ")+t,children:i})}function l({active:r=!1,className:t="",children:i,...s}){return e.jsx(c,{...s,className:`flex w-full items-start border-l-4 py-2 pl-3 pr-4 ${r?"border-primary-600 bg-primary-50 text-primary-800 focus:border-primary-700 focus:bg-primary-100 focus:text-primary-600":"border-transparent text-gray-600 hover:border-primary-200 hover:bg-primary-50 hover:text-primary-600 focus:border-primary-700 focus:bg-primary-100 focus:text-primary-900"} text-base font-medium transition duration-150 ease-in-out focus:outline-none ${t}`,children:i})}function b({user:r}){const[t,i]=h.useState(!1);return e.jsxs("nav",{className:"border-b border-gray-100 bg-white",children:[e.jsx("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex h-12 justify-between",children:[e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"flex shrink-0 items-center",children:e.jsx(c,{href:"/",children:e.jsx(f,{className:"h-9",businessLogo:!0})})}),e.jsx("div",{className:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex",children:d.map(s=>e.jsx(g,{href:route(s.link),active:route().current(s.link),children:s.name},s.link))})]}),e.jsx("div",{className:"hidden sm:ml-6 sm:flex sm:items-center",children:e.jsx("div",{className:"relative ml-3",children:e.jsxs(n,{children:[e.jsx(n.Trigger,{children:e.jsx("span",{className:"inline-flex rounded-md",children:e.jsxs("div",{className:"inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none",children:[r.name,e.jsx("svg",{className:"-mr-0.5 ml-2 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),e.jsxs(n.Content,{children:[e.jsx(n.Link,{href:route("profile.edit"),children:"Profile"}),e.jsx(n.Link,{href:route("business.edit"),children:"Business"}),e.jsx(n.Link,{href:route("logout"),method:"post",as:"button",children:"Log Out"})]})]})})}),e.jsx("div",{className:"-mr-2 flex items-center sm:hidden",children:e.jsx("button",{onClick:()=>i(s=>!s),className:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none",children:e.jsxs("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("path",{className:t?"hidden":"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}),e.jsx("path",{className:t?"inline-flex":"hidden",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})]})})})]})}),e.jsxs("div",{className:(t?"block":"hidden")+" sm:hidden",children:[e.jsx("div",{className:"space-y-1 pb-3 pt-2",children:d.map(s=>e.jsx(l,{href:route(s.link),active:route().current(s.link),children:s.name},s.link))}),e.jsxs("div",{className:"border-t border-gray-200 pb-1 pt-4",children:[e.jsxs("div",{className:"px-4",children:[e.jsx("div",{className:"text-base font-medium text-gray-800",children:r.name}),e.jsx("div",{className:"text-sm font-medium text-gray-500",children:r.email})]}),e.jsxs("div",{className:"mt-3 space-y-1",children:[e.jsx(l,{href:route("profile.edit"),children:"Profile"}),e.jsx(l,{href:route("business.edit"),children:"Business"}),e.jsx(l,{method:"post",href:route("logout"),as:"button",children:"Log Out"})]})]})]})]})}function j({header:r}){var t,i,s,a;return e.jsx("header",{className:"my-0 bg-white shadow",children:e.jsx("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:r||e.jsx("h2",{className:"py-5 text-xl font-semibold leading-tight text-gray-800",children:((t=d.find(o=>o.link===route().current()))==null?void 0:t.name)??((i=route().current())==null?void 0:i.toString()[0].toUpperCase())+(((a=(s=route().current())==null?void 0:s.substring(1).toLowerCase().split("."))==null?void 0:a[0])??"")})})})}const d=[{name:"Checkout",link:"bill.create"},{name:"Inventory",link:"product.index"},{name:"Bills",link:"bill.index"},{name:"Dashboard",link:"dashboard"}];function N({user:r,header:t,children:i}){return e.jsx(p,{children:e.jsxs("div",{className:"min-h-screen",children:[e.jsx(b,{user:r}),e.jsx(j,{header:t}),e.jsx("main",{children:i})]})})}export{N as A,f as L,d as R,p as a};