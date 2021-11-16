import React, {useState} from 'react';
import Button from './Button'
import Panel from './Panel'

type Props = {
  value: number
}

const Header = (props: Props) => {

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const {value} = props

  const showPanel = () => {
    setIsOpen(true)
  }
  
  const hidePanel = () => {
    setIsOpen(false)
  }

  return (
      <header className="App-header">
        <div className="buttons">
          <Button className="btn" onClick={showPanel}
            text="show panel"
          />
          <Button className="btn" onClick={hidePanel}
            text="hide panel"
          />
        </div>
        {isOpen && <Panel value={value}/>}
      </header>
  )
}

export default Header 