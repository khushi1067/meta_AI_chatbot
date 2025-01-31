import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [question, setQuestion] = useState("");
  const [Answer,setAnswer]=useState("");



 
  async function generateAnswer(){
    
    setAnswer("Loading your response")

    const response=await axios({
      url:import.meta.env.VITE_API_URL,
      method:"post",
      data:{        
          "contents": [{
            "parts":[{text: question}]
            },
          ],
      },
    });
    setAnswer(response['data']['candidates'][0]['content']['parts'][0]["text"]);
  }


  return (
    <>
    <h1>AI chatbot</h1>
    <textarea value={question} onChange={(e)=>setQuestion(e.target.value)}
      cols="47" rows="5"></textarea>
      <br/>
    <button onClick={generateAnswer}>Generate Answer</button>

    <pre>{Answer}</pre>
    </>
  )
}

export default App
