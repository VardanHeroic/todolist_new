import { configureStore } from '@reduxjs/toolkit'
import arrayReducer from './arraySlice.js'

const store = configureStore({
    reducer: {
        arrayReducer:arrayReducer,
    }
})

export {store}