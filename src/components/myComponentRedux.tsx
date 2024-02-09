'use client'
import React from 'react'
import { TypedUseSelectorHook, Provider, useSelector, useDispatch } from 'react-redux'
import { configureStore, createSlice} from '@reduxjs/toolkit';

// redux slice (counter/counterSlice.js)
const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: state => { state.value += 1 },
        decrement: state => { state.value -= 1 },
        incrementByAmount: ( state, action ) => { state.value += action.payload }
    }
});
// can export const { increment, decrement, etc } = counterSlice.actions so later i could import {increment} from './counter/counterSlice'

const incrementAsync = (amount: number) => (dispatch: AppDispatch) => {
    setTimeout(() => {
      dispatch(counterSlice.actions.incrementByAmount(amount))
    }, 1000)
  };


// redux store (used in Provider component that covers whole app component!)
const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
})


type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

const useAppDispatch: () => AppDispatch = useDispatch 
// use selector is used because normally store is inside a file that is not allowed to be imported into component files
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

function MyReactComponent(){
    const count: number = useAppSelector((state: RootState) => state.counter.value)
    const dispatch: AppDispatch = useAppDispatch();
    return <>
    <br/><br/>
        <p>Redux!</p>
        <p>{count}</p>
        <button onClick={()=>dispatch(counterSlice.actions.increment())}>incerment</button>
        <button onClick={()=>dispatch(counterSlice.actions.decrement())}>decrement</button>
        <button onClick={()=>dispatch(incrementAsync(5))}>increment in 2 sec </button>
    </>
}

// the doc proposes us to have our whole react app as provider's child. in my example however, i am using redux only for a single component to learn and demonstrate. i understand that it is used as GLOBAL state library 
export default function MyComponentRedux(){
    return  <Provider store={store}>
                <MyReactComponent/>
            </Provider>
}


