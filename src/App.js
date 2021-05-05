import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import  {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import Submenu from './components/Submenu';
import Cart from './components/Cart';
import NotFound from './components/NotFound';
import Order from './components/Order';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
      </div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/submenu/:id/:category_name" component={Submenu}/>
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/order" component={Order}/>
        <Route component={NotFound}/>
      </Switch>
    </Router>
    
  );
}

export default App;
