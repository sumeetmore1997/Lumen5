import logo from './logo.svg';
import './App.css';
import AllRoutes from './Components/AllRoutes';
import Navbar from './Components/Navbar';
import Footer from './Pages/Footer';
import TableData from './Pages/TableData';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      <Footer/>
      <TableData/>
    </div>
  );
}

export default App;
