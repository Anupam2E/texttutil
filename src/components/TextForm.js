import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick =()=>{
        console.log("Uppercase was clicked");
        let newText= text.toUpperCase();
        setText(newText)
    }
    const handleDownClick =()=>{
      console.log("LowerCase was clicked");
      let newText= text.toLowerCase();
      setText(newText)
  }
  const handleClrClick =()=>{
    console.log("ClearText was clicked");
    let newText='';
    setText(newText)
}
    const handleOnChange =(event)=>{
        console.log("On change");

        setText(event.target.value);
    }
    
    const [text, setText] = useState("" );
    //here text is the variable and setText is the function 
    // updation in above line is done throught function calling of setText rather than classical variable initialization
    //i.e setText="asdcsdv";
    return (<>
    <div className='container'>
<h1>{props.heading} </h1>
<div className="mb-3">
  
  <textarea className="form-control my-3" value={text} onChange={handleOnChange}id="myBox" rows="8" ></textarea>
  <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to UpperCase</button>
  <button className="btn btn-primary mx-3" onClick={handleDownClick} >Convert to LowerCase</button>
  <button className="btn btn-primary mx-3" onClick={handleClrClick} >Clear Text</button>
</div>
<div className="container my-2">
  {/* my-2 for distancing */}
  <h2>Your Text Summary</h2>
  <p>{text.split(" ").length} words and{text.length} characters</p>
  <p>{0.008*text.split(" ").length} Minutes to read </p>
  <h2>Preview</h2>
  <p>{text}</p>
</div>
    </div></>
  )
}
