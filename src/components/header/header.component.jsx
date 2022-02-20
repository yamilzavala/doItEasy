import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.util';
import { withRouter } from 'react-router-dom';

const Header = (props) => {
    const {currentUser} = props;
    return (
        <div className="header">
            <Link className="logo-container" to='/'>
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link to='/shop' className="option">SHOP</Link>
                <Link to='/contact' className="option">CONTACT</Link>
                {
                currentUser ? 
                (<div className='option' onClick={() => {auth.signOut(); props.history.push('/signin');}}>
                    SIGN OUT
                </div>) :
                ( <Link className='option' to='/signin'>
                    SIGN IN
                </Link>)
                }
            </div>
        </div>
    )
}

export default withRouter(Header);