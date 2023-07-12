import React, { Component } from 'react'
import Ghost from './Ghost.gif'

export class Loader extends Component {
  render() {
    return (
      <div className="my-4">
        <img  src={Ghost} alt="loading.." style ={{position: "sticky",top: "0px"}} />
      </div>
    )
  }
}

export default Loader
