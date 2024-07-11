import { memo } from "react"


function Input({ onStateUplifting }) {

  const handleChange = (e) => {
    onStateUplifting(e.target.value)
  }

  console.log("Render Input")

  return (
    <input type="text" onChange={handleChange} className="p-2 rounded-lg text-white"/>
  )
}

export default memo(Input)