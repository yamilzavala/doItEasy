import React, {useState} from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle, signInWithGoogleRedirect, auth} from '../../firebase/firebase.util'
import { withRouter } from 'react-router-dom';

const initialState = {
    email: '',
    password: ''
}

const SignIn = (props) => {
    const [state, setState] = useState(initialState);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await auth.signInWithEmailAndPassword(state.email, state.password)
            setState(initialState);
            props.history.push('/');
        } catch(error) {
            alert('Error sing in')
            console.log(error)
        }        
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

                <div className="buttons">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>{' '} Sign In with Google {' '}</CustomButton>
                    {/* <CustomButton onClick={signInWithGoogleRedirect}>{' '} Sign In with Google {' '}</CustomButton> */}
                </div>
            </form>

        </div>
    )
}

export default withRouter(SignIn);