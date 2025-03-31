import { useState } from 'react'
import './App.css'
import Vapi from "@vapi-ai/web";

const vapi = new Vapi("007289f6-216a-4dfd-ba43-f4181b0d5114");

function App() {
  const [isCallActive, setIsCallActive] = useState(false)

  const startCall = async () => {
    await vapi.start("e583c475-b129-4e30-979d-48c2c6ed71ee")
    setIsCallActive(true)
  }

  const stopCall = async () => {
    vapi.stop()
    setIsCallActive(false)
  }

  return (
    <div className="container">
      <h1>Vapi Call Demo</h1>
      <div className="button-container">
        <button 
          onClick={startCall} 
          disabled={isCallActive}
          className="call-button"
        >
          Start Call
        </button>
        <button 
          onClick={stopCall} 
          disabled={!isCallActive}
          className="call-button"
        >
          Stop Call
        </button>
      </div>
      <p>{isCallActive ? 'Call in progress...' : 'Call ended'}</p>
    </div>
  )
}

export default App