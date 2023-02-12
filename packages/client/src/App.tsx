import { useState } from 'react'
import PrimaryButton from '../../material-ui/src/Atoms/PrimaryButton/index';
import Text from '../../material-ui/src/Atoms/Text'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>Heoolo</div>
      <PrimaryButton />
      <Text />
    </div>
  )
}

export default App
