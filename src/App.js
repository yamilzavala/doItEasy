import React, {useState, useEffect} from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.util'
// import Details from './components/test-components/details/details.component'
// import ItemList from './components/test-components/item-list/itemlist.component'

//  const HatsPage = () => <h1>Hats page</h1>;

const initialAuth = {
  currentUser: null
}

function App() {

  const [authState, setAuth] = useState(initialAuth);

  //handle subscription to auth  
  let unsubscriptionFromAuth = null;

  useEffect(() => {
    unsubscriptionFromAuth = auth.onAuthStateChanged(user => {
      setAuth({currentUser: user})
      console.log(user)
    });

    //close subscription
    return (() => {
      unsubscriptionFromAuth();
    })
  }
  ,[])

  return (
    <div className='App'>
        <Header currentUser={authState.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact  path='/shop' component={ShopPage} />
          <Route exac path='/signin' component={SignInAndSignUpPage} />
          {/* <Route exact  path='/itemlist' component={ItemList} />
          <Route exact  path='/details/:itemId' component={Details} /> */}
        </Switch>
      </div>
  );
}

export default App;
