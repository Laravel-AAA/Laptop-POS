import{r as m,j as t}from"./app-7f3c92cf.js";import s from"./TotalInfo-ad2f250e.js";import l from"./index-6aef1675.js";import n from"./CheckoutBtn-094d5cb0.js";import"./Num-79e781af.js";import"./RowItem-2f3fd26f.js";import"./index.esm-19f5b6aa.js";import"./iconBase-6ab18454.js";import"./index.esm-01c3de6d.js";import"./EmptyCart-730d7ca3.js";import"./index.esm-01eba804.js";import"./SecondaryButton-644b0ccc.js";import"./TemplateModal-3a0b6f28.js";import"./SecondaryMaterialBtn-ceba03f7.js";import"./transition-90ee34db.js";import"./PrimaryMaterialBtn-68b85ef6.js";import"./Checkbox-3517647e.js";import"./index-f6bed6eb.js";import"./index-07a96c45.js";import"./index-387d7a00.js";import"./ErrorMessage-aae2561c.js";import"./Input-ebe883ad.js";function T({className:e="",billOperations:o}){const[r,p]=m.useState(0);return m.useEffect(()=>{function i(){p(window.scrollY)}return i(),window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)},[r]),t.jsxs("div",{style:{height:r>50?"100%":`calc(100% - ${50-r}px)`},className:`relative flex flex-col bg-gray-200 mx-4 transition-all duration-300 ease-in-out md:px-0 ${e}`,children:[t.jsx(s,{bill:o.form.data}),t.jsx(l,{billOperations:o}),t.jsx(n,{form:o.form})]})}export{T as default};
