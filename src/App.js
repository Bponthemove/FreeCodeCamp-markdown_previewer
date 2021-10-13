import React from 'react'
import Marked from 'marked'
import './App.css'

const text = `
  This is a paragraph<br>
  look **bold**
  # header1
  ## header2  
  - apples
  - oranges
  - bananas  
  [link](wwww.google.co.uk)  
  Some inline code \`<div></div>\`  
  This is a code block
  \`\`\`
    function() {
      return boobaa
    }
  \`\`\`
  > Block Quotes!
  ![Logo](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&usqp=CAU)
  `

Marked.setOptions(
  {breaks:true}
)

const renderer = new Marked.Renderer()

const App = () => {
  const [input, setInput] = React.useState(text)
    
  console.log(input)
  
  return (
    <div className='container-outer'>
      <h1>Markdown Previewer</h1>
      <div className='container-inner'>
        <Editor value={input} onChange={e => setInput(e.target.value)} />
        <Preview input={input}/>
      </div>
      <footer>Bponthemove, Oct 2021</footer>
    </div>
  )
}



const Preview = ( {input} ) => {
  return (
      <div id="preview" dangerouslySetInnerHTML= { {__html: Marked(input, {renderer: renderer})} } >
      </div>
  )
}

const Editor = ( { onChange, value } ) => {
  return (
      <textarea id="editor" onChange={onChange} value={value} placeholder="Enter your markdown here"/>
  )
}

export default App;
