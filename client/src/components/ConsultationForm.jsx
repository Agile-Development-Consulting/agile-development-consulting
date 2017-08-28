import React, { Component } from 'react';
import axios from 'axios';

class ConsultationForm extends Component {
    constructor() {
        super();
        this.state = {
            consultationInfo: {
                fullName: '',
                email: '',
                phone: '',
                businessGoal: ''
            }
        }    
    }
    _handleChange = (e) => {
        const attributeName = e.target.name;;
        const attributeValue = e.target.value;
        const consultationInfo = {...this.state.consultationInfo};
        consultationInfo[attributeName] = attributeValue;
        this.setState({ consultationInfo })
    }
    _handleSubmit = (e) => {
        e.preventDefault();
        const payload = this.state;
        axios.post(`/sayHello`, payload)
        .then((res) => {
            console.log("Thanks!");
        }).catch(err => console.log(err));
        
    }
    render() {
        return <div>
            <h1>Let’s Get Started with Your Free Consultation!</h1>
            <form onSubmit={this._handleSubmit}>
              <div>
                <div className="label">
                  <label htmlFor="fullName">Full Name</label>
                </div>
                <div>
                    <input 
                    type="text" 
                    onChange={this._handleChange} 
                    value={this.state.consultationInfo.fullName} 
                    name="fullName"
                    placeholder="Full Name"
                    />
                </div>
              </div>
              <div>
                <div className="label">
                  <label htmlFor="email">Email Address</label>
                </div>
                <div>
                <input 
                type="text" 
                onChange={this._handleChange} 
                value={this.state.consultationInfo.email} 
                name="email"
                placeholder="Email Address"
                />
                </div>
              </div>
              <div>
                <div className="label">
                  <label htmlFor="phone">Phone</label>
                </div>
                <div>
                <input 
                    type="text" 
                    onChange={this._handleChange} 
                    value={this.state.consultationInfo.phone} 
                    name="phone"
                    placeholder="Phone Number"
                />
                </div>
              </div>
              <div>
                <div className="label">
                  <label htmlFor="businessGoal">
                    One Business Goal You Aren't Hitting
                  </label>
                </div>
                <div>
                  <textarea 
                    className="input" 
                    rows="20" 
                    cols="100" 
                    onChange={this._handleChange}
                    value={this.state.consultationInfo.businessGoal}
                    name="businessGoal"
                    placeholder="Your Business Goals"
                    />
                </div>
              </div>
              <div>
                <button>Start Your Free Consultation</button>
              </div>
            </form>
          </div>;
    }
}

export default ConsultationForm;