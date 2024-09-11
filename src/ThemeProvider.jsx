import React from "react"
import { ThemeProvider as MUIThemeProvider } from "@mui/material"
import light from "./components/Theme/light/light"
 
const ThemeProvider = ({children}) => {
  return (
    <MUIThemeProvider theme={light}>
    {children}
  </MUIThemeProvider>
  )
}

export default ThemeProvider