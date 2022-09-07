import './App.css'
import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       arrayOfDetails: [],
       fName:'',
       department:'',
       rating:'',
       divContainer: true
    }
    this.handleName = this.handleName.bind(this);
    this.handleDepName = this.handleDepName.bind(this);
    this.handleRating = this.handleRating.bind(this);
  }
  
  handleName = (e) => {
    this.setState({fName:e.target.value})
    
  }
  handleDepName = e => {
    this.setState({department:e.target.value})
  }
  handleRating = e => {
    this.setState({rating:e.target.value})
  }

  handleSubmit = e => {
    // alert(`${this.state.fName} ${this.state.department} ${this.state.rating}`)
    e.preventDefault()
    if((this.state.fName.length && this.state.department.length && this.state.rating.length) === 0){
      return;
    }
    
    this.setState({divContainer: !this.state.divContainer})

    const newDetail = {
      empName: this.state.fName,
      depName: this.state.department,
      userRating: this.state.rating,
      id: Date.now()
    }
    this.setState(state => ({
      arrayOfDetails: state.arrayOfDetails.concat(newDetail),
      
    }));
    
    this.setState({
      fName:'',
      department:'',
      rating:''
    })
  }
  
  render() {
    const x = this.state.divContainer;
    const handleBack = e => {
      this.setState({divContainer: !this.state.divContainer})
    }
    return (
      <center>
        { x ? 
        <div className='Bform'>
          <h2>RailTail Customer Feedback Form</h2>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>Name</label>
              <input className='inp-1' type="text" value={this.state.fName} onChange={this.handleName}/>
            </div>
            <div>
              <label>Department</label>
              <input className='inp-2' type="text" value={this.state.department} onChange={this.handleDepName}/>
            </div>
            <div>
              <label>Rating</label>
              <input type="number" value={this.state.rating} onChange={this.handleRating}/>
            </div>

            <button type='submit'>Submit</button>
          </form>
        </div>
        
        :


        <div>
          <h1>RailTail FEEDBACK DATA</h1>
          <div className='bottom-parent-div'>
            {
            this.state.arrayOfDetails.map(item => {
              return <div className='child-div' key={item.id}>
                <p className='p1'>Name : {item.empName}</p><span className='span-New'>|</span>
                <p className='p1'>Department : {item.depName}</p><span className='span-New'>|</span>
                <p className='p1'>Rating : {item.userRating}</p>
              </div>
            })
            }
          </div>
          <button onClick={handleBack}>Go Back</button>
        </div>
          
        }
      </center>
    )
  }
}

export default App