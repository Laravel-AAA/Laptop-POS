import{j as t,a as l,y as p}from"./app-597d038e.js";import{G as u}from"./GuestFormLayout-97fe6c12.js";import c from"./BusinessForm-3ecba818.js";import d from"./UserForm-2a6a36d0.js";import{u as i}from"./useBetterForm-1e02708f.js";import"./index-f75e4d33.js";import"./index-eb459fca.js";import"./Dropdown-7d7d7dcf.js";import"./transition-3e3ca368.js";import"./Footer-f327b109.js";import"./index.esm-0757006a.js";import"./iconBase-a121196f.js";import"./FullLogo-f4eacf1b.js";import"./FormLayout-a5114372.js";import"./Input-568c2f70.js";import"./index-1f12a61e.js";import"./index-9d7526b5.js";import"./ErrorMessage-59b540d3.js";import"./PhoneInput-c19ccb44.js";import"./COUNTRIES-4fa12db1.js";import"./CountryInput-7fef3b97.js";import"./SelectInput-9ca3e419.js";import"./CurrencyInput-b6bec25d.js";import"./TaxRateInput-33310b79.js";import"./Num-5d713926.js";import"./PrimaryButton-b02ed71d.js";import"./Checkbox-01cbad46.js";function Y({auth:n}){const r=i({name:"",email:"",password:"",password_confirmation:"",role:"Owner",termsAndConditions:!1}),o=i({name:"",logo:null,logoFile:null,country:"",city:"",address:"",currency:"$",taxPercent:0,phone:"",countryCallingCode:"",taxIdentificationNumber:null}),m=a=>{if(a.preventDefault(),r.data.termsAndConditions!==!0){r.setError("termsAndConditions","You should agree to our Terms & Conditions.");return}p.post(route("register"),{...r.data,business:o.data},{onStart:()=>{o.clearErrors(),r.clearErrors(),r.setProcessing(!0),o.setProcessing(!0)},onFinish:()=>{r.setProcessing(!1),o.setProcessing(!1)},onError:s=>{for(let e in s)e.startsWith("business.")?o.setError(e.substring(9),s[e]):r.setError(e,s[e])}})};return t.jsxs(u,{auth:n,children:[t.jsx(l,{title:"Register"}),t.jsx("h1",{className:"mx-3 mb-4 text-center text-3xl font-extrabold",children:"Register"}),t.jsxs("form",{onSubmit:m,children:[t.jsx("p",{className:"text-center text-lg text-blue-gray-500",children:"Business Information"}),t.jsx(c,{form:o}),t.jsx("p",{className:"mt-4 text-center text-lg text-blue-gray-500",children:"Account Information"}),t.jsx(d,{form:r})]})]})}export{Y as default};