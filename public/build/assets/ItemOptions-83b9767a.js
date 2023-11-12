import{j as e}from"./app-c279daac.js";import{b as c,c as u}from"./index.esm-1d49b42a.js";import"./iconBase-0ea0b5a5.js";function g({product:t,requestChanged:s,requestIncrease:n,requestDecrease:l,transaction:o}){return e.jsx("div",{style:{zIndex:1},className:"absolute left-0 top-2 hidden w-full group-hover:block",children:e.jsxs("div",{className:"mx-2 flex justify-between",children:[e.jsx(a,{onClick:()=>l(),disabled:o.quantity<=0,icon:e.jsx(c,{className:"text-2xl"})}),e.jsx("input",{type:"number",name:"quantity",className:`remove-arrow mx-5 block min-w-0 rounded-md border border-transparent bg-white bg-opacity-90 p-2 px-4 text-center font-semibold shadow  ${o.quantity>(t.stock??1/0)?"text-danger-600 focus:border-danger-500 focus:ring-danger-500":" text-black focus:border-gray-700 focus:ring-gray-700"}`,inputMode:"numeric",value:o.quantity,onFocus:i=>i.target.select(),onChange:i=>{const r=Number(i.target.value);r&&s(r)}}),e.jsx(a,{onClick:()=>n(),disabled:t.stock!=null&&o.quantity>=t.stock,icon:e.jsx(u,{className:"text-2xl"})})]})})}function a({icon:t,disabled:s,...n}){return e.jsx("button",{type:"button",className:`inline-flex items-center rounded-full border border-transparent
      bg-white bg-opacity-80 p-2 leading-4  text-gray-800 shadow transition
      duration-200 ease-in-out  hover:bg-opacity-90
      hover:text-black hover:shadow-md focus:outline-none focus:ring-2
      focus:ring-gray-700 focus:ring-offset-2 focus-visible:outline-none focus-visible:ring-2
      focus-visible:ring-gray-700 focus-visible:ring-offset-2
      active:scale-95 disabled:opacity-25 disabled:active:scale-100 ${s&&"opacity-25"} `,disabled:s,...n,children:t})}export{g as default};