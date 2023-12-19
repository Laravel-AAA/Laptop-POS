import{r as i,j as t}from"./app-0ae878a0.js";import{B as l}from"./BetterLink-ef3bed16.js";import{C as d,U as m}from"./UpdateProductStockModal-b96508e3.js";import{A as p}from"./A-cf203817.js";import u from"./Product-184e7552.js";import{r as s}from"./index-81ba1119.js";import{f as h,g as f}from"./index.esm-2ace370f.js";import"./Input-d90601f1.js";import"./ErrorMessage-901439c4.js";import"./SecondaryMaterialBtn-f1f536ca.js";import"./transition-8444ae82.js";import"./SecondaryButton-2cd07907.js";import"./DefaultProductImg-8b5a2547.js";import"./Checkbox-bfa76071.js";import"./Num-5a3b19d1.js";import"./ProductOptions-e554886e.js";import"./Dropdown-81a57bf0.js";import"./index.esm-47f4da68.js";import"./iconBase-05f69f7e.js";import"./index.esm-eed45bf1.js";import"./AlertModal-a50e5a55.js";import"./TemplateModal-4a93b871.js";import"./PrimaryMaterialBtn-a3d3092a.js";import"./useBetterForm-1ba7228d.js";import"./FromDate-fdf3e570.js";import"./KeyValue-38cde11c.js";import"./index-f1a12fd2.js";function G({paginate:e}){const[n,r]=i.useState({state:"create",open:!1,data:null}),[c,a]=i.useState({open:!1,product:null});return t.jsxs(t.Fragment,{children:[t.jsx(d,{modalAction:n,setModalAction:r}),t.jsx(m,{modalAction:c,close:()=>a({product:null,open:!1})}),t.jsx(s.Card,{className:"rounded-none shadow sm:rounded-lg",children:t.jsxs("div",{className:"p-6",children:[t.jsxs("header",{children:[t.jsx(s.Typography,{variant:"h6",color:"blue-gray",children:"Out of Stock Products"}),t.jsx(p,{href:route("product.index",{stock:"out"}),className:"font-normal",children:"Viw all out of stock products"})]}),t.jsx("section",{children:e.total>0?t.jsxs("div",{className:"relative flex overflow-hidden",children:[t.jsx("div",{className:"pointer-events-none absolute right-0 z-[1] flex h-full w-52 justify-end bg-gradient-to-l from-white to-transparent",children:e.total>5&&t.jsx("div",{className:"mb-2 self-center",children:t.jsx(s.Tooltip,{content:"Viw all out of stock products",children:t.jsx("span",{className:"pointer-events-auto",children:t.jsx(l,{className:"inline-block self-center rounded-[50%] p-2 align-middle text-gray-700 transition duration-200 ease-in-out hover:bg-black hover:bg-opacity-10 hover:text-gray-900 focus:outline-none",href:route("product.index",{stock:"out"}),children:t.jsx(h,{className:"text-lg"})})})})})}),e.data.map(o=>t.jsx(u,{product:o,requestEdit:function(){r({data:o,open:!0,state:"edit"})},requestShow:function(){r({data:o,open:!0,state:"show"})},requestChangeStock:function(){a({open:!0,product:o})}},o.id))]}):t.jsxs("div",{className:"my-20 flex justify-center gap-4 opacity-60",children:[t.jsx(f,{className:"mt-1"}),t.jsx("p",{children:"You have no products with empty stock"})]})})]})})]})}export{G as default};