import{j as t,a as u}from"./app-6796488e.js";import{G as n}from"./GuestFormLayout-e2faa4f7.js";import{P as d}from"./PrimaryButton-7905418d.js";import{I as c}from"./Input-cda83850.js";import{u as x}from"./useBetterForm-4dc7abd8.js";import"./index-d371c2e1.js";import"./index-c57c81d9.js";import"./index-e70dddb0.js";import"./index-6b815d72.js";import"./index.esm-942fbf97.js";import"./iconBase-b16b180b.js";import"./index.esm-9ee0f9d7.js";import"./transition-71e9253c.js";import"./Footer-467d156d.js";import"./SupportEmailLink-83682dff.js";import"./A-7ef6bb4f.js";import"./PrimaryLink-10c0d5a0.js";import"./BetterLink-05df6e7f.js";import"./FullLogo-02104441.js";import"./Logo-8b16c0da.js";import"./FormLayout-219c4b66.js";import"./ErrorMessage-0999ea98.js";function S({status:r,auth:f}){const{data:i,setData:s,post:m,processing:o,errors:a,isDirty:l}=x({email:""}),p=e=>{e.preventDefault(),m(route("password.email"))};return t.jsxs(n,{children:[t.jsx(u,{title:"Forgot Password"}),t.jsx("div",{className:"mb-4 text-sm text-gray-600",children:"Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."}),r&&t.jsx("div",{className:"mb-4 text-sm font-medium text-green-600",children:r}),t.jsxs("form",{onSubmit:p,children:[t.jsx(c,{id:"email",type:"email",name:"email",value:i.email,className:"mt-1 block w-full",autoFocus:!0,onChange:e=>s("email",e.target.value),label:"Email",required:!0,errorMsg:a.email,hideError:l("email"),disabled:o}),t.jsx("div",{className:"mt-4 flex items-center justify-end",children:t.jsx(d,{type:"submit",className:"ml-4",disabled:o,children:"Email Password Reset Link"})})]})]})}export{S as default};