import React, { useState } from "react";
import axios from "axios";

function Output({ language, sourceCode, version }) {
  console.log(language, sourceCode, version);
  const [output , setOutput]=useState(null)
  const API = axios.create({
    baseURL: "https://emkc.org/api/v2/piston",
  });

  const runCode = async (language, sourceCode, version) => {
    console.log(language, sourceCode, version);

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
      
      // console.log(res.data.run.output);
      setOutput(res.data.run.output.split("\n"));

    } catch (error) {
      // setOutput(error)
      console.log(error);
    }
  };
  return (
    <div className="bg-gray-900 text-white h-[85vh] w-[40%] overflow-auto max-md:w-[100vw] max-md:h-[60vh]">
      <button
        onClick={() => runCode(language, sourceCode, version)}
        className=" m-2 outline-none p-2 border border-blue-800 rounded-md hover:bg-blue-950"
      >
        Run Code
      </button><br/>
      <div className="p-3">
        {
          output && output.map((line , index)=>{
            return(
              <p key={index}>{line}</p>
              
            )
          })
        }
      </div>
    </div>
  );
}

export default Output;
