import React, {Component} from 'react';
import Button from './Button'
class Header extends Component {
  
  render() {
    return (
      <header className="App-header">
        <Button
          text="show panel"
        />
        <Button
          text="hide panel"
        />
      </header>
    )
  }
}

export default Header 