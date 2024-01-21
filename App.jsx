import React from "react"
import Header from "./components/Header"

export default function App() {
    
    const [userInput, setUserInput] = React.useState("")
    const [trackingReports, setTrackingReports] = React.useState([])
    
    const infractionMessage = "🚨🚨🚨 INFRACTION DETECTED! 🚨🚨🚨"
    
    if (trackingReports.length > 0) {
        console.log(trackingReports)
        if (trackingReports[trackingReports.length - 1].infractionDetected) {
            console.log(infractionMessage)
        }
    }

  function getTimeStamp() {
    const timeStamp = new Date()
    return (
      timeStamp.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }) +
      "." +
      (timeStamp.getMilliseconds() / 1000).toFixed(3).slice(-3)
    )
  }
  
  function handleChange(event) {
    
    const currentInput = event.target.value
    
    setUserInput(currentInput.replace("Evil Corp.", "Good Corp."))
    
    setTrackingReports([
    	...trackingReports,
    	{
    		timeStamp: getTimeStamp(),
    		employeeInput: currentInput,
    		infractionDetected: currentInput.includes("Evil Corp."),
    	},
    ])
}
  // https://react.dev/reference/react/useState#is-using-an-updater-always-preferred


  return (
    <div>
      <Header />
      <textarea 
        onChange={handleChange}
        value={userInput}
        placeholder="Write your report here..." 
      />
    </div>
  )
}