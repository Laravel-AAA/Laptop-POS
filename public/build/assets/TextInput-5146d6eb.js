import{j as o,r}from"./app-1216230a.js";function u({message:t,className:i="",...l}){return t?o.jsx("p",{...l,className:"text-sm text-red-600 "+i,children:t}):null}const d=r.forwardRef(function({type:i="text",className:l="",isFocused:s=!1,...a},n){const f=r.useRef(null);return r.useImperativeHandle(n,()=>({focus:()=>{var e;return(e=f.current)==null?void 0:e.focus()}})),r.useEffect(()=>{var e;s&&((e=f.current)==null||e.focus())},[]),o.jsx("input",{...a,type:i,className:`rounded-md border-gray-300 border  shadow-sm placeholder:italic
        placeholder:text-slate-400 focus:border-primary-500 focus:ring-primary-500
          file:rounded-md file:rounded-e-none file:border disabled:opacity-25 file:cursor-pointer
        file:border-transparent file:bg-primary-800 file:px-4
        file:py-[0.69rem] file:text-center file:text-xs file:font-semibold
        file:uppercase file:tracking-widest file:mr-3
        file:text-white file:transition
        file:duration-200 file:ease-in-out file:hover:bg-primary-700
         file:active:scale-95 file:disabled:opacity-25 `+l,ref:f})});export{u as I,d as T};
