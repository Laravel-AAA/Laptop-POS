import{j as e}from"./app-e30e3373.js";import{D as r}from"./Dropdown-31da8b33.js";import{c as o}from"./index.esm-fe968406.js";import"./BetterLink-fff67302.js";import"./transition-0872050b.js";import"./iconBase-9a4cfe4c.js";function d({requestShowPauseSubAlert:i,state:n}){return e.jsxs(r,{children:[e.jsxs(r.Trigger,{className:`flex w-full items-center justify-center rounded-md
        border border-none border-transparent bg-gradient-to-r
        from-gray-600 to-gray-800
        py-2 text-center align-middle
        text-base font-semibold
        uppercase normal-case tracking-wider
        text-white shadow transition
        duration-200 ease-in-out
        hover:bg-primary-600 hover:shadow-lg  focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 active:scale-95 `,children:[e.jsx("span",{className:"grow",children:"Current Plan"}),e.jsx("span",{className:"mr-3",children:e.jsx(o,{})})]}),e.jsxs(r.Content,{width:"w-full",children:[n==="Recurring"&&e.jsx(r.Button,{onClick:()=>i(),children:"Pause Subscription"}),(n==="Grace Period"||n==="Paused")&&e.jsx(r.Link,{href:route("subscription.resume"),children:"Resume"})]})]})}export{d as default};
