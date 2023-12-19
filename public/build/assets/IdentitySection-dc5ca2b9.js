import{j as e}from"./app-0ae878a0.js";import{I as o}from"./Input-d90601f1.js";import i from"./BusinessLogoInput-a834e06d.js";import{u as m}from"./useBetterForm-1ba7228d.js";import{P as n}from"./PrimaryMaterialBtn-a3d3092a.js";import{t as l}from"./transition-8444ae82.js";import"./index-81ba1119.js";import"./index-f1a12fd2.js";import"./ErrorMessage-901439c4.js";import"./index.esm-eed45bf1.js";import"./iconBase-05f69f7e.js";function N({business:s}){const t=m({name:s.name,logo:s.logo,logoFile:s.logoFile,_method:"patch"}),r=a=>{a.preventDefault(),console.log("data",t.data),t.post(route("business.update",s.id),{preserveScroll:!0})};return e.jsx("form",{onSubmit:r,className:"bg-white p-4 shadow sm:rounded-lg sm:p-8",children:e.jsxs("section",{className:"max-w-xl",children:[e.jsxs("header",{children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Business Identity"}),e.jsx("p",{className:"text-normal mt-1 text-gray-600",children:"Name and Logo"})]}),e.jsxs("div",{className:"mt-6 space-y-6",children:[e.jsx(o,{label:"Business Name",type:"text",value:t.data.name,errorMsg:t.errors.name,hideError:t.isDirty("name"),className:"mt-1 block w-full",autoComplete:"off",maxLength:50,onChange:a=>t.setData("name",a.target.value),required:!0,disabled:t.processing}),e.jsx(i,{form:t}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(n,{type:"submit",disabled:t.processing,children:"Save"}),e.jsx(l,{show:t.recentlySuccessful,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:e.jsx("p",{className:"text-sm text-green-500",children:"Saved"})})]})]})]})})}export{N as default};