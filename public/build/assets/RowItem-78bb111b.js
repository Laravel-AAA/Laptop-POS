import{j as r}from"./app-a6e2ab9e.js";import{N as t}from"./Num-fba263dc.js";function l({transaction:e,increaseQty:s,decreaseQty:d,taxPercent:m}){return r.jsxs("tr",{className:"h-10  border-y",children:[r.jsx("td",{children:e.product.img&&r.jsx("img",{className:"max-w-20 max-h-10",src:e.product.img.startsWith("http")?e.product.img:"products-images/"+e.product.img})}),r.jsx("td",{className:"truncate",title:e.product.name,children:r.jsx("div",{className:"truncate max-w-full",children:e.product.name})}),r.jsx("td",{className:"w-10",children:r.jsx(t,{amount:e.quantity})}),r.jsx("td",{title:"Tax included",children:e.product.price==null?"N/A":r.jsx(t,{currency:"$",className:"font-semibold text-primary-700",amount:e.product.price*(1+m)})})]})}export{l as default};