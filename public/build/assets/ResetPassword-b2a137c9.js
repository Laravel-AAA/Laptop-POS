import{W as f,r as x,j as s,b as j}from"./app-f149ad97.js";import{G as v}from"./GuestFormLayout-1e124bd1.js";import{I as t}from"./InputError-56c233ef.js";import{I as m}from"./InputLabel-4b6dfdf9.js";import{P as h}from"./PrimaryButton-c4f0205d.js";import{T as i}from"./TextInput-87ca4055.js";import"./index-cc5a7f6e.js";import"./index-d00aa523.js";import"./Dropdown-d753c41f.js";import"./transition-529893aa.js";import"./Footer-1978a613.js";import"./index.esm-a129ec4d.js";import"./iconBase-467f2d26.js";function G({token:l,email:n,auth:p}){const{data:e,setData:o,post:d,processing:c,errors:r,reset:u}=f({token:l,email:n,password:"",password_confirmation:""});x.useEffect(()=>()=>{u("password","password_confirmation")},[]);const w=a=>{a.preventDefault(),d(route("password.store"))};return s.jsxs(v,{auth:p,children:[s.jsx(j,{title:"Reset Password"}),s.jsxs("form",{onSubmit:w,children:[s.jsxs("div",{children:[s.jsx(m,{htmlFor:"email",value:"Email"}),s.jsx(i,{id:"email",type:"email",name:"email",value:e.email,className:"mt-1 block w-full",autoComplete:"email",onChange:a=>o("email",a.target.value)}),s.jsx(t,{message:r.email,className:"mt-2"})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx(m,{htmlFor:"password",value:"Password"}),s.jsx(i,{id:"password",type:"password",name:"password",value:e.password,className:"mt-1 block w-full",autoComplete:"new-password",isFocused:!0,onChange:a=>o("password",a.target.value)}),s.jsx(t,{message:r.password,className:"mt-2"})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx(m,{htmlFor:"password_confirmation",value:"Confirm Password"}),s.jsx(i,{type:"password",name:"password_confirmation",value:e.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",onChange:a=>o("password_confirmation",a.target.value)}),s.jsx(t,{message:r.password_confirmation,className:"mt-2"})]}),s.jsx("div",{className:"mt-4 flex items-center justify-end",children:s.jsx(h,{type:"submit",className:"ml-4",disabled:c,children:"Reset Password"})})]})]})}export{G as default};