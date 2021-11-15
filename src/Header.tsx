import React, {Component} from 'react';
import Button from './Button'
import Panel from './Panel'


class Header extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
        visible: false,
        value: 1
      }
    this.showPanel = this.showPanel.bind(this)
    this.hidePanel = this.hidePanel.bind(this)
  }
  
  updateMessage = (gwei: number) => {
    console.log(gwei);
    this.setState(() => ({
        value: gwei
    }));
  }

  showPanel() {
    this.setState({visible: true})
  }

  hidePanel() {
    this.setState({visible: false})
  }

  render() {
    const {visible, value} = this.state

    return (
      <header className="App-header">
        {visible ? <Panel value={value} /> : null}
        <Button onClick={this.showPanel}
          text="show cenas"
        />
        <Button onClick={this.hidePanel}
          text="hide panel"
        />
      </header>
    )
  }
}

export default Header 