import{r as d,j as a}from"./app-bd4b3f0c.js";import{_ as p,D as N,S as o}from"./SecondaryMaterialBtn-b4b7bcf1.js";import{P as C}from"./PrimaryMaterialBtn-0d5dbd83.js";import{t as x}from"./transition-2d045a48.js";function R({children:g,open:j,closeModal:s,buttons:e,title:n,icon:v}){var y,f,h;const w=d.useRef(null);return a.jsx(x.Root,{show:j,as:d.Fragment,children:a.jsxs(p,{as:"div",className:"relative z-10",initialFocus:w,onClose:()=>s(),children:[a.jsx(x.Child,{as:d.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:a.jsx("div",{id:"templateModal",className:"fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity"})}),a.jsx("div",{className:"fixed inset-0 z-10 w-screen overflow-y-auto",children:a.jsx("div",{className:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0",children:a.jsx(x.Child,{as:d.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:a.jsxs(p.Panel,{className:"relative w-full transform overflow-hidden rounded-lg text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg",children:[a.jsxs("div",{className:"bg-white",children:[a.jsxs("div",{className:"flex flex-col p-3 pb-2 pt-4 sm:flex-row",children:[v||"",a.jsx("div",{className:"mb-2 self-center text-center sm:text-left",children:a.jsx(p.Title,{as:"h3",className:"mx-3 font-semibold leading-6 text-gray-900",children:n})})]}),a.jsx("div",{className:"mx-0 p-4 pt-0 sm:mx-3",children:g})]}),((e==null?void 0:e.primary)||(e==null?void 0:e.secondary)||(e==null?void 0:e.danger))&&a.jsxs("div",{className:"bg-gray-50 space-y-2 sm:space-y-0 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6",children:[(e==null?void 0:e.danger)&&a.jsx(N,{className:"w-full shadow sm:ml-3 sm:w-auto",...(y=e==null?void 0:e.danger)==null?void 0:y.props,onClick:c=>{var l,i,r,m;s((l=e==null?void 0:e.danger)==null?void 0:l.text),(m=(r=(i=e==null?void 0:e.danger)==null?void 0:i.props)==null?void 0:r.onClick)==null||m.call(r,c)},children:e.danger.text}),(e==null?void 0:e.primary)&&a.jsx(C,{className:"w-full sm:ml-3 sm:w-auto",...(f=e==null?void 0:e.primary)==null?void 0:f.props,onClick:c=>{var l,i,r,m;s((l=e==null?void 0:e.primary)==null?void 0:l.text),(m=(r=(i=e.primary)==null?void 0:i.props)==null?void 0:r.onClick)==null||m.call(r,c)},children:e.primary.text}),(e==null?void 0:e.secondary)&&a.jsx(o,{className:"w-full sm:ml-3 sm:w-auto",...(h=e==null?void 0:e.secondary)==null?void 0:h.props,onClick:c=>{var l,i,r,m;s((l=e==null?void 0:e.secondary)==null?void 0:l.text),(m=(r=(i=e.secondary)==null?void 0:i.props)==null?void 0:r.onClick)==null||m.call(r,c)},children:e.secondary.text})]})]})})})})]})})}export{R as T};