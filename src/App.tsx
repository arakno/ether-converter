import React, {Component} from 'react';
import './App.css';
import Header from './Header'
import Body from './Body'


type State = {
  value: number
}

class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props)
    this.state = {
        value: 1
      }
    this.updateMessage = this.updateMessage.bind(this)
  }
  
  updateMessage = (gwei: number) => {
    console.log(gwei);
    this.setState(() => ({
        value: gwei
    }))
  }

  render() {
    const {value} = this.state

    return (
      <div id="body">
        <Header value={value} />
        <Body updateMessage={this.updateMessage} />
      </div>
    )
  }
}

export default App;
