import{r as e,j as t}from"./app-f149ad97.js";import s from"./TotalInfo-7cb15add.js";import l from"./index-005ab70b.js";import n from"./CheckoutBtn-2f94e064.js";import"./Num-61084dd3.js";import"./RowItem-84d99e1e.js";import"./index.esm-6f307d23.js";import"./iconBase-467f2d26.js";import"./index.esm-a129ec4d.js";import"./EmptyCart-1db8b5c5.js";import"./index.esm-d20829fc.js";import"./SecondaryButton-158790c7.js";import"./TemplateModal-4dbc34eb.js";import"./DangerButton-7e69316f.js";import"./transition-529893aa.js";import"./PrimaryButton-c4f0205d.js";import"./Checkbox-9acc261c.js";import"./InputError-56c233ef.js";import"./InputHint-e580030d.js";import"./InputLabel-4b6dfdf9.js";import"./TextInput-87ca4055.js";function N({className:m="",billOperations:o}){const[r,p]=e.useState(0);return e.useEffect(()=>{function i(){p(window.scrollY)}return i(),window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)},[r]),t.jsxs("div",{style:{height:r>50?"100%":`calc(100% - ${50-r}px)`},className:`relative flex flex-col bg-gray-200 mx-4 transition-all duration-300 ease-in-out md:px-0 ${m}`,children:[t.jsx(s,{bill:o.form.data}),t.jsx(l,{billOperations:o}),t.jsx(n,{form:o.form})]})}export{N as default};
