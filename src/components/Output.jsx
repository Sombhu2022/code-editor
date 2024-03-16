import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from 'react-js-loader'

function Output({ language, sourceCode, version }) {
  // console.log(language, sourceCode, version);
  

  const [output , setOutput]=useState(null)
  const [isError , setIsError]=useState(false)
  const [isLoading , setIsLoading]= useState(false)
  const API = axios.create({
    baseURL: "https://emkc.org/api/v2/piston",
  });

  const runCode = async (language, sourceCode, version) => {
    console.log(language, sourceCode, version);
    setIsLoading(true)

    try {
      if (!sourceCode) {
        console.log("write the code  then click run button");
        return "write the code  then click run button";
      }
      const res = await API.post("/execute", {
        language: language,
        version: version,
        files: [
          {
            content: sourceCode,
          },
        ],
      });
      console.log(res.data);
      setOutput(res.data.run.output.split("\n"));
      res.data.run.stderr ? setIsError(true): setIsError(false)
    } catch (error) {
      // setOutput(error)
      console.log(error);
    } finally{
      setIsLoading(false)
    }

  };


  useEffect(()=>{
    setOutput(null)
  } , [language])


  return (
    <div className="bg-gray-900 text-white h-[85vh] w-[40%] overflow-auto max-md:w-[100vw] max-md:h-[60vh]">
      <button
        onClick={() => runCode(language, sourceCode, version)}
        className=" m-2 outline-none p-2 border border-blue-800 rounded-md hover:bg-blue-950"
      >
        Run Code
      </button><br/>
      <div className={output?"p-3":"p-3 text-slate-600"}>
        {
          output ? output.map((line , index)=>{
            return(
              <>
              <p className={isError? "text-red-700":""} key={index}>{line}</p>
              <p className={"flex justify-center items-center"}>
              
              </p>
              </>
            )
          }):"Write some code , then click Run Code button"     
            
        }
        {
            isLoading ? (<Loader type={"spinner-circle"} color={"black"} size={40}/>):""
        }

      </div>
    </div>
  );
}

export default Output;
