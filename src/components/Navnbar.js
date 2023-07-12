import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Navnbar extends Component {
  render() {

    return(
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark" style={{ position:"sticky",top:"0", zIndex:"2",backgroundColor: "#e3f2fd" }}>
         
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Newsapp</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/general">Home</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/business">business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/entertainment">entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/general">general</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/health">health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/science">science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/sports">sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/technology">technology</Link>
              </li> */}

               <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Category
                </Link>
                <ul className="dropdown-menu"> 
                
                   <li><Link className="dropdown-item" to="/business">business</Link></li>
                  <li><Link className="dropdown-item" to="/entertainment">entertainment</Link></li>
                  <li><Link className="dropdown-item" to="/general">general</Link></li>
                  <li><Link className="dropdown-item" to="/health">health</Link></li>
                  <li><Link className="dropdown-item" to="/science">science</Link></li>
                  <li><Link className="dropdown-item" to="/sports">sports</Link></li>
                  <li><Link className="dropdown-item" to="/technology">technology</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="/">Something else here</Link></li> 
                 </ul> 
               </li> 
              <li className="nav-item">
                <Link className="nav-link" to="/">About us</Link>
              </li>
              {/* <li className="nav-item">
          <a className="nav-link disabled " href="/">Disabled</a>
        </li> */}
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navnbar
