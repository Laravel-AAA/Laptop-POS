import{q as p,r as l,y as u,j as r}from"./app-1c25774f.js";import{I as d}from"./Input-39d53c15.js";import{e as h,f as b}from"./index.esm-1f74e87a.js";import{u as v}from"./usePrevious-05d0721d.js";import"./index-87120360.js";import"./index-d77bb9c5.js";import"./index-387d7a00.js";import"./ErrorMessage-4ccff6f2.js";import"./iconBase-338e10db.js";function q({billOperations:{increaseQty:n},products:i}){const{filter:c}=p().props,[a,s]=l.useState({search:c.search??"",barcode:c.barcode??""}),m=v(a);l.useEffect(()=>{if(m){const t=Object.keys(a).filter(o=>a[o]);let e={};for(const o of t)e[o]=a[o];return u.get(route(route().current()??""),e,{replace:!0,preserveState:!0,preserveScroll:!0}),()=>u.cancel()}},[a]);function f(t){t.preventDefault(),i.length===1&&(n(i[0]),s(e=>({...e,barcode:""})))}return r.jsx("header",{className:"sticky top-0 z-10 my-0 bg-white shadow",children:r.jsxs("div",{className:"flex w-full flex-col gap-4 p-2 md:flex-row",children:[r.jsx("div",{children:r.jsx(d,{id:"search",label:"Search...",icon:r.jsx(h,{}),type:"search",name:"search",size:"md",autoComplete:"on",className:"w-full md:w-72",disabled:!1,inputMode:"search",value:a.search,onChange:t=>{s(e=>({...e,search:t.target.value}))},required:!1,errorMsg:void 0,hideError:void 0})}),r.jsx("form",{onSubmit:f,children:r.jsx(d,{id:"barcode",label:"Barcode",icon:r.jsx(b,{}),type:"number",name:"barcode",size:"md",inputMode:"numeric",autoFocus:!0,className:"remove-arrow w-full md:w-52 ",value:a.barcode,onChange:t=>{s(e=>({...e,barcode:t.target.value}))},errorMsg:"",hideError:void 0,disabled:!1,required:!1})})]})})}export{q as default};