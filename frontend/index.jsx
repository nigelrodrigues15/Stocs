import React from 'react';
import ReactDOM from 'react-dom';

//Temporary for testing
import { login, logout, signup } from './util/session_api_util';
//End testing

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDOM.render(<h1>Its working :) </h1>, root);

    //Temporary for testing
    window.login = login;
    window.logout = logout;
    window.signup = signup;
    //End testing
    
});