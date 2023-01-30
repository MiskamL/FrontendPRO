import React from 'react';

export class Form extends React.Component {

    state = {
        firstName: '',
        message: '',
        select: '',
        subscription: false,
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    valideteName = () => {
        if (this.state.firstName.length < 3) {
            alert('First Name 3 symbols')
        }
    }

    handleCheckBox = (event) => {
        this.setState({[event.target.name]: event.target.subscription})
    }

    render() {
        return (
            

            
        
            <div>
                <input type="text" name='firstName' value={this.state.firstName} onChange={this.handleChange} onBlur={this.valideteName} />
                <input type="text" />

                <textarea name='message' value={this.state.message} onChange={this.handleChange}></textarea>

                <select name="select">
                    <option value="" disabled></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
                <label>
                    <input type="checkbox" name='subscription' checked={this.state.subscription} onChange={this.handleCheckBox}/>
                     Subscription
                </label>
            </div>
        )
    }
}
