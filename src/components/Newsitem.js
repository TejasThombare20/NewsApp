import React, { Component } from 'react'
// rce
export class Newsitem extends Component {

    render() {
        let { title, description, imageURL, newsURL, author, date, source } = this.props

        return (
            <div>
                <div className="card my-4" style={{ width: "18rem", backgroundColor: "rgb(211, 234, 242)" }}>
                    <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:"1"}}>
                        {source}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                    <img src={imageURL} className="card-img-top" alt="no internet" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-body-secondary"><strong>{author}</strong> published on <strong>{date}</strong></small></p>
                        <a rel="noreferrer" href={newsURL} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsitem
