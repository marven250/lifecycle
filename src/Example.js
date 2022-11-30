import React from 'react';

export default class Example extends React.Component {
    constructor(){
        super()
        this.state = {
            status: false
        }
    }

    componentDidMount(){
        console.log("example.js component mounted")
    }

    componentWillUnmount(){
        console.log("example.js component unmounted")
    }

    componentDidUpdate(){
        console.log("example.js component updated")
    }

  render() {
    console.log("example.js rendered")
    return (
        <>
      <div>Example</div>
      <button onClick={()=> this.setState({status: !this.state.status})}>toggle status state</button>
      </>
    )
  }
}
