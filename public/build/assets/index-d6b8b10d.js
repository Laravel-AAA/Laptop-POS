import{j as t,a as l}from"./app-fbbc2228.js";import{r as a}from"./index-ee38eedf.js";import{A as m}from"./index-881baf07.js";import{B as d}from"./index.esm-234a94ef.js";import n from"./Bill-e949bfca.js";import{P as c}from"./Pagination-dd659de8.js";import{F as p}from"./Footer-46eadd98.js";import x from"./BillsHeader-b84c54c7.js";import"./index-dd334722.js";import"./index-387d7a00.js";import"./index-91a5fbe3.js";import"./index.esm-046b3e83.js";import"./iconBase-588e059c.js";import"./index.esm-d309ba16.js";import"./transition-f695fed5.js";import"./Logo-3cbbad24.js";import"./Dropdown-44bd8aeb.js";import"./BetterLink-4f015a3a.js";import"./BillOptions-77180b40.js";import"./AlertModal-ba12de13.js";import"./TemplateModal-01cb1425.js";import"./SecondaryMaterialBtn-6e2e4dd1.js";import"./PrimaryMaterialBtn-1012f687.js";import"./ID-256fb40d.js";import"./FromDate-a5cb30b4.js";import"./Num-5bc06adf.js";import"./SupportEmailLink-b6aa6b21.js";import"./Input-43976c61.js";import"./ErrorMessage-9a1c9b5d.js";import"./InventoryHeader-3295c14f.js";import"./usePrevious-80a25d66.js";function M({auth:s,bills:r}){const i=r.data;return t.jsxs(m,{user:s.user,header:t.jsx(x,{totalResult:r.total}),children:[t.jsx(l,{title:"Bills"}),t.jsxs("div",{className:"flex min-h-[75vh] flex-col justify-between",children:[t.jsx("div",{className:"mx-auto w-full overflow-x-auto overflow-y-hidden pb-36 pt-6 md:w-11/12 ",children:t.jsxs(a.Card,{className:"w-full min-w-fit rounded-md",children:[t.jsxs("table",{className:"table-auto text-left",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx(e,{className:"rounded-tl-md",children:"ID"}),t.jsx(e,{children:"Created By"}),t.jsx(e,{title:"Created Before",children:"Date"}),t.jsx(e,{title:"Sub total price (tax is NOT included)",children:"Sub total"}),t.jsx(e,{title:"Total price (tax is included)",children:"Total price"}),t.jsx(e,{children:"Received"}),t.jsx(e,{children:"Remaining"}),t.jsx(e,{children:"Total Quantity"}),t.jsx(e,{title:"Bill options",className:"max-w-fit rounded-tr-md"})]})}),t.jsx("tbody",{children:i.map(o=>t.jsx(n,{bill:o},o.id))})]}),i.length===0&&t.jsxs("div",{className:"my-12 flex justify-center gap-4 opacity-50",children:[t.jsx(d,{className:"mt-1"}),t.jsx("p",{children:"No bills found!"})]})]})}),t.jsx(c,{className:"-mt-20",paginateItems:r}),t.jsx(p,{})]})]})}function e({className:s="",children:r,...i}){return t.jsx("th",{...i,className:"border-b border-blue-gray-100 bg-blue-gray-50 p-4 "+s,children:t.jsx("p",{className:"text-sm font-semibold leading-none tracking-wide text-black opacity-90",children:r})})}export{M as default};