import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Place from "./pages/Place";
import Places from "./pages/Places";

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/places/:id">
            <Place />
          </Route>
          <Route path="/places">
            <Places />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
