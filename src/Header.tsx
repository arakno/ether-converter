import React, {Component} from 'react';
import Button from './Button'

class Header extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
        visible: false
      }
    this.showPanel = this.showPanel.bind(this)
  }

  showPanel() {
    this.setState({visible: true})
  }

  render() {
    const {visible} = this.state

    return (
      <header className="App-header">

        {visible ? 
          <div>
            See me now
          </div> : 
          <p>nothign to see here</p>
        }
        <Button onClick={this.showPanel}
          text="show cenas"
        />
        <Button onClick={this.showPanel}
          text="hide panel"
        />
      </header>
    )
  }
}

export default Header 