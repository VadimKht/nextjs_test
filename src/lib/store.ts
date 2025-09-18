import { configureStore } from '@reduxjs/toolkit'
import { themeSlice } from './features/DarkTheme/darkSlice'
export const makeStore = () => {
  return configureStore({
    // Object because we don't always have just one reducer!
    reducer: {themeReducer: themeSlice.reducer}
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']