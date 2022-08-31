import 'bootstrap/dist/css/bootstrap.min.css';
import './Component/style.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import LandingPage from './LandingPage';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage/>} /> 
    </Routes>
    </BrowserRouter>
  );
}

export default App;
