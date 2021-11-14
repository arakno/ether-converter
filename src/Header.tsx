import React, {Component} from 'react';
import Button from './Button'


const Panel = () => (
  <div id="panel" className="panel-converter">
    Some Results
  </div>
)
class Header extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
        visible: false
      }
    this.showPanel = this.showPanel.bind(this)
    this.hidePanel = this.hidePanel.bind(this)
  }

  showPanel() {
    this.setState({visible: true})
  }

  hidePanel() {
    this.setState({visible: false})
  }

  render() {
    const {visible} = this.state

    return (
      <header className="App-header">
        {visible ? <Panel />: null}
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