import{j as a}from"./app-0ae878a0.js";import{N as n}from"./Num-5a3b19d1.js";import{r as e}from"./index-81ba1119.js";import"./index-f1a12fd2.js";function p({icon:l,showCurrency:t,title:i,value:c,footer:r,tooltip:s,suffix:d}){return a.jsxs(e.Card,{className:"rounded-none shadow sm:rounded-lg",children:[a.jsx(e.CardHeader,{variant:"gradient",color:"teal",floated:!1,shadow:!1,className:"absolute grid h-12 w-12 place-items-center",children:l}),a.jsx(e.Tooltip,{content:s,className:s?"":"hidden",children:a.jsxs(e.CardBody,{className:"p-4 pb-2 text-right",children:[a.jsx(e.Typography,{variant:"small",className:"font-normal text-blue-gray-600",children:i}),a.jsx(e.Typography,{variant:"h4",color:"blue-gray",children:a.jsx(n,{amount:c,showCurrency:t,suffix:d})})]})}),r&&r.increase!==null&&a.jsx(e.CardFooter,{className:"border-t border-blue-gray-50 px-4 py-2",children:a.jsxs(e.Typography,{className:"font-normal text-blue-gray-600",children:[a.jsxs("strong",{className:r.increase>0?"text-green-500":r.increase<0?"text-danger-500":"",children:[r.increase>0&&"+",a.jsx(n,{amount:r.increase,suffix:"%"})]})," ",r.label]})})]})}export{p as StatisticsCard};