import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: "Dark"
  },
  reducers: {
    Switched: state => {
      state.value == "Dark" ?
        state.value = "Light" :
        state.value = "Dark";
    },
  }
})
export const Switched = themeSlice.actions.Switched;