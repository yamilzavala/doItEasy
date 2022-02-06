import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
// import Details from './components/test-components/details/details.component'
// import ItemList from './components/test-components/item-list/itemlist.component'

//  const HatsPage = () => <h1>Hats page</h1>;

function App() {
  return (
    <div className='App'>
        <Header/>
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
