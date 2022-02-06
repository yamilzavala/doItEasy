import React, {useState} from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

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
            <h2 className='title'>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>                
                <FormInput
                value={state.email} 
                handleChange={handleChange}
                name='email' 
                type="email" 
                label='email'
                required/>
               
                <FormInput 
                value={state.password}
                handleChange={handleChange}
                type="password" 
                name='password' 
                label='password'
                required/>

                <CustomButton type="submit">Sign In</CustomButton>
            </form>

        </div>
    )
}

export default SignIn;