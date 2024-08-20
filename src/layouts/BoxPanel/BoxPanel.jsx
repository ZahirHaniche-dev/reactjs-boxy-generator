import { useSelector } from "react-redux"
import BoxRange from "./BoxRange"
import BoxColorPicker from "./BoxColorPicker"

export default function BoxPanel() {
  const boxState = useSelector(state => state.boxProperties)

  const boxInputs = boxState.map((input, index) => {
    if(input.type === "range") {
      return <BoxRange key={index} inputData={input} />
    }
    else if(input.type === "color") {
      return <BoxColorPicker key={index} inputData={input} />
    }
  })
  
  return (
    <div className="bg-gray-50 px-6 py-4 border-b border-gray-300">
      <p className="font-bold text-lg my-2">Box properties</p>
      {boxInputs}
    </div>
  )
}