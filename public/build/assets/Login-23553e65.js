import{j as e,W as f,r as g,a as h,d as j}from"./app-0b94a0e0.js";import{G as b}from"./GuestLayout-9b22f5f9.js";import{I as l}from"./InputError-8182bf23.js";import{I as i}from"./InputLabel-2124c724.js";import{P as w}from"./PrimaryButton-254b803a.js";import{T as n}from"./TextInput-c81e4a04.js";import"./ApplicationLogo-bf919688.js";import"./index-4581cd6a.js";function y({className:r="",...a}){return e.jsx("input",{...a,type:"checkbox",className:"rounded border-gray-300 text-primary-600 shadow-sm focus:ring-primary-500 "+r})}function P({status:r,canResetPassword:a,auth:c}){const{data:t,setData:m,post:d,processing:u,errors:o,reset:p}=f({email:"",password:"",remember:!1});g.useEffect(()=>()=>{p("password")},[]);const x=s=>{s.preventDefault(),d(route("login"))};return e.jsxs(b,{auth:c,children:[e.jsx(h,{title:"Log in"}),r&&e.jsx("div",{className:"mb-4 text-sm font-medium text-green-600",children:r}),e.jsxs("form",{onSubmit:x,children:[e.jsxs("div",{children:[e.jsx(i,{htmlFor:"email",value:"Email"}),e.jsx(n,{id:"email",type:"email",name:"email",value:t.email,className:"mt-1 block w-full",autoComplete:"username",isFocused:!0,onChange:s=>m("email",s.target.value)}),e.jsx(l,{message:o.email,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(i,{htmlFor:"password",value:"Password"}),e.jsx(n,{id:"password",type:"password",name:"password",value:t.password,className:"mt-1 block w-full",autoComplete:"current-password",onChange:s=>m("password",s.target.value)}),e.jsx(l,{message:o.password,className:"mt-2"})]}),e.jsx("div",{className:"mt-4 block",children:e.jsxs("label",{className:"flex items-center",children:[e.jsx(y,{name:"remember",checked:t.remember,onChange:s=>m("remember",s.target.checked)}),e.jsx("span",{className:"ml-2 text-sm text-gray-600",children:"Remember me"})]})}),e.jsxs("div",{className:"mt-4 flex items-center justify-end",children:[a&&e.jsx(j,{href:route("password.request"),className:"rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",children:"Forgot your password?"}),e.jsx(w,{type:"submit",className:"ml-4",disabled:u,children:"Log in"})]})]})]})}export{P as default};