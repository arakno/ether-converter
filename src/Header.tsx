import React, {Component} from 'react';
import Button from './Button'


const Panel = () => (
  <div id="panel" className="panel-converter">
    <table>
      <tr>
        <td><strong>wei</strong></td>
        <td>1 wei</td>
        <td>1</td>
      </tr>
      <tr>
        <td><strong>Kwei (babbage)</strong></td>
        <td>1e3 wei</td>
        <td>1,000</td>
      </tr>
      <tr>
        <td><strong>Mwei (lovelace)</strong></td>
        <td>1e6 wei</td>
        <td>1,000,000</td>
      </tr>
      <tr>
        <td><strong>Gwei (shannon)</strong></td>
        <td>1e9 wei</td>
        <td>1,000,000,000</td>
      </tr>
      <tr>
        <td><strong>microether (szabo)</strong></td>
        <td>1e12 wei</td>
        <td>1,000,000,000,000</td>
      </tr>
      <tr>
        <td><strong>milliether (finney)</strong></td>
        <td>1e15 wei</td>
        <td>1,000,000,000,000,000</td>
      </tr>
      <tr>
        <td><strong>ether</strong></td>
        <td>1e18 wei</td>
        <td>1,000,000,000,000,000,000</td>
      </tr>
    </table>
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