import{j as e}from"./app-b733aa80.js";import{I as i}from"./Input-f31a5d66.js";import m from"./BusinessLogoInput-4e60a162.js";import{u as n}from"./useBetterForm-fe81747f.js";import{P as l}from"./PrimaryMaterialBtn-2093adc3.js";import{u as c}from"./useTranslation-c33630a8.js";import{q as d}from"./transition-177ebb00.js";import"./index-6016834e.js";import"./index-c9736f8d.js";import"./ErrorMessage-42f308db.js";import"./index-84652058.js";import"./iconBase-e5c9f32e.js";function w({business:s}){const t=n({name:s.name,logo:s.logo,logoFile:s.logoFile,_method:"patch"}),o=r=>{r.preventDefault(),console.log("data",t.data),t.post(route("business.update",s.id),{preserveScroll:!0})},{t:a}=c();return e.jsx("form",{onSubmit:o,className:"bg-white p-4 shadow sm:rounded-lg sm:p-8",children:e.jsxs("section",{className:"max-w-xl",children:[e.jsxs("header",{children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900",children:a("Business Identity")}),e.jsx("p",{className:"text-normal mt-1 text-gray-600",children:a("Name and Logo")})]}),e.jsxs("div",{className:"mt-6 space-y-6",children:[e.jsx(i,{label:"Business Name",type:"text",value:t.data.name,errorMsg:t.errors.name,hideError:t.isDirty("name"),className:"mt-1 block w-full",autoComplete:"off",maxLength:50,onChange:r=>t.setData("name",r.target.value),required:!0,disabled:t.processing}),e.jsx(m,{form:t}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(l,{type:"submit",disabled:t.processing,children:"Save"}),e.jsx(d,{show:t.recentlySuccessful,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:e.jsx("p",{className:"text-sm text-green-500",children:a("Saved")})})]})]})]})})}export{w as default};