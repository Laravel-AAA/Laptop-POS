import{r as c,j as e,a as x,d as f}from"./app-3ae78c27.js";import{C as h}from"./Checkbox-d48e4a7e.js";import{P as b}from"./PrimaryButton-8fb2241e.js";import{I as l}from"./Input-1482284f.js";import{G as g}from"./GuestFormLayout-1f42e8b5.js";import{u as j}from"./useBetterForm-ec6acde4.js";import"./index-91a2b981.js";import"./index-f816ca65.js";import"./index-387d7a00.js";import"./ErrorMessage-ebc3c3f4.js";import"./index-8671f3a1.js";import"./index-1bb03f08.js";import"./index.esm-acc8c32e.js";import"./iconBase-a9fbe859.js";import"./index.esm-57ca9fd5.js";import"./transition-82cd760d.js";import"./Footer-074b46ab.js";import"./SupportEmailLink-07021547.js";import"./A-3389763f.js";import"./PrimaryLink-3fd9f2de.js";import"./FullLogo-dddfe68f.js";import"./Logo-68e2bbc7.js";import"./FormLayout-c3e2fe0e.js";function Q({status:a,canResetPassword:d,auth:w}){const{data:s,setData:o,post:p,processing:t,errors:m,reset:n,isDirty:i}=j({email:"",password:"",remember:!1});c.useEffect(()=>()=>{n("password")},[]);const u=r=>{r.preventDefault(),p(route("login"))};return e.jsxs(g,{children:[e.jsx(x,{title:"Log in"}),a&&e.jsx("div",{className:"mb-4 text-sm font-medium text-green-600",children:a}),e.jsxs("form",{onSubmit:u,children:[e.jsx("div",{children:e.jsx(l,{type:"email",name:"email",label:"Email",value:s.email,errorMsg:m.email,hideError:i("email"),disabled:t,className:"mt-1 block w-full",autoComplete:"email",onChange:r=>o("email",r.target.value),autoFocus:!0,required:!0})}),e.jsx("div",{className:"mt-4",children:e.jsx(l,{type:"password",name:"password",label:"Password",value:s.password,errorMsg:m.password,disabled:t,className:"mt-1 block w-full",autoComplete:"current-password",onChange:r=>o("password",r.target.value),required:!0,hideError:i("password")})}),e.jsx(h,{label:e.jsx("p",{className:"text-sm text-gray-600",children:"Remember me"}),errorMsg:"",disabled:t,name:"remember",checked:s.remember,onChange:r=>o("remember",r.target.checked)}),e.jsxs("div",{className:"mt-3 flex items-center justify-end",children:[d&&e.jsx(f,{href:route("password.request"),className:"rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none ",children:"Forgot your password?"}),e.jsx(b,{type:"submit",className:"ml-4",disabled:t,children:"Log in"})]})]})]})}export{Q as default};
