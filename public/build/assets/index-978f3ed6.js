import{r as i,j as t,a as c}from"./app-80549b6d.js";import{A as d}from"./index-40043d88.js";import l from"./Product-ebb5155f.js";import{P as u}from"./Pagination-1e86648f.js";import{B as x}from"./index.esm-ae5f66b2.js";import{C as f,U as j}from"./UpdateProductStockModal-36c8a84a.js";import h from"./InventoryHeader-0389ebe6.js";import{F as y}from"./Footer-e7f69847.js";import"./index-7f60361d.js";import"./index-351207db.js";import"./index-4f406903.js";import"./index.esm-f47aa014.js";import"./iconBase-02aae994.js";import"./index.esm-aaf95362.js";import"./transition-41822f8b.js";import"./Logo-e213fd63.js";import"./Dropdown-d80416b3.js";import"./BetterLink-a555b2a3.js";import"./ProductOptions-7fbe3c7b.js";import"./AlertModal-174d42a7.js";import"./TemplateModal-8aa6333a.js";import"./SecondaryMaterialBtn-4cc92017.js";import"./PrimaryMaterialBtn-a2456edc.js";import"./Num-abe8aebb.js";import"./DefaultProductImg-8448ef39.js";import"./Input-39d6d1c5.js";import"./ErrorMessage-2bd900ed.js";import"./SecondaryButton-d2db5383.js";import"./Checkbox-d0ee5f2d.js";import"./useBetterForm-44d6eadd.js";import"./FromDate-402862ed.js";import"./KeyValue-b9592ca4.js";import"./SelectInput-f2d966ad.js";import"./usePrevious-08d5a36a.js";import"./SupportEmailLink-aacce224.js";import"./A-34f9075c.js";function ot({auth:m,products:r}){const s=r.data,[p,e]=i.useState({state:"create",open:!1,data:null}),[n,a]=i.useState({open:!1});return t.jsxs(t.Fragment,{children:[t.jsx(c,{title:"Inventory"}),t.jsx(f,{modalAction:p,setModalAction:e},"12312"),t.jsx(j,{modalAction:n,close:()=>a(o=>({...o,open:!1}))},"98345433"),t.jsx(d,{user:m.user,header:t.jsx(h,{totalResult:r.total,requestCreateProduct:()=>e({state:"create",open:!0,data:null})}),children:t.jsxs("div",{className:"flex min-h-[75vh] flex-col justify-between",children:[t.jsxs("div",{className:"flex flex-wrap justify-center py-6",children:[s.length===0&&t.jsxs("div",{className:"my-20 flex gap-4 opacity-50",children:[t.jsx(x,{className:"mt-1"}),t.jsx("p",{children:"No products found!"})]}),s.map(o=>t.jsx(l,{product:o,requestShow:()=>e({state:"show",open:!0,data:o}),requestEdit:()=>e({state:"edit",data:o,open:!0}),requestChangeStock:()=>a({open:!0,product:o})},o.id))]}),t.jsx(u,{paginateItems:r}),t.jsx(y,{})]})})]})}export{ot as default};
