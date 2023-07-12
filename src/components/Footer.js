import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div>
                <div className="card text-center  " style={{backgroundColor:'lightcyan'}}>
                    <div className="card-header">
                        Featured
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Copyright &#169;</h5>
                        <p className="card-text">&#169;<strong>TejasThombare@20</strong>.All Rights are Reserved.</p>
                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    </div>
                    <div className="card-footer text-body-secondary">
                        10 mins ago
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
