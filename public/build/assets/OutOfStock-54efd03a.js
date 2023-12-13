import{r as i,j as t}from"./app-02238819.js";import{B as l}from"./BetterLink-489afceb.js";import{C as d,U as m}from"./UpdateProductStockModal-9efd2ac4.js";import{A as p}from"./A-b07f1baa.js";import u from"./Product-f9db4731.js";import{r as s}from"./index-8301804e.js";import{f as h,g as f}from"./index.esm-e23caa02.js";import"./Input-48e0e8c0.js";import"./ErrorMessage-c2c4745b.js";import"./SecondaryMaterialBtn-701dbfbe.js";import"./transition-c2dff889.js";import"./SecondaryButton-e0433980.js";import"./DefaultProductImg-0fadeac4.js";import"./Checkbox-ec9bc6bf.js";import"./Num-4afba5b7.js";import"./ProductOptions-a0c29a6d.js";import"./Dropdown-f321a47d.js";import"./index.esm-5e061ff0.js";import"./iconBase-a22b7b87.js";import"./index.esm-1f875cda.js";import"./AlertModal-c71108c9.js";import"./TemplateModal-8c13d44e.js";import"./PrimaryMaterialBtn-3af38e9c.js";import"./useBetterForm-371649f1.js";import"./FromDate-9638508e.js";import"./KeyValue-3a98c2c2.js";import"./index-9b1e206d.js";function G({paginate:e}){const[n,r]=i.useState({state:"create",open:!1,data:null}),[c,a]=i.useState({open:!1,product:null});return t.jsxs(t.Fragment,{children:[t.jsx(d,{modalAction:n,setModalAction:r}),t.jsx(m,{modalAction:c,close:()=>a({product:null,open:!1})}),t.jsx(s.Card,{className:"rounded-none shadow sm:rounded-lg",children:t.jsxs("div",{className:"p-6",children:[t.jsxs("header",{children:[t.jsx(s.Typography,{variant:"h6",color:"blue-gray",children:"Out of Stock Products"}),t.jsx(p,{href:route("product.index",{stock:"out"}),className:"font-normal",children:"Viw all out of stock products"})]}),t.jsx("section",{children:e.total>0?t.jsxs("div",{className:"relative flex overflow-hidden",children:[t.jsx("div",{className:"pointer-events-none absolute right-0 z-[1] flex h-full w-52 justify-end bg-gradient-to-l from-white to-transparent",children:e.total>5&&t.jsx("div",{className:"mb-2 self-center",children:t.jsx(s.Tooltip,{content:"Viw all out of stock products",children:t.jsx("span",{className:"pointer-events-auto",children:t.jsx(l,{className:"inline-block self-center rounded-[50%] p-2 align-middle text-gray-700 transition duration-200 ease-in-out hover:bg-black hover:bg-opacity-10 hover:text-gray-900 focus:outline-none",href:route("product.index",{stock:"out"}),children:t.jsx(h,{className:"text-lg"})})})})})}),e.data.map(o=>t.jsx(u,{product:o,requestEdit:function(){r({data:o,open:!0,state:"edit"})},requestShow:function(){r({data:o,open:!0,state:"show"})},requestChangeStock:function(){a({open:!0,product:o})}},o.id))]}):t.jsxs("div",{className:"my-20 flex justify-center gap-4 opacity-60",children:[t.jsx(f,{className:"mt-1"}),t.jsx("p",{children:"You have no products with empty stock"})]})})]})})]})}export{G as default};