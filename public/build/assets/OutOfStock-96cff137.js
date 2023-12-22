import{r as i,j as t}from"./app-097abe58.js";import{B as l}from"./BetterLink-f0e167cf.js";import{C as d,U as m}from"./UpdateProductStockModal-b5efc4bb.js";import{A as p}from"./A-c1657785.js";import u from"./Product-1a9fd2b7.js";import{r as s}from"./index-c8d20cd6.js";import{l as h,m as f}from"./index.esm-722edfeb.js";import"./Input-2335cbef.js";import"./ErrorMessage-bea968d2.js";import"./SecondaryMaterialBtn-058727b8.js";import"./transition-5f37107b.js";import"./SecondaryButton-eac21188.js";import"./DefaultProductImg-5c8de8b6.js";import"./Checkbox-80cfdac9.js";import"./Num-1532f164.js";import"./ProductOptions-95a69545.js";import"./Dropdown-ff749f62.js";import"./index.esm-118b06c3.js";import"./iconBase-295ae749.js";import"./index.esm-ce4cf581.js";import"./AlertModal-339942d9.js";import"./TemplateModal-f5721ff1.js";import"./PrimaryMaterialBtn-1f504899.js";import"./useBetterForm-757eca25.js";import"./FromDate-666062fb.js";import"./KeyValue-61166eac.js";import"./index-c7fa9393.js";function G({paginate:e}){const[n,r]=i.useState({state:"create",open:!1,data:null}),[c,a]=i.useState({open:!1,product:null});return t.jsxs(t.Fragment,{children:[t.jsx(d,{modalAction:n,setModalAction:r}),t.jsx(m,{modalAction:c,close:()=>a({product:null,open:!1})}),t.jsx(s.Card,{className:"rounded-none shadow sm:rounded-lg",children:t.jsxs("div",{className:"p-6",children:[t.jsxs("header",{children:[t.jsx(s.Typography,{variant:"h6",color:"blue-gray",children:"Out of Stock Products"}),t.jsx(p,{href:route("product.index",{stock:"out"}),className:"font-normal",children:"Viw all out of stock products"})]}),t.jsx("section",{children:e.total>0?t.jsxs("div",{className:"relative flex overflow-hidden",children:[t.jsx("div",{className:"pointer-events-none absolute right-0 z-[1] flex h-full w-52 justify-end bg-gradient-to-l from-white to-transparent",children:e.total>5&&t.jsx("div",{className:"mb-2 self-center",children:t.jsx(s.Tooltip,{content:"Viw all out of stock products",children:t.jsx("span",{className:"pointer-events-auto",children:t.jsx(l,{className:"inline-block self-center rounded-[50%] p-2 align-middle text-gray-700 transition duration-200 ease-in-out hover:bg-black hover:bg-opacity-10 hover:text-gray-900 focus:outline-none",href:route("product.index",{stock:"out"}),children:t.jsx(h,{className:"text-lg"})})})})})}),e.data.map(o=>t.jsx(u,{product:o,requestEdit:function(){r({data:o,open:!0,state:"edit"})},requestShow:function(){r({data:o,open:!0,state:"show"})},requestChangeStock:function(){a({open:!0,product:o})}},o.id))]}):t.jsxs("div",{className:"my-20 flex justify-center gap-4 opacity-60",children:[t.jsx(f,{className:"mt-1"}),t.jsx("p",{children:"You have no products with empty stock"})]})})]})})]})}export{G as default};