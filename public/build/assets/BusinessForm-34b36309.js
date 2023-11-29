import{r,j as a}from"./app-3ae78c27.js";import{I as i}from"./Input-1482284f.js";import{PhoneInput as o}from"./PhoneInput-06d13935.js";import x from"./CountryInput-904212ea.js";import{C as d}from"./COUNTRIES-4fa12db1.js";import p from"./CurrencyInput-f8101202.js";import m from"./TaxRateInput-f7bde21c.js";import"./index-91a2b981.js";import"./index-f816ca65.js";import"./index-387d7a00.js";import"./ErrorMessage-ebc3c3f4.js";import"./SelectInput-1bcadbe9.js";import"./Num-93da0f3b.js";function M({form:e}){const[l,c]=r.useState(e.data.country?d.find(t=>t.name===e.data.country)??null:null),[s,n]=r.useState(0);return r.useEffect(()=>{e.setData("taxPercent",Number((Number(s)/100).toFixed(6)))},[s]),r.useEffect(()=>{const t=d.find(u=>u.name===e.data.country);t&&(c(t),typeof t.tax=="number"&&n(t.tax*100),t.countryCallingCode&&e.setData("countryCallingCode",t.countryCallingCode))},[e.data.country]),a.jsxs(a.Fragment,{children:[a.jsx("div",{children:a.jsx(i,{label:"Business Name",type:"text",value:e.data.name,errorMsg:e.errors.name,hideError:e.isDirty("name"),className:"mt-1 block w-full",autoComplete:"off",maxLength:50,onChange:t=>e.setData("name",t.target.value),required:!0,disabled:e.processing})}),a.jsx("div",{className:"mt-4",children:a.jsx(x,{form:e})}),a.jsx("div",{className:"mt-4",children:a.jsx(i,{label:"City",type:"text",errorMsg:e.errors.city,hideError:e.isDirty("city"),value:e.data.city,className:"mt-1 block w-full",autoComplete:"city",onChange:t=>e.setData("city",t.target.value),required:!0,disabled:e.processing})}),a.jsx("div",{className:"mt-4",children:a.jsx(i,{label:"Address",type:"text",value:e.data.address,errorMsg:e.errors.address,hideError:e.isDirty("address"),className:"mt-1 block w-full",autoComplete:"address",onChange:t=>e.setData("address",t.target.value),required:!0,disabled:e.processing})}),a.jsx("div",{className:"mt-4",children:a.jsx(p,{form:e,chosenCountry:l})}),a.jsx("div",{className:"mt-4",children:a.jsx(m,{disabled:e.processing,errorMsg:e.errors.taxPercent,hideError:e.isDirty("taxPercent"),onChange:t=>n(Number(Number(t.target.value).toFixed(6))),value:s,currency:e.data.currency??"$"})}),a.jsx("div",{className:"mt-4",children:a.jsx(o,{form:e})})]})}export{M as default};
