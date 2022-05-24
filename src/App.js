import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Banner />
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
