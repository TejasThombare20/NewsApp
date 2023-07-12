import './App.css';
import Navnbar from './components/Navnbar';
import React, { Component } from 'react'
import News from './components/News';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  
 
  apiKey = "7484b1584c5e42be802936949c01d94b"
  // env.local file is not working in our case 
      state = {
         progress : 0
      }
      
      setProgress = (progress) =>{
        this.setState({progress : progress})      
      }

  render() {
    return (
      <>
        <Router>
            {/* <Redirect exact from="/" to="/Home" /> */}
          <div className='bg-color'>
            
            <LoadingBar
              color='#f11946'
              height="3"
              progress={this.state.progress}
              // SetProgress = {this.setProgress(this.state.progress)}
            />
            <Navnbar />
            <Routes>
              <Route exact path="/business" element={<News apiKey={this.apiKey} setProgress ={this.setProgress} pageSize={15} key="business" country="in" category="business" />} />
              <Route exact path="/entertainment" element={<News apiKey={this.apiKey} setProgress={this.setProgress} pageSize={15} key="entertainment" country="in" category="entertainment" />} />
              <Route exact path="/general" element={<News apiKey={this.apiKey} setProgress={this.setProgress} pageSize={15} country="in" key="general" category="general" />} />
              <Route exact path="/health" element={<News apiKey={this.apiKey} setProgress={this.setProgress} pageSize={15} country="in" key="health" category="health" />} />
              <Route exact path="/science" element={<News apiKey={this.apiKey} setProgress={this.setProgress} pageSize={15} country="in" key="science" category="science" />} />
              <Route exact path="/sports" element={<News apiKey={this.apiKey} setProgress={this.setProgress} pageSize={15} country="in" key="sports" category="sports" />} />
              <Route exact path="/technology" element={<News apiKey={this.apiKey} setProgress={this.setProgress} pageSize={15} country="in" key="technology" category="technology" />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </>

    )
  }
}


