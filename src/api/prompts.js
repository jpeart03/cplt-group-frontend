const apiUrl = process.env.REACT_APP_API_URL;

const fetchPrompt = async (relationshipType) => {
  let reqBody = {relationship_type: relationshipType}
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reqBody),
  };
  
  try {
    console.log(reqBody);
    let response = await fetch(`${apiUrl}/generate_prompt/`, options);
    let data = await response.json();
    console.log(data);
    
    return data.prompt;
  } catch (error) {
    console.log(error);
  }

}

export default fetchPrompt