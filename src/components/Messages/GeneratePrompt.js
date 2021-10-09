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
    <>
      <PromptBox/>
      <Button style={{margin:'1rem'}} variant="success" onClick={() => {handleSubmit('Personal')}}>
        Generate a Personal Prompt
      </Button>
      <Button style={{margin:'1rem'}} variant="success" onClick={() => {handleSubmit('Professional')}}>
        Generate a Professional Prompt
      </Button>
    </>
  )
  
}
export default GeneratePrompt;