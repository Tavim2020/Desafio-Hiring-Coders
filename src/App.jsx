import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CadastroPromocoes from './pages/CadastroPromocoes.jsx';
import NotFound from './pages/NotFound';
import { GlobalContext } from './context/GlobalContext';
import CheckOut from './pages/CheckOut';

function App() {

  const { header, footer } = React.useContext(GlobalContext);

  return (
    <div className="App">
      <BrowserRouter>

      {header && <Header />}

      <Switch>
        <Route path={'/'} exact component={Home} />
        <Route path={'/cadastropromocoes'} exact component={CadastroPromocoes} />
        <Route path={'/checkout'} exact component={CheckOut} />
        <Route path={'/*'} component={NotFound} />
      </Switch>
      
      {footer && <Footer />}
      
      </BrowserRouter>
    </div>
  );
}

export default App;
