import{j as t,a as l}from"./app-0ae878a0.js";import{r as a}from"./index-81ba1119.js";import{A as m}from"./index-2f8fe0ff.js";import{B as d}from"./index.esm-47f4da68.js";import n from"./Bill-4b638ec5.js";import{P as c}from"./Pagination-3ffc3dbf.js";import{F as p}from"./Footer-e7983228.js";import x from"./BillsHeader-8e4a64ec.js";import"./index-f1a12fd2.js";import"./index-f0109094.js";import"./index.esm-eed45bf1.js";import"./iconBase-05f69f7e.js";import"./index.esm-2ace370f.js";import"./transition-8444ae82.js";import"./Logo-e7f1643e.js";import"./Dropdown-81a57bf0.js";import"./BetterLink-ef3bed16.js";import"./BillOptions-e5a3203a.js";import"./AlertModal-a50e5a55.js";import"./TemplateModal-4a93b871.js";import"./SecondaryMaterialBtn-f1f536ca.js";import"./PrimaryMaterialBtn-a3d3092a.js";import"./ID-220c82c7.js";import"./FromDate-fdf3e570.js";import"./Num-5a3b19d1.js";import"./SupportEmailLink-b12c78cb.js";import"./A-cf203817.js";import"./Input-d90601f1.js";import"./ErrorMessage-901439c4.js";import"./InventoryHeader-71930995.js";import"./SelectInput-e6dd3ea5.js";import"./usePrevious-95a99947.js";function U({auth:s,bills:r}){const i=r.data;return t.jsxs(m,{user:s.user,header:t.jsx(x,{totalResult:r.total}),children:[t.jsx(l,{title:"Bills"}),t.jsxs("div",{className:"flex min-h-[75vh] flex-col justify-between",children:[t.jsx("div",{className:"mx-auto w-full overflow-x-auto overflow-y-hidden pb-36 pt-6 md:w-11/12 ",children:t.jsxs(a.Card,{className:"w-full min-w-fit rounded-md",children:[t.jsxs("table",{className:"table-auto text-left",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx(e,{className:"rounded-tl-md",children:"ID"}),t.jsx(e,{children:"Created By"}),t.jsx(e,{title:"Created Before",children:"Date"}),t.jsx(e,{title:"Sub total price (tax is NOT included)",children:"Sub total"}),t.jsx(e,{title:"Total price (tax is included)",children:"Total price"}),t.jsx(e,{children:"Received"}),t.jsx(e,{children:"Remaining"}),t.jsx(e,{children:"Total Quantity"}),t.jsx(e,{title:"Bill options",className:"max-w-fit rounded-tr-md"})]})}),t.jsx("tbody",{children:i.map(o=>t.jsx(n,{bill:o},o.id))})]}),i.length===0&&t.jsxs("div",{className:"my-12 flex justify-center gap-4 opacity-50",children:[t.jsx(d,{className:"mt-1"}),t.jsx("p",{children:"No bills found!"})]})]})}),t.jsx(c,{className:"-mt-20",paginateItems:r}),t.jsx(p,{})]})]})}function e({className:s="",children:r,...i}){return t.jsx("th",{...i,className:"border-b border-blue-gray-100 bg-blue-gray-50 p-4 "+s,children:t.jsx("p",{className:"text-sm font-semibold leading-none tracking-wide text-black opacity-90",children:r})})}export{U as default};