import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    value:'',
    valueChat:'',
    timer: false
  }

  typeTextHandler = (e) => {
    this.setState({
      valueChat:this.state.valueChat + this.state.value
    })
  }

  changeTextHandler = (e) =>{
    this.setState({
      value:e.target.value
    })
  }

  changeText = (stop) => {
   /* let test = setInterval(()=>{
      this.setState({
        valueChat:this.state.valueChat + 1,
        timer:true
      })
    },10000)*/
  }

  render() {
    console.log(1)
    if(!this.state.timer){
      this.changeText();
    }

    return (



      <div className="App">
        <div className="chat">{this.state.valueChat}</div>
        <Input value={this.state.value} onChange={this.changeTextHandler}/>
        <input type="submit" className="input-submit" onClick={this.typeTextHandler}/>
      </div>
    );
  }
}

function Input(props) {
  return <input type="text" value={props.value} className="input-line" onChange={props.onChange}/>
}

export default App;
