import{W as c,r as f,j as e,b as x,d as w}from"./app-f149ad97.js";import{G as j}from"./GuestFormLayout-1e124bd1.js";import{I as o}from"./InputError-56c233ef.js";import{I as m}from"./InputLabel-4b6dfdf9.js";import{P as g}from"./PrimaryButton-c4f0205d.js";import{T as i}from"./TextInput-87ca4055.js";import"./index-cc5a7f6e.js";import"./index-d00aa523.js";import"./Dropdown-d753c41f.js";import"./transition-529893aa.js";import"./Footer-1978a613.js";import"./index.esm-a129ec4d.js";import"./iconBase-467f2d26.js";function R({auth:l}){const{data:a,setData:r,post:n,processing:d,errors:t,reset:u}=c({name:"",email:"",password:"",password_confirmation:""});f.useEffect(()=>()=>{u("password","password_confirmation")},[]);const p=s=>{s.preventDefault(),n(route("register"))};return e.jsxs(j,{auth:l,children:[e.jsx(x,{title:"Register"}),e.jsxs("form",{onSubmit:p,children:[e.jsxs("div",{children:[e.jsx(m,{htmlFor:"name",value:"Name"}),e.jsx(i,{id:"name",name:"name",value:a.name,className:"mt-1 block w-full",autoComplete:"name",isFocused:!0,onChange:s=>r("name",s.target.value),required:!0}),e.jsx(o,{message:t.name,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(m,{htmlFor:"email",value:"Email"}),e.jsx(i,{id:"email",type:"email",name:"email",value:a.email,className:"mt-1 block w-full",autoComplete:"email",onChange:s=>r("email",s.target.value),required:!0}),e.jsx(o,{message:t.email,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(m,{htmlFor:"password",value:"Password"}),e.jsx(i,{id:"password",type:"password",name:"password",value:a.password,className:"mt-1 block w-full",autoComplete:"new-password",onChange:s=>r("password",s.target.value),required:!0}),e.jsx(o,{message:t.password,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(m,{htmlFor:"password_confirmation",value:"Confirm Password"}),e.jsx(i,{id:"password_confirmation",type:"password",name:"password_confirmation",value:a.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",onChange:s=>r("password_confirmation",s.target.value),required:!0}),e.jsx(o,{message:t.password_confirmation,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 flex items-center justify-end",children:[e.jsx(w,{href:route("login"),className:"rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",children:"Already registered?"}),e.jsx(g,{type:"submit",className:"ml-4",disabled:d,children:"Register"})]})]})]})}export{R as default};
