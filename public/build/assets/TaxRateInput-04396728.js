import{j as s}from"./app-1c25774f.js";import{I as x}from"./Input-39d53c15.js";import{N as m}from"./Num-763d349f.js";import"./index-87120360.js";import"./index-d77bb9c5.js";import"./index-387d7a00.js";import"./ErrorMessage-4ccff6f2.js";function c({value:a,onChange:e,disabled:i,errorMsg:o,hideError:r,currency:t}){return s.jsx(x,{id:"taxPercent",label:"Tax Rate",className:"mt-1 block w-full",max:100,min:0,type:"number",icon:s.jsx("span",{children:"%"}),value:Number(a.toFixed(2)),onChange:n=>e==null?void 0:e(n),disabled:i,required:!0,errorMsg:o,hideError:r,hint:s.jsxs("span",{children:[s.jsxs("span",{className:"font-semibold text-blue-gray-600",children:[s.jsx(m,{amount:a}),"%"]})," ","tax on"," ",s.jsxs("span",{className:"font-semibold text-blue-gray-600",children:[t&&s.jsxs("span",{children:[t," "]}),s.jsx(m,{amount:100,showCurrency:!t})]})," ","is"," ",s.jsxs("span",{className:"font-semibold text-blue-gray-600",children:[t&&s.jsxs("span",{children:[t," "]}),s.jsx(m,{amount:a/100*100,showCurrency:!t})]})]})})}export{c as default};