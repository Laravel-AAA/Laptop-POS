import{j as e}from"./app-417aa6ef.js";import{F as i}from"./FromDate-373305d5.js";import{K as c}from"./KeyValue-77e44510.js";import{r as s}from"./index-6fd1b142.js";import"./index-7a0ec626.js";function j({subscriptionData:{state:a,onTrial:n,lastPayment:t,nextPayment:r,gracePeriodExpiresAt:o}}){return e.jsxs(e.Fragment,{children:[e.jsx(c,{k:"State",v:a==="Canceled"?e.jsx("span",{className:"text-danger-500",children:e.jsx(s.Tooltip,{content:"Unsubscribed",children:"Canceled"})}):a==="Grace Period"?e.jsx("span",{className:"text-orange-700",children:e.jsx(s.Tooltip,{content:"Subscription is paused, but still active until the subscription fully expires",children:"Grace Period"})}):a==="Past Due"?e.jsx("span",{className:"text-orange-700",children:e.jsx(s.Tooltip,{content:"Payment failed, you should update your payment method",children:"Past Due"})}):a==="Recurring"?e.jsx("span",{className:"text-green-700",children:e.jsx(s.Tooltip,{content:"Subscribed",children:"Active"})}):a==="Paused"?e.jsx("span",{className:"text-danger-500",children:e.jsx(s.Tooltip,{content:"Subscription paused",children:"Paused"})}):n?e.jsx("span",{className:"text-orange-700",children:e.jsx(s.Tooltip,{content:"Unsubscribed",children:"On trial"})}):e.jsx("span",{className:"text-danger-500",children:e.jsx(s.Tooltip,{content:"Trial ended, you have to subscribe",children:"Inactive"})})}),n&&e.jsxs("p",{className:"text-normal text-gray-600",children:["Trial ends: ",e.jsx(i,{className:"text-orange-700",date:n})]}),(t==null?void 0:t.date)&&e.jsx(c,{k:"Last Payment",v:e.jsxs("span",{className:"text-primary-600",children:[t.amount,","," ",e.jsx(i,{className:"text-gray-900",date:t.date})]})}),(r==null?void 0:r.date)&&e.jsx(c,{k:"Next billing cycle",v:e.jsxs("span",{className:"text-primary-600",children:[r.amount,","," ",e.jsx(i,{className:"text-gray-900",date:r.date})]})}),o&&e.jsx(c,{k:"Subscription Expire",v:e.jsx(i,{date:o})})]})}export{j as default};
