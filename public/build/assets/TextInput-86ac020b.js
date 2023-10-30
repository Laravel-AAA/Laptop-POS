import{r as t,j as n}from"./app-fbc3e038.js";const d=t.forwardRef(function({type:i="text",className:f="",isFocused:l=!1,isSelect:s=!1,...o},a){const e=t.useRef(null);return t.useImperativeHandle(a,()=>({focus:()=>{var r;(r=e.current)==null||r.focus()},select:()=>{var r;(r=e.current)==null||r.select()}})),t.useEffect(()=>{e.current&&(l===!0&&e.current.focus(),s===!0&&e.current.select())},[]),n.jsx("input",{...o,type:i,className:`placeholder:text-slate-400 rounded-md border  border-gray-300 shadow-sm
        file:mr-3 file:cursor-pointer file:rounded-md
          file:rounded-e-none file:border file:border-transparent file:bg-primary-700 file:px-4
        file:py-[0.69rem] file:text-center file:text-xs
        file:font-semibold file:uppercase file:tracking-widest file:text-white
        file:transition file:duration-200 file:ease-in-out
        placeholder:italic file:hover:bg-primary-600
        focus:border-primary-600 focus:ring-primary-600 file:active:scale-95
          disabled:opacity-60 `+f,ref:e})});export{d as T};
