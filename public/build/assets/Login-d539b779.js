import{r as c,j as e,a as x,d as f}from"./app-6796488e.js";import{C as h}from"./Checkbox-0dbddf9e.js";import{P as b}from"./PrimaryButton-7905418d.js";import{I as l}from"./Input-cda83850.js";import{G as g}from"./GuestFormLayout-e2faa4f7.js";import{u as j}from"./useBetterForm-4dc7abd8.js";import"./index-e70dddb0.js";import"./index-6b815d72.js";import"./ErrorMessage-0999ea98.js";import"./index-d371c2e1.js";import"./index-c57c81d9.js";import"./index.esm-942fbf97.js";import"./iconBase-b16b180b.js";import"./index.esm-9ee0f9d7.js";import"./transition-71e9253c.js";import"./Footer-467d156d.js";import"./SupportEmailLink-83682dff.js";import"./A-7ef6bb4f.js";import"./PrimaryLink-10c0d5a0.js";import"./BetterLink-05df6e7f.js";import"./FullLogo-02104441.js";import"./Logo-8b16c0da.js";import"./FormLayout-219c4b66.js";function Q({status:a,canResetPassword:d,auth:w}){const{data:s,setData:o,post:p,processing:t,errors:m,reset:n,isDirty:i}=j({email:"",password:"",remember:!1});c.useEffect(()=>()=>{n("password")},[]);const u=r=>{r.preventDefault(),p(route("login"))};return e.jsxs(g,{children:[e.jsx(x,{title:"Log in"}),a&&e.jsx("div",{className:"mb-4 text-sm font-medium text-green-600",children:a}),e.jsxs("form",{onSubmit:u,children:[e.jsx("div",{children:e.jsx(l,{type:"email",name:"email",label:"Email",value:s.email,errorMsg:m.email,hideError:i("email"),disabled:t,className:"mt-1 block w-full",autoComplete:"email",onChange:r=>o("email",r.target.value),autoFocus:!0,required:!0})}),e.jsx("div",{className:"mt-4",children:e.jsx(l,{type:"password",name:"password",label:"Password",value:s.password,errorMsg:m.password,disabled:t,className:"mt-1 block w-full",autoComplete:"current-password",onChange:r=>o("password",r.target.value),required:!0,hideError:i("password")})}),e.jsx(h,{label:e.jsx("p",{className:"text-sm text-gray-600",children:"Remember me"}),errorMsg:"",disabled:t,name:"remember",checked:s.remember,onChange:r=>o("remember",r.target.checked)}),e.jsxs("div",{className:"mt-3 flex items-center justify-end",children:[d&&e.jsx(f,{href:route("password.request"),className:"rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none ",children:"Forgot your password?"}),e.jsx(b,{type:"submit",className:"ml-4",disabled:t,children:"Log in"})]})]})]})}export{Q as default};