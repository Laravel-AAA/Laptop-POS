import{W as d,r as l,j as s,b as u}from"./app-a6e2ab9e.js";import{G as c}from"./GuestFormLayout-dd645d5f.js";import{I as f}from"./InputError-5096215d.js";import{I as x}from"./InputLabel-5507666d.js";import{P as w}from"./PrimaryButton-25fe02db.js";import{T as j}from"./TextInput-d80ef557.js";import"./index-8f1c01be.js";import"./index-54a758fb.js";import"./Dropdown-51595df7.js";import"./transition-c99204ab.js";import"./index.esm-6664278a.js";import"./iconBase-7f9d05a2.js";function D({auth:t}){const{data:e,setData:o,post:a,processing:m,errors:i,reset:p}=d({password:""});l.useEffect(()=>()=>{p("password")},[]);const n=r=>{r.preventDefault(),a(route("password.confirm"))};return s.jsxs(c,{auth:t,children:[s.jsx(u,{title:"Confirm Password"}),s.jsx("div",{className:"mb-4 text-sm text-gray-600",children:"This is a secure area of the application. Please confirm your password before continuing."}),s.jsxs("form",{onSubmit:n,children:[s.jsxs("div",{className:"mt-4",children:[s.jsx(x,{htmlFor:"password",value:"Password"}),s.jsx(j,{id:"password",type:"password",name:"password",value:e.password,className:"mt-1 block w-full",isFocused:!0,onChange:r=>o("password",r.target.value)}),s.jsx(f,{message:i.password,className:"mt-2"})]}),s.jsx("div",{className:"flex items-center justify-end mt-4",children:s.jsx(w,{type:"submit",className:"ml-4",disabled:m,children:"Confirm"})})]})]})}export{D as default};