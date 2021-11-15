import React, {Component} from 'react';
import './App.css';
import Header from './Header'
import Body from './Body'

type Props = {
  value: number,
  updateMessage: number
}

class App extends Component<any, any> {
  constructor(props: Props) {
    super(props)
    this.state = {
        value: 2
      }
    this.updateMessage = this.updateMessage.bind(this)
  }
  
  updateMessage = (gwei: number) => {
    console.log(gwei);
    this.setState(() => ({
        value: gwei
    }))
    return gwei
  }

  render() {
    const {value} = this.state

    return (
      <div id="body">
        <Header props={value} />
        <Body updateMessage={this.updateMessage} />
      </div>
    )
  }
}

export default App;
