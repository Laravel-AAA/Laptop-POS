import{r as e,j as t}from"./app-417aa6ef.js";import s from"./TotalInfo-e918086c.js";import l from"./index-ae2c3c3d.js";import n from"./CheckoutBtn-ad791c44.js";import"./Num-dbde2a02.js";import"./RowItem-203b2142.js";import"./index.esm-56bd3576.js";import"./iconBase-2bb9e7d4.js";import"./index.esm-e19aa371.js";import"./EmptyCart-077e8590.js";import"./index.esm-c64cdbda.js";import"./SecondaryButton-44de00c9.js";import"./TemplateModal-f3462bb0.js";import"./SecondaryMaterialBtn-ab7f6d14.js";import"./transition-cdcd46a4.js";import"./PrimaryMaterialBtn-4fc6ad28.js";import"./Checkbox-007c8a26.js";import"./index-6fd1b142.js";import"./index-7a0ec626.js";import"./ErrorMessage-973fb1c8.js";import"./Input-43584c97.js";function N({className:m="",billOperations:o}){const[r,p]=e.useState(0);return e.useEffect(()=>{function i(){p(window.scrollY)}return i(),window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)},[r]),t.jsxs("div",{style:{height:r>50?"100%":`calc(100% - ${50-r}px)`},className:`relative flex flex-col bg-gray-200 mx-4 transition-all duration-300 ease-in-out md:px-0 ${m}`,children:[t.jsx(s,{bill:o.form.data}),t.jsx(l,{billOperations:o}),t.jsx(n,{form:o.form})]})}export{N as default};
