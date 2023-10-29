import{r as t,j as c}from"./app-5f6ab28f.js";const p=t.forwardRef(function({type:l="text",className:f="",isFocused:s=!1,isSelect:o=!1,...a},n){const r=t.useRef(null);return t.useImperativeHandle(n,()=>({focus:()=>{var e;return(e=r.current)==null?void 0:e.focus()},select:()=>{var e;return(e=r.current)==null?void 0:e.select()}})),t.useEffect(()=>{var e,i;s&&((e=r.current)==null||e.focus()),o&&((i=r.current)==null||i.select())},[]),c.jsx("input",{...a,type:l,className:`placeholder:text-slate-400 rounded-md border  border-gray-300 shadow-sm
        file:mr-3 file:cursor-pointer file:rounded-md
          file:rounded-e-none file:border file:border-transparent file:bg-primary-700 file:px-4
        file:py-[0.69rem] file:text-center file:text-xs
        file:font-semibold file:uppercase file:tracking-widest file:text-white
        file:transition file:duration-200 file:ease-in-out
        placeholder:italic file:hover:bg-primary-600
        focus:border-primary-600 focus:ring-primary-600 file:active:scale-95
         disabled:opacity-60  `+f,ref:r})});export{p as T};
