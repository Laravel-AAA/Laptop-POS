import{r as m,j as t,a as p}from"./app-34bdad78.js";import{A as n}from"./index-12ccdde7.js";import d from"./Product-66fbd563.js";import{P as c}from"./Pagination-8549af09.js";import{B as l}from"./index.esm-9da4aa64.js";import{C as u}from"./CreateEditProductModal-fb5df080.js";import x from"./InventoryHeader-5ac2126b.js";import"./ApplicationLogo-55566827.js";import"./Dropdown-6a8c98f7.js";import"./transition-f6f559a1.js";import"./ProductOptions-6c7d1b1b.js";import"./index.esm-8be500ca.js";import"./DeleteConfirmProductModal-25eccdd3.js";import"./index-e4cd1e75.js";import"./DangerButton-01d505c9.js";import"./PrimaryButton-4a5524ac.js";import"./SecondaryButton-6ab9ebf5.js";import"./InputError-55b19d67.js";import"./InputLabel-283eaf84.js";import"./TextInput-9cf4390b.js";function b({auth:a,products:o}){const s=o.data,[i,e]=m.useState({state:"create",open:!1});return console.log(s),t.jsxs(t.Fragment,{children:[t.jsx(u,{modalAction:i,setModalAction:e}),t.jsxs(n,{user:a.user,header:t.jsx(x,{totalResult:o.total,requestCreateProduct:()=>e({state:"create",open:!0,data:null})}),children:[t.jsx(p,{title:"Inventory"}),t.jsxs("div",{className:"flex flex-wrap  justify-center py-6",children:[s.length==0&&t.jsxs("div",{className:"my-20 flex gap-4 opacity-50",children:[t.jsx(l,{className:"mt-1"}),t.jsx("p",{children:"No products found!"})]}),s.map(r=>t.jsx(d,{product:r,requestShow:()=>e({state:"show",open:!0,data:r}),requestEdit:()=>e({state:"edit",data:r,open:!0})},r.id))]}),t.jsx(c,{paginateItems:o})]})]})}export{b as default};
