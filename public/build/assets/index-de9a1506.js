import{r as e,j as t}from"./app-1a8b66a1.js";import s from"./TotalInfo-61c92dbb.js";import l from"./index-943cff56.js";import n from"./CheckoutBtn-c3d428c9.js";import"./Num-5eb78560.js";import"./RowItem-92e8f6f1.js";import"./index.esm-88f6bea6.js";import"./iconBase-b0091e04.js";import"./index.esm-2a43ea46.js";import"./EmptyCart-982e2c85.js";import"./index.esm-e7f17365.js";import"./SecondaryButton-b87d2d0a.js";import"./TemplateModal-7d5290d2.js";import"./DangerButton-2a4a7cb3.js";import"./transition-4ea61073.js";import"./PrimaryButton-878aca8d.js";import"./Checkbox-3c169125.js";import"./InputError-b7985316.js";import"./InputHint-f8a46639.js";import"./InputLabel-be699f44.js";import"./TextInput-5902a4b2.js";function N({className:m="",billOperations:o}){const[r,p]=e.useState(0);return e.useEffect(()=>{function i(){p(window.scrollY)}return i(),window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)},[r]),t.jsxs("div",{style:{height:r>50?"100%":`calc(100% - ${50-r}px)`},className:`relative flex flex-col bg-gray-200 mx-4 transition-all duration-300 ease-in-out md:px-0 ${m}`,children:[t.jsx(s,{bill:o.form.data}),t.jsx(l,{billOperations:o}),t.jsx(n,{form:o.form})]})}export{N as default};