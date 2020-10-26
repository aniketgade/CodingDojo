import {Router} from '@reach/router';
import './App.css';
import Content from './components/Content';
import ContentWithColor from './components/ContentWithColor';


function App() {
  return (
    <div className="App">
      <Router>
        <Content path="/:text" />
        <ContentWithColor path="/:text/:color/:background" />
      </Router>
    </div>
  );
}

export default App;
