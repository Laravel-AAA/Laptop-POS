import{j as r,a as c,y as l}from"./app-0ae878a0.js";import{G as p}from"./GuestFormLayout-253ff493.js";import u from"./BusinessForm-233c63f0.js";import x from"./UserForm-f34f1aa2.js";import{u as n}from"./useBetterForm-1ba7228d.js";import g from"./RegisterAction-2e21434b.js";import"./index-caf9b15f.js";import"./index-f0109094.js";import"./index-81ba1119.js";import"./index-f1a12fd2.js";import"./index.esm-eed45bf1.js";import"./iconBase-05f69f7e.js";import"./index.esm-2ace370f.js";import"./transition-8444ae82.js";import"./Footer-e7983228.js";import"./SupportEmailLink-b12c78cb.js";import"./A-cf203817.js";import"./PrimaryLink-11798f39.js";import"./BetterLink-ef3bed16.js";import"./FullLogo-0b4ab815.js";import"./Logo-e7f1643e.js";import"./FormLayout-5fe92530.js";import"./Input-d90601f1.js";import"./ErrorMessage-901439c4.js";import"./PhoneInput-0d0749c8.js";import"./COUNTRIES-4fa12db1.js";import"./CountryInput-ad702798.js";import"./SelectInput-e6dd3ea5.js";import"./CurrencyInput-61c54db7.js";import"./TaxRateInput-53eb906a.js";import"./Num-5a3b19d1.js";import"./PrimaryButton-2ad01769.js";function M(){const s=new URLSearchParams(window.location.search),e=n({name:s.get("name")??"",email:s.get("email")??"",password:"",password_confirmation:"",role:"Owner"}),t=n({name:"",logo:null,logoFile:null,country:"",city:"",address:"",currency:"$",taxPercent:0,phone:"",countryCallingCode:"",taxIdentificationNumber:null}),m=a=>{a.preventDefault(),l.post(route("register",{email:s.get("email")??"",expires:s.get("expires")??"",signature:s.get("signature")??""}),{...e.data,business:t.data},{onStart:()=>{t.clearErrors(),e.clearErrors(),e.setProcessing(!0),t.setProcessing(!0)},onFinish:()=>{e.setProcessing(!1),t.setProcessing(!1)},onError:i=>{for(let o in i)o.startsWith("business.")?t.setError(o.substring(9),i[o]):e.setError(o,i[o])}})};return r.jsxs(p,{children:[r.jsx(c,{title:"Register"}),r.jsxs("main",{className:"space-y-4",children:[r.jsx("header",{children:r.jsx("h1",{className:"mx-3 text-center text-3xl font-extrabold",children:"Register"})}),r.jsx("section",{children:r.jsxs("form",{className:"space-y-4",onSubmit:m,children:[r.jsxs("section",{children:[r.jsx("p",{className:"text-center text-lg text-blue-gray-500",children:"Account Details"}),r.jsx(x,{form:e})]}),r.jsxs("section",{children:[r.jsx("p",{className:"text-center text-lg text-blue-gray-500",children:"Business Details"}),r.jsx(u,{form:t})]}),r.jsx("footer",{children:r.jsx(g,{processing:e.processing})})]})})]})]})}export{M as default};