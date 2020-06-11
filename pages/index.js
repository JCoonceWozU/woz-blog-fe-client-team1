import Home from './components/Home';
import NavBar from './layouts/NavBar';
import Footer from './layouts/Footer';

export default function App() {
  return (
    <div className="container">
      <NavBar />
      <Home />
      <Footer />     
    </div>
  )
}
