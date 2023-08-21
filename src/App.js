
import './App.css';
import {
  BrowserRouter as Router,
  
  Route,
  Link,
  Routes
} from "react-router-dom";
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';


function App() {
  return (
    <Router>
      <Routes>

        <Route path="/market" element={<h1>Market</h1>}>
          
        </Route>

        <Route path="/login" element={<h1>Login</h1>}>
        </Route>

        <Route path="/checkout" element={<h1>checkout</h1>}>
        </Route>

        <Route path="/" element={<><Header /><Home/></>}>
        </Route>

      </Routes>
      </Router>
  );
}

export default App;
