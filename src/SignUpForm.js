import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import ErrorsContainer from './ErrorsContainer'

class SignUpForm extends Component {
    constructor(){
        super()
        this.state = {
            firstName: "", 
            lastName: "", 
            email: "", 
            password: "", 
            passwordConfirmation: "", 
            errors: []
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3000/api/v1/users`, {
            method: "POST", 
            headers: {
                "Content-type": "application/json", 
                "Accept": "application/json"
            }, 
            body: JSON.stringify({
                    user: {
                        first_name: this.state.firstName, 
                        last_name: this.state.lastName, 
                        email: this.state.email, 
                        password: this.state.password,
                        password_confirmation: this.state.passwordConfirmation
                    }
                })
        })
        .then(res => res.json())
        .then(res => {
            if(res.errors){
                this.setState({
                    errors: res.errors
                })
            } else {
                this.props.history.push('/welcome')
            }
        })
        .catch(error => console.log(error))
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        const { errors } = this.state
        return (
            <>
                {errors.length > 0 ? <ErrorsContainer errors={errors} /> : null}
                <form id="sign-up-form" onSubmit={this.handleSubmit}>
                    <label>
                        <h4>First Name:</h4>
                        <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange}/>
                    </label><br/>
                    <label>
                        <h4>Last Name: </h4>
                        <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange}/>
                    </label>
                    <label>
                        <h4>Email: </h4>
                        <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
                    </label>
                    <label>
                        <h4>Password:</h4>
                        <input type="text" name="password" value={this.state.password} onChange={this.handleChange}/>
                    </label>
                    <label>
                        <h4>Confirm Password: </h4>
                        <input type="text" name="passwordConfirmation" value={this.state.passwordConfirmation} onChange={this.handleChange}/>
                    </label><br/><br/>
                    <input type="submit"/>
                </form>
            </>
        )
    }
}

export default withRouter(SignUpForm)