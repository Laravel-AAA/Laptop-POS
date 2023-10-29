import{q as a,j as t}from"./app-1a8b66a1.js";import{e as m}from"./index.esm-88f6bea6.js";import{P as o}from"./ProductOptions-48fe8fd0.js";import{N as l}from"./Num-5eb78560.js";import"./iconBase-b0091e04.js";import"./Dropdown-9169eb3d.js";import"./transition-4ea61073.js";import"./index.esm-2a43ea46.js";import"./AlertModal-408c492d.js";import"./TemplateModal-7d5290d2.js";import"./DangerButton-2a4a7cb3.js";import"./PrimaryButton-878aca8d.js";import"./SecondaryButton-b87d2d0a.js";function w({product:e,requestEdit:i,requestShow:s}){const r=a().props.business.taxPercent;return t.jsxs("div",{role:"button",onClick:()=>s(),className:"group relative m-4 flex cursor-pointer flex-col overflow-hidden rounded-md bg-white shadow transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:w-52",children:[t.jsx(o,{product:e,requestEdit:i,requestShow:s}),t.jsx("div",{children:e.img?t.jsx("img",{src:e.img.startsWith("http")?e.img:"products-images/"+e.img,alt:"Image "+(e.img??"")+" of product "+e.name}):t.jsx(m,{className:"mx-auto mt-4 h-24 w-24 text-primary-700"})}),t.jsxs("div",{className:"flex flex-grow flex-col px-4  py-4 ",children:[t.jsx("h3",{className:"flex-grow text-lg font-semibold text-gray-600",children:e.name}),t.jsxs("div",{className:"mt-2 flex justify-between",children:[t.jsx("p",{title:e.price===null?"":"$"+e.price+" without tax",className:"text-lg font-thin text-primary-700",children:e.price===null?"N/A":t.jsx(l,{currency:"$",className:"font-semibold",amount:e.price*(1+r)})}),t.jsx("div",{className:"flex flex-col justify-center",children:e.stock===0?t.jsx("p",{className:"font-thin text-red-500",children:"Out of Stock"}):t.jsxs("p",{className:"font-thin text-gray-500",children:["Stock"," ",t.jsx("span",{className:"font-normal text-secondary-600",children:e.stock??"N/A"})]})})]})]})]})}export{w as default};