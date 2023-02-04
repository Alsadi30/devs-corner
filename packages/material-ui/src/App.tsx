import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Typography from '@mui/material/Typography'

function MuiBase() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Typography variant="h1" color="initial">Our Mui app</Typography>
    </div>
  )
}

export default MuiBase
