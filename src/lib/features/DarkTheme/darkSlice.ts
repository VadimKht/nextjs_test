import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
  name: 'test',
  initialState: {
    value: "nothing"
  },
  reducers: {
    // allwos arguments
    TestLog: (state, test) => {
      console.log(test);
    }
  }
})
export const TestLog = themeSlice.actions.TestLog;