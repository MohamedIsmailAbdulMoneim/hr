import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Sidebar from './component/Sidebar';
import Header from './component/Header';
import Table from './component/Table';
import Form from './component/Form';
import AssisstantChairman from './component/mainCodes/AssisstantChairman';
import GeneralManager from './component/mainCodes/GeneralManager';
import { Provider } from "react-redux";
import store from "./store";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Provider store={store}>
    <Router>
      <div className="App" id="wrapper">
        <nav nav className="navbar navbar-default navbar-static-top" role="navigation" style={{ marginBottom: 0 }}>
          <Header />
          <Sidebar />
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/table" exact component={Table} />
          <Route path="/form" exact component={Form} />
          <Route path="/assisstantchairman" exact component={AssisstantChairman} />
          <Route path="/generalmanager" exact component={GeneralManager} />

          
        </Switch>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
