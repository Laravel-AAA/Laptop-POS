import{W as f,r as x,j as s,b as j}from"./app-f8210ef9.js";import{G as v}from"./GuestFormLayout-a3ba23aa.js";import{I as t}from"./InputError-8ae0324d.js";import{I as m}from"./InputLabel-4d9e57e7.js";import{P as h}from"./PrimaryButton-5e54606a.js";import{T as i}from"./TextInput-5feff15c.js";import"./index-818f3c72.js";import"./index-5d79f9ff.js";import"./Dropdown-10c14537.js";import"./transition-94229a44.js";import"./index.esm-08fed661.js";import"./iconBase-4ce4d0a2.js";function D({token:l,email:n,auth:p}){const{data:e,setData:o,post:d,processing:u,errors:r,reset:c}=f({token:l,email:n,password:"",password_confirmation:""});x.useEffect(()=>()=>{c("password","password_confirmation")},[]);const w=a=>{a.preventDefault(),d(route("password.store"))};return s.jsxs(v,{auth:p,children:[s.jsx(j,{title:"Reset Password"}),s.jsxs("form",{onSubmit:w,children:[s.jsxs("div",{children:[s.jsx(m,{htmlFor:"email",value:"Email"}),s.jsx(i,{id:"email",type:"email",name:"email",value:e.email,className:"mt-1 block w-full",autoComplete:"username",onChange:a=>o("email",a.target.value)}),s.jsx(t,{message:r.email,className:"mt-2"})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx(m,{htmlFor:"password",value:"Password"}),s.jsx(i,{id:"password",type:"password",name:"password",value:e.password,className:"mt-1 block w-full",autoComplete:"new-password",isFocused:!0,onChange:a=>o("password",a.target.value)}),s.jsx(t,{message:r.password,className:"mt-2"})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx(m,{htmlFor:"password_confirmation",value:"Confirm Password"}),s.jsx(i,{type:"password",name:"password_confirmation",value:e.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",onChange:a=>o("password_confirmation",a.target.value)}),s.jsx(t,{message:r.password_confirmation,className:"mt-2"})]}),s.jsx("div",{className:"flex items-center justify-end mt-4",children:s.jsx(h,{type:"submit",className:"ml-4",disabled:u,children:"Reset Password"})})]})]})}export{D as default};