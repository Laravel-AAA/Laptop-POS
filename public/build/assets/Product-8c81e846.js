import{j as e}from"./app-a6e2ab9e.js";import{d as m}from"./index.esm-29c11415.js";import{P as r}from"./ProductOptions-f1e05c8a.js";import"./iconBase-7f9d05a2.js";import"./Dropdown-51595df7.js";import"./transition-c99204ab.js";import"./index.esm-6664278a.js";import"./index-f73103c1.js";import"./DangerButton-90926d7b.js";import"./PrimaryButton-25fe02db.js";import"./SecondaryButton-f523f10e.js";function p({product:s,requestEdit:i,requestShow:t}){return e.jsxs("div",{onClick:()=>t(),className:"group relative m-4 flex cursor-pointer flex-col overflow-hidden rounded-md bg-white shadow transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:w-52",children:[e.jsx(r,{product:s,requestEdit:i,requestShow:t}),e.jsx("div",{children:s.img?e.jsx("img",{src:s.img.startsWith("http")?s.img:"products-images/"+s.img,alt:"Image "+(s.img??"")+" of product "+s.name}):e.jsx(m,{className:"mx-auto text-primary-700 mt-4 h-24 w-24"})}),e.jsxs("div",{className:"flex flex-grow flex-col px-4  py-4 ",children:[e.jsx("h3",{className:"flex-grow text-lg font-semibold text-gray-600",children:s.name}),e.jsxs("div",{className:"mt-2 flex justify-between",children:[e.jsxs("p",{className:"text-lg font-thin",children:["$"," ",s.price??"N/A"]}),e.jsx("div",{className:"flex flex-col justify-center",children:s.stock==0?e.jsx("p",{className:"font-thin text-red-500",children:"Out of Stock"}):e.jsxs("p",{className:"font-thin text-gray-500",children:["Stock ",s.stock??"N/A"]})})]})]})]})}export{p as default};