import{j as e}from"./app-7f3c92cf.js";import{P as i}from"./PrimaryButton-8b1f69ca.js";function h({title:l,desc:s,price:r,periodText:t,benefits:x,actionText:d="Get Started",actionProps:a}){return e.jsxs("div",{className:"mx-auto flex max-w-lg flex-col rounded-lg border border-gray-100 bg-white p-6 text-center text-gray-900 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white xl:p-8",children:[e.jsx("h3",{className:"mb-4 text-2xl font-semibold",children:l}),e.jsx("p",{className:"font-light text-gray-500",children:s}),e.jsxs("div",{className:"my-8 flex items-baseline justify-center",children:[e.jsxs("span",{className:"mr-2 text-5xl font-extrabold",children:["$",r]}),e.jsxs("span",{className:"text-gray-500",children:["/",t]})]}),e.jsx("ul",{role:"list",className:"mb-8 space-y-4 text-left",children:x.map((m,n)=>e.jsxs("li",{className:"flex items-center space-x-3",children:[e.jsx("svg",{className:"h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})}),m]},n))}),e.jsx(i,{...a,className:"paddle_button border-none bg-gradient-to-r from-primary-600 to-primary-800 !text-base normal-case shadow hover:shadow-lg "+(a!=null&&a.className?a.className:""),children:d})]})}export{h as default};
