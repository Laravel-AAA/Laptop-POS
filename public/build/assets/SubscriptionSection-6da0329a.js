import{r as m,j as o,y as h}from"./app-6d40baad.js";import S from"./AdvancedPlan-b1e73f4e.js";import P from"./BasicPlan-b0c5b6c5.js";import v from"./EnhancedPlan-85171498.js";import A from"./SubscriptionState-97e142ba.js";import g from"./CurrentPlanAction-44ac7df5.js";import j from"./ToggleMonthlyYearly-fc8d89e4.js";import C from"./SubscriptionProgress-a2251c53.js";import{A as x}from"./AlertModal-ee0e7d7e.js";import"./Plan-4f206718.js";import"./PrimaryButton-fc6e0877.js";import"./A-19ad05e4.js";import"./FromDate-09e012df.js";import"./index-cf2469dc.js";import"./index-9cbe0c66.js";import"./KeyValue-965dd922.js";import"./Dropdown-92775177.js";import"./BetterLink-cbb5f621.js";import"./transition-765dce41.js";import"./index.esm-1518e916.js";import"./iconBase-f06c4dd9.js";import"./Num-214edd85.js";import"./index.esm-de3a1476.js";import"./TemplateModal-6d32b927.js";import"./SecondaryMaterialBtn-90a5ec29.js";import"./PrimaryMaterialBtn-273ca88d.js";function L({business:p,subscriptionLinks:t}){const[s,f]=m.useState("Monthly"),[a,d]=m.useState({from:"Basic",to:"Basic",isShow:!1,route:""}),[y,c]=m.useState(!1);console.log(t);const{state:i,subscribedTo:e,progress:w}=t,u=e==="Advanced"||e==="Enhanced"||e==="Basic",b="!from-danger-500 !to-danger-700";return o.jsxs("section",{className:"bg-white p-4 shadow sm:rounded-lg sm:p-8",children:[o.jsx(x,{title:`${l(a.from,a.to)?"Upgrade":"Downgrade"} to ${a.to}`,paragraph:`You are about to ${l(a.from,a.to)?"upgrade":"downgrade"} your subscription plan from ${a.from} to ${a.to}. We will charge or refund the difference between the old and new billing amount right away. The calculation is based on the number of days left in the current billing cycle.`,isOpen:a.isShow,requestClose:()=>d(r=>({...r,isShow:!1})),buttons:[{type:l(a.from,a.to)?"primary":"danger",text:l(a.from,a.to)?"Upgrade":"Downgrade",props:{onClick:()=>h.visit(a.route)}},{text:"Cancel",type:"secondary"}]}),o.jsx(x,{title:"Pause Subscription",paragraph:"Your subscription stays active until the end of this billing cycle. You won’t be charged after that. Click ‘pause now’ to pause it immediately (not advised).",isOpen:y,requestClose:()=>c(!1),buttons:[{type:"danger",text:"Pause",props:{onClick:()=>h.visit(route("subscription.pause"))}},{type:"danger",text:"Pause Now",props:{onClick:()=>h.visit(route("subscription.pauseNow"))}},{text:"Cancel",type:"secondary"}]}),o.jsxs("div",{className:"space-y-6",children:[o.jsxs("header",{className:"max-w-3xl",children:[o.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Subscription"}),o.jsx("p",{className:"text-normal text-gray-600",children:"blah blah"}),o.jsx(A,{subscriptionData:t})]}),w&&o.jsx(C,{progress:w}),o.jsx(j,{period:s,setPeriod:r=>f(r)}),o.jsxs("div",{className:"space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:space-y-0 xl:gap-10",children:[o.jsx(P,{period:s,planProps:{actionNode:e!=="Basic"?void 0:o.jsx(g,{state:i,requestShowPauseSubAlert:()=>c(!0)}),actionText:e==="Enhanced"||e==="Advanced"?"Downgrade":"Subscribe",actionProps:{disabled:i==="Canceled",className:e==="Enhanced"||e==="Advanced"?b:"",onClick:()=>{var r,n;return u?d({from:e,to:"Basic",isShow:!0,route:route("swapToBasic",s)}):window.Paddle.Checkout.open(s==="Monthly"?(r=t.basic)==null?void 0:r.monthly:(n=t.basic)==null?void 0:n.annually)}}}}),o.jsx(v,{period:s,planProps:{actionNode:e!=="Enhanced"?void 0:o.jsx(g,{state:i,requestShowPauseSubAlert:()=>c(!0)}),actionText:e==="Basic"?"Upgrade":e==="Advanced"?"Downgrade":"Subscribe",actionProps:{disabled:i==="Canceled",className:e==="Advanced"?b:"",onClick:()=>{var r,n;return u?d({from:e,to:"Enhanced",isShow:!0,route:route("swapToEnhanced",s)}):window.Paddle.Checkout.open(s==="Monthly"?(r=t.enhanced)==null?void 0:r.monthly:(n=t.enhanced)==null?void 0:n.annually)}}}}),o.jsx(S,{period:s,planProps:{actionNode:e!=="Advanced"?void 0:o.jsx(g,{state:i,requestShowPauseSubAlert:()=>c(!0)}),actionText:e==="Basic"||e==="Enhanced"?"Upgrade":"Subscribe",actionProps:{disabled:i==="Canceled",onClick:()=>{var r,n;return u?d({from:e,to:"Advanced",isShow:!0,route:route("swapToAdvanced",s)}):window.Paddle.Checkout.open(s==="Monthly"?(r=t.advanced)==null?void 0:r.monthly:(n=t.advanced)==null?void 0:n.annually)}}}})]})]})]})}function l(p,t){return p==="Basic"&&(t==="Enhanced"||t==="Advanced")||p==="Enhanced"&&t==="Advanced"}export{L as default};
