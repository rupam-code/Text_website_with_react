import React, { useState } from 'react';

export default function TextArea(props) {
  const [text, setText] = useState("Enter your text");

  const conUpper = () => {
    setText(text.toUpperCase());
    props.showAleart("Success","Convert To Upper Case")
  };
  const conlower = () => {
    setText(text.toLowerCase());

  };
  const clear = () => {
    setText(" ");

  };
 

  const handleChange = (event) => {
    setText(event.target.value);
  };

  

  return (
    <>
    <div className='container' my-3 style={{color:props.mode==='dark'?'white':'black'}} >
      <h1>{props.heading}</h1>
      <textarea className="form-control my-3 " rows={8} id="comment" name="text" onChange={handleChange} value={text} style={{backgroundColor :props.mode=='dark'?'#042743':'white', color:props.mode==='dark'?'white':'black'}} />
      <button className='btn btn-primary mx-2 lower' onClick={conUpper} my-3>Convert to uppercase</button>
      <button className='btn btn-primary mx-2 lower ' onClick={conlower} my-3>Convert to  lowercase</button>
      <button className='btn btn-primary mx-2 lower' onClick={clear} my-3>Clear</button>
      
     
    </div>
    <div className='container' my-3 style={{color :props.mode==='dark'?'white':'black'}}>
      <h1>Your Word Count</h1>
      <p>{text.split(" ").length} Words</p>
      <p>{text.length}  Characters</p>
      <p>read in {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length } minitues</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>

  );
}
