import React, { useState } from "react";
import { LANGUAGE_VERSIONS } from "../Api/constants";

function LanguageSelector({ onSelect }) {

  const [selectLang , setSelectLang]=useState()
 const  langSelectHandle=(e)=>{
       console.log("ok" , e.target.value)
      //  setSelectLang(e.target.value)
       onSelect(e.target.value)
 }

  return (
    <div className="w-[170px] mb-4 border border-slate-900 bg-slate-900 outline-none p-3 rounded-lg">
      <select
      name="option" 
      id="" 
      className="bg-transparent outline-none rounded-lg "
      // value={selectLang}
      onClick={langSelectHandle}
      >
        {LANGUAGE_VERSIONS.map((ele, index) => {
          return (
            <option value={index} key={index} 
            className=" block p-2 pb-[20px] border bg-slate-900 "
            >
            {ele.name} {ele.version}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default LanguageSelector;
