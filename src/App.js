import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './Files/Footer';
import Nav from './Nav';



function App() {
  return (
<>
    <BrowserRouter>
    {/* nav bar */}
    <Nav />
    {/* footer */}
    <Footer/>
    </BrowserRouter>
</>
  );
}

export default App;
