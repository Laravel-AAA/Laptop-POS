import{W as d,r as l,j as s,b as u}from"./app-f149ad97.js";import{G as c}from"./GuestFormLayout-1e124bd1.js";import{I as f}from"./InputError-56c233ef.js";import{I as x}from"./InputLabel-4b6dfdf9.js";import{P as w}from"./PrimaryButton-c4f0205d.js";import{T as j}from"./TextInput-87ca4055.js";import"./index-cc5a7f6e.js";import"./index-d00aa523.js";import"./Dropdown-d753c41f.js";import"./transition-529893aa.js";import"./Footer-1978a613.js";import"./index.esm-a129ec4d.js";import"./iconBase-467f2d26.js";function G({auth:t}){const{data:o,setData:e,post:a,processing:m,errors:i,reset:p}=d({password:""});l.useEffect(()=>()=>{p("password")},[]);const n=r=>{r.preventDefault(),a(route("password.confirm"))};return s.jsxs(c,{auth:t,children:[s.jsx(u,{title:"Confirm Password"}),s.jsx("div",{className:"mb-4 text-sm text-gray-600",children:"This is a secure area of the application. Please confirm your password before continuing."}),s.jsxs("form",{onSubmit:n,children:[s.jsxs("div",{className:"mt-4",children:[s.jsx(x,{htmlFor:"password",value:"Password"}),s.jsx(j,{id:"password",type:"password",name:"password",value:o.password,className:"mt-1 block w-full",isFocused:!0,onChange:r=>e("password",r.target.value)}),s.jsx(f,{message:i.password,className:"mt-2"})]}),s.jsx("div",{className:"mt-4 flex items-center justify-end",children:s.jsx(w,{type:"submit",className:"ml-4",disabled:m,children:"Confirm"})})]})]})}export{G as default};
