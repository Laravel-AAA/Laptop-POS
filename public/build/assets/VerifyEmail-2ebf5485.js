import{W as a,j as e,b as m,d}from"./app-f149ad97.js";import{G as l}from"./GuestFormLayout-1e124bd1.js";import{P as u}from"./PrimaryButton-c4f0205d.js";import"./index-cc5a7f6e.js";import"./index-d00aa523.js";import"./Dropdown-d753c41f.js";import"./transition-529893aa.js";import"./Footer-1978a613.js";import"./index.esm-a129ec4d.js";import"./iconBase-467f2d26.js";function k({status:t,auth:i}){const{post:r,processing:o}=a({}),s=n=>{n.preventDefault(),r(route("verification.send"))};return e.jsxs(l,{auth:i,children:[e.jsx(m,{title:"Email Verification"}),e.jsx("div",{className:"mb-4 text-sm text-gray-600",children:"Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another."}),t==="verification-link-sent"&&e.jsx("div",{className:"mb-4 text-sm font-medium text-green-600",children:"A new verification link has been sent to the email address you provided during registration."}),e.jsx("form",{onSubmit:s,children:e.jsxs("div",{className:"mt-4 flex items-center justify-between",children:[e.jsx(u,{type:"submit",disabled:o,children:"Resend Verification Email"}),e.jsx(d,{href:route("logout"),method:"post",as:"button",className:"rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",children:"Log Out"})]})})]})}export{k as default};
