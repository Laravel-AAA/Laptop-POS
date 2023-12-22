import{j as e}from"./app-0a8a5278.js";import{D as r}from"./Dropdown-c86214a3.js";import{c as t}from"./index.esm-8782f538.js";import"./BetterLink-4830f462.js";import"./transition-e5c4fc94.js";import"./iconBase-1711b31c.js";function c({requestShowPauseSubAlert:o,state:n}){return e.jsxs(r,{children:[e.jsxs(r.Trigger,{className:`flex w-full items-center justify-center rounded-md
        border border-none border-transparent bg-gradient-to-r
        from-gray-600 to-gray-800
        py-2 text-center align-middle
        text-base font-semibold
        uppercase normal-case tracking-wider
        text-white shadow transition
        duration-200 ease-in-out
        hover:bg-primary-600 hover:shadow-lg  focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 active:scale-95 `,children:[e.jsx("span",{className:"grow",children:"Current Plan"}),e.jsx("span",{className:"mr-3",children:e.jsx(t,{})})]}),e.jsxs(r.Content,{width:"w-full",children:[e.jsx("a",{href:route("updatePaymentMethod"),className:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:cursor-default disabled:opacity-50 disabled:hover:bg-white ",children:"Update Payment Method"}),n==="Recurring"&&e.jsx(r.Button,{onClick:()=>o(),children:"Pause Subscription"}),(n==="Grace Period"||n==="Paused")&&e.jsx(r.Link,{href:route("subscription.resume"),children:"Resume Subscription"})]})]})}export{c as default};
