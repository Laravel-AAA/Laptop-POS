import{j as t}from"./app-80549b6d.js";import l from"./ProductItem-caccdf5b.js";import{P as u}from"./Pagination-1e86648f.js";import{B as f}from"./index.esm-ae5f66b2.js";import"./ItemOptions-fc19a922.js";import"./iconBase-02aae994.js";import"./Num-abe8aebb.js";import"./index.esm-f47aa014.js";import"./index-4f406903.js";import"./BetterLink-a555b2a3.js";function B({className:o="",paginateProducts:r,billOperations:{changeQty:m,increaseQty:d,decreaseQty:p,form:{data:i}},productItemSize:c}){const a=r.data;return t.jsxs("section",{className:o,children:[t.jsxs("div",{className:"flex flex-wrap justify-center md:justify-start",children:[a.map((e,n)=>t.jsx(l,{bill_detail:i.bill_details.find(s=>s.product_id===e.id)??{product:e,product_id:e.id,quantity:0},changeStockNumber:!i.id,requestChanged:s=>m(e,s),requestDecrease:()=>p(e),requestIncrease:()=>d(e),size:c},n)),a.length===0&&t.jsxs("div",{className:"my-20 mx-auto flex gap-4 opacity-50",children:[t.jsx(f,{className:"mt-1"}),t.jsx("p",{children:"No products found!"})]})]}),t.jsx(u,{style:{paddingBottom:"0"},className:"my-4",paginateItems:r})]})}export{B as default};
