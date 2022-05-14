import {BrowserRouter as Router,  Switch, Route } from 'react-router-dom';
import Cart from './components/cart/Cart';
import Products from './components/pruducts/Products';
import Admin from './routes/admin/Admin';
import Login from './routes/auth/Login';
import SignIn from './routes/auth/sign_in/SignIn';
import Home from './routes/home/Home';
import PrivateRoute from './routes/private/PrivateRoute';

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path={["/", "/home"]} component={Home}/>
          <Route path="/login" component={Login} />
          <Route path="/signin" component={SignIn}/>
          <Route path="/products" component={Products} />
          <Route path="/cart" component={Cart}/>
          <PrivateRoute path="/admin" component={Admin}/>ß
      </Switch>
    </Router>
  );
}

export default App;
