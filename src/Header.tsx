import React, {useState} from 'react';
import Button from './Button'
import Panel from './Panel'

type Props = {
  value: number
}

const Header = (props: Props) => {

  const [isOpen, setIsOpen] = useState(false)
  const {value} = props

  const showPanel = () => {
    setIsOpen(true)
  }
  
  const hidePanel = () => {
    setIsOpen(false)
  }

  return (
      <header className="App-header">
        <p>VAL: {value}</p>
        {isOpen && <Panel value={value}/> }
        <Button onClick={showPanel}
          text="show panel"
        />
        <Button onClick={hidePanel}
          text="hide panel"
        />
      </header>
  )
}

export default Header 