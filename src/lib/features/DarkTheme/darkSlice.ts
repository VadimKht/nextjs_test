import { createSlice } from '@reduxjs/toolkit'
import {cookies} from 'next/headers'

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
      localStorage.setItem("state", state.value);
    },
    SetVal: (state, arg) =>{
      state.value = arg.payload;
      localStorage.setItem("state", state.value);
    },
    // allwos arguments
    TestLog: (state, test) => {
      console.log(test);
    }
  }
})
export const Switched = themeSlice.actions.Switched;
export const SetVal = themeSlice.actions.SetVal;
export const TestLog = themeSlice.actions.TestLog;