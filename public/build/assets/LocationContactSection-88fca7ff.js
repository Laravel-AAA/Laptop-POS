import{j as t}from"./app-1c25774f.js";import{P as i}from"./PrimaryMaterialBtn-702e4d0a.js";import{I as s}from"./Input-39d53c15.js";import l from"./CountryInput-6ea57572.js";import{PhoneInput as n}from"./PhoneInput-26eeafff.js";import{u as c}from"./useBetterForm-7cf4420e.js";import{t as d}from"./transition-f1e823b0.js";import"./index-87120360.js";import"./index-d77bb9c5.js";import"./index-387d7a00.js";import"./ErrorMessage-4ccff6f2.js";import"./COUNTRIES-4fa12db1.js";import"./SelectInput-b87814f8.js";function w({business:r}){const e=c({country:r.country,city:r.city,address:r.address,phone:r.phone,countryCallingCode:r.countryCallingCode}),o=a=>{a.preventDefault(),e.patch(route("business.update",r.id),{preserveScroll:!0})};return t.jsx("form",{onSubmit:o,className:"bg-white p-4 shadow sm:rounded-lg sm:p-8",children:t.jsxs("section",{className:"max-w-xl",children:[t.jsx("header",{children:t.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Location & Contact"})}),t.jsxs("div",{className:"mt-6 space-y-6",children:[t.jsx(l,{form:e}),t.jsx(s,{label:"City",type:"text",errorMsg:e.errors.city,hideError:e.isDirty("city"),value:e.data.city,className:"mt-1 block w-full",autoComplete:"city",onChange:a=>e.setData("city",a.target.value),required:!0,disabled:e.processing}),t.jsx(s,{label:"Address",type:"text",value:e.data.address,errorMsg:e.errors.address,hideError:e.isDirty("address"),className:"mt-1 block w-full",autoComplete:"address",onChange:a=>e.setData("address",a.target.value),required:!0,disabled:e.processing}),t.jsx(n,{form:e}),t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx(i,{type:"submit",disabled:e.processing,children:"Save"}),t.jsx(d,{show:e.recentlySuccessful,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:t.jsx("p",{className:"text-sm text-green-500",children:"Saved"})})]})," "]})]})})}export{w as default};