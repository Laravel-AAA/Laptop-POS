import{j as e}from"./app-c279daac.js";import{I as o}from"./Input-6114d28e.js";import i from"./BusinessLogoInput-b9072472.js";import{P as m}from"./PrimaryButton-b0a11d9a.js";import{u as n}from"./useBetterForm-f488925c.js";import{t as l}from"./transition-3b9af4da.js";import"./index-79ce6650.js";import"./index-1e79867a.js";import"./ErrorMessage-90a2cff6.js";import"./index.esm-a571f6c6.js";import"./iconBase-0ea0b5a5.js";function N({business:s}){const t=n({name:s.name,logo:s.logo,logoFile:s.logoFile,_method:"patch"}),a=r=>{r.preventDefault(),console.log("data",t.data),t.post(route("business.update",s.id),{preserveScroll:!0})};return e.jsx("form",{onSubmit:a,className:"bg-white p-4 shadow sm:rounded-lg sm:p-8",children:e.jsxs("section",{className:"max-w-xl",children:[e.jsxs("header",{children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Business Identity"}),e.jsx("p",{className:"text-normal mt-1 text-gray-600",children:"Name and Logo"})]}),e.jsxs("div",{className:"mt-6 space-y-6",children:[e.jsx(o,{label:"Business Name",type:"text",value:t.data.name,errorMsg:t.errors.name,hideError:t.isDirty("name"),className:"mt-1 block w-full",autoComplete:"off",maxLength:50,onChange:r=>t.setData("name",r.target.value),required:!0,disabled:t.processing}),e.jsx(i,{form:t}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(m,{type:"submit",disabled:t.processing,children:"Save"}),e.jsx(l,{show:t.recentlySuccessful,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:e.jsx("p",{className:"text-sm text-green-500",children:"Saved"})})]})]})]})})}export{N as default};