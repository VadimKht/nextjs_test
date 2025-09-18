import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    // This conditional saves from trouble of it possibly being null. if it's null or anything else, then the theme will be DARK.
    value: localStorage.getItem("state") == "Light" ? "Light" : "Dark",
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