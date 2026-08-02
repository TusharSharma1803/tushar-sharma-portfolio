import { createSlice } from '@reduxjs/toolkit'

export interface SocialLinksState {
  github: string
  linkedin: string
  email: string
}

const initialState: SocialLinksState = {
  github: 'https://github.com/TusharSharma1803',
  linkedin: 'https://www.linkedin.com/in/tushar-18-sharma/',
  email: 'mailto:work.tushar1803@gmail.com',
}

const socialLinksSlice = createSlice({
  name: 'socialLinks',
  initialState,
  reducers: {},
})

export default socialLinksSlice.reducer
