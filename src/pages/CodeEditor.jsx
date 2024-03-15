import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { data } from "autoprefixer";

function CodeEditor() {
     const [value , setValue]=useState()
     
  return (
    <>
      {/* <div>CodeEditor</div> */}
      <Editor
      height="90vh"
      width={"60%"}
      //   defaultLanguage="python"
      language="javascript"
      defaultValue="// some comment"
      onChange={(val)=> setValue(val)}
      theme="vs-dark"
      value={value}
      
    />
      
    </>
  );
}

export default CodeEditor;
