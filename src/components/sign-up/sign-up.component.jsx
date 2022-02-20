import React, {useState } from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument} from '../../firebase/firebase.util';
import { withRouter } from 'react-router-dom';

const inistialState = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUp = (props) => {
    const [state, setState] = useState(inistialState);  
    const handleChange = (event) => {
        const {value, name } = event.target;
        setState({...state, [name]:value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault();    
        const {displayName} = state;        

        if(state.password !== state.confirmPassword){
            alert("password don't match")
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(state.email, state.password);
            await createUserProfileDocument(user, {displayName});
            setState(inistialState);
            props.history.push('/');
        } catch(error) {
            alert('Error sing up')
            console.log(error)
        }        
    }

    return(
        <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form'onSubmit={handleSubmit}>
                <FormInput 
                type='text'
                name='displayName'
                label='display name'
                value={state.displayName}
                handleChange={handleChange}
                required
                />
                <FormInput 
                type='email'
                name='email'
                label='email'
                value={state.email}
                handleChange={handleChange}
                required
                />
                <FormInput 
                type='password'
                name='password'
                label='password'
                value={state.password}
                handleChange={handleChange}
                required
                />
                <FormInput 
                type='password'
                name='confirmPassword'
                label='confirm password'
                value={state.confirmPassword}
                handleChange={handleChange}
                required
                />
                <CustomButton type='submit'>Sign up</CustomButton>
            </form>
        </div>
    )
}

export default withRouter(SignUp);
