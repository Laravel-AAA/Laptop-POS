import{r as e,j as t}from"./app-1f532432.js";import s from"./TotalInfo-beb952f1.js";import l from"./index-a9b08f93.js";import n from"./CheckoutBtn-ebaf95f8.js";import"./Num-c5cc28b1.js";import"./RowItem-017b756b.js";import"./index.esm-d06c0186.js";import"./iconBase-53c378bc.js";import"./index.esm-d89ed842.js";import"./EmptyCart-ea79ee9e.js";import"./index.esm-3aa54874.js";import"./SecondaryButton-b318ef01.js";import"./TemplateModal-db62d397.js";import"./DangerButton-fe9414ca.js";import"./transition-b01f3dd6.js";import"./PrimaryButton-22b53b84.js";import"./Checkbox-8e3b015e.js";import"./index-d3a5abf1.js";import"./index-b0b34b81.js";import"./ErrorMessage-af66a51d.js";import"./Input-07301d12.js";function N({className:m="",billOperations:o}){const[r,p]=e.useState(0);return e.useEffect(()=>{function i(){p(window.scrollY)}return i(),window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)},[r]),t.jsxs("div",{style:{height:r>50?"100%":`calc(100% - ${50-r}px)`},className:`relative flex flex-col bg-gray-200 mx-4 transition-all duration-300 ease-in-out md:px-0 ${m}`,children:[t.jsx(s,{bill:o.form.data}),t.jsx(l,{billOperations:o}),t.jsx(n,{form:o.form})]})}export{N as default};
