import{r as o,j as a}from"./app-c4f99fcf.js";import{I as r}from"./Input-1445c9c1.js";import"./index-f2ce906e.js";import"./index-ab3f0488.js";import"./ErrorMessage-bb2e37f7.js";function u({form:e}){var t;const i=new URLSearchParams(window.location.search);return o.useEffect(()=>()=>{e.reset("password","password_confirmation")},[]),a.jsxs(a.Fragment,{children:[a.jsx("div",{children:a.jsx(r,{label:"Your Name",name:"name",type:"text",autoFocus:!0,value:e.data.name,errorMsg:e.errors.name,hideError:e.isDirty("name"),disabled:e.processing,className:"mt-1 block w-full",autoComplete:"name",onChange:s=>e.setData("name",s.target.value),required:!0})}),a.jsx("div",{className:"mt-4",children:a.jsx(r,{label:"Email",type:"email",name:"email",value:e.data.email,errorMsg:e.errors.email,hideError:e.isDirty("email"),disabled:e.processing||(((t=i.get("email"))==null?void 0:t.length)??0)>2,className:"mt-1 block w-full",autoComplete:"email",onChange:s=>e.setData("email",s.target.value),required:!0})}),a.jsx("div",{className:"mt-4",children:a.jsx(r,{label:"Password",type:"password",name:"password",value:e.data.password,errorMsg:e.errors.password,hideError:e.isDirty("password"),disabled:e.processing,className:"mt-1 block w-full",autoComplete:"new-password",onChange:s=>e.setData("password",s.target.value),required:!0})}),a.jsx("div",{className:"mt-4",children:a.jsx(r,{label:"Confirm Password",type:"password",name:"password_confirmation",value:e.data.password_confirmation,errorMsg:e.errors.password_confirmation,hideError:e.isDirty("password_confirmation"),disabled:e.processing,className:"mt-1 block w-full",autoComplete:"new-password",onChange:s=>e.setData("password_confirmation",s.target.value),required:!0})})]})}export{u as default};