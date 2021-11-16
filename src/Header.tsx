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
        <Button onClick={showPanel}
          text="show panel"
        />
        <Button onClick={hidePanel}
          text="hide panel"
        />
        {isOpen && <Panel value={value}/>}
      </header>
  )
}

export default Header 