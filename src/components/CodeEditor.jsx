import React, { useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import { data } from "autoprefixer";
import Output from "./Output";
import LanguageSelector from "./LanguageSelector";

import { CODE_SNIPPETS, LANGUAGE_VERSIONS } from "../Api/constants";

function CodeEditor() {
     const editorRef = useRef();
     const [value , setValue]=useState()
     const [language , setLanguage]=useState(LANGUAGE_VERSIONS[0])
     const [defaultCode , setDefaultCode]=useState(CODE_SNIPPETS[language.name])

     const languageSelect = (index)=>{
      console.log(index);
          setLanguage(LANGUAGE_VERSIONS[index])
          setDefaultCode(CODE_SNIPPETS[language.name])
          console.log(defaultCode);
     }
     const onMount = (editor) => {
      editorRef.current = editor;
      editor.focus();
    };

  return (
    <>
  
     <LanguageSelector  onSelect={languageSelect}/>
      <div className="flex w-full flex-wrap gap-10 " onPaste={(e)=>{
        e.preventDefault()
      }}
       >
      <div className="h-[85vh] w-[50%] max-md:w-[100vw] max-md:h-[60vh]">

      <Editor
       options={{
        minimap: {
          enabled: true,
        },
      }}
      // height="85vh"
      // width={"55%"}
      defaultLanguage="javascript"
      language={language.name}
      // defaultValue={defaultCode}
      defaultValue="\n"
      value={value}
      onChange={(val)=> setValue(val)}
      theme="vs-dark"
      onMount={onMount}
      
    />
      </div>

      <Output sourceCode={value} language={language.name} version={language.version}/>

      </div>
    </>
  );
}

export default CodeEditor;
