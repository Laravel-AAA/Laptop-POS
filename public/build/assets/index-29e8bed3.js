import{r as o,j as s,y as r}from"./app-c4f99fcf.js";import{S as a}from"./SupportEmailLink-25910303.js";import n from"./ToggleMonthlyYearly-cd290e3b.js";import c from"./BasicPlan-0d981c02.js";import p from"./EnhancedPlan-2f9e03f8.js";import l from"./AdvancedPlan-ac643d67.js";import{F as m}from"./FullLogo-22de4ad6.js";import"./Plan-a5fa2f3f.js";import"./PrimaryButton-1d722ee2.js";import"./A-fe68ec6d.js";import"./Num-4e0152fd.js";import"./index-f2ce906e.js";import"./index-ab3f0488.js";import"./SharedBenefits-da432b74.js";import"./index.esm-ca4caddf.js";import"./iconBase-adc01455.js";import"./index.esm-08f6393a.js";import"./Logo-3472d789.js";function A(){const[t,e]=o.useState("Monthly");return s.jsxs("section",{className:"bg-gray-100",children:[s.jsx("div",{className:"flex justify-center pt-5",children:s.jsx(m,{})}),s.jsxs("div",{className:"mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16",children:[s.jsxs("header",{className:"mx-auto mb-10 max-w-screen-md text-center",children:[s.jsx("p",{className:"mb-3 font-semibold uppercase text-primary-600",children:"Pricing"}),s.jsx("h2",{className:"mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white",children:"Designed for businesses like yours"}),s.jsxs("p",{className:"mb-5 font-light text-gray-500 dark:text-gray-400 sm:text-xl",children:["If you need more resources for your POS system, please contact us and we will be happy to assist you with a custom plan."," ",s.jsx(a,{})," "]})]}),s.jsx(n,{period:t,setPeriod:i=>e(i)}),s.jsxs("div",{className:"space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:space-y-0 xl:gap-10",children:[s.jsx(c,{period:t,planProps:{actionText:"Subscribe",actionProps:{onClick:()=>r.visit(route("subscription.subscribe",{plan:"Basic",period:t}))}}}),s.jsx(p,{period:t,planProps:{actionText:"Subscribe",actionProps:{onClick:()=>r.visit(route("subscription.subscribe",{plan:"Enhanced",period:t}))}}}),s.jsx(l,{period:t,planProps:{actionText:"Subscribe",actionProps:{onClick:()=>r.visit(route("subscription.subscribe",{plan:"Advanced",period:t}))}}})]})]})]})}export{A as default};