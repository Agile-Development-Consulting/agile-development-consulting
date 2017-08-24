import React, { Component } from 'react';

class ConsultationForm extends Component {
    render() {
        return (
            <div>
                <h1>Let’s Get Started with Your Free Consultation!</h1>
                <form>
                    <div>
                        <div className="label">
                            <label htmlFor="fullName">Full Name</label>
                        </div>
                    
                    <div>
                    <input type="text" />
                    </div>
                    </div>
                    <div>
                    <div className="label">
                    <label htmlFor="email">Full Name</label>
                    </div>
                    <div>
                    <input type="text" />
                    </div>
                    </div>
                    <div>
                    <div className="label">
                    <label htmlFor="phone">Full Name</label>
                    </div>
                    <div>
                    <input type="text" />
                    </div>
                    </div>
                    <div>
                    <div className="label">
                    <label htmlFor="businessGoal">One Business Goal You Aren't Hitting</label>
                    </div>
                    <div>
                        <textarea class="input" rows="20" cols="100"></textarea>
                    </div>
                    </div>
                    <div>
                    <button>Start Your Free Consultation</button>
                    </div>
                </form> 
            </div>
        );
    }
}

export default ConsultationForm;