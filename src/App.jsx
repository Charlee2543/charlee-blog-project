import './App.css';
import NavBar from './pages/Navbar';
import HeroSection from './pages/HeroSection';
import Footer from './pages/Footer';
function App() {
   return (
      <div className=" flex flex-col items-center">
         <NavBar />
         <HeroSection />
         <Footer />
      </div>
   );
}

export default App;
