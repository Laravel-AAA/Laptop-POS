import{r as i,j as t,a as c}from"./app-0ae878a0.js";import{A as d}from"./index-2f8fe0ff.js";import l from"./Product-184e7552.js";import{P as u}from"./Pagination-3ffc3dbf.js";import{B as x}from"./index.esm-47f4da68.js";import{C as f,U as j}from"./UpdateProductStockModal-b96508e3.js";import h from"./InventoryHeader-71930995.js";import{F as y}from"./Footer-e7983228.js";import"./index-f0109094.js";import"./index-81ba1119.js";import"./index-f1a12fd2.js";import"./index.esm-eed45bf1.js";import"./iconBase-05f69f7e.js";import"./index.esm-2ace370f.js";import"./transition-8444ae82.js";import"./Logo-e7f1643e.js";import"./Dropdown-81a57bf0.js";import"./BetterLink-ef3bed16.js";import"./ProductOptions-e554886e.js";import"./AlertModal-a50e5a55.js";import"./TemplateModal-4a93b871.js";import"./SecondaryMaterialBtn-f1f536ca.js";import"./PrimaryMaterialBtn-a3d3092a.js";import"./Num-5a3b19d1.js";import"./DefaultProductImg-8b5a2547.js";import"./Input-d90601f1.js";import"./ErrorMessage-901439c4.js";import"./SecondaryButton-2cd07907.js";import"./Checkbox-bfa76071.js";import"./useBetterForm-1ba7228d.js";import"./FromDate-fdf3e570.js";import"./KeyValue-38cde11c.js";import"./SelectInput-e6dd3ea5.js";import"./usePrevious-95a99947.js";import"./SupportEmailLink-b12c78cb.js";import"./A-cf203817.js";function ot({auth:m,products:e}){const s=e.data,[p,r]=i.useState({state:"create",open:!1,data:null}),[n,a]=i.useState({open:!1,product:null});return t.jsxs(t.Fragment,{children:[t.jsx(c,{title:"Inventory"}),t.jsx(f,{modalAction:p,setModalAction:r}),t.jsx(j,{modalAction:n,close:()=>a({product:null,open:!1})}),t.jsx(d,{user:m.user,header:t.jsx(h,{totalResult:e.total,requestCreateProduct:()=>r({state:"create",open:!0,data:null})}),children:t.jsxs("div",{className:"flex min-h-[75vh] flex-col justify-between",children:[t.jsxs("div",{className:"flex flex-wrap justify-center py-6",children:[s.length===0&&t.jsxs("div",{className:"my-20 flex gap-4 opacity-50",children:[t.jsx(x,{className:"mt-1"}),t.jsx("p",{children:"No products found!"})]}),s.map(o=>t.jsx(l,{product:o,requestShow:()=>r({state:"show",open:!0,data:o}),requestEdit:()=>r({state:"edit",data:o,open:!0}),requestChangeStock:()=>a({open:!0,product:o})},o.id))]}),t.jsx(u,{paginateItems:e}),t.jsx(y,{})]})})]})}export{ot as default};