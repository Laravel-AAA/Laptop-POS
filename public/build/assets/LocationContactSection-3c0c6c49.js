import{j as t}from"./app-b733aa80.js";import{P as n}from"./PrimaryMaterialBtn-2093adc3.js";import{I as o}from"./Input-f31a5d66.js";import l from"./CountryInput-dc68d04b.js";import{PhoneInput as c}from"./PhoneInput-3a4ab62b.js";import{u as d}from"./useBetterForm-fe81747f.js";import{u as m}from"./useTranslation-c33630a8.js";import{q as p}from"./transition-177ebb00.js";import"./index-6016834e.js";import"./index-c9736f8d.js";import"./ErrorMessage-42f308db.js";import"./COUNTRIES-4fa12db1.js";import"./SelectInput-c9cd0231.js";function D({business:r}){const e=d({country:r.country,city:r.city,address:r.address,phone:r.phone,countryCallingCode:r.countryCallingCode}),i=s=>{s.preventDefault(),e.patch(route("business.update",r.id),{preserveScroll:!0})},{t:a}=m();return t.jsx("form",{onSubmit:i,className:"bg-white p-4 shadow sm:rounded-lg sm:p-8",children:t.jsxs("section",{className:"max-w-xl",children:[t.jsx("header",{children:t.jsx("h2",{className:"text-lg font-medium text-gray-900",children:a("Location & Contact")})}),t.jsxs("div",{className:"mt-6 space-y-6",children:[t.jsx(l,{form:e}),t.jsx(o,{label:"City",type:"text",errorMsg:e.errors.city,hideError:e.isDirty("city"),value:e.data.city,className:"mt-1 block w-full",autoComplete:"city",onChange:s=>e.setData("city",s.target.value),required:!0,disabled:e.processing}),t.jsx(o,{label:"Address",type:"text",value:e.data.address,errorMsg:e.errors.address,hideError:e.isDirty("address"),className:"mt-1 block w-full",autoComplete:"address",onChange:s=>e.setData("address",s.target.value),required:!0,disabled:e.processing}),t.jsx(c,{form:e}),t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx(n,{type:"submit",disabled:e.processing,children:"Save"}),t.jsx(p,{show:e.recentlySuccessful,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:t.jsx("p",{className:"text-sm text-green-500",children:a("Saved")})})]})]})]})})}export{D as default};