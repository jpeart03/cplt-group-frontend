import fetchPrompt from "../../api/prompts";
import { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'

const GeneratePrompt = () => {
  const [prompt, setPrompt] = useState();

  const getPrompt = async (relationshipType) => {
    const data = await fetchPrompt(relationshipType);
    setPrompt(data);

  }

  const handleSubmit = (relationshipType) => {

    return getPrompt(relationshipType)
  }

  const PromptBox = () => {
    if (prompt) {
      return (
        <div className="prompt-box">
          {prompt}
        </div>
      )
    }
    else return (<p>Need Some Inspiration?</p>)
  }



  return (
    <div style={{backgroundColor:"#eefdf7", padding:".5rem", marginBottom:"1rem"}}>
      <PromptBox/>
      <Button style={{
        margin:'1rem', 
        backgroundColor:'#3fc997',
        borderColor:'#3fc997'}} 
        variant="success" onClick={() => {handleSubmit('Personal')}}>
        Generate a Personal Prompt
      </Button>
      <Button style={{
        margin:'1rem', 
        backgroundColor:'#3fc997',
        borderColor:'#3fc997'}}
        variant="success" onClick={() => {handleSubmit('Professional')}}>
        Generate a Professional Prompt
      </Button>
    </div>
  )
  
}
export default GeneratePrompt;