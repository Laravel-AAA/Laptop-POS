import{j as r,a as c,y as l}from"./app-02238819.js";import{G as p}from"./GuestFormLayout-5fdad51a.js";import u from"./BusinessForm-955bc3c3.js";import x from"./UserForm-12e930be.js";import{u as n}from"./useBetterForm-371649f1.js";import g from"./RegisterAction-ba069aa0.js";import"./index-5f78e2dd.js";import"./index-3a8e8dca.js";import"./index-8301804e.js";import"./index-9b1e206d.js";import"./index.esm-1f875cda.js";import"./iconBase-a22b7b87.js";import"./index.esm-e23caa02.js";import"./transition-c2dff889.js";import"./Footer-00b372bd.js";import"./SupportEmailLink-8edc76e2.js";import"./A-b07f1baa.js";import"./PrimaryLink-abf3da25.js";import"./BetterLink-489afceb.js";import"./FullLogo-68de4e81.js";import"./Logo-decfb8b0.js";import"./FormLayout-a88cce51.js";import"./Input-48e0e8c0.js";import"./ErrorMessage-c2c4745b.js";import"./PhoneInput-232ad9e7.js";import"./COUNTRIES-4fa12db1.js";import"./CountryInput-ba309599.js";import"./SelectInput-3959034b.js";import"./CurrencyInput-fae4772c.js";import"./TaxRateInput-c61078f9.js";import"./Num-4afba5b7.js";import"./PrimaryButton-99b15eb8.js";function M(){const s=new URLSearchParams(window.location.search),e=n({name:s.get("name")??"",email:s.get("email")??"",password:"",password_confirmation:"",role:"Owner"}),t=n({name:"",logo:null,logoFile:null,country:"",city:"",address:"",currency:"$",taxPercent:0,phone:"",countryCallingCode:"",taxIdentificationNumber:null}),m=a=>{a.preventDefault(),l.post(route("register",{email:s.get("email")??"",expires:s.get("expires")??"",signature:s.get("signature")??""}),{...e.data,business:t.data},{onStart:()=>{t.clearErrors(),e.clearErrors(),e.setProcessing(!0),t.setProcessing(!0)},onFinish:()=>{e.setProcessing(!1),t.setProcessing(!1)},onError:i=>{for(let o in i)o.startsWith("business.")?t.setError(o.substring(9),i[o]):e.setError(o,i[o])}})};return r.jsxs(p,{children:[r.jsx(c,{title:"Register"}),r.jsxs("main",{className:"space-y-4",children:[r.jsx("header",{children:r.jsx("h1",{className:"mx-3 text-center text-3xl font-extrabold",children:"Register"})}),r.jsx("section",{children:r.jsxs("form",{className:"space-y-4",onSubmit:m,children:[r.jsxs("section",{children:[r.jsx("p",{className:"text-center text-lg text-blue-gray-500",children:"Account Details"}),r.jsx(x,{form:e})]}),r.jsxs("section",{children:[r.jsx("p",{className:"text-center text-lg text-blue-gray-500",children:"Business Details"}),r.jsx(u,{form:t})]}),r.jsx("footer",{children:r.jsx(g,{processing:e.processing})})]})})]})]})}export{M as default};