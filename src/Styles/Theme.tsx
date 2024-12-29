import { createTheme } from "@mui/material";

const Theme = createTheme({
  palette: {
    primary: {
      main: '#B9FBD8',
      dark: '#00D27C',
      light: '#E2FEEF',
    },
    secondary: {
      main: '#fbb9dc',
    },
  },
  typography: {
    fontFamily: [
      'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', 'Geneva', 'Verdana', 'sans-serif'].join(',')
  }
})

export default Theme;