import{W as d,r as l,j as s,a as c}from"./app-0b94a0e0.js";import{G as u}from"./GuestLayout-9b22f5f9.js";import{I as f}from"./InputError-8182bf23.js";import{I as x}from"./InputLabel-2124c724.js";import{P as w}from"./PrimaryButton-254b803a.js";import{T as j}from"./TextInput-c81e4a04.js";import"./ApplicationLogo-bf919688.js";import"./index-4581cd6a.js";function C({auth:e}){const{data:a,setData:t,post:o,processing:m,errors:i,reset:n}=d({password:""});l.useEffect(()=>()=>{n("password")},[]);const p=r=>{r.preventDefault(),o(route("password.confirm"))};return s.jsxs(u,{auth:e,children:[s.jsx(c,{title:"Confirm Password"}),s.jsx("div",{className:"mb-4 text-sm text-gray-600",children:"This is a secure area of the application. Please confirm your password before continuing."}),s.jsxs("form",{onSubmit:p,children:[s.jsxs("div",{className:"mt-4",children:[s.jsx(x,{htmlFor:"password",value:"Password"}),s.jsx(j,{id:"password",type:"password",name:"password",value:a.password,className:"mt-1 block w-full",isFocused:!0,onChange:r=>t("password",r.target.value)}),s.jsx(f,{message:i.password,className:"mt-2"})]}),s.jsx("div",{className:"flex items-center justify-end mt-4",children:s.jsx(w,{type:"submit",className:"ml-4",disabled:m,children:"Confirm"})})]})]})}export{C as default};
