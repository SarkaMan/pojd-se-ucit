import { useState } from "react"



export const QuizForm = () => {

  const[text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return(
    <>
    
    <form>
    <img src="obrazky-cviceni/Chůze.png" />
    <label>Zadejte odpověď: <input type="text"  value={text} onChange={handleChange}/></label>
    
    <br></br>
    <img src="obrazky-cviceni/Plíce.png" />
    
    <label>Zadejte odpověď: <input type="text" value={text} onChange={handleChange} /></label>
    
    <input></input>
    <br></br>
    <img src="obrazky-cviceni/Silnice.png" />
    
    <label>Zadejte odpověď: <input type="text" value={text} onChange={handleChange}/></label>
    
    <br></br>
    <img src="obrazky-cviceni/Ticho.png" />
    
    <label>Zadejte odpověď: <input type="text" value={text} onChange={handleChange}/></label>
    
    <input></input>
    </form>
    </>
  )
}
