import{r as m,j as o,y as h}from"./app-6796488e.js";import S from"./AdvancedPlan-dad2e48a.js";import P from"./BasicPlan-f1a2092a.js";import v from"./EnhancedPlan-65996c4f.js";import A from"./SubscriptionState-f4d6d6d5.js";import g from"./CurrentPlanAction-a54560ab.js";import j from"./ToggleMonthlyYearly-fff2f49f.js";import C from"./SubscriptionProgress-f7af5d29.js";import{A as y}from"./AlertModal-83100ede.js";import{S as E}from"./SupportEmailLink-83682dff.js";import"./Plan-7a200f2c.js";import"./PrimaryButton-7905418d.js";import"./A-7ef6bb4f.js";import"./Num-690cb30e.js";import"./index-e70dddb0.js";import"./index-6b815d72.js";import"./SharedBenefits-218e4fa8.js";import"./index.esm-942fbf97.js";import"./iconBase-b16b180b.js";import"./index.esm-9ee0f9d7.js";import"./FromDate-dfea4f93.js";import"./KeyValue-36e5acfe.js";import"./Dropdown-101f71f8.js";import"./BetterLink-05df6e7f.js";import"./transition-71e9253c.js";import"./TemplateModal-58a50956.js";import"./SecondaryMaterialBtn-b3670ba1.js";import"./PrimaryMaterialBtn-e07d1dfb.js";function te({business:p,subscriptionLinks:t}){const[s,f]=m.useState("Monthly"),[a,c]=m.useState({from:"Basic",to:"Basic",isShow:!1,route:""}),[x,d]=m.useState(!1);console.log(t);const{state:i,subscribedTo:e,progress:w}=t,u=e==="Advanced"||e==="Enhanced"||e==="Basic",b="!from-danger-500 !to-danger-700";return o.jsxs("section",{className:"bg-white p-4 shadow sm:rounded-lg sm:p-8",children:[o.jsx(y,{title:`${l(a.from,a.to)?"Upgrade":"Downgrade"} to ${a.to}`,paragraph:`You are about to ${l(a.from,a.to)?"upgrade":"downgrade"} your subscription plan from ${a.from} to ${a.to}. We will charge or refund the difference between the old and new billing amount right away. The calculation is based on the number of days left in the current billing cycle.`,isOpen:a.isShow,requestClose:()=>c(r=>({...r,isShow:!1})),buttons:[{type:l(a.from,a.to)?"primary":"danger",text:l(a.from,a.to)?"Upgrade":"Downgrade",props:{onClick:()=>h.visit(a.route)}},{text:"Cancel",type:"secondary"}]},"BusinessSubscriptionSectionUpgradeDowngradeAlert"),o.jsx(y,{title:"Pause Subscription",paragraph:"Your subscription stays active until the end of this billing cycle. You won’t be charged after that. Click ‘pause now’ to pause it immediately (not advised).",isOpen:x,requestClose:()=>d(!1),buttons:[{type:"danger",text:"Pause",props:{onClick:()=>h.visit(route("subscription.pause"))}},{type:"danger",text:"Pause Now",props:{onClick:()=>h.visit(route("subscription.pauseNow"))}},{text:"Cancel",type:"secondary"}]},"BusinessSubscriptionSectionPauseSubscription"),o.jsxs("div",{className:"space-y-6",children:[o.jsxs("header",{className:"max-w-xl",children:[o.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Subscription"}),o.jsxs("p",{className:"text-normal mb-4 text-gray-600",children:["If you need more resources for your POS system, please contact us and we will be happy to assist you with a custom plan."," ",o.jsx(E,{})]}),o.jsx(A,{subscriptionData:t})]}),w&&o.jsx(C,{progress:w}),o.jsx(j,{period:s,setPeriod:r=>f(r)}),o.jsxs("div",{className:"space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:space-y-0 xl:gap-10",children:[o.jsx(P,{period:s,planProps:{actionNode:e!=="Basic"?void 0:o.jsx(g,{state:i,requestShowPauseSubAlert:()=>d(!0)}),actionText:e==="Enhanced"||e==="Advanced"?"Downgrade":"Subscribe",actionProps:{disabled:i==="Canceled",className:e==="Enhanced"||e==="Advanced"?b:"",onClick:()=>{var r,n;return u?c({from:e,to:"Basic",isShow:!0,route:route("subscription.swapToBasic",s)}):window.Paddle.Checkout.open(s==="Monthly"?(r=t.basic)==null?void 0:r.monthly:(n=t.basic)==null?void 0:n.annually)}}}}),o.jsx(v,{period:s,planProps:{actionNode:e!=="Enhanced"?void 0:o.jsx(g,{state:i,requestShowPauseSubAlert:()=>d(!0)}),actionText:e==="Basic"?"Upgrade":e==="Advanced"?"Downgrade":"Subscribe",actionProps:{disabled:i==="Canceled",className:e==="Advanced"?b:"",onClick:()=>{var r,n;return u?c({from:e,to:"Enhanced",isShow:!0,route:route("subscription.swapToEnhanced",s)}):window.Paddle.Checkout.open(s==="Monthly"?(r=t.enhanced)==null?void 0:r.monthly:(n=t.enhanced)==null?void 0:n.annually)}}}}),o.jsx(S,{period:s,planProps:{actionNode:e!=="Advanced"?void 0:o.jsx(g,{state:i,requestShowPauseSubAlert:()=>d(!0)}),actionText:e==="Basic"||e==="Enhanced"?"Upgrade":"Subscribe",actionProps:{disabled:i==="Canceled",onClick:()=>{var r,n;return u?c({from:e,to:"Advanced",isShow:!0,route:route("subscription.swapToAdvanced",s)}):window.Paddle.Checkout.open(s==="Monthly"?(r=t.advanced)==null?void 0:r.monthly:(n=t.advanced)==null?void 0:n.annually)}}}})]})]})]})}function l(p,t){return p==="Basic"&&(t==="Enhanced"||t==="Advanced")||p==="Enhanced"&&t==="Advanced"}export{te as default};