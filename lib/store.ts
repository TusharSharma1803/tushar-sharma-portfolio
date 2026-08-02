import { configureStore } from '@reduxjs/toolkit'
import socialLinksReducer from './features/socialLinksSlice'

export const store = configureStore({
  reducer: {
    socialLinks: socialLinksReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
