import{j as t}from"./app-597d038e.js";import p from"./ProductItem-c12c3589.js";import{P as u}from"./Pagination-9ee0bab4.js";import{B as f}from"./index.esm-c698fa55.js";import"./ItemOptions-9bc87801.js";import"./Num-5d713926.js";import"./index.esm-0757006a.js";import"./iconBase-a121196f.js";import"./index-9d7526b5.js";function B({className:i="",paginateProducts:e,billOperations:{changeQty:m,increaseQty:n,decreaseQty:c,form:{data:a}}}){const o=e.data;return t.jsxs("section",{className:i,children:[t.jsxs("div",{className:"flex flex-wrap justify-center md:justify-start",children:[o.map((s,d)=>t.jsx(p,{transaction:a.transactions.find(r=>r.product_id===s.id)??{product:s,product_id:s.id,quantity:0},changeStockNumber:!a.id,requestChanged:r=>m(s,r),requestDecrease:()=>c(s),requestIncrease:()=>n(s)},d)),o.length===0&&t.jsxs("div",{className:"my-20 mx-auto flex gap-4 opacity-50",children:[t.jsx(f,{className:"mt-1"}),t.jsx("p",{children:"No products found!"})]})]}),t.jsx(u,{style:{paddingBottom:"0"},className:"my-4",paginateItems:e})]})}export{B as default};