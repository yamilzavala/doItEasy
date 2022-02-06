import React, {useState} from 'react';
import './sign-in.styles.scss'

const initialState = {
    email: '',
    password: ''
}

const SignIn = () => {
    const [state, setState] = useState(initialState);

    const handleSubmit = (event) => {
        event.preventDefault();
        setState(initialState)
    }

    const handleChange = (event) => {
        const {value, name} = event.target;
        setState({...state, [name]: value})
    }

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input
                value={state.email} 
                onChange={handleChange}
                type="email" 
                name='email' 
                required/>

                <label>Password</label>
                <input 
                value={state.password}
                onChange={handleChange}
                type="password" 
                name='password' 
                required/>

                <input 
                type='submit' 
                value='Submit Form' />
            </form>

        </div>
    )
}

export default SignIn;