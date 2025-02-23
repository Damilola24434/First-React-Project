import React from 'react';
import "./login.css";
const Login = () => {
 
  return (
    
    <div class="main_container">
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet"></link>
        <aside class="side_image"></aside>
        <main class="login_container">
            <h1 id='login_text'>Login</h1>
            <p id='welcome_text'>Welcome Back!</p>
            <div class='input_container'>
                <p class="input_title">Username/Email</p>
                <input class="input_field" type="text" placeholder='Username' />
            </div>
            <div class='input_container'>
                <p class="input_title">Password</p>
                <input class="input_field" type="text" placeholder='Password' />
            </div>
            <button class="login_button">Login</button>
            <div class="bottom_comment">
            <p>New User?</p>
            <p id='sign_up_button'>Sign Up</p>
            </div>
        </main>
    </div>
  );
}

export default Login;
