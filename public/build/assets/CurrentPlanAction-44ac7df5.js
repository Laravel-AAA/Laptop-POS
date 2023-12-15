import{j as e}from"./app-6d40baad.js";import{D as n}from"./Dropdown-92775177.js";import{c as i}from"./index.esm-1518e916.js";import"./BetterLink-cbb5f621.js";import"./transition-765dce41.js";import"./iconBase-f06c4dd9.js";function d({requestShowPauseSubAlert:o,state:r}){return e.jsxs(n,{children:[e.jsxs(n.Trigger,{className:`flex w-full items-center justify-center rounded-md
        border border-none border-transparent bg-gradient-to-r
        from-gray-600 to-gray-800
        py-2 text-center align-middle
        text-base font-semibold
        uppercase normal-case tracking-wider
        text-white shadow transition
        duration-200 ease-in-out
        hover:bg-primary-600 hover:shadow-lg  focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 active:scale-95 `,children:[e.jsx("span",{className:"grow",children:"Current Plan"}),e.jsx("span",{className:"mr-3",children:e.jsx(i,{})})]}),e.jsxs(n.Content,{width:"w-full",children:[r==="Recurring"&&e.jsx(n.Button,{onClick:()=>o(),children:"Cancel Subscription"}),r==="Grace Period"&&e.jsx(n.Link,{href:route("subscription.stopCancellation"),children:"Stop Cancellation"})]})]})}export{d as default};
