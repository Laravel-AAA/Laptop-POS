import{r as c,j as r,a as w}from"./app-097abe58.js";import{G as f}from"./GuestFormLayout-2c20fbc1.js";import{P as x}from"./PrimaryButton-6783eb35.js";import{I as m}from"./Input-2335cbef.js";import{u as h}from"./useBetterForm-757eca25.js";import"./index-7a270ce4.js";import"./index-1aea038a.js";import"./index-c8d20cd6.js";import"./index-c7fa9393.js";import"./index.esm-ce4cf581.js";import"./iconBase-295ae749.js";import"./index.esm-722edfeb.js";import"./transition-5f37107b.js";import"./Footer-3b698b20.js";import"./SupportEmailLink-12422429.js";import"./A-c1657785.js";import"./PrimaryLink-a911e79f.js";import"./BetterLink-f0e167cf.js";import"./FullLogo-22a019cd.js";import"./Logo-4f1223fd.js";import"./FormLayout-f9aa00b1.js";import"./ErrorMessage-bea968d2.js";function H({token:l,email:p,auth:j}){const{data:o,setData:a,post:d,processing:e,errors:t,reset:n,isDirty:i}=h({token:l,email:p,password:"",password_confirmation:""});c.useEffect(()=>()=>{n("password","password_confirmation")},[]);const u=s=>{s.preventDefault(),d(route("password.store"))};return r.jsxs(f,{children:[r.jsx(w,{title:"Reset Password"}),r.jsxs("form",{onSubmit:u,children:[r.jsx("div",{children:r.jsx(m,{id:"email",label:"Email",type:"email",name:"email",value:o.email,className:"mt-1 block w-full",autoComplete:"email",onChange:s=>a("email",s.target.value),errorMsg:t.email,hideError:i("email"),disabled:e,required:!0})}),r.jsx("div",{className:"mt-4",children:r.jsx(m,{id:"password",label:"Password",type:"password",name:"password",value:o.password,className:"mt-1 block w-full",autoComplete:"new-password",autoFocus:!0,required:!0,onChange:s=>a("password",s.target.value),errorMsg:t.password,hideError:i("password"),disabled:e})}),r.jsx("div",{className:"mt-4",children:r.jsx(m,{label:"Confirm Password",type:"password",name:"password_confirmation",value:o.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",required:!0,onChange:s=>a("password_confirmation",s.target.value),errorMsg:t.password_confirmation,hideError:i("password_confirmation"),disabled:e})}),r.jsx("div",{className:"mt-4 flex items-center justify-end",children:r.jsx(x,{type:"submit",className:"ml-4",disabled:e,children:"Reset Password"})})]})]})}export{H as default};