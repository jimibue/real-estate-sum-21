import { Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import Navbar from './components/NavBar';
import Available from "./pages/Available";
import Cities from "./pages/Cities";
import Examples from "./pages/Examples";
import FindHomes from "./pages/FindHomes";
import Prices from "./pages/Prices";

function App() {
  return (
    <>
    <Navbar />
    <Container>
      <Switch>
          <Route exact path="/" component={Available} />
          <Route exact path="/cities" component={Cities} />
          <Route exact path="/homes" component={FindHomes} />
          <Route exact path="/prices" component={Prices} />
          <Route exact path="/examples" component={Examples} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
