import{r as m,j as t}from"./app-b733aa80.js";import s from"./TotalInfo-6dd2f279.js";import l from"./index-76c208de.js";import n from"./CheckoutBtn-d5ef3e7a.js";import"./Num-631ee9e0.js";import"./useTranslation-c33630a8.js";import"./RowItem-498418c1.js";import"./index-f0312942.js";import"./iconBase-e5c9f32e.js";import"./index-84652058.js";import"./EmptyCart-0bde0149.js";import"./index-9ca673dc.js";import"./SecondaryButton-3366fa05.js";import"./TemplateModal-1a00ecdb.js";import"./SecondaryMaterialBtn-e8480018.js";import"./transition-177ebb00.js";import"./PrimaryMaterialBtn-2093adc3.js";import"./Checkbox-bdfba73c.js";import"./index-6016834e.js";import"./index-c9736f8d.js";import"./ErrorMessage-42f308db.js";import"./Input-f31a5d66.js";function T({className:e="",billOperations:o}){const[r,p]=m.useState(0);return m.useEffect(()=>{function i(){p(window.scrollY)}return i(),window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)},[r]),t.jsxs("div",{style:{height:r>50?"100%":`calc(100% - ${50-r}px)`},className:`relative flex flex-col bg-gray-200 mx-4 transition-all duration-300 ease-in-out md:px-0 ${e}`,children:[t.jsx(s,{bill:o.form.data}),t.jsx(l,{billOperations:o}),t.jsx(n,{form:o.form})]})}export{T as default};