import React, { useState } from "react";
import * as Components from '../Components/Components';
import { useNavigate } from 'react-router-dom';

import Navbar from "../Components/Navbar";

function LoginPage() {
    const navigate = useNavigate();
    const [signIn, toggle] = useState(true);
    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        password: ''
    });

    // Handle input changes
    const handleChange = (event) => {
        setUserDetails({
            ...userDetails,
            [event.target.name]: event.target.value
        });
    };

    // Handle signup submission
    const handleSignUp = (event) => {
        event.preventDefault();
        if (userDetails.email && userDetails.password.length >= 8) {
            localStorage.setItem('userDetails', JSON.stringify(userDetails));
            toggle(true); // Switch to login after signup
            alert('Signup successful! Please login with your new credentials.');
        } else {
            alert('Please ensure all fields are filled correctly.');
        }
    };

    // Handle login submission
    const handleSignIn = (event) => {
        event.preventDefault();
        const storedDetails = JSON.parse(localStorage.getItem('userDetails'));
        if (storedDetails && storedDetails.email === userDetails.email && storedDetails.password === userDetails.password) {
            navigate('/Home'); // Navigate to Home page after successful login
        } else {
            alert("Invalid credentials!");
        }
    };

    return (
        
        <Components.Container>
            <Components.SignUpContainer signinIn={signIn}>
                <Components.Form onSubmit={handleSignUp}>
                    <Components.Title>Create Account</Components.Title>
                    <Components.Input type='text' name='name' placeholder='Name' value={userDetails.name} onChange={handleChange} />
                    <Components.Input type='email' name='email' placeholder='Email' value={userDetails.email} onChange={handleChange} />
                    <Components.Input type='password' name='password' placeholder='Password' value={userDetails.password} onChange={handleChange} />
                    <Components.Button type="submit">Sign Up</Components.Button>
                </Components.Form>
            </Components.SignUpContainer>

            <Components.SignInContainer signinIn={signIn}>
                <Components.Form onSubmit={handleSignIn}>
                    <Components.Title>Sign In</Components.Title>
                    <Components.Input type='email' name='email' placeholder='Email' value={userDetails.email} onChange={handleChange} />
                    <Components.Input type='password' name='password' placeholder='Password' value={userDetails.password} onChange={handleChange} />
                    <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                    <Components.Button type="submit">Sign In</Components.Button>
                </Components.Form>
            </Components.SignInContainer>

            <Components.OverlayContainer signinIn={signIn}>
                <Components.Overlay signinIn={signIn}>
                    <Components.LeftOverlayPanel signinIn={signIn}>
                        <Components.Title>Welcome Back!</Components.Title>
                        <Components.Paragraph>
                            To keep connected with us please login with your personal info
                        </Components.Paragraph>
                        <Components.GhostButton onClick={() => toggle(true)}>Sign In</Components.GhostButton>
                    </Components.LeftOverlayPanel>

                    <Components.RightOverlayPanel signinIn={signIn}>
                        <Components.Title>Hello, Friend!</Components.Title>
                        <Components.Paragraph>
                            Enter your personal details and start learning with us
                        </Components.Paragraph>
                        <Components.GhostButton onClick={() => toggle(false)}>Sign Up</Components.GhostButton>
                    </Components.RightOverlayPanel>
                </Components.Overlay>
            </Components.OverlayContainer>
        </Components.Container>
    );
}

export default LoginPage;
