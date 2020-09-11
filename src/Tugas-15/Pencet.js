import React, { useContext } from 'react'
import { ThemeContext } from './TemaContext'


function Pencet() {
  const state = useContext(ThemeContext)

  const btn = {
    color: state.theme.text,
    marginTop: '20px',
    marginBottom: '20px',
    background: state.theme.primary,
    width: '99px',
    height: '33px',
  }
  

  return (
      <> 
      { 
        <button
        variant='contained'
        onClick={() => {
            state.setTheme(state.theme.type)
        }}
        style={btn} >
          <strong style={{textTransform:"uppercase"}}>{state.theme.type}</strong>
        </button>
      }
      </>
  )
}

export default Pencet