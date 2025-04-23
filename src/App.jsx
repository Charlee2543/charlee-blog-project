import NavBar from './component/pages/Navbar';
import HeroSection from './component/pages/HeroSection';
import BlogProject from './component/pages/BlogProject';
import Footer from './component/pages/Footer';
function App() {
   return (
      <div className=" flex flex-col items-center">
         <NavBar />
         <HeroSection />
         <BlogProject />
         <Footer />
      </div>
   );
}

export default App;
