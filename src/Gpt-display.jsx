import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function TextDisplay() {
  const [inputText, setInputText] = useState('');
  const [chatText, setChatText] = useState('');
  const [sources, setSources] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json',
      "access-control-allow-origin": "*" },
      body: JSON.stringify({ question: inputText })
    };
    setLoading(true)
    fetch('http://localhost:5000/query_docs', requestOptions)
      .then((response) => {
        console.log("response: ", response)
        return response.json()})
      .then((data) => {
        setLoading(false)
        setChatText(data.answer)
        setSources(data.sources)
        console.log("data: ", data)})
      .catch(error => console.log(error));
  };


  return (
    <div>
      <TextField fullwidth style={{width:"400px"}}  type="text" value={inputText} onChange={handleChange} />
      <Button variant="contained" onClick={handleSubmit} sx={{margin:"5px"}}>Submit</Button>
      <p>{sources}</p>
      <p>{loading ? '..........': chatText }</p>
    </div>
  );
}

export default TextDisplay;