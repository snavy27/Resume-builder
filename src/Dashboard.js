import React, {Component} from 'react'
import './App.css'
import Resume from "./Resume"
import { Table } from 'react-bootstrap';
class Dashboard extends Component {
	constructor(props) {
		super(props)
		this.state= {
			username: '',
			email: '',
			phone: '',
			location: '',
			experience: '',
			marks_10: '',
			marks_12: '',
			marks_grad: '',
			linkedin: '',
			github: '',
			isSubmitted: false
		}
	}
	
    handleUsernameChange = (event) => {
     this.setState({
     	username: event.target.value	
     })
    }

    handleEmailChange = (event) => {
     this.setState({
     	email: event.target.value	
     })
    }

    handlePhoneChange = (event) => {
     this.setState({
     	phone: event.target.value	
     })
    }

    handleLocationChange = (event) => {
     this.setState({
     	location: event.target.value	
     })
    }

    handleExperienceChange = (event) => {
     this.setState({
     	experience: event.target.value	
     })
    }

    handleMarks_10Change = (event) => {
     this.setState({
     	marks_10: event.target.value	
     })
    }

    handleMarks_12Change = (event) => {
     this.setState({
     	marks_12: event.target.value	
     })
    }

    handleMarks_gradChange = (event) => {
     this.setState({
     	marks_grad: event.target.value	
     })
    }

    handleLinkedinChange = (event) => {
     this.setState({
     	linkedin: event.target.value	
     })
    }

    handleGithubChange = (event) => {
     this.setState({
     	github: event.target.value	
     })
    }
    
    handleSubmit = event => {
        this.setState({isSubmitted: true})
    }

	render() {
		
		return (
			<div>
			{!this.state.isSubmitted &&<form onSubmit={this.handleSubmit}>
			   <div>
			      <Table className="center">
			      <tbody>
                  <tr>
                  <td><label>1. Name </label></td>
                  <td><input type="text" value={this.state.username} onChange={this.handleUsernameChange} /></td>
                  </tr>
                  <br />
                  <tr>
                  <td><label>2. Email ID </label></td>
                  <td><input type="text" value={this.state.email} onChange={this.handleEmailChange} /></td>
                  </tr>
                  <br />
                  <tr>
                  <td><label>3. Phone </label></td>
                  <td><input type="text" value={this.state.phone} onChange={this.handlePhoneChange} /></td>
                  </tr>
                  <br />
                  <tr>
                  <td>
                  <label>4. Location </label></td>
                  <td>
                  <input type="text" value={this.state.location} onChange={this.handleLocationChange} /></td>
                  </tr>
                  <br />
                  <tr>
                  <td>
                  <label>5. Total Experience </label></td> 
                  <td><input type="text" value={this.state.experience} onChange={this.handleExperienceChange} /></td>
                  </tr>
                  <br />
                  <tr>

                  <td><label>6. Std X Marks </label></td>
                  <td><input type="text" value={this.state.marks_10} onChange={this.handleMarks_10Change} /></td>
                  </tr>
                  <br />
                  <tr>

                  <td><label>7. Std XII Marks </label></td>
                  <td><input type="text" value={this.state.marks_12} onChange={this.handleMarks_12Change} /></td>
                  </tr>
                  <br />
                  <tr>
                  <td><label>8. Graduation Marks </label></td>
                  <td><input type="text" value={this.state.marks_grad} onChange={this.handleMarks_gradChange} /></td>
                  </tr>
                  <br />
                  <tr>
                  <td><label>9. Linkedin URL </label></td>
                  <td><input type="text" value={this.state.linkedin} onChange={this.handleLinkedinChange} /></td>
                  </tr>
                  <br />
                  <tr>

                  <td><label>10. Github URL </label></td>
                  <td><input type="text" value={this.state.github} onChange={this.handleGithubChange} /></td>
                  </tr>
			      <br />
			      <input type='submit' className="submit"/> 
			      </tbody>
                  </Table>
			   </div>
			   
			 </form>}
			 {this.state.isSubmitted && <Resume username={this.state.username} email={this.state.email} phone={this.state.phone} 
			 location={this.state.location} experience={this.state.experience} marks_10={this.state.marks_10}
			 marks_12={this.state.marks_12} marks_grad={this.state.marks_grad} 
			 linkedin={this.state.linkedin} github={this.state.github}/>}
			 </div>
			)
	}
}



export default Dashboard