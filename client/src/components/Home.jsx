import React, { Component } from 'react';
import CompanyPitch from './CompanyPitch';
import ClientPortfolio from './ClientPortfolio';
import ConsultationForm from './ConsultationForm';
import logo from '../images/Agile-Logo.png';

class Home extends Component {
    render() {
        return (
            <div>
            <div className="splash-image">
                <div className="logo-row">
                    <img className="logo" src={logo} alt="Agile Development Consulting"/>
                    <p>We handle things, so you don't have to.</p>
                </div>
            </div>
            <div className="company-pitch">
                <CompanyPitch />
            </div>
            <div className="client-portfolio">
                <ClientPortfolio />
            </div>
            <div className="consultation-form" id="consultation">
                <ConsultationForm />
            </div>
            </div>
        );
    }
}

export default Home;