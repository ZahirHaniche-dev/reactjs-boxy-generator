import { createSlice, current } from "@reduxjs/toolkit"
import { nanoid } from "nanoid"

const initialState = [
  {
    id: nanoid(8),
    active: true,
    inset: false,
    inputs: [
      {
        inputNumber: 1,
        name: "Horizontal offset",
        value: 0,
        type: "range",
        minMax: [-250,250]
      },
      {
        inputNumber: 2,
        name: "Vertical offset",
        value: 10,
        type: "range",
        minMax: [-250,250]
      },
      {
        inputNumber: 3,
        name: "Blur radius",
        value: 15,
        type: "range",
        minMax: [0,250]
      },
      {
        inputNumber: 4,
        name: "Spread offset",
        value: -3,
        type: "range",
        minMax: [-250,250]
      },
      {
        inputNumber: 5,
        name: "Color",
        value: "#4f4f4f",
        type: "color"
      },
    ],
  },
]

export const shadowSlice = createSlice({
  name: "shadows",
  initialState,
  reducers: {
    removeShadow: (state, action) => {
      const shadowIndexToRemove = state.findIndex(shadow => shadow.id === action.payload)

      state.splice(shadowIndexToRemove, 1)
    },
    addShadow: (state, action) => {
      state.push(
        {
          id: nanoid(8),
          active: true,
          inset: false,
          inputs: [
            {
              inputNumber: 1,
              name: "Horizontal offset",
              value: 0,
              type: "range",
              minMax: [-250,250]
            },
            {
              inputNumber: 2,
              name: "Vertical offset",
              value: 10,
              type: "range",
              minMax: [-250,250]
            },
            {
              inputNumber: 3,
              name: "Blur radius",
              value: 15,
              type: "range",
              minMax: [0,250]
            },
            {
              inputNumber: 4,
              name: "Spread offset",
              value: -3,
              type: "range",
              minMax: [-250,250]
            },
            {
              inputNumber: 5,
              name: "Color",
              value: "#4f4f4f",
              type: "color"
            },
          ],
        },
      )
    },
    updateShadowValue: (state, action) => {
      const currentShadow = state.find(
        shadow => shadow.id === action.payload.shadowID
      )

      const currentInput = currentShadow.inputs.find(
        input => input.inputNumber === action.payload.inputNumber
      )

      currentInput.value = action.payload.value

    },
    updateCheckbox: (state, action) => {
      const currentShadow = state.find(
        shadow => shadow.id === action.payload.shadowID
      )
      
      currentShadow[action.payload.name] = !currentShadow[action.payload.name]
    },
  }
})

export const {updateShadowValue, addShadow, updateCheckbox, removeShadow} = shadowSlice.actions 
export default shadowSlice.reducer 