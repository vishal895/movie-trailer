import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import { Container } from "@material-ui/core";
import Trending from "./page/trending";
import Series from "./page/series";
import Search from "./page/search";
import Movies from "./page/movies";
import Header from "./components/header/header";
import SimpleBottomNavigation from "./components/mainnav";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div className="app">
        <Container>
          <Switch>
            <Route path="/" component={Trending} exact />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation/>
      
    </BrowserRouter>
  );
}

export default App;