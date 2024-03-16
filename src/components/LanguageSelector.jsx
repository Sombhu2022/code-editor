import React, { useState } from "react";
import { LANGUAGE_VERSIONS } from "../Api/constants";

function LanguageSelector({ onSelect }) {
  
// const languages = Object.entries(LANGUAGE_VERSIONS);

 const  langSelectHandle=(e)=>{
      const [lang , version] = e.target.value.split(' ')
      //  console.log(lang , version);
       onSelect(lang , version)
 }

  return (
    <div className="w-[170px] mb-4 border border-slate-900 bg-slate-900 outline-none p-3 rounded-lg">
      <select
      name="option" 
      id="" 
      className="bg-transparent outline-none rounded-lg "
      onChange={langSelectHandle}
      >
        {
        LANGUAGE_VERSIONS.map((ele , index) => {
          return (
            <option value={`${ele.name} ${ele.version}`} key={index} 
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
