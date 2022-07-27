// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Main from './page/Main'

import './components/Home/home.css';
import './components/Footer.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
