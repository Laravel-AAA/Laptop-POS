import{r as m,j as o,y as h}from"./app-dea2e70f.js";import S from"./AdvancedPlan-579b4f84.js";import P from"./BasicPlan-d402dc60.js";import v from"./EnhancedPlan-8329cdf7.js";import A from"./SubscriptionState-547c7f54.js";import g from"./CurrentPlanAction-efab7bac.js";import j from"./ToggleMonthlyYearly-cadb0313.js";import C from"./SubscriptionProgress-fd4f4a08.js";import{A as f}from"./AlertModal-2c693305.js";import{S as E}from"./SupportEmailLink-a455ef45.js";import"./Plan-9918bc69.js";import"./PrimaryButton-1de563e1.js";import"./A-c9d39cad.js";import"./Num-c7cf838b.js";import"./index-3296b828.js";import"./index-e89802af.js";import"./SharedBenefits-7690e26b.js";import"./index.esm-3f090a22.js";import"./iconBase-76a8b7e9.js";import"./index.esm-750c7c23.js";import"./FromDate-0e9424e3.js";import"./KeyValue-59535172.js";import"./Dropdown-df466c76.js";import"./BetterLink-f7b3db09.js";import"./transition-6a94586b.js";import"./TemplateModal-fa9c7f8a.js";import"./SecondaryMaterialBtn-a0136127.js";import"./PrimaryMaterialBtn-f60a7817.js";function te({business:p,subscriptionLinks:t}){const[s,x]=m.useState("Monthly"),[a,d]=m.useState({from:"Basic",to:"Basic",isShow:!1,route:""}),[b,c]=m.useState(!1);console.log(t);const{state:i,subscribedTo:e,progress:w}=t,u=e==="Advanced"||e==="Enhanced"||e==="Basic",y="!from-danger-500 !to-danger-700";return o.jsxs("section",{className:"bg-white p-4 shadow sm:rounded-lg sm:p-8",children:[o.jsx(f,{title:`${l(a.from,a.to)?"Upgrade":"Downgrade"} to ${a.to}`,paragraph:`You are about to ${l(a.from,a.to)?"upgrade":"downgrade"} your subscription plan from ${a.from} to ${a.to}. We will charge or refund the difference between the old and new billing amount right away. The calculation is based on the number of days left in the current billing cycle.`,isOpen:a.isShow,requestClose:()=>d(r=>({...r,isShow:!1})),buttons:[{type:l(a.from,a.to)?"primary":"danger",text:l(a.from,a.to)?"Upgrade":"Downgrade",props:{onClick:()=>h.visit(a.route)}},{text:"Cancel",type:"secondary"}]}),o.jsx(f,{title:"Pause Subscription",paragraph:"Your subscription stays active until the end of this billing cycle. You won’t be charged after that. Click ‘pause now’ to pause it immediately (not advised).",isOpen:b,requestClose:()=>c(!1),buttons:[{type:"danger",text:"Pause",props:{onClick:()=>h.visit(route("subscription.pause"))}},{type:"danger",text:"Pause Now",props:{onClick:()=>h.visit(route("subscription.pauseNow"))}},{text:"Cancel",type:"secondary"}]}),o.jsxs("div",{className:"space-y-6",children:[o.jsxs("header",{className:"max-w-xl",children:[o.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Subscription"}),o.jsxs("p",{className:"text-normal mb-4 text-gray-600",children:["If you need more resources for your POS system, please contact us and we will be happy to assist you with a custom plan. ",o.jsx(E,{})]}),o.jsx(A,{subscriptionData:t})]}),w&&o.jsx(C,{progress:w}),o.jsx(j,{period:s,setPeriod:r=>x(r)}),o.jsxs("div",{className:"space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:space-y-0 xl:gap-10",children:[o.jsx(P,{period:s,planProps:{actionNode:e!=="Basic"?void 0:o.jsx(g,{state:i,requestShowPauseSubAlert:()=>c(!0)}),actionText:e==="Enhanced"||e==="Advanced"?"Downgrade":"Subscribe",actionProps:{disabled:i==="Canceled",className:e==="Enhanced"||e==="Advanced"?y:"",onClick:()=>{var r,n;return u?d({from:e,to:"Basic",isShow:!0,route:route("swapToBasic",s)}):window.Paddle.Checkout.open(s==="Monthly"?(r=t.basic)==null?void 0:r.monthly:(n=t.basic)==null?void 0:n.annually)}}}}),o.jsx(v,{period:s,planProps:{actionNode:e!=="Enhanced"?void 0:o.jsx(g,{state:i,requestShowPauseSubAlert:()=>c(!0)}),actionText:e==="Basic"?"Upgrade":e==="Advanced"?"Downgrade":"Subscribe",actionProps:{disabled:i==="Canceled",className:e==="Advanced"?y:"",onClick:()=>{var r,n;return u?d({from:e,to:"Enhanced",isShow:!0,route:route("swapToEnhanced",s)}):window.Paddle.Checkout.open(s==="Monthly"?(r=t.enhanced)==null?void 0:r.monthly:(n=t.enhanced)==null?void 0:n.annually)}}}}),o.jsx(S,{period:s,planProps:{actionNode:e!=="Advanced"?void 0:o.jsx(g,{state:i,requestShowPauseSubAlert:()=>c(!0)}),actionText:e==="Basic"||e==="Enhanced"?"Upgrade":"Subscribe",actionProps:{disabled:i==="Canceled",onClick:()=>{var r,n;return u?d({from:e,to:"Advanced",isShow:!0,route:route("swapToAdvanced",s)}):window.Paddle.Checkout.open(s==="Monthly"?(r=t.advanced)==null?void 0:r.monthly:(n=t.advanced)==null?void 0:n.annually)}}}})]})]})]})}function l(p,t){return p==="Basic"&&(t==="Enhanced"||t==="Advanced")||p==="Enhanced"&&t==="Advanced"}export{te as default};
