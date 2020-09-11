import React, { useState } from 'react'

export const ThemeContext = React.createContext({
  theme: {
    type: 'light',
    primary: '#fff',
    text: '#black'
  },
  setTheme: () => {}
})

export const ThemeContextProvider = props => {
  const theme = {
    light: {
      type: 'light',
      primary: '#fff',
      text: 'black'
    },
    dark:{
      type: 'dark',
      primary: 'rgb(145 138 138)',
      text: 'white'
    },
  }

  const setTheme = type => {
    setState({ ...state, theme: type === 'dark' ? theme.light : theme.dark })
  }

  const initState = {
    theme: theme.light,
    setTheme: setTheme
  }

  const [state, setState] = useState(initState)

  return (
    <ThemeContext.Provider value={state}>
      {props.children}
    </ThemeContext.Provider>
  )
}
