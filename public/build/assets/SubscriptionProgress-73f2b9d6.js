import{j as e}from"./app-b733aa80.js";import{r as l}from"./index-6016834e.js";import{N as t}from"./Num-631ee9e0.js";import{u as m}from"./useTranslation-c33630a8.js";import"./index-c9736f8d.js";function c({leftLabel:r,rightLabel:o,progressLabel:s,progress:a,progressColor:n}){return e.jsxs("div",{className:"w-full",children:[e.jsxs("div",{className:"mb-2 flex items-center justify-between gap-4",children:[r&&e.jsx(l.Typography,{color:"blue-gray",variant:"h6",placeholder:void 0,onPointerEnterCapture:void 0,onPointerLeaveCapture:void 0,children:r}),o&&e.jsx(l.Typography,{color:"blue-gray",variant:"h6",placeholder:void 0,onPointerEnterCapture:void 0,onPointerLeaveCapture:void 0,children:o})]}),e.jsx(l.Progress,{color:n,label:s,value:a,placeholder:void 0,onPointerEnterCapture:void 0,onPointerLeaveCapture:void 0})]})}function v({progress:r}){const{accounts:o,products:s,bills:a}=r,n=Number((o.reached/o.max*100).toFixed(2)),u=Number((s.reached/s.max*100).toFixed(2)),p=Number((a.reached/a.max*100).toFixed(2)),{t:i}=m();return e.jsxs("div",{className:"space-y-3",children:[e.jsx(c,{leftLabel:i("Accounts"),progressColor:d(n),rightLabel:e.jsxs("span",{children:[e.jsx(t,{amount:o.reached})," / ",e.jsx(t,{amount:o.max})]}),progressLabel:" ",progress:n}),e.jsx(c,{leftLabel:i("Products"),progressColor:d(u),progressLabel:" ",rightLabel:e.jsxs("span",{children:[e.jsx(t,{amount:s.reached})," / ",e.jsx(t,{amount:s.max})]}),progress:u}),e.jsx(c,{leftLabel:i("Bills"),progressLabel:" ",progressColor:d(p),rightLabel:e.jsxs("span",{children:[e.jsx(t,{amount:a.reached})," / ",e.jsx(t,{amount:a.max})]}),progress:p})]})}function d(r){return r>=90?"red":r>=80?"deep-orange":r>=70?"orange":void 0}export{v as default};