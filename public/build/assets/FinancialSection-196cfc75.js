import{j as t}from"./app-597d038e.js";import{P as i}from"./PrimaryButton-b02ed71d.js";import{I as s}from"./Input-568c2f70.js";import{u as c}from"./useBetterForm-1e02708f.js";import o from"./TaxRateInput-33310b79.js";import{t as l}from"./transition-3e3ca368.js";import"./index-1f12a61e.js";import"./index-9d7526b5.js";import"./ErrorMessage-59b540d3.js";import"./Num-5d713926.js";function N({business:a}){const e=c({currency:a.currency,taxPercent:a.taxPercent,taxIdentificationNumber:a.taxIdentificationNumber}),n=r=>{r.preventDefault(),e.patch(route("business.update",a.id),{preserveScroll:!0})};return t.jsx("form",{onSubmit:n,className:"bg-white p-4 shadow sm:rounded-lg sm:p-8",children:t.jsxs("section",{className:"max-w-xl",children:[t.jsxs("header",{children:[t.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Financial Details"}),t.jsx("p",{className:"text-normal mt-1 text-gray-600",children:"Currency and Tax"})]}),t.jsxs("div",{className:"mt-6 space-y-6",children:[t.jsx(s,{id:"currency",label:"Currency Symbol",type:"text",className:"mt-1 block w-full",maxLength:5,value:e.data.currency,onChange:r=>e.setData("currency",r.target.value),disabled:e.processing,required:!0,autoComplete:"off",errorMsg:e.errors.currency,hideError:e.isDirty("currency"),hint:t.jsxs("span",{children:["You can use any Unicode symbol ("," ",t.jsx("span",{className:"font-semibold text-blue-gray-600",children:"$"}),","," ",t.jsx("span",{className:"font-semibold text-blue-gray-600",children:"£"}),","," ",t.jsx("span",{className:"font-semibold text-blue-gray-600",children:"¥"}),","," ",t.jsx("span",{className:"font-semibold text-blue-gray-600",children:"€"}),", ...etc)"]})}),t.jsx(o,{disabled:e.processing,errorMsg:e.errors.taxPercent,hideError:e.isDirty("taxPercent"),onChange:r=>e.setData("taxPercent",Number((Number(r.target.value)/100).toFixed(6))),value:e.data.taxPercent*100,currency:e.data.currency??"$"}),t.jsx(s,{type:"text",label:"Tax Identification Number",value:e.data.taxIdentificationNumber??"",onChange:r=>e.setData("taxIdentificationNumber",r.target.value),disabled:e.processing,required:!1,errorMsg:e.errors.taxIdentificationNumber,hideError:e.isDirty("taxIdentificationNumber")}),t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx(i,{type:"submit",disabled:e.processing,children:"Save"}),t.jsx(l,{show:e.recentlySuccessful,enter:"transition ease-in-out",enterFrom:"opacity-0",leaveTo:"opacity-0",leave:"transition ease-in-out",children:t.jsx("p",{className:"text-sm text-green-500",children:"Saved"})})]})," "]})]})})}export{N as default};