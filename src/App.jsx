import { useState } from 'react'
import CodeEditor from './pages/CodeEditor'
import Output from './pages/Output'



function App() {


  return (
    <>
    <div className='ml-24 text-purple-900'>
      hellow
    </div>
    <div className='flex gap-8 w-["100vw"] '>
    <CodeEditor/>
    <Output/>
    </div>
      
    </>
  )
}

export default App
