import './App.css';
import Main from './views/Main';
import {Router} from "@reach/router";
import ShowOne from './views/ShowOne';
import Edit from './views/Edit';

function App() {

  return (
    <div>
      <Router>
        <Main path="/products" />
        <ShowOne path="/products/:product_id" />
        <Edit path="/products/:product_id/edit"/>
      </Router>
    </div>
  );
}

export default App;
