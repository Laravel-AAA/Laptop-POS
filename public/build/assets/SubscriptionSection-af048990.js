import{r as m,j as e,y as h}from"./app-097abe58.js";import S from"./AdvancedPlan-fb175706.js";import P from"./BasicPlan-806ac22d.js";import j from"./EnhancedPlan-f110544b.js";import v from"./SubscriptionState-a279728d.js";import g from"./CurrentPlanAction-034304a8.js";import A from"./ToggleMonthlyYearly-8125e3ed.js";import C from"./SubscriptionProgress-e5b8dacf.js";import{A as x}from"./AlertModal-339942d9.js";import{S as N}from"./SupportEmailLink-12422429.js";import"./Plan-9bf48065.js";import"./PrimaryButton-6783eb35.js";import"./A-c1657785.js";import"./Num-1532f164.js";import"./index-c8d20cd6.js";import"./index-c7fa9393.js";import"./SharedBenefits-5c879e81.js";import"./index.esm-ce4cf581.js";import"./iconBase-295ae749.js";import"./index.esm-722edfeb.js";import"./FromDate-666062fb.js";import"./KeyValue-61166eac.js";import"./Dropdown-ff749f62.js";import"./BetterLink-f0e167cf.js";import"./transition-5f37107b.js";import"./TemplateModal-f5721ff1.js";import"./SecondaryMaterialBtn-058727b8.js";import"./PrimaryMaterialBtn-1f504899.js";function oe({business:p,subscriptionLinks:o}){const[s,b]=m.useState("Monthly"),[a,d]=m.useState({from:"Basic",to:"Basic",isShow:!1,route:""}),[f,c]=m.useState(!1);console.log(o);const{state:i,subscribedTo:t,progress:y}=o,u=t==="Advanced"||t==="Enhanced"||t==="Basic",w="!from-danger-500 !to-danger-700";return e.jsxs("section",{className:"bg-white p-4 shadow sm:rounded-lg sm:p-8",children:[e.jsx(x,{title:`${l(a.from,a.to)?"Upgrade":"Downgrade"} to ${a.to}`,paragraph:`You are about to ${l(a.from,a.to)?"upgrade":"downgrade"} your subscription plan from ${a.from} to ${a.to}. We will charge or refund the difference between the old and new billing amount right away. The calculation is based on the number of days left in the current billing cycle.`,isOpen:a.isShow,requestClose:()=>d(r=>({...r,isShow:!1})),buttons:[{type:l(a.from,a.to)?"primary":"danger",text:l(a.from,a.to)?"Upgrade":"Downgrade",props:{onClick:()=>h.visit(a.route)}},{text:"Cancel",type:"secondary"}]}),e.jsx(x,{title:"Pause Subscription",paragraph:"Your subscription stays active until the end of this billing cycle. You won’t be charged after that. Click ‘pause now’ to pause it immediately (not advised).",isOpen:f,requestClose:()=>c(!1),buttons:[{type:"danger",text:"Pause",props:{onClick:()=>h.visit(route("subscription.pause"))}},{type:"danger",text:"Pause Now",props:{onClick:()=>h.visit(route("subscription.pauseNow"))}},{text:"Cancel",type:"secondary"}]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("header",{className:"max-w-xl",children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Subscription"}),e.jsxs("p",{className:"text-normal mb-4 text-gray-600",children:["If you need more resources for your POS system, please contact us and we will be happy to assist you with a custom plan."," ",e.jsx(N,{})]}),e.jsx(v,{subscriptionData:o})]}),y&&e.jsx(C,{progress:y}),e.jsx(A,{period:s,setPeriod:r=>b(r)}),e.jsxs("div",{className:"space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:space-y-0 xl:gap-10",children:[e.jsx(P,{period:s,planProps:{actionNode:t!=="Basic"?void 0:e.jsx(g,{state:i,requestShowPauseSubAlert:()=>c(!0)}),actionText:t==="Enhanced"||t==="Advanced"?"Downgrade":"Subscribe",actionProps:{disabled:i==="Canceled",className:t==="Enhanced"||t==="Advanced"?w:"",onClick:()=>{var r,n;return u?d({from:t,to:"Basic",isShow:!0,route:route("swapToBasic",s)}):window.Paddle.Checkout.open(s==="Monthly"?(r=o.basic)==null?void 0:r.monthly:(n=o.basic)==null?void 0:n.annually)}}}}),e.jsx(j,{period:s,planProps:{actionNode:t!=="Enhanced"?void 0:e.jsx(g,{state:i,requestShowPauseSubAlert:()=>c(!0)}),actionText:t==="Basic"?"Upgrade":t==="Advanced"?"Downgrade":"Subscribe",actionProps:{disabled:i==="Canceled",className:t==="Advanced"?w:"",onClick:()=>{var r,n;return u?d({from:t,to:"Enhanced",isShow:!0,route:route("swapToEnhanced",s)}):window.Paddle.Checkout.open(s==="Monthly"?(r=o.enhanced)==null?void 0:r.monthly:(n=o.enhanced)==null?void 0:n.annually)}}}}),e.jsx(S,{period:s,planProps:{actionNode:t!=="Advanced"?void 0:e.jsx(g,{state:i,requestShowPauseSubAlert:()=>c(!0)}),actionText:t==="Basic"||t==="Enhanced"?"Upgrade":"Subscribe",actionProps:{disabled:i==="Canceled",onClick:()=>{var r,n;return u?d({from:t,to:"Advanced",isShow:!0,route:route("swapToAdvanced",s)}):window.Paddle.Checkout.open(s==="Monthly"?(r=o.advanced)==null?void 0:r.monthly:(n=o.advanced)==null?void 0:n.annually)}}}})]}),e.jsxs("p",{className:"max-w-2xl text-danger-500",children:[e.jsx("b",{children:"WARNING"}),": This application is still in development and not ready for real subscription. Do not use your real credit card information to test the application. Instead, you can use the following test card details: Card Number:",e.jsx("b",{children:"4242 4242 4242 4242"}),", CVC:",e.jsx("b",{children:"100"}),", Name on card can be anything, and Expiration date can be any date in the future. Using any other card information may result in unwanted charges or errors."]})]})]})}function l(p,o){return p==="Basic"&&(o==="Enhanced"||o==="Advanced")||p==="Enhanced"&&o==="Advanced"}export{oe as default};