import { createSlice } from "@reduxjs/toolkit"
import { nanoid } from "nanoid"

const initialState = [
  {
    inputNumber: 1,
    name: "Border radius",
    value: 25,
    type: "range",
    minMax: [0, 250]
  },
  {
    inputNumber: 2,
    name: "Height",
    value: 250,
    type: "range",
    minMax: [0, 500]
  },
  {
    inputNumber: 3,
    name: "Width",
    value: 250,
    type: "range",
    minMax: [0, 500]
  },
  {
    inputNumber: 4,
    name: "Background color",
    value: "#fff",
    type: "color",
    slice: "boxProperties"
  },
]

export const boxSlice = createSlice({
  name: "boxProperties",
  initialState,
  reducers: {
    updateBoxValue: (state, action) => {
      state.find(el => el.inputNumber === action.payload.inputNumber).value = action.payload.value
    }
  },
})

export const { updateBoxValue} = boxSlice.actions
export default boxSlice.reducer
