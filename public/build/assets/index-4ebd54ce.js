import{r as o,j as t,y as e}from"./app-6796488e.js";import a from"./EnhancedPlan-65996c4f.js";import n from"./BasicPlan-f1a2092a.js";import l from"./AdvancedPlan-dad2e48a.js";import p from"./ToggleMonthlyYearly-fff2f49f.js";import{S as m}from"./SupportEmailLink-83682dff.js";import"./Plan-7a200f2c.js";import"./PrimaryButton-7905418d.js";import"./A-7ef6bb4f.js";import"./Num-690cb30e.js";import"./index-e70dddb0.js";import"./index-6b815d72.js";import"./SharedBenefits-218e4fa8.js";import"./index.esm-942fbf97.js";import"./iconBase-b16b180b.js";import"./index.esm-9ee0f9d7.js";function C(){const[r,s]=o.useState("Monthly");return t.jsx("section",{id:"pricing",className:"bg-gray-100",children:t.jsxs("div",{className:"mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16",children:[t.jsxs("header",{className:"mx-auto mb-10 max-w-screen-md text-center",children:[t.jsx("p",{className:"mb-3 text-lg font-light tracking-wide text-primary-600",children:"Affordable Pricing"}),t.jsx("h2",{className:"mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white",children:"Designed for businesses like yours"}),t.jsxs("p",{className:"mb-5 font-light text-gray-500 dark:text-gray-400 sm:text-xl",children:["If you need more resources for your POS system, please contact us and we will be happy to assist you with a custom plan."," ",t.jsx(m,{})," "]})]}),t.jsx(p,{period:r,setPeriod:i=>s(i)}),t.jsxs("div",{className:"space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:space-y-0 xl:gap-10",children:[t.jsx(n,{period:r,planProps:{actionProps:{onClick:()=>e.visit(route("register.method",{plan:"Basic",period:r}))}}}),t.jsx(a,{period:r,planProps:{actionProps:{onClick:()=>e.visit(route("register.method",{plan:"Enhanced",period:r}))}}}),t.jsx(l,{period:r,planProps:{actionProps:{onClick:()=>e.visit(route("register.method",{plan:"Advanced",period:r}))}}})]})]})})}export{C as default};